import styled from 'styled-components';

export const PostContainer = styled.div`
  overflow: auto;
  height: 100%;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.4);

  .visitor-post {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    position: relative;
    display: flex;
    justify-content: space-between;

    .header-left {
      display: flex;
      align-items: center;

      .left-profile-image {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 8px;
      }
      .left-fake-image {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 8px;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
      }
      .left-nickname {
        font-weight: bold;
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      position: relative;

      .right-day {
        font-size: 0.75rem;
      }
      .right-buttons {
        margin-left: 8px;
        font-size: 16px;
        cursor: pointer;

        :hover {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }

  .post-body-container {
    position: relative;
    background: rgba(255, 255, 255, 0.4);

    :not(:last-child) {
      margin-bottom: 1rem;
    }

    .post-body-header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0.5rem;
    }

    .post-image {
      width: 100%;
      object-fit: cover;
    }

    .post-text {
      padding: 1rem 0.5rem;
      white-space: pre;
    }

    .post-comment-info {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0.5rem;
    }

    .post-comment-container {
      position: relative;
      margin: 0.5rem 0;
      padding: 0.5rem;
      background: linear-gradient(
        120deg,
        rgba(69, 104, 220, 0.7),
        rgba(176, 106, 179, 0.7)
      );

      .comment-header {
      }

      .comment-text {
        margin-top: 0.5rem;
        text-align: justify;
        white-space: pre;
      }
    }

    .post-comment-form-container {
      text-align: end;
    }
  }

  .show-visitor {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-form-container {
    background: rgba(255, 255, 255, 0.4);
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;
