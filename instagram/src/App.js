import React, { Component } from 'react';

import posts, { logoUrl } from './db/dummy-data';

import './App.css';

import Bar from './components/Bar/Bar';
import Post from './components/Post/Post';

class App extends Component {
  state = {
    isSearching: false,
    logoUrl: '',
    posts: []
  };

  handleStatus = _ => {
    this.setState({ isSearching: !this.state.isSearching });
  };

  componentDidMount() {
    this.setState({ logoUrl: logoUrl, posts: posts });
  }

  render() {
    const posts = this.state.posts.map(post => <Post key={post.timestamp} {...post} />);
    
    return (
      <>
        <Bar 
          handleStatus={this.handleStatus}
          isSearching={this.state.isSearching}
          logo={logoUrl}
        />
        {posts}
      </>
    );
  }
}

export default App;
