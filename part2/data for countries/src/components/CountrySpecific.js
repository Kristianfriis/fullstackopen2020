import React from "react";

const CountrySpecific = ({ country, weather }) => {
  const flagStyle = { width: "30%", border: "1px solid black" };
  let iconLink = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((lan) => (
          <li key={lan.name}>{lan.name}</li>
        ))}
      </ul>
      <img
        className="flag_img"
        style={flagStyle}
        src={country.flag}
        alt="flag"
      ></img>

      <h3>Weather in {country.name}</h3>
      <p>Temperatur: {weather.main.temp}</p>
      <img src={iconLink} alt="weather icon"></img>
      <p>Wind: {weather.wind.speed}</p>
    </div>
  );
};

export default CountrySpecific;
