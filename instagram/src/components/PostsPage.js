import React, { Component } from 'react';

import posts, { logoUrl } from '../db/dummy-data';

import Bar from './Bar/Bar';
import Post from './Post/Post';

class PostsPage extends Component {
  state = {
    currentComment: '',
    currentSearch: '',
    isSearching: false,
    logoUrl: '',
    posts: [],
    username: ''
  };

  addNewComment = (e, id) => {
    const posts = this.state.posts.map((p, i) => {
      if (i === id) {
        p.comments = [
          ...p.comments,
          {
            username: this.state.username,
            text: this.state.currentComment
          }
        ];
      }

      return p;
    });

    this.setState({ currentComment: '', posts: posts });

    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [`current${e.target.name}`]: e.target.value });
  };

  handleClick = (e, id) => {
    const posts = this.state.posts.map((p, i) => {
      if (i === id)
      ++p.likes;
      
      return p;
    });
    
    this.setState({ posts: posts });
    
    e.preventDefault();
  };
  
  handleStatus = _ => {
    this.setState({ currentSearch: '', isSearching: !this.state.isSearching  });
  };

  componentDidMount() {
    const p = JSON.parse(window.localStorage.getItem('posts')) || posts,
          u = window.localStorage.getItem('username') || 'krazeedave';

    this.setState({ logoUrl: logoUrl, posts: p, username: u });
  }

  componentDidUpdate(prevState) {
    if (this.state.posts !== prevState.posts) {
      window.localStorage.setItem('posts', JSON.stringify(this.state.posts));
    }
  }

  renderPost(post, index) {
    return (
      <Post 
        key={post.timestamp}
        addNewComment={this.addNewComment}
        current={this.state.currentComment}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        postId={index}
        {...post}
      />
    );
  }

  render() {
    const posts = this.state.posts.map((p, i) => {
      if (this.state.currentSearch) {
        const isMatch = p.username.includes(this.state.currentSearch);
        return isMatch ? this.renderPost(p, i) : null;
      }

      return this.renderPost(p, i);
    });

    return (
      <>
        <Bar
          handleChange={this.handleChange}
          handleStatus={this.handleStatus}
          isSearching={this.state.isSearching}
          logo={logoUrl}
        />
        {posts}
      </>
    );
  }
}

export default PostsPage;
