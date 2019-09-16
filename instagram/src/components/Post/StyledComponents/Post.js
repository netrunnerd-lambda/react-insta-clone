import styled from 'styled-components';

const PostContainer = styled.section`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  font-family: sans-serif;
  margin: 50px auto;
  max-width: 600px;

  .post-header {
    align-items: center;
    display: flex;
    font-size: 0.5rem;
    padding: 1rem;

    img {
      border-radius: 100%;
      margin-right: 1rem;
      max-width: 30px;
    }
  }

  .post-content {
    max-width: 599px;
  }

  .post-bar {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;

    .action {
      background: none;
      border: none;
      margin-right: 0.69rem;
    }

    p {
      font-weight: folder;
    }
  }
`;

export default PostContainer;
