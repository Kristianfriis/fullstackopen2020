import React from "react";
import Country from "./Country";
import CountrySpecific from "./CountrySpecific";

const CountriesList = ({ countries, weather, handleClick }) => {
  if (countries.length === 1) {
    return <CountrySpecific country={countries[0]} weather={weather} />;
  }
  if (countries.length <= 10) {
    return (
      <div>
        {countries.map((country) => (
          <Country
            key={country.alpha2Code}
            country={country}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }
  if (countries.length > 10) {
    return <div>Too many matches, please specify another filter</div>;
  }
};

export default CountriesList;
