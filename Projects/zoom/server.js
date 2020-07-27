const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')  //create dynamic room

app.set('view engine', 'ejs')  //render views with ejs library
app.use(express.static('public'))  //js n css

app.get('/', (req, res) => {  //take request n response
  res.redirect(`/${uuidV4()}`)  //take req n redirect
})

app.get('/:room', (req, res) => {  //create a new room no brand home
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {  //runs any time one runs n connects to room
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)  //send everyone

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(3000)