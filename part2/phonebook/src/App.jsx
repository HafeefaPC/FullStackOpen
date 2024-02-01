import { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./componetnts/SearchForm";
import AddPersonForm from "./componetnts/AddPersonForm";
import FilteredList from "./componetnts/FilterList";
import { response } from "express";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
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
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search)
  );

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error("error:", error);
      });
  }, []);
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
