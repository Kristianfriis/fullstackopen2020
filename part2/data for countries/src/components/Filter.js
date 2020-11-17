import React from "react";

const Filter = ({ value, handleChange }) => {
  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Filter;
