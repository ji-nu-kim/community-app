import { Button } from 'antd';
import React, { Dispatch, memo, SetStateAction } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const SearchAddressModalContainer = styled.div`
  width: 100%;
  height: 100%;
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

interface SearchAddressModalProps {
  closeSearchAddressModal: () => void;
  setCountry: Dispatch<SetStateAction<string>>;
  type: 'village' | 'road';
}

function SearchAddressModal({
  closeSearchAddressModal,
  setCountry,
  type,
}: SearchAddressModalProps) {
  const handleComplete = (data: any) => {
    if (type === 'village') {
      setCountry(`${data.sido} ${data.sigungu} ${data.bname}`);
    } else if (type === 'road') {
      setCountry(data.address);
    }

    closeSearchAddressModal();
  };

  const postCodeStyle = {
    width: '350px',
    height: '350px',
    border: '1px solid rgba(0, 0, 0, .3)',
  } as const;

  return (
    <SearchAddressModalContainer>
      <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
      <Button
        style={{ marginTop: '1rem' }}
        type="primary"
        onClick={closeSearchAddressModal}
      >
        닫기
      </Button>
    </SearchAddressModalContainer>
  );
}

export default memo(SearchAddressModal);
