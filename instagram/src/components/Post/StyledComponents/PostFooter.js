import styled from 'styled-components';

const PostFooterContainer = styled.div`
  font-size: 0.8rem;

  .comment-section {
    padding: 0 1rem;

    .comment {
      margin-bottom: 0.25rem;

      span {
        font-weight: bold;
      }
    }

    & > span {
      color: darkgrey;
      font-size: 0.6rem;
      text-transform: uppercase;
    }
  }

  .commenting-section {
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
  }
`;

export default PostFooterContainer;
