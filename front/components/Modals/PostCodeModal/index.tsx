import { Button } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import DaumPostcode from 'react-daum-postcode';

interface PostModalProps {
  closePostModal: () => void;
  setPost: Dispatch<SetStateAction<string>>;
}

function PostModal({ closePostModal, setPost }: PostModalProps) {
  const handleComplete = (data: any) => {
    console.log(data);
    let fullAddress = `${data.sido} ${data.sigungu} ${data.bname}`;
    console.log(fullAddress);
    setPost(fullAddress);
    closePostModal();
  };

  const postCodeStyle = {
    width: '350px',
    height: '350px',
    border: '1px solid rgba(0, 0, 0, .3)',
  } as const;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#fff',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
      <Button
        style={{ marginTop: '1rem' }}
        type="primary"
        onClick={closePostModal}
      >
        닫기
      </Button>
    </div>
  );
}

export default PostModal;
