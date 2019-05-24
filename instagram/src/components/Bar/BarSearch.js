import React, { Component } from 'react';
import { Search, XCircle } from 'react-feather';
import styled from 'styled-components';

const SearchContainer = styled.form`
        align-items: center;
        background-color: #fafafa;
        border: 1px solid #dbdbdb;
        border-radius: 2px;
        color: grey;
        display: flex;
        height: 30px;
        justify-content: space-evenly;
        width: 215px;
      `,
      SearchPlaceholder = styled.button`
        background: none;
        border: none;
        color: grey;
        font-size: 0.9rem;
        height: inherit;
        width: inherit;

        &:hover {
          cursor: text;
        }
      `,
      SearchProper = styled.input`
        background: none;
        border: none;
        font-size: 0.9rem;
        width: 75%;
      `;

class SearchBar extends Component {
  getSearchElement = _ => {
    if (!this.props.isSearching) {
      return (
        <SearchPlaceholder onClick={this.props.handleStatus}>
          <Search size="11px" /> Search
        </SearchPlaceholder>
      );
    }

    return (
      <>
        <Search size="12px" />
        <SearchProper autoFocus placeholder="Search" type="text" /> 
        <XCircle size="12px" onClick={this.props.handleStatus} />
      </>
    );
  };

  render() {
    const element = this.getSearchElement();

    return (
      <SearchContainer>
        {element}
      </SearchContainer>
    );
  }
}

export default SearchBar;
