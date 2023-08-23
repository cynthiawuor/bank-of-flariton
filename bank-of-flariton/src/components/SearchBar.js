import React from 'react';
import styled from 'styled-components';

function SearchBar({ filterTerm, setFilterTerm }) {
  return (
    <input
      type="text"
      value={filterTerm}
      onChange={(event) => setFilterTerm(event.target.value)}
      placeholder="Search by description"
    />
  );
}

export default SearchBar;
