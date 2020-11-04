import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
    
  );
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  );
}

const Total = (props) => {
  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises; 
  return(
    <p>Number of exercises {total}</p>
  );
}
const App = () => {
  const course = {
    name: "Half Stack Application development",
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }; 

  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

