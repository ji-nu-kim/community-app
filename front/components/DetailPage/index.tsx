import { MessageOutlined, UserOutlined } from '@ant-design/icons';
import { ICommunity } from 'interfaces/db';
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { DetailBg, DetailHeader, DetailMain, DetailPost } from './styles';
import ShowPeopleModal from 'components/Modals/ShowPeopleModal';
import JoinUserModal from 'components/Modals/JoinUserModal';
import PostForm from 'components/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import moment from 'moment';
import CommentForm from 'components/CommentForm';
import Router from 'next/router';
import {
  joinCommunityRequestAction,
  leaveCommunityRequestAction,
} from 'actions/actionCommunity';
import { sendNotificationRequestAction } from 'actions/actionUser';

interface DetailPageProps {
  singleCommunity: ICommunity;
  setCommunityModifyModal: Dispatch<SetStateAction<boolean>>;
}

function DetailPage({
  singleCommunity,
  setCommunityModifyModal,
}: DetailPageProps) {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const { joinCommunityDone } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const [showPeopleModal, setShowPeopleModal] = useState(false);
  const [joinUserModal, setJoinUserModal] = useState(false);
  const [currentNavValue, setCurrentNavValue] = useState('nav-info');
  const [openComment, setOpenComment] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);

  const communityOwner = me?.id === singleCommunity.OwnerId;
  const communityUser = singleCommunity.Users.filter(
    user => user.id === me?.id
  ).length;

  const communityModifyModalTrigger = useCallback(() => {
    setCommunityModifyModal(prev => !prev);
  }, [setCommunityModifyModal]);

  const showPeopleModalTrigger = useCallback(() => {
    setShowPeopleModal(prev => !prev);
  }, []);

  const joinUserModalTrigger = useCallback(() => {
    setJoinUserModal(prev => !prev);
  }, []);

  const onClickNav = useCallback(e => {
    if (e.target.className.split('-')[0] === 'nav') {
      setCurrentNavValue(e.target.className.split(' ')[0]);
    }
  }, []);

  const onToggleComment = useCallback(
    id => () => {
      setCurrentPost(id);
      setOpenComment(prev => !prev);
    },
    []
  );

  const onClickJoin = useCallback(() => {
    if (!me) {
      const confirmLogin = confirm(
        '로그인한 유저만 가능합니다. 로그인하시겠습니까?'
      );
      if (confirmLogin) {
        return Router.push('/login');
      }
    }

    if (me) {
      const confirmJoin = confirm('커뮤니티 가입신청을 하시겠습니까?');
      if (confirmJoin) {
        dispatch(
          joinCommunityRequestAction({ communityId: singleCommunity.id })
        );
      }
    }
  }, [singleCommunity, me]);

  const onClickLeave = useCallback(() => {
    if (me) {
      const confirmLeave = confirm('커뮤니티를 탈퇴하시겠습니까?');

      if (confirmLeave) {
        dispatch(
          leaveCommunityRequestAction({ communityId: singleCommunity.id })
        );
        dispatch(
          sendNotificationRequestAction({
            title: `${singleCommunity.communityName} 커뮤니티를 탈퇴했습니다`,
            userId: me.id,
          })
        );
      }
    }
  }, [singleCommunity, me]);

  useEffect(() => {
    if (joinCommunityDone) {
      alert('커뮤니티 가입신청이 완료되었습니다');
    }
  }, [joinCommunityDone]);

  return (
    <DetailBg
      bg={
        singleCommunity.profilePhoto &&
        `http://localhost:3065/${singleCommunity.profilePhoto}`
      }
    >
      <div className="detail-grid">
        <DetailHeader>
          <div className="header-left">
            <div className="header-image">
              {singleCommunity.profilePhoto ? (
                <img
                  src={`http://localhost:3065/${singleCommunity.profilePhoto}`}
                  width="150"
                  height="150"
                  alt="profile-image"
                />
              ) : (
                <UserOutlined className="header-icon" />
              )}
            </div>
            <div className="header-text">
              <p>커뮤니티정보</p>
              <h1>{singleCommunity.communityName}</h1>
              <h2>{singleCommunity.country}</h2>
            </div>
          </div>
          <div className="header-right">
            {communityOwner && (
              <>
                <div className="join-user-icon" onClick={joinUserModalTrigger}>
                  <UserOutlined />
                  {singleCommunity.JoinUsers.length > 0 && (
                    <div className="user-icon-badge">
                      {singleCommunity.JoinUsers.length}
                    </div>
                  )}
                </div>
                <button
                  className="insert-button"
                  onClick={communityModifyModalTrigger}
                >
                  수정하기
                </button>
              </>
            )}
            {communityOwner ? null : communityUser ? (
              <button onClick={onClickLeave}>탈퇴하기</button>
            ) : (
              <button onClick={onClickJoin}>가입하기</button>
            )}
          </div>
        </DetailHeader>
        <DetailMain>
          <div className="detail-nav" onClick={onClickNav}>
            <div
              className={`nav-info${
                currentNavValue === 'nav-info' ? ' active' : ''
              }`}
            >
              정보
            </div>
            <div
              className={`nav-post${
                currentNavValue === 'nav-post' ? ' active' : ''
              }`}
            >
              게시글
            </div>
          </div>
          {currentNavValue === 'nav-info' ? (
            <>
              <div className="detail-info">
                <div className="info-leader common odd">
                  <p>커뮤니티 리더</p>
                  <div>
                    {singleCommunity.Users.map(
                      v => v.id === singleCommunity.OwnerId && v.nickname
                    )}
                  </div>
                </div>
                <div className="info-description common">
                  <p>커뮤니티 소개</p>
                  <div>{singleCommunity.description}</div>
                </div>
                <div className="info-category common odd">
                  <p>카테고리</p>
                  <div>{singleCommunity.Categories[0].name}</div>
                </div>
                <div className="info-caution common">
                  <p>주의사항</p>
                  <div>{singleCommunity.caution}</div>
                </div>
                <div
                  className="info-people common odd"
                  onClick={showPeopleModalTrigger}
                >
                  <p>커뮤니티 회원</p>
                  <div>{singleCommunity.Users.length}명</div>
                </div>
                <div className="info-requirement common">
                  <p>가입조건</p>
                  <div>{singleCommunity.requirement}</div>
                </div>
              </div>
            </>
          ) : communityUser ? (
            <>
              <DetailPost>
                {/* 게시글 디자인 */}
                <div className="post-view" style={{ overflow: 'auto' }}>
                  {singleCommunity.Posts.length ? (
                    singleCommunity.Posts.map(post => (
                      <div
                        style={{
                          background: 'rgba(255,255,255,.5)',
                          marginBottom: '1rem',
                        }}
                        key={post.id}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid rgba(0,0,0,.1)',
                            padding: '.5rem',
                          }}
                        >
                          <div style={{ display: 'flex' }}>
                            <span>
                              {post.User.profilePhoto ? (
                                <img
                                  width="24px"
                                  height="24px"
                                  style={{
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                  }}
                                  src={`http://localhost:3065/${post.User.profilePhoto}`}
                                  alt="profile image"
                                />
                              ) : (
                                post.User.nickname[0]
                              )}
                            </span>
                            <div style={{ marginLeft: '4px' }}>
                              {post.User.nickname}
                            </div>
                          </div>
                          <div>
                            {moment(post.createdAt, 'YYYYMMDD').fromNow()}
                          </div>
                        </div>
                        {post.Images.length ? (
                          <img
                            src={`http://localhost:3065/${post.Images.map(
                              image => image.src
                            )}`}
                            alt="image"
                            width="100%"
                            style={{
                              objectFit: 'cover',
                            }}
                          />
                        ) : null}
                        <div style={{ padding: '1rem 0.5rem' }}>
                          {post.content}
                        </div>
                        <div
                          style={{
                            borderTop: '1px solid rgba(0,0,0,.1)',
                            padding: '0.5rem',
                          }}
                        >
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
                                  <div
                                    className="comment-container"
                                    key={comment.id}
                                  >
                                    <div style={{ display: 'flex' }}>
                                      <span>
                                        {comment.User.profilePhoto ? (
                                          <img
                                            width="24px"
                                            height="24px"
                                            style={{
                                              borderRadius: '50%',
                                              objectFit: 'cover',
                                            }}
                                            src={`http://localhost:3065/${comment.User.profilePhoto}`}
                                            alt="profile image"
                                          />
                                        ) : (
                                          comment.User.nickname[0]
                                        )}
                                      </span>
                                      <div style={{ marginLeft: '4px' }}>
                                        {comment.User.nickname}
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        textIndent: '0.5rem',
                                        marginTop: '0.5rem',
                                      }}
                                    >
                                      {comment.content}
                                    </div>
                                  </div>
                                ))}
                              <div
                                style={{
                                  textAlign: 'end',
                                }}
                              >
                                <CommentForm postId={post.id} />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>게시글을 작성해보세요!</div>
                  )}
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <PostForm />
                </div>
              </DetailPost>
            </>
          ) : (
            <>
              <DetailPost>커뮤니티 회원만 볼 수 있습니다</DetailPost>
            </>
          )}
        </DetailMain>
      </div>

      {showPeopleModal && (
        <ShowPeopleModal
          setShowPeopleModal={setShowPeopleModal}
          singleCommunity={singleCommunity}
        />
      )}
      {joinUserModal && (
        <JoinUserModal
          setJoinUserModal={setJoinUserModal}
          singleCommunity={singleCommunity}
        />
      )}
    </DetailBg>
  );
}

export default DetailPage;
