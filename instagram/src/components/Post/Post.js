import React from 'react';
import { Heart, MessageCircle } from 'react-feather';

import PostContainer from './StyledComponents/Post';
import PostFooter from './PostFooter';

const Post = props => (
  <PostContainer>
    <div className="post-header">
      <img src={props.thumbnailUrl} alt={`${props.username}'s avatar`} />
      <h2>{props.username}</h2>
    </div>
    <img className="post-content" src={props.imageUrl} alt={`${props.username}'s post`} />
    <div className="post-bar">
      <button className="action" onClick={e => props.handleClick(e, props.postId)}>
        <Heart strokeWidth="2" />
      </button>
      <button className="action">
        <MessageCircle strokeWidth="2" transform="scale(-1, 1)" />
      </button>
      <p>{props.likes} likes</p>
    </div>
    <PostFooter
      addNewComment={props.addNewComment}
      comments={props.comments}
      current={props.current}
      handleChange={props.handleChange}
      postId={props.postId}
      timestamp={props.timestamp}
    />
  </PostContainer>
);

export default Post;
