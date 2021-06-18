import { CloseCircleOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import FormErrorMessage from 'components/Message/FormErrorMessage';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { createMeetValidation } from 'utils/yup';
import { ModalContainer, ModalHeader, ModalBody, InputContainer } from './styles';
import SearchAddressModal from 'components/Modals/SearchAddressModal';
import { fromMomentToDate } from 'utils/day';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { IMeet } from 'interfaces/db';
import { modifyMeetRequestAction } from 'actions/actionCommunity';

type CreateMeetType = {
  title: string;
  fee: number;
  members: number;
  date: Date;
};

interface ModifyMeetModalProps {
  setShowModifyMeetModal: Dispatch<SetStateAction<boolean>>;
  communityId: number;
  meetInfo: IMeet | undefined;
}

function ModifyMeetModal({
  setShowModifyMeetModal,
  communityId,
  meetInfo,
}: ModifyMeetModalProps) {
  const dispatch = useDispatch();
  const [place, setPlace] = useState(meetInfo?.place as string);
  const [placeError, setPlaceError] = useState(false);
  const [showSearchAddressModal, setShowSearchAddressModal] = useState(false);
  const { handleSubmit, errors, control } = useForm<CreateMeetType>({
    resolver: yupResolver(createMeetValidation),
    mode: 'onBlur',
  });

  const closeModifyMeetModal = useCallback(() => {
    setShowModifyMeetModal(false);
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
        modifyMeetRequestAction({
          communityId,
          meetId: meetInfo?.id as number,
          fee: data.fee,
          date,
          members: data.members,
          title: data.title,
          place,
        })
      );
      setShowSearchAddressModal(false);
    }),
    [place, communityId, meetInfo]
  );

  if (!meetInfo) {
    return <div>잠시만 기다려주세요</div>;
  }

  return (
    <ModalContainer>
      <ModalHeader>
        <div className="modal-title">모임수정하기</div>
        <div className="close-button" onClick={closeModifyMeetModal}>
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
              defaultValue={meetInfo.title}
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
                defaultValue={meetInfo.fee}
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
                min={meetInfo.Users.length}
                defaultValue={meetInfo.members}
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
                defaultValue={fromMomentToDate(meetInfo.date)}
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

export default ModifyMeetModal;
