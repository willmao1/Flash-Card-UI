import React from "react";

const SearchBar = ({ searchText, onChange }) => {
  return (
    <div className="input-group rounded my-3 pr-4">
      <span className="input-group-text border-0 bg-white" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={searchText}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
