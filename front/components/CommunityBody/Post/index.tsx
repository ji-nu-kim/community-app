import { MessageOutlined, MoreOutlined } from '@ant-design/icons';
import CommentForm from 'components/CommentForm';
import PostEditModal from 'components/Modals/PostEditModal';
import PostSettingModal from 'components/Modals/PostSettingModal';
import PostForm from 'components/PostForm';
import { ICommunity } from 'interfaces/db';
import { RootStateInterface } from 'interfaces/RootState';
import moment from 'moment';
import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { PostContainer } from './styles';

interface PostProps {
  singleCommunity: ICommunity;
}

function Post({ singleCommunity }: PostProps) {
  const { mainPosts } = useSelector((state: RootStateInterface) => state.post);
  const [openComment, setOpenComment] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [onMouseCurrentPost, setOnMouseCurrentPost] = useState(0);
  const [currentModifyPost, setCurrentModifyPost] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const onMouserInMoreButton = useCallback(
    (postId: number) => () => {
      setOnMouseCurrentPost(postId);
      setShowMoreButton(true);
    },
    []
  );

  const onMouserLeaveMoreButton = useCallback(() => {
    setOnMouseCurrentPost(0);
  }, []);

  const onToggleComment = useCallback(
    id => () => {
      setCurrentPost(id);
      setOpenComment(prev => !prev);
    },
    []
  );

  return (
    <PostContainer>
      {mainPosts.length ? (
        <>
          <div className="post-form-container">
            <PostForm />
          </div>
          {mainPosts.map(post => (
            <div className="post-body-container" key={post.id}>
              <div className="header post-body-header">
                <div className="header-left">
                  <span>
                    {post.User.profilePhoto ? (
                      <img
                        className="left-profile-image"
                        src={`http://localhost:3065/${post.User.profilePhoto}`}
                        alt="profile image"
                      />
                    ) : (
                      <div className="left-fake-image">{post.User.nickname[0]}</div>
                    )}
                  </span>
                  <div className="left-nickname">{post.User.nickname}</div>
                </div>
                <div className="header-right">
                  <div className="right-day">
                    {moment(post.createdAt, 'YYYYMMDD').fromNow()}
                  </div>
                  <div
                    className="right-buttons"
                    onMouseEnter={onMouserInMoreButton(post.id)}
                  >
                    <MoreOutlined />
                  </div>
                  {showMoreButton && post.id === onMouseCurrentPost && (
                    <PostSettingModal
                      onMouserLeaveMoreButton={onMouserLeaveMoreButton}
                      setCurrentModifyPost={setCurrentModifyPost}
                      setEditMode={setEditMode}
                      postId={post.id}
                      communityId={singleCommunity.id}
                    />
                  )}
                </div>

                {editMode && post.id === currentModifyPost && (
                  <PostEditModal
                    setEditMode={setEditMode}
                    setCurrentModifyPost={setCurrentModifyPost}
                    currentPostText={post.content}
                    postId={post.id}
                    communityId={singleCommunity.id}
                  />
                )}
              </div>
              {post.Images.length ? (
                <img
                  src={`http://localhost:3065/${post.Images[0].src}`}
                  alt="image"
                  className="post-image"
                />
              ) : null}
              <div className="post-text">{post.content}</div>
              <div className="post-comment-info">
                <div
                  onClick={onToggleComment(post.id)}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ marginRight: '4px' }}>
                    <MessageOutlined />
                  </span>
                  {post.Comments.length
                    ? `댓글 ${post.Comments.length}개 모두보기`
                    : '댓글 작성하기'}
                </div>
                {openComment && currentPost === post.id && (
                  <>
                    {post.Comments &&
                      post.Comments.map(comment => (
                        <div className="post-comment-container" key={comment.id}>
                          <div className="header comment-header">
                            <div className="header-left">
                              <span>
                                {comment.User.profilePhoto ? (
                                  <img
                                    className="left-profile-image"
                                    src={`http://localhost:3065/${comment.User.profilePhoto}`}
                                    alt="profile image"
                                  />
                                ) : (
                                  <div className="left-fake-image">
                                    {comment.User.nickname[0]}
                                  </div>
                                )}
                              </span>
                              <div className="left-nickname">{comment.User.nickname}</div>
                            </div>
                            {/* 삭제, 수정기능 */}
                            <div className="header-right">1</div>
                          </div>
                          <div className="comment-text">{comment.content}</div>
                        </div>
                      ))}
                    <div className="post-comment-form-container">
                      <CommentForm postId={post.id} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>게시글이 없습니다</div>
      )}
    </PostContainer>
  );
}

export default memo(Post);
