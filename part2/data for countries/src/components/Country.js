import React from "react";

const Country = ({ country, handleClick }) => {
  return (
    <div>
      {country.name}{" "}
      <button
        nameonclick="button"
        onClick={() => handleClick(country.capital, country)}
      >
        show
      </button>
    </div>
  );
};

export default Country;
