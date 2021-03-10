import React from 'react';

function SearchBar(props) {
  const { handleSubmit, searchText, handleSearch } = props;

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={searchText}
        placeholder="@GitHub Handle"
        name="searchBar"
        onChange={handleSearch}
      />
      <button>Fetch User</button>
    </form>
  );
}

export default SearchBar;
