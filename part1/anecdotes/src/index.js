import React, { useState } from "react";

import ReactDOM from "react-dom";

 

const Button = ({ text, handleClick }) => {

  return <button onClick={handleClick}>{text}</button>;

};

 

const App = (props) => {

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

 

  const nexAnecdote = () => {

    let rand = Math.floor(Math.random() * anecdotes.length);

    setSelected(rand);

  };

 

  const addVote = (i) => {

    let copy = [...votes];

    copy[i] += 1;

    setVotes(copy);

  };

 

  let highestVote = Math.max(...votes);

  const checkIndex = (index) => index === highestVote;

  let indexOfHighestVote = votes.findIndex(checkIndex);

 

  return (

    <div>

      <h1>Anecdote of the day</h1>

      <p>{props.anecdotes[selected]}</p>

      <p>has votes {votes[selected]}</p>

      <Button text="vote" handleClick={() => addVote(selected)} />

      <Button text="next anectode" handleClick={nexAnecdote} />

 

      <h1>Anecdote with most votes</h1>

      <p>{props.anecdotes[indexOfHighestVote]}</p>

      <p>has votes {votes[indexOfHighestVote]}</p>

    </div>

  );

};

 

const anecdotes = [

  "If it hurts, do it more often",

  "Adding manpower to a late software project makes it later!",

  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",

  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",

  "Premature optimization is the root of all evil.",

  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."

];

 

const rootElement = document.getElementById("root");

ReactDOM.render(

  <React.StrictMode>

    <App anecdotes={anecdotes} />

  </React.StrictMode>,

  rootElement

);