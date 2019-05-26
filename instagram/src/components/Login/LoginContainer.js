import styled from 'styled-components';

const LoginContainer = styled.section`
  align-items: center;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  margin: 5rem auto;
  max-width: 420px;
  padding: 1rem;
  text-align: center;

  img, input {
    margin-bottom: 1rem;
  }

  input {
    text-align: center;
    width: 85%;
  }

  input, button {
    background-color: #fafafa;
    border: 1px solid #e6e6e6;
    border-radius: 5rem;
    padding: 0.5rem;
  }

  button {
    font-weight: bolder;
    text-transform: uppercase;
    transition: 0.5s;
    width: 45%;

    &:hover {
      background-color: #fff;
      cursor: pointer;
    }
  }
`;

export default LoginContainer;
