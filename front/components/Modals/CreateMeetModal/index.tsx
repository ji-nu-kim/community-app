import { CloseCircleOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import FormErrorMessage from 'components/Message/FormErrorMessage';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { createMeetValidation } from 'utils/yup';
import { ModalContainer, ModalHeader, ModalBody, InputContainer } from './styles';
import SearchAddressModal from 'components/Modals/SearchAddressModal';
import { day } from 'utils/day';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addMeetRequestAction } from 'actions/actionCommunity';

type CreateMeetType = {
  title: string;
  fee: number;
  members: number;
  date: Date;
};

interface CreateMeetModalProps {
  setShowCreateMeetModal: Dispatch<SetStateAction<boolean>>;
  communityId: number;
}

function CreateMeetModal({ setShowCreateMeetModal, communityId }: CreateMeetModalProps) {
  const dispatch = useDispatch();
  const [place, setPlace] = useState('');
  const [placeError, setPlaceError] = useState(false);
  const [showSearchAddressModal, setShowSearchAddressModal] = useState(false);
  const { handleSubmit, errors, control } = useForm<CreateMeetType>({
    resolver: yupResolver(createMeetValidation),
    mode: 'onBlur',
  });

  const closeCreateMeetModal = useCallback(() => {
    setShowCreateMeetModal(false);
  }, []);

  const openSearchAddressModal = useCallback(() => {
    setPlaceError(false);
    setShowSearchAddressModal(true);
  }, []);

  const closeSearchAddressModal = useCallback(() => {
    setShowSearchAddressModal(false);
  }, []);

  const onSubmit = useCallback(
    handleSubmit((data: CreateMeetType) => {
      if (place === '') {
        return setPlaceError(true);
      }
      const d = new Date(data.date);
      const date = moment(d).locale('ko').format('LLL');

      dispatch(
        addMeetRequestAction({
          title: data.title,
          fee: data.fee,
          members: data.members,
          date,
          place,
          communityId,
        })
      );

      setShowSearchAddressModal(false);
    }),
    [place]
  );

  return (
    <ModalContainer>
      <ModalHeader>
        <div className="modal-title">모임만들기</div>
        <div className="close-button" onClick={closeCreateMeetModal}>
          <CloseCircleOutlined />
        </div>
      </ModalHeader>
      <ModalBody>
        <Form onFinish={onSubmit} className="form">
          <InputContainer>
            <label htmlFor="title">모임명</label>
            <br />
            <Controller
              as={<input />}
              type="text"
              name="title"
              control={control}
              placeholder="모임 이름을 입력하세요"
              defaultValue=""
              maxLength="15"
            />
            {errors.title?.message && (
              <FormErrorMessage errorMessage={errors.title.message} />
            )}
          </InputContainer>

          <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
            <InputContainer>
              <label htmlFor="fee">참가비</label>
              <br />
              <Controller
                as={<input />}
                type="number"
                name="fee"
                control={control}
                defaultValue="0"
              />
              {errors.fee?.message && (
                <FormErrorMessage errorMessage={errors.fee.message} />
              )}
            </InputContainer>

            <InputContainer>
              <label htmlFor="members">멤버수</label>
              <br />
              <Controller
                as={<input />}
                type="number"
                name="members"
                defaultValue="1"
                control={control}
              />
              {errors.members?.message && (
                <FormErrorMessage errorMessage={errors.members.message} />
              )}
            </InputContainer>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <InputContainer>
              <label htmlFor="date">모임날짜</label>
              <br />
              <Controller
                as={<input />}
                type="datetime-local"
                name="date"
                control={control}
                defaultValue={day}
                style={{ cursor: 'pointer' }}
              />
              {errors.date?.message && (
                <FormErrorMessage errorMessage={errors.date.message} />
              )}
            </InputContainer>

            <InputContainer>
              <label htmlFor="country">모임장소</label>
              <br />
              <input
                style={{ cursor: 'pointer' }}
                value={place}
                readOnly
                placeholder="도로명 주소를 입력하세요"
                onClick={openSearchAddressModal}
              />
              {placeError && <FormErrorMessage errorMessage="주소를 입력하세요" />}
            </InputContainer>
          </div>

          <div className="create-button">
            <Button ghost htmlType="submit">
              만들기
            </Button>
          </div>
        </Form>
      </ModalBody>
      {showSearchAddressModal && (
        <SearchAddressModal
          closeSearchAddressModal={closeSearchAddressModal}
          setCountry={setPlace}
          type="road"
        />
      )}
    </ModalContainer>
  );
}

export default CreateMeetModal;
