import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import ImageInsert from 'components/ImageInsert';
import { RootStateInterface } from 'interfaces/RootState';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalContainer, ModalHeader, ModalFormContainer } from './styles';
import useInput from 'hooks/useInput';
import CategoryList from 'components/CategoryList';
import { changeProfileRequestAction } from 'actions/actionUser';

interface ProfileModifyModalProps {
  setProfileModifyModal: Dispatch<SetStateAction<boolean>>;
}

function ProfileModifyModal({
  setProfileModifyModal,
}: ProfileModifyModalProps) {
  const dispatch = useDispatch();
  const { me, imagePath } = useSelector(
    (state: RootStateInterface) => state.user
  );
  const [newNickname, onChangeNewNickname] = useInput<string>(
    me?.nickname || ''
  );

  const mainCategories = useSelector(
    (state: RootStateInterface) => state.community.mainCategories
  );

  const [categories, setCategories] = useState<string[]>(
    me?.Categories?.map(v => v.name) || []
  );

  const onCloseProfileModifyModal = useCallback(() => {
    setProfileModifyModal(false);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(
      changeProfileRequestAction({
        nickname: newNickname,
        profilePhoto: imagePath,
        category: categories,
      })
    );
  }, [imagePath, newNickname, categories]);

  return (
    <ModalContainer>
      <ModalHeader>
        <div className="modal-title">프로필수정</div>
        <div className="close-btn" onClick={onCloseProfileModifyModal}>
          <CloseCircleOutlined />
        </div>
      </ModalHeader>
      <ModalFormContainer>
        <Form onFinish={onSubmit} className="form">
          <div className="form-profile">
            <div className="profile-img">
              <label>프로필사진</label>
              <ImageInsert
                imagePath={imagePath}
                profilePhoto={me?.profilePhoto}
              />
            </div>
            <div className="profile-nickname">
              <label htmlFor="nickname">닉네임</label>
              <br />
              <input
                id="nickname"
                type="text"
                value={newNickname}
                onChange={onChangeNewNickname}
              />
            </div>
          </div>
          <div className="form-category">
            <label>
              관심사<span> (최대 5개까지 선택가능합니다)</span>
            </label>
            <CategoryList
              mainCategories={mainCategories}
              categories={categories}
              setCategories={setCategories}
            />
          </div>
          <div className="create-btn">
            <Button ghost htmlType="submit">
              수정하기
            </Button>
          </div>
        </Form>
      </ModalFormContainer>
    </ModalContainer>
  );
}

export default ProfileModifyModal;
