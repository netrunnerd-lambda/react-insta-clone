import React from 'react';
import { Heart, MessageCircle } from 'react-feather';
import styled from 'styled-components';

import PostFooter from './PostFooter';

const PostContainer = styled.section`
        background-color: #fff;
        border: 1px solid #e6e6e6;
        border-radius: 2px;
        font-family: sans-serif;
        margin: 50px auto;
        max-width: 600px;
      `,
      PostHeader = styled.div`
        align-items: center;
        display: flex;
        font-size: 0.5rem;
        padding: 1rem;

        img {
          border-radius: 100%;
          margin-right: 1rem;
          max-width: 30px;
        }
      `,
      PostContent = styled.div`
        img {
          max-width: 598px;
        }
      `,
      PostBar = styled.div`
        font-size: 0.8rem;
        padding: 0.5rem 1rem;

        p {
          font-weight: bolder;
        }
      `,
      PostAction = styled.button`
        background: none;
        border: none;
        margin-right: 0.69rem;
      `;

const Post = props => (
  <PostContainer>
    <PostHeader>
      <img src={props.thumbnailUrl} alt={`${props.username}'s avatar`} />
      <h2>{props.username}</h2>
    </PostHeader>
    <PostContent>
      <img src={props.imageUrl} alt={`${props.username}'s post`} />
    </PostContent>
    <PostBar>
      <PostAction>
        <Heart strokeWidth="2" />
      </PostAction>
      <PostAction>
        <MessageCircle strokeWidth="2" transform="scale(-1, 1)" />
      </PostAction>
      <p>{props.likes} likes</p>
    </PostBar>
    <PostFooter comments={props.comments} timestamp={props.timestamp} />
  </PostContainer>
);

export default Post;
