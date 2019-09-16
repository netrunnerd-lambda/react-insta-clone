import React, { Component } from 'react';

import './App.css';

import withAuth from './components/auth/withAuthenticate';

import LoginPage from './components/Login/Login';
import PostsPage from './components/PostsPage';

const ComponentFromWithAuth = withAuth(PostsPage)(LoginPage);

class App extends Component {

  render() {
    return (
      <ComponentFromWithAuth />
    );
  }
}

export default App;
