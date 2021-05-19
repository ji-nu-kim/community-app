import { Button } from 'antd';
import React, { Dispatch, memo, SetStateAction } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const CountryModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: saturate(180%) blur(12px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
`;

interface CountryModalProps {
  closeCountryModal: () => void;
  setCountry: Dispatch<SetStateAction<string>>;
}

function CountryModal({ closeCountryModal, setCountry }: CountryModalProps) {
  const handleComplete = (data: any) => {
    let fullAddress = `${data.sido} ${data.sigungu} ${data.bname}`;
    setCountry(fullAddress);
    closeCountryModal();
  };

  const postCodeStyle = {
    width: '350px',
    height: '350px',
    border: '1px solid rgba(0, 0, 0, .3)',
  } as const;

  return (
    <CountryModalContainer>
      <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
      <Button
        style={{ marginTop: '1rem' }}
        type="primary"
        onClick={closeCountryModal}
      >
        닫기
      </Button>
    </CountryModalContainer>
  );
}

export default memo(CountryModal);
