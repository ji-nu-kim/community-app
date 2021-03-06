import { PlusOutlined } from '@ant-design/icons';
import { ICommunity, IUser, IUserInfo } from 'interfaces/db';
import React, { memo, useCallback, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MakeMeetButton, MeetContainer, CardContainer } from './styles';
import {
  joinMeetRequestAction,
  leaveMeetRequestAction,
  removeMeetRequestAction,
} from 'actions/actionCommunity';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';

const ModifyMeetModal = dynamic(() => import('components/Modals/ModifyMeetModal'));
const CreateMeetModal = dynamic(() => import('components/Modals/CreateMeetModal'));
const Map = dynamic(() => import('components/Map'));

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
      if (confirm('????????? ?????????????????????????')) {
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
        return alert('?????? ?????? ?????????????????????');
      }
      if (confirm('????????? ?????????????????????????')) {
        return dispatch(
          joinMeetRequestAction({ meetId, communityId: singleCommunity.id })
        );
      }
    },
    [singleCommunity]
  );

  const onClickLeaveMeetButton = useCallback(
    (meetId: number) => () => {
      if (confirm('????????? ?????????????????????????')) {
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
                <div className="meet-name">????????? ??????</div>
                <div className="meet-card-grid">
                  {joinedMeetList.map((meet, i) => (
                    <div key={meet.id}>
                      <CardContainer number={i}>
                        <div className="card-left">
                          <div className="card-header">
                            <div className="meet-title">{meet.title}</div>
                          </div>
                          <div className="card-body">
                            <div className="meet-date">{meet.date}???</div>
                            <div className="meet-fee">?????????: {meet.fee}???</div>
                            <div
                              className="meet-members"
                              onClick={onClickMember(meet.id)}
                            >
                              ??????: {meet.Users.length} / {meet.members}???
                            </div>
                            <div className="meet-place" onClick={onClickPlace(meet.id)}>
                              ??????: {meet.place}
                            </div>
                            <div className="meet-owner">
                              ????????????:{' '}
                              {meet.Users.map(
                                user => user.id === meet.MeetOwnerId && user.nickname
                              )}
                            </div>
                            <div className="meet-button">
                              {meet.MeetOwnerId === me?.id ? (
                                <div className="owner-buttons">
                                  <button onClick={onClickModifyMeetButton(meet.id)}>
                                    ??????
                                  </button>
                                  <button onClick={onClickDeleteMeetButton(meet.id)}>
                                    ??????
                                  </button>
                                </div>
                              ) : (
                                <button onClick={onClickLeaveMeetButton(meet.id)}>
                                  ??????
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
                              <div>????????????</div>
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
              <div className="meet-name">????????? ??????</div>
              {notJoinedMeetList.length
                ? notJoinedMeetList.map((meet, i) => (
                    <div key={meet.id}>
                      <CardContainer number={i}>
                        <div className="card-left">
                          <div className="card-header">
                            <div className="meet-title">{meet.title}</div>
                          </div>
                          <div className="card-body">
                            <div className="meet-date">{meet.date}???</div>
                            <div className="meet-fee">?????????: {meet.fee}???</div>
                            <div
                              className="meet-members"
                              onClick={onClickMember(meet.id)}
                            >
                              ??????: {meet.Users.length} / {meet.members}???
                            </div>

                            <div className="meet-place" onClick={onClickPlace(meet.id)}>
                              ??????: {meet.place}
                            </div>
                            <div className="meet-owner">
                              ????????????:{' '}
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
                                  ????????????
                                </button>
                              ) : (
                                <button>????????????</button>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="card-right">
                          {currentMeet.includes(meet.id) ? (
                            <Map key={meet.id} address={meet.place} number={meet.id} />
                          ) : (
                            <div className="show-members">
                              <div>????????????</div>
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
        <div className="visitor-post">???????????? ????????? ??? ??? ????????????</div>
      )}
    </MeetContainer>
  );
}

export default memo(Meet);
