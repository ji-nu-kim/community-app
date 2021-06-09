import { removePostRequestAction } from 'actions/actionPost';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer } from './styles';

interface PostSettingModalProps {
  onMouserLeavePostSettingButton: () => void;
  setCurrentModifyPost: Dispatch<SetStateAction<number>>;
  setShowPostSettingButton: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  postId: number;
  communityId: number;
}

function PostSettingModal({
  onMouserLeavePostSettingButton,
  setCurrentModifyPost,
  setShowPostSettingButton,
  setEditMode,
  postId,
  communityId,
}: PostSettingModalProps) {
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setShowPostSettingButton(false);
  }, []);

  const onClickModifyButton = useCallback(() => {
    setCurrentModifyPost(postId);
    setEditMode(prev => !prev);
  }, [postId]);

  const onClickDeleteButton = useCallback(() => {
    if (confirm('게시글을 지우시겠습니까?')) {
      return dispatch(removePostRequestAction({ postId, communityId }));
    }
  }, []);

  return (
    <ModalContainer onMouseLeave={onMouserLeavePostSettingButton} onClick={onCloseModal}>
      <ul>
        <li onClick={onClickModifyButton}>수정</li>
        <li onClick={onClickDeleteButton}>삭제</li>
      </ul>
    </ModalContainer>
  );
}

export default PostSettingModal;
