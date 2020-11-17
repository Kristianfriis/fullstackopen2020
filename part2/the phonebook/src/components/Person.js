import React from "react";

const Person = ({ person, handleClick }) => {
  let name = person.name;
  let number = person.number;
  return (
    <div>
      <p>
      {name} | {number} 
      </p>
      <button onClick={() => handleClick(person.id)}>delete</button>
    </div>
  );
};

export default Person;