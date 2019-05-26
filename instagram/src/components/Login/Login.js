import React, { Component } from 'react';

import { logoUrl } from '../../db/dummy-data';

import LoginContainer from './LoginContainer';

class Login extends Component {
  state = {
    logoUrl: '',
    username: ''
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  login = e => {
    if (this.state.username)
      window.localStorage.setItem('username', this.state.username);
  };

  componentDidMount() {
    this.setState({ logoUrl: logoUrl });
  }

  render() {
    return (
      <LoginContainer>
        <img src={this.state.logoUrl} alt="Instagram logo" />
        <form onSubmit={this.login}>
          <input onChange={this.handleChange} type="text" required />
          <input type="password" required />
          <button type="submit">Login</button>
        </form>
      </LoginContainer>
    );
  }
}

export default Login;
