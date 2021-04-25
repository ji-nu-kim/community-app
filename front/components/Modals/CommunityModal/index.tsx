import React, { Dispatch, SetStateAction, useCallback } from 'react';
import {
  ModalContainer,
  ModalHeader,
  InputContainer,
  TextAreaContainer,
  ModalForm,
} from './styles';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createCommunityValidation } from '../../../utils/yup';
import Form from 'antd/lib/form/Form';
import { Button } from 'antd';
import FormErrorMessage from 'components/FormErrorMessage';

type createCommunityType = {
  communityName: string;
  description: string;
};

interface CommunityModalProps {
  setCommunityModal: Dispatch<SetStateAction<boolean>>;
}

function CommunityModal({ setCommunityModal }: CommunityModalProps) {
  const dispatch = useDispatch();

  const { handleSubmit, errors, control } = useForm<createCommunityType>({
    resolver: yupResolver(createCommunityValidation),
    mode: 'onBlur',
  });

  const closeCommunityModal = useCallback(() => {
    setCommunityModal(false);
  }, [setCommunityModal]);

  const onSubmit = useCallback(
    handleSubmit((data: createCommunityType) => {
      console.log(1);
      console.log(data);
    }),
    []
  );

  return (
    <ModalContainer>
      <ModalHeader>
        <div className="modal-title">커뮤니티 만들기</div>
        <div className="close-btn" onClick={closeCommunityModal}>
          <CloseCircleOutlined />
        </div>
      </ModalHeader>
      <ModalForm>
        <Form onFinish={onSubmit} className="form">
          <InputContainer>
            <label htmlFor="communityName">커뮤니티이름</label>
            <br />
            <Controller
              as={<input />}
              type="text"
              name="communityName"
              control={control}
              placeholder="커뮤니티이름을 입력하세요"
              defaultValue=""
            />
            {errors.communityName?.message && (
              <FormErrorMessage errorMessage={errors.communityName.message} />
            )}
          </InputContainer>

          <TextAreaContainer>
            <label htmlFor="description">커뮤니티소개</label>
            <br />
            <Controller
              as={<textarea />}
              name="description"
              placeholder="최대 140글자까지 입력가능합니다"
              control={control}
              defaultValue=""
            />
            {errors.description?.message && (
              <FormErrorMessage errorMessage={errors.description.message} />
            )}
          </TextAreaContainer>
          <div className="create-btn">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              onClick={() => {
                setTimeout(() => {
                  setCommunityModal(false);
                }, 1000);
              }}
            >
              생성하기
            </Button>
          </div>
        </Form>
      </ModalForm>
    </ModalContainer>
  );
}

export default CommunityModal;
