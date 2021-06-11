import { PlusOutlined } from '@ant-design/icons';
import { ICommunity } from 'interfaces/db';
import { RootStateInterface } from 'interfaces/RootState';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { MakeMeetButton, MeetContainer, CardContainer } from './styles';
import CreateMeetModal from 'components/Modals/CreateMeetModal';
import Map from 'components/Map';

interface MeeetProps {
  singleCommunity: ICommunity;
}

function Meet({ singleCommunity }: MeeetProps) {
  const [showCreateMeetModal, setShowCreateMeetModal] = useState(false);
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const communityOwner = singleCommunity.OwnerId === me?.id;

  const onClickCreateMeetButton = useCallback(() => {
    setShowCreateMeetModal(true);
  }, []);

  return (
    <MeetContainer>
      <div className="joined-meet">
        <div>참가한 모임</div>
        {/* 유저 정보에서 갖고 오는게 빠를 것 같다 */}
      </div>
      <div className="new-meet">
        <div>새로운 모임</div>
        {singleCommunity.Meets.length
          ? singleCommunity.Meets.map((meet, i) => (
              <div key={meet.id}>
                <CardContainer number={i}>
                  <div className="card-left">
                    <div className="card-header">
                      <div className="meet-title">{meet.title}</div>
                    </div>
                    <div className="card-body">
                      <div className="meet-date">{meet.date}시</div>
                      <div className="meet-fee">참가비: {meet.fee}원</div>
                      <div className="meet-members">
                        인원: {meet.Users.length} / {meet.members}명
                      </div>
                      <div className="meet-place">장소: {meet.place}</div>
                      <div className="meet-owner">
                        모임리더:{' '}
                        {meet.Users.map(
                          user => user.id === meet.MeetOwnerId && user.nickname
                        )}
                      </div>
                      <div className="meet-button">
                        <button>참가하기</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-right">
                    <Map key={meet.id} address={meet.place} number={meet.id} />
                  </div>
                </CardContainer>
              </div>
            ))
          : null}
      </div>

      {communityOwner && (
        <MakeMeetButton onClick={onClickCreateMeetButton}>
          <PlusOutlined />
        </MakeMeetButton>
      )}
      {showCreateMeetModal && (
        <CreateMeetModal
          setShowCreateMeetModal={setShowCreateMeetModal}
          communityId={singleCommunity.id}
        />
      )}
    </MeetContainer>
  );
}

export default Meet;
