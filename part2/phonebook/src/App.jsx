import { useState } from "react";

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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with
        <input className="border border-gray-100" value={search} onChange={handleSearch} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div className="flex flex-col ">
          <div>
            Name:
            <input
              className="border border-gray-100"
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div>
            Number: <input className="border border-gray-100" value={newNumber} onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyleType: "none", fontSize: "20px", padding: "0" }}>
       
        {filteredPersons.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
