import React from 'react'

const SearchInput = (props) => {

  //controller for managing what cards are showing based on search

  return (
    <div className="search-input">
      <input onChange={ (e) => props.handleSearch(e.target.value) }/>
    </div>
  )
};

export default SearchInput;
