import React from "react";

const FilteredList = ({ persons }) => {
  return (
    <ul style={{ listStyleType: "none", fontSize: "20px", padding: "0" }}>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default FilteredList;
