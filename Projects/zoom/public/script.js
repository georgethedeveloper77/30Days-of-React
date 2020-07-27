
const socket = io('/')  //reference to io ...localhost 3000
const videoGrid = document.getElementById('video-grid') //place new videos

const myPeer = new Peer(undefined, {  //peerjs
  host: '/',
  port: '3001'
})

const myVideo = document.createElement('video')
myVideo.muted = true //dont listen to our selves

const peers = {}
navigator.mediaDevices.getUserMedia({ //take obtions
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream)

  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
  })

  socket.on('user-connected', userId => { //connect to other users
    connectToNewUser(userId, stream)
  })
})

socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => {  //pass userId every join
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)  //calling user with id
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {  //take video, play
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()  //once it loads to play
  })
  videoGrid.append(video)
}