import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from "./InfoBox";
import "./App.css";
import Map from "./Map";

function App() {
  //useState = set variable
  //useEffect = run a piece of code base on given condition
  // https://disease.sh/v3/covid-19/countries
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  //runs once when componet loads
  useEffect(() => {
    // async => send a request
    const getCountriesData = async () => {
      await fetch(" https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    //async
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Global</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app_stats"></div>
        <InfoBox title="Coronavirus Cases" cases={} total={} />
        <InfoBox title="Recovered" cases={} total={} />
        <InfoBox title="Deaths" cases={} total={} />
        <Map />
      </div>
      <Card className="app_right">
        <CardContent>

        </CardContent>
      </Card>
    </div>
  );
}

export default App;
