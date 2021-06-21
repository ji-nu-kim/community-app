import { PlusOutlined } from '@ant-design/icons';
import { ICommunity, IUser, IUserInfo } from 'interfaces/db';
import React, { memo, useCallback, useState } from 'react';
import { MakeMeetButton, MeetContainer, CardContainer } from './styles';
import CreateMeetModal from 'components/Modals/CreateMeetModal';
import ModifyMeetModal from 'components/Modals/ModifyMeetModal';
import Map from 'components/Map';
import {
  joinMeetRequestAction,
  leaveMeetRequestAction,
  removeMeetRequestAction,
} from 'actions/actionCommunity';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import { useEffect } from 'react';

interface MeeetProps {
  singleCommunity: ICommunity;
  me: IUser | null;
  communityUser: IUserInfo | undefined;
}

function Meet({ singleCommunity, communityUser, me }: MeeetProps) {
  const dispatch = useDispatch();
  const { addMeetDone, joinMeetDone, joinMeetError } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const [showCreateMeetModal, setShowCreateMeetModal] = useState(false);
  const [showModifyMeetModal, setShowModifyMeetModal] = useState(false);
  const [currentMeet, setCurrentMeet] = useState<number[]>([]);
  const [currentModifyMeet, setCurrentModifyMeet] = useState(-9999);
  const joinedMeetIndex = me?.Meets.map(meet => meet.id);
  const joinedMeetList = singleCommunity.Meets.filter(meet =>
    joinedMeetIndex?.includes(meet.id)
  );
  const notJoinedMeetList = singleCommunity.Meets.filter(
    meet => !joinedMeetIndex?.includes(meet.id)
  );

  const onClickPlace = useCallback(
    (meetId: number) => () => {
      if (currentMeet.includes(meetId)) {
        return;
      }
      setCurrentMeet([...currentMeet, meetId]);
    },
    [currentMeet]
  );

  const onClickMember = useCallback(
    (meetId: number) => () => {
      setCurrentMeet([...currentMeet].filter(current => current !== meetId));
    },
    [currentMeet]
  );

  const onClickCreateMeetButton = useCallback(() => {
    setShowCreateMeetModal(true);
  }, []);

  const onClickDeleteMeetButton = useCallback(
    (meetId: number) => () => {
      if (confirm('모임을 삭제하시겠습니까?')) {
        return dispatch(
          removeMeetRequestAction({ meetId, communityId: singleCommunity.id })
        );
      }
    },
    [singleCommunity]
  );

  const onClickJoinMeetButton = useCallback(
    (meetId: number, currentMembers: number, totalMembers: number) => () => {
      if (currentMembers >= totalMembers) {
        return alert('인원 수가 초과되었습니다');
      }
      if (confirm('모임에 참가하시겠습니까?')) {
        return dispatch(
          joinMeetRequestAction({ meetId, communityId: singleCommunity.id })
        );
      }
    },
    [singleCommunity]
  );

  const onClickLeaveMeetButton = useCallback(
    (meetId: number) => () => {
      if (confirm('모임을 탈퇴하시겠습니까?')) {
        return dispatch(
          leaveMeetRequestAction({ communityId: singleCommunity.id, meetId })
        );
      }
    },
    [singleCommunity]
  );

  const onClickModifyMeetButton = useCallback(
    (meetId: number) => () => {
      setCurrentModifyMeet(meetId);
      setShowModifyMeetModal(true);
    },
    []
  );

  useEffect(() => {
    if (addMeetDone) {
      setShowCreateMeetModal(false);
    }
  }, [addMeetDone]);

  useEffect(() => {
    if (joinMeetDone) {
      setShowModifyMeetModal(false);
    }
  }, [joinMeetDone]);

  useEffect(() => {
    if (joinMeetError) {
      alert(joinMeetError);
    }
  }, [joinMeetError]);

  return (
    <MeetContainer>
      {communityUser ? (
        <>
          <div style={{ overflow: 'auto' }}>
            {joinedMeetList.length ? (
              <div className="joined-meet">
                <div className="meet-name">참가한 모임</div>
                <div className="meet-card-grid">
                  {joinedMeetList.map((meet, i) => (
                    <div key={meet.id}>
                      <CardContainer number={i}>
                        <div className="card-left">
                          <div className="card-header">
                            <div className="meet-title">{meet.title}</div>
                          </div>
                          <div className="card-body">
                            <div className="meet-date">{meet.date}시</div>
                            <div className="meet-fee">참가비: {meet.fee}원</div>
                            <div
                              className="meet-members"
                              onClick={onClickMember(meet.id)}
                            >
                              인원: {meet.Users.length} / {meet.members}명
                            </div>
                            <div className="meet-place" onClick={onClickPlace(meet.id)}>
                              장소: {meet.place}
                            </div>
                            <div className="meet-owner">
                              모임리더:{' '}
                              {meet.Users.map(
                                user => user.id === meet.MeetOwnerId && user.nickname
                              )}
                            </div>
                            <div className="meet-button">
                              {meet.MeetOwnerId === me?.id ? (
                                <div className="owner-buttons">
                                  <button onClick={onClickModifyMeetButton(meet.id)}>
                                    수정
                                  </button>
                                  <button onClick={onClickDeleteMeetButton(meet.id)}>
                                    삭제
                                  </button>
                                </div>
                              ) : (
                                <button onClick={onClickLeaveMeetButton(meet.id)}>
                                  탈퇴
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="card-right">
                          {currentMeet.includes(meet.id) ? (
                            <Map key={meet.id} address={meet.place} number={meet.id} />
                          ) : (
                            <div className="show-members">
                              <div>참가멤버</div>
                              <div className="member-container">
                                {meet.Users.map(user => (
                                  <p key={user.id}>{user.nickname}</p>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContainer>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="new-meet">
              <div className="meet-name">새로운 모임</div>
              {notJoinedMeetList.length
                ? notJoinedMeetList.map((meet, i) => (
                    <div key={meet.id}>
                      <CardContainer number={i}>
                        <div className="card-left">
                          <div className="card-header">
                            <div className="meet-title">{meet.title}</div>
                          </div>
                          <div className="card-body">
                            <div className="meet-date">{meet.date}시</div>
                            <div className="meet-fee">참가비: {meet.fee}원</div>
                            <div
                              className="meet-members"
                              onClick={onClickMember(meet.id)}
                            >
                              인원: {meet.Users.length} / {meet.members}명
                            </div>

                            <div className="meet-place" onClick={onClickPlace(meet.id)}>
                              장소: {meet.place}
                            </div>
                            <div className="meet-owner">
                              모임리더:{' '}
                              {meet.Users.map(
                                user => user.id === meet.MeetOwnerId && user.nickname
                              )}
                            </div>
                            <div className="meet-button">
                              {meet.Users.length < meet.members ? (
                                <button
                                  onClick={onClickJoinMeetButton(
                                    meet.id,
                                    meet.Users.length,
                                    meet.members
                                  )}
                                >
                                  참가하기
                                </button>
                              ) : (
                                <button>인원제한</button>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="card-right">
                          {currentMeet.includes(meet.id) ? (
                            <Map key={meet.id} address={meet.place} number={meet.id} />
                          ) : (
                            <div className="show-members">
                              <div>참가멤버</div>
                              <div className="member-container">
                                {meet.Users.map(user => (
                                  <p key={user.id}>{user.nickname}</p>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContainer>
                    </div>
                  ))
                : null}
            </div>
          </div>

          <MakeMeetButton onClick={onClickCreateMeetButton}>
            <PlusOutlined />
          </MakeMeetButton>

          {showCreateMeetModal && (
            <CreateMeetModal
              setShowCreateMeetModal={setShowCreateMeetModal}
              communityId={singleCommunity.id}
            />
          )}

          {showModifyMeetModal && (
            <ModifyMeetModal
              setShowModifyMeetModal={setShowModifyMeetModal}
              communityId={singleCommunity.id}
              meetInfo={joinedMeetList.find(meet => meet.id === currentModifyMeet)}
            />
          )}
        </>
      ) : (
        <div className="visitor-post">커뮤니티 유저만 볼 수 있습니다</div>
      )}
    </MeetContainer>
  );
}

export default memo(Meet);
