import React, { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import CountrySpecific from "./CountrySpecific";
import Filter from "./Filter";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("united");
  const [weather, setWeather] = useState([]);
  const [showSpecific, setShowSpecific] = useState(false);
  const [cityName, setCityName] = useState("odense");
  const [specificCountry, setSpecificCountry] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    api_key +
    "&units=metric";

  const hook = () => {
    if (filter !== "") {
      axios
        .get(`https://restcountries.eu/rest/v2/name/` + filter)
        .then((response) => {
          setCountries(response.data);
        });
    }
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  useEffect(hook, [filter]);

  useEffect(() => {
    if (cityName !== "") {
      const fetchData = async () => {
        const result = await axios.get(URL);

        setWeather(result.data);
      };
      fetchData();
    }
    if (countries.length === 1) {
      setCityName(countries[0].name);
      const fetchData = async () => {
        const result = await axios.get(URL);

        setWeather(result.data);
      };
      fetchData();
    }
  }, [URL, cityName, countries]);

  const handleClick = (city, country) => {
    setSpecificCountry(country);
    setCityName(city);
    if (showSpecific === false) {
      setShowSpecific(true);
    }
  };

  return (
    <div className="App">
      <h1>Country Data</h1>
      <Filter value={filter} handleChange={handleChange} />
      <CountriesList
        countries={countries}
        weather={weather}
        handleClick={handleClick}
      />
      {showSpecific && countries.length !== 1 && weather !== [] ? (
        <CountrySpecific country={specificCountry} weather={weather} />
      ) : (
        ""
      )}
    </div>
  );
}
