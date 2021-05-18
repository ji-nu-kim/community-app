import React from 'react';
import styled from 'styled-components';

interface MessageProps {
  text: string;
}

const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('./errorimage.png');
  background-repeat: no-repeat;
  background-position: center;

  .message-text {
    margin-bottom: 300px;
    font-family: 'Yeon Sung', cursive;
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(#8a2387, #e94057, #f27121);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Message({ text }: MessageProps) {
  return (
    <MessageContainer>
      <div className="message-text">{text}</div>
    </MessageContainer>
  );
}

export default Message;
