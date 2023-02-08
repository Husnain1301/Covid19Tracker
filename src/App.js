import './App.css';
import {
  MenuItem,
  FormControl,
  Select
} from "@mui/material"
import { useEffect, useState } from 'react';

// USE EFFECT = runs a piece of code based on a given condition

function App() {
  const [countries, setCountries] = useState([]);
  //STATE = HOW TO WRITE A VARIABLE IN REACT <<<<<<<

  useEffect(() => {
    // send a request to the server.. then WAIT... then do something with the info

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response) => response.json()).then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country, // E.g United Kingdom
            value: country.countryInfo.iso2 // E.g UK
          }));
        setCountries(countries);
      });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className='app__header'>
        <h1>COVID 19 Tracker</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' value="abc">
            {countries.map((country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            )))}
            {/* 
            <MenuItem value="worldwide">Worldwide</MenuItem>
  <MenuItem value="worldwide">Worldwide</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      

      {/*HEADER*/}
      {/*TITLE + SELECT INPUT DROPDOWN*/}

      {/*INFOBOXES*/}
      {/*INFOBOXES*/}
      {/*INFOBOXES*/}

      {/*TABLE*/}

      {/*GRAPH*/}

      {/*MAP*/}
    </div>
  );
}

export default App;
