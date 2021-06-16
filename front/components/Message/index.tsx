import React from 'react';
import styled from 'styled-components';

interface MessageProps {
  text: string;
}

const MessageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/errorimage.png');
  background-position: center;
  background-repeat: repeat-x;
  background-size: 20%;

  .message-text {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Yeon Sung', cursive;
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    background: linear-gradient(#e1eec3, #f05053);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 1440px) {
      top: 35%;
    }
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
