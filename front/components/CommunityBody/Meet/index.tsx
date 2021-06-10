import { PlusOutlined } from '@ant-design/icons';
import { ICommunity } from 'interfaces/db';
import { RootStateInterface } from 'interfaces/RootState';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { MakeMeetButton, MeetContainer } from './styles';

interface MeeetProps {
  singleCommunity: ICommunity;
}

function Meet({ singleCommunity }: MeeetProps) {
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const communityOwner = singleCommunity.OwnerId === me?.id;

  return (
    <MeetContainer>
      <div className="joined-meet">
        <div>참가한 모임</div>
        <div className="meet-container">
          <div className="meet-card">
            <div className="title">주말 빡세게 농구</div>
            <div className="body">
              <div className="body-left">
                <div>구리농신</div>
                <div>왕숙체육공원</div>
                <div>6월 8일</div>
              </div>
              <div className="body-right">
                <div className="right-first">
                  <div>
                    참가비 <br /> 3000원
                  </div>
                  <div>
                    인원 <br /> 1 / 6명
                  </div>
                </div>
                <button>참가하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-meet">새로운 모임</div>
      {communityOwner && (
        <MakeMeetButton>
          <PlusOutlined />
        </MakeMeetButton>
      )}
    </MeetContainer>
  );
}

export default Meet;
