import React, { Component } from 'react';

const withAuthenticate = PostsPage => LoginPage => {
  return class extends Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      this.setState({ loggedIn: window.localStorage.getItem('username') ? 1 : 0 });
    }

    render() {
      return this.state.loggedIn ? <PostsPage /> : <LoginPage />;
    }
  }
}

export default withAuthenticate;
