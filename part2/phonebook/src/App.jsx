import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./componetnts/SearchForm";
import AddPersonForm from "./componetnts/AddPersonForm";
import FilteredList from "./componetnts/FilteredList";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };

      axios
        .post("http://localhost:3001/persons", newPerson)
        .then((response) => {
          setPersons([...persons, response.data]);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          console.error("error:", error);
        });
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search)
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <SearchForm value={search} onChange={handleSearch} />

      <h2>Add a new</h2>

      <AddPersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <FilteredList persons={filteredPersons} />
    </div>
  );
};

export default App;
