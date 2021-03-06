import { CloseCircleOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import { createMeetValidation } from 'utils/yup';
import { ModalContainer, ModalHeader, ModalBody, InputContainer } from './styles';
import { fromMomentToDate } from 'utils/day';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { IMeet } from 'interfaces/db';
import { modifyMeetRequestAction } from 'actions/actionCommunity';

const SearchAddressModal = dynamic(() => import('components/Modals/SearchAddressModal'));
const FormErrorMessage = dynamic(() => import('components/Message/FormErrorMessage'));

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
    return <div>????????? ??????????????????</div>;
  }

  return (
    <ModalContainer>
      <ModalHeader>
        <div className="modal-title">??????????????????</div>
        <div className="close-button" onClick={closeModifyMeetModal}>
          <CloseCircleOutlined />
        </div>
      </ModalHeader>
      <ModalBody>
        <Form onFinish={onSubmit} className="form">
          <InputContainer>
            <label htmlFor="title">?????????</label>
            <br />
            <Controller
              as={<input />}
              type="text"
              name="title"
              control={control}
              placeholder="?????? ????????? ???????????????"
              defaultValue={meetInfo.title}
              maxLength="15"
            />
            {errors.title?.message && (
              <FormErrorMessage errorMessage={errors.title.message} />
            )}
          </InputContainer>

          <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
            <InputContainer>
              <label htmlFor="fee">?????????</label>
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
              <label htmlFor="members">?????????</label>
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
              <label htmlFor="date">????????????</label>
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
              <label htmlFor="country">????????????</label>
              <br />
              <input
                style={{ cursor: 'pointer' }}
                value={place}
                readOnly
                placeholder="????????? ????????? ???????????????"
                onClick={openSearchAddressModal}
              />
              {placeError && <FormErrorMessage errorMessage="????????? ???????????????" />}
            </InputContainer>
          </div>

          <div className="create-button">
            <Button ghost htmlType="submit">
              ?????????
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
