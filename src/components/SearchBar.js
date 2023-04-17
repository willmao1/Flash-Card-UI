import React from "react";
import filter_icon from "../images/filter-icon.svg";

const SearchBar = ({ searchText, onSearchChange, onFilterClick }) => {
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
        onChange={onSearchChange}
      />
      <span
        role="button"
        className="rounded-circle border bg-light p-1 ml-2"
        onClick={onFilterClick}
      >
        <img
          src={filter_icon}
          className="cursor-pointer"
          width="31"
          aria-label="Filter Button"
        />
      </span>
    </div>
  );
};

export default SearchBar;
