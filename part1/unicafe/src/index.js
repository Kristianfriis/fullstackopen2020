import React, { useState } from "react";

import ReactDOM from "react-dom";

 

const LikeButton = ({ name, handleClick }) => {

  return <button onClick={handleClick}>{name}</button>;

};

 

const Statistic = ({ text, value }) => {

  return (

    <p>

      {text} {value}

    </p>

  );

};

 

const Statistics = ({ good, neutral, bad }) => {

  let total = good + neutral + bad;

  let points = good;

  for (let i = 1; i <= bad; i++) {

    points--;

  }

  let average = points / total;

 

  if (total !== 0) {

    return (

      <div>

        <table>

          <tr>

            <td>

              <Statistic text="good" value={good} />

            </td>

          </tr>

          <tr>

            <td>

              <Statistic text="neutral" value={neutral} />

            </td>

          </tr>

          <tr>

            <td>

              <Statistic text="bad" value={bad} />

            </td>

          </tr>

          <tr>

            <td>

              <Statistic text="all" value={total} />

            </td>

          </tr>

          <tr>

            <td>

              <Statistic text="average" value={average} />

            </td>

          </tr>

          <tr>

            <td>

              <Statistic text="positive" value={(good / total) * 100} />

            </td>

          </tr>

        </table>

      </div>

    );

  } else {

    return <p>no feedback given</p>;

  }

};

 

const App = () => {

  // save clicks of each button to its own state

  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

 

  const handleGoodClick = () => {

    setGood(good + 1);

  };

 

  const handleNeutralClick = () => {

    setNeutral(neutral + 1);

  };

 

  const handleBadClick = () => {

    setBad(bad + 1);

  };

 

  return (

    <div>

      <h1>give feedback</h1>

      <LikeButton name="good" handleClick={handleGoodClick} />

      <LikeButton name="neutral" handleClick={handleNeutralClick} />

      <LikeButton name="bad" handleClick={handleBadClick} />

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>

  );

};

 

const rootElement = document.getElementById("root");

ReactDOM.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,

  rootElement

);