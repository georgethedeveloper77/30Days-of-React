import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  //Table,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import "./App.css";
import Map from "./Map";
import Table from "./Table";
import { sortData } from "./utils";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css"

function App() {
  //useState = set variable
  //useEffect = run a piece of code base on given condition
  // https://disease.sh/v3/covid-19/countries
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  //runs once when componet loads
  useEffect(() => {
    // async => send a request
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(countryCode);
      });
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
        <InfoBox
          title="Coronavirus Cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />
        <InfoBox
          title="Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />
        <InfoBox
          title="Deaths"
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
        <Map />
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new Cases</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
