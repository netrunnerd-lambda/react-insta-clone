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

  .placeholder {
    background: none;
    border: none;
    color: grey;
    font-size: 0.9rem;
    height: inherit;
    width: inherit;

    &:hover {
      cursor: text;
    }
  }

  .proper {
    background: none;
    border: none;
    font-size: 0.9rem;
    width: 75%;
  }
`;

export default SearchContainer;