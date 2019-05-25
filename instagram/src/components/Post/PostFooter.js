import React, { Component } from 'react';
import { MoreHorizontal } from 'react-feather';
import moment from 'moment';
import styled from 'styled-components';

const PostFooterContainer = styled.div`
        font-size: 0.8rem;
      `,
      PostCommentSection = styled.section`
        padding: 0 1rem;

        & > span {
          color: darkgrey;
          font-size: 0.6rem;
          text-transform: uppercase;
        }
      `,
      PostComment = styled.p`
        margin-bottom: 0.25rem;

        span {
          font-weight: bold;
        }
      `,
      PostCommentingSection = styled.form`
        align-items: center;
        border-top: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-evenly;
        margin-top: 0.5rem;
        
        input {
          background: none;
          border: none;
          font-size: 0.9rem;
          padding: 1rem 0;
          width: 90%;
        }
      `;

class PostFooter extends Component {
  render() {
    const comments = this.props.comments.map(comment => <PostComment key={comment.text}><span>{comment.username}</span> {comment.text}</PostComment>),
          postStamp = moment(this.props.timestamp, "h:mm:ss a").startOf('hour').fromNow();

    return (
      <PostFooterContainer>
        <PostCommentSection>
          {comments}
          <span>{postStamp}</span>
        </PostCommentSection>
        <PostCommentingSection>
          <input type="text" placeholder="Add a comment..." />
          <MoreHorizontal />
        </PostCommentingSection>
      </PostFooterContainer>
    );
  }
}

export default PostFooter;
