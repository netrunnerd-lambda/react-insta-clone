import React, { Component } from 'react';
import { MoreHorizontal } from 'react-feather';
import moment from 'moment';

import PostFooterContainer from './StyledComponents/PostFooter';

class PostFooter extends Component {
  formatTimestamp(timestamp) {
    return moment(timestamp, "MMM Do YYYY, h:mm:ss a").startOf('hour').fromNow();
  }

  renderComment(comment) {
    const random = Math.floor(Math.random() * 500000000000000);

    return (
      <p className="comment" key={random}>
        <span>{comment.username}</span> {comment.text}
      </p>
    );
  }

  render() {
    const { addNewComment,
            comments,
            current,
            handleChange,
            postId,
            timestamp } = this.props;
    
    const commentList = comments.map(c => this.renderComment(c)),
          postStamp = this.formatTimestamp(timestamp);

    return (
      <PostFooterContainer>
        <section className="comment-section">
          {commentList}
          <span>{postStamp}</span>
        </section>
        <form className="commenting-section" onSubmit={e => addNewComment(e, postId)}>
          <input
            name="Comment"
            onChange={handleChange}
            placeholder="Add a comment..."
            type="text"
            value={current}
          />
          <MoreHorizontal />
        </form>
      </PostFooterContainer>
    );
  }
}

export default PostFooter;
