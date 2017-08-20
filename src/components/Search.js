import React from 'react'
import SearchInput from './SearchInput'

const Search = (props) => {

  return (
    <div className="search-container">
      <h3>School Search</h3>
      <SearchInput handleSearch={ props.handleSearch } />
    </div>
  )
};

export default Search;
