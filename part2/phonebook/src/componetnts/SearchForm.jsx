import React from "react";

const SearchForm = ({ value, onChange }) => {
  return (
    <div>
      filter shown with
      <input
        className="border border-gray-100"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchForm;
