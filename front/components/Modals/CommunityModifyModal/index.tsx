import React, { Dispatch, SetStateAction, useCallback } from 'react';
import {
  ModalContainer,
  ModalHeader,
  ModalFormContainer,
  TextAreaContainer,
} from './styles';
import { CloseCircleOutlined } from '@ant-design/icons';
import Form from 'antd/lib/form/Form';
import { Button } from 'antd';
import ImageInsert from 'components/ImageInsert';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import useInput from 'hooks/useInput';
import { changeCommunityInfoRequestAction } from 'actions/actionCommunity';

interface CommunityModalProps {
  setCommunityModifyModal: Dispatch<SetStateAction<boolean>>;
}

function CommunityModal({ setCommunityModifyModal }: CommunityModalProps) {
  const dispatch = useDispatch();
  const { singleCommunity, imagePath } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const [description, onChangeDescription] = useInput<string>(
    singleCommunity?.description || ''
  );
  const [caution, onChangeCaution] = useInput<string>(
    singleCommunity?.caution || ''
  );
  const [requirement, onChangeRequirement] = useInput<string>(
    singleCommunity?.requirement || ''
  );

  const closeCommunityModal = useCallback(() => {
    setCommunityModifyModal(false);
  }, [setCommunityModifyModal]);

  const onSubmit = useCallback(() => {
    if (singleCommunity) {
      dispatch(
        changeCommunityInfoRequestAction({
          id: singleCommunity.id,
          caution,
          requirement,
          description,
          profilePhoto: imagePath,
        })
      );
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

export default CommunityModal;
