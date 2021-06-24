import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import dynamic from 'next/dynamic';
import {
  ModalContainer,
  ModalHeader,
  ModalFormContainer,
  TextAreaContainer,
} from './styles';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import useInput from 'hooks/useInput';
import { changeCommunityInfoRequestAction } from 'actions/actionCommunity';

const ImageInsert = dynamic(() => import('components/ImageInsert'));
interface CommunityModalProps {
  setShowCommunityModifyModal: Dispatch<SetStateAction<boolean>>;
}

function CommunityModal({ setShowCommunityModifyModal }: CommunityModalProps) {
  const dispatch = useDispatch();
  const { singleCommunity, imagePath } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const [description, onChangeDescription] = useInput<string>(
    singleCommunity?.description || ''
  );
  const [caution, onChangeCaution] = useInput<string>(singleCommunity?.caution || '');
  const [requirement, onChangeRequirement] = useInput<string>(
    singleCommunity?.requirement || ''
  );

  const closeCommunityModal = useCallback(() => {
    setShowCommunityModifyModal(false);
  }, [setShowCommunityModifyModal]);

  const onSubmit = useCallback(() => {
    if (confirm('정보를 수정하시겠습니까?') && singleCommunity) {
      setTimeout(() => {
        return dispatch(
          changeCommunityInfoRequestAction({
            communityId: singleCommunity.id,
            caution,
            requirement,
            description,
            profilePhoto: imagePath,
          })
        );
      }, 3000);
    }
  }, [description, requirement, caution, imagePath, singleCommunity]);

  return (
    <ModalContainer>
      <ModalHeader>
        <div className="modal-title">커뮤니티 수정하기</div>
        <div className="close-btn" onClick={closeCommunityModal}>
          <CloseCircleOutlined />
        </div>
      </ModalHeader>
      <Form className="form" onFinish={onSubmit}>
        <ModalFormContainer>
          <div className="profile-img">
            <label>프로필사진</label>
            <ImageInsert
              imagePath={imagePath}
              profilePhoto={singleCommunity?.profilePhoto}
            />
          </div>
          <TextAreaContainer>
            <label>커뮤니티 소개</label>
            <textarea
              value={description}
              name="description"
              placeholder="최대 140글자까지 입력가능합니다"
              onChange={onChangeDescription}
            />
          </TextAreaContainer>
          <TextAreaContainer>
            <label>커뮤니티 주의사항</label>
            <textarea
              value={caution}
              name="caution"
              placeholder="최대 140글자까지 입력가능합니다"
              onChange={onChangeCaution}
            />
          </TextAreaContainer>
          <TextAreaContainer>
            <label>커뮤니티 가입조건</label>
            <textarea
              value={requirement}
              name="requirement"
              placeholder="최대 140글자까지 입력가능합니다"
              onChange={onChangeRequirement}
            />
          </TextAreaContainer>
          <div className="create-btn">
            <Button ghost htmlType="submit">
              수정하기
            </Button>
          </div>
        </ModalFormContainer>
      </Form>
    </ModalContainer>
  );
}

export default memo(CommunityModal);
