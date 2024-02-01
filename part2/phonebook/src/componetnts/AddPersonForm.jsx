import React from "react";

const AddPersonForm = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  addPerson
}) => {
  return (
    <div>
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
            Number:{" "}
            <input
              className="border border-gray-100"
              value={newNumber}
              onChange={handleNumberChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddPersonForm;
