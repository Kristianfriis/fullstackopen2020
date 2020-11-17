import React, { useState, useEffect } from "react";
import phonebook from "./services/phonebook"

import Person from "./components/Person";
import AddPersonForm from "./components/AddPersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhonenumber, setNewPhonenumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null)
  const [styleOption, setStyleOption] = useState(null)

  const hook = () => {
    phonebook
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhonenumberChange = (event) => {
    setNewPhonenumber(event.target.value);
  };

  const handleFilterchange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      let result = window.confirm(`${newName} is already added to the phonebook, want to update the number?`);
      if(result) {
        let person = persons.find(person => person.name === newName)
        const changedPerson = {...person, number: newPhonenumber} 
        setMessage(
          `${person.name} was updated`
        )
        setStyleOption('success');
        messageTimer();
        phonebook
          .update(changedPerson.id, changedPerson)
          .then(res => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : res.data))
          })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newPhonenumber
      };
      setPersons(persons.concat(newPerson));

      setMessage(
        `${newPerson.name} was added`
      )
      setStyleOption('success');
      messageTimer();

      phonebook
        .create(newPerson)
        .then(response => {
          console.log(response.data)
        })

    }
    setNewName("");
    setNewPhonenumber("");
  };

  const messageTimer = () => {
    setTimeout(() => {
      setMessage(null)
      setStyleOption(null)
    }, 5000)
  }

  const deletePerson = (id) => {
    const person = persons.find(per => per.id === id)
    let result = window.confirm(`Delete ${person.name} ?`)

    if(result) {
      phonebook
        .deletePerson(id)
        .then(res => {
          console.log(`${person.name} was deleted`)
        })
        .catch(error => {
          setMessage(
            `The person ${person.name} was already deleted from server`
          )
          setStyleOption('error');
          messageTimer();
        })
        setPersons(persons.filter(person => person.id !== id))
    }
  }

  const numbersToshow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} styleOption={styleOption}/>
      <Filter filter={filter} handleChange={handleFilterchange} />
      <h2>add a new</h2>
      <AddPersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newPhonenumber={newPhonenumber}
        handlePhonenumberChange={handlePhonenumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      {numbersToshow.map((person) => (
        <Person key={person.name} person={person} handleClick={deletePerson}/>
      ))}
    </div>
  );
};

export default App;
