import { MessageOutlined, MoreOutlined } from '@ant-design/icons';
import { loadPostsRequestAction } from 'actions/actionPost';
import CommentForm from 'components/CommentForm';
import CommentEditModal from 'components/Modals/CommentEditModal';
import CommentSettingModal from 'components/Modals/CommentSettingModal';
import PostEditModal from 'components/Modals/PostEditModal';
import PostSettingModal from 'components/Modals/PostSettingModal';
import PostForm from 'components/PostForm';
import { ICommunity, IUserInfo } from 'interfaces/db';
import { RootStateInterface } from 'interfaces/RootState';
import moment from 'moment';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostContainer } from './styles';

interface PostProps {
  singleCommunity: ICommunity;
  communityUser: IUserInfo | undefined;
}

function Post({ singleCommunity, communityUser }: PostProps) {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost, loadPostsLoading } = useSelector(
    (state: RootStateInterface) => state.post
  );
  const [editMode, setEditMode] = useState(false);
  const [showPostSettingButton, setShowPostSettingButton] = useState(false); // 포스트설정 모달 보여주기
  const [CurrentPostSettingButton, setCurrentPostSettingButton] = useState(0); // 현재 보여지고 있는 포스트설정 모달
  const [currentModifyPost, setCurrentModifyPost] = useState(0); // 현재 수정중인 포스트
  const [showCommentSettingButton, setShowCommentSettingButton] = useState(false);
  const [currentCommentSettingButton, setCurrentCommentSettingButton] = useState(0);
  const [currentModifyComment, setCurrentModifyComment] = useState(0);
  const [openPostCommentForm, setOpenPostCommentForm] = useState(false);
  const [currentPostCommentForm, setCurrentPostCommentForm] = useState(0);
  const postContainerRef = useRef<HTMLDivElement>(null);

  const onClickPostSettingButton = useCallback(
    (postId: number) => () => {
      setCurrentPostSettingButton(postId);
      setShowPostSettingButton(true);
    },
    []
  );

  const onClickCommentSettingButton = useCallback(
    (commentId: number) => () => {
      setCurrentCommentSettingButton(commentId);
      setShowCommentSettingButton(true);
    },
    []
  );

  const onTogglePostCommentForm = useCallback(
    (postId: number) => () => {
      setCurrentPostCommentForm(postId);
      setOpenPostCommentForm(prev => !prev);
    },
    []
  );

  const onCloseSettingModal = useCallback(() => {
    if (showPostSettingButton || showCommentSettingButton) {
      setShowPostSettingButton(false);
      setShowCommentSettingButton(false);
    }
  }, [showPostSettingButton, showCommentSettingButton]);

  useEffect(() => {
    const postContainer = postContainerRef.current;
    if (!postContainer) return;

    function onScroll(e: any) {
      if (communityUser && mainPosts.length) {
        if (e.target.scrollTop >= e.target.scrollHeight - e.target.offsetHeight - 300) {
          if (hasMorePost && !loadPostsLoading) {
            const lastId = mainPosts[mainPosts.length - 1].id;
            dispatch(
              loadPostsRequestAction({ communityId: singleCommunity.id, postId: lastId })
            );
          }
        }
      }
    }

    postContainer.addEventListener('scroll', onScroll);

    return () => postContainer.removeEventListener('scroll', onScroll);
  }, [
    communityUser,
    mainPosts,
    hasMorePost,
    loadPostsLoading,
    singleCommunity,
    postContainerRef.current,
  ]);

  return (
    <PostContainer onClick={onCloseSettingModal} ref={postContainerRef}>
      {communityUser ? (
        <>
          <div className="post-form-container">
            <PostForm />
          </div>
          {mainPosts.length ? (
            <>
              {mainPosts.map(post => (
                <div className="post-body-container" key={post.id}>
                  {editMode && post.id === currentModifyPost && (
                    <PostEditModal
                      setEditMode={setEditMode}
                      setCurrentModifyPost={setCurrentModifyPost}
                      currentPostText={post.content}
                      postId={post.id}
                      communityId={singleCommunity.id}
                    />
                  )}
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
                        onClick={onClickPostSettingButton(post.id)}
                      >
                        <MoreOutlined />
                      </div>
                      {showPostSettingButton && post.id === CurrentPostSettingButton && (
                        <PostSettingModal
                          setCurrentModifyPost={setCurrentModifyPost}
                          setEditMode={setEditMode}
                          postId={post.id}
                          communityId={singleCommunity.id}
                          postOwnerId={post.User.id}
                          communityUserId={communityUser.id}
                        />
                      )}
                    </div>
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
                      onClick={onTogglePostCommentForm(post.id)}
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
                    {openPostCommentForm && currentPostCommentForm === post.id && (
                      <>
                        {post.Comments &&
                          post.Comments.map(comment => (
                            <div className="post-comment-container" key={comment.id}>
                              {editMode && comment.id === currentModifyComment && (
                                <CommentEditModal
                                  setEditMode={setEditMode}
                                  setCurrentModifyComment={setCurrentModifyComment}
                                  currentCommentText={comment.content}
                                  postId={post.id}
                                  commentId={comment.id}
                                />
                              )}
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
                                  <div className="left-nickname">
                                    {comment.User.nickname}
                                  </div>
                                </div>
                                <div className="header-right">
                                  <div
                                    className="right-buttons"
                                    onClick={onClickCommentSettingButton(comment.id)}
                                  >
                                    <MoreOutlined />
                                  </div>
                                </div>
                                {showCommentSettingButton &&
                                  comment.id === currentCommentSettingButton && (
                                    <CommentSettingModal
                                      setCurrentModifyComment={setCurrentModifyComment}
                                      setEditMode={setEditMode}
                                      postId={post.id}
                                      commentId={comment.id}
                                      commentOwnerId={comment.User.id}
                                      communityUserId={communityUser.id}
                                    />
                                  )}
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
          ) : null}
        </>
      ) : (
        <div className="visitor-post">커뮤니티유저만 볼 수 있습니다</div>
      )}
    </PostContainer>
  );
}

export default memo(Post);
