import React from "react";

const Total = ({ course }) => {
  let arr2 = [];
  course.parts.map((part) => arr2.push(part.exercises));

  const total = arr2.reduce((total, sum) => {
    return total + sum;
  });
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  );
};

export default Total;
