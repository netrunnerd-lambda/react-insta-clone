import React, { Component } from 'react';
import { Search, XCircle } from 'react-feather';

import SearchContainer from './BarSearchContainer';

class SearchBar extends Component {
  renderSearch() {
    const { handleChange,
            handleStatus,
            isSearching } = this.props;

    if (!isSearching) {
      return (
        <button className="placeholder" onClick={handleStatus}>
          <Search size="11px" /> Search
        </button>
      );
    }

    return (
      <>
        <Search size="12px" />
        <input 
          autoFocus
          className="proper"
          name="Search"
          onChange={handleChange} 
          placeholder="Search" 
          type="text"
        /> 
        <XCircle size="12px" onClick={handleStatus} />
      </>
    );
  }

  render() {
    return (
      <SearchContainer>
        {this.renderSearch()}
      </SearchContainer>
    );
  }
}

export default SearchBar;
