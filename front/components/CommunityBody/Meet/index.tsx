import { PlusOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { MakeMeetButton, MeetContainer } from './styles';

function Meet() {
  const meets = [1, 2, 3, 4, 5, 6, 7];

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
      <div className="new-meet">
        <div>새로운 모임</div>
        {meets.map(meet => (
          <div key={meet} className="meet-container">
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
        ))}
      </div>
      {/* <MakeMeetButton>
        <PlusOutlined />
      </MakeMeetButton> */}
    </MeetContainer>
  );
}

export default Meet;
