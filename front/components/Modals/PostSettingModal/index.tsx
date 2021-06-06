import { removePostRequestAction } from 'actions/actionPost';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer } from './styles';

interface PostSettingModalProps {
  onMouserLeaveMoreButton: () => void;
  postId: number;
  communityId: number;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

function PostSettingModal({
  onMouserLeaveMoreButton,
  postId,
  communityId,
  setEditMode,
}: PostSettingModalProps) {
  const dispatch = useDispatch();

  const onClickModifyButton = useCallback(() => {
    setEditMode(true);
  }, [setEditMode]);

  const onClickDeleteButton = useCallback(() => {
    return dispatch(removePostRequestAction({ postId, communityId }));
  }, [postId]);

  return (
    <ModalContainer onMouseLeave={onMouserLeaveMoreButton}>
      <ul>
        <li onClick={onClickModifyButton}>수정</li>
        <li onClick={onClickDeleteButton}>삭제</li>
      </ul>
    </ModalContainer>
  );
}

export default PostSettingModal;
