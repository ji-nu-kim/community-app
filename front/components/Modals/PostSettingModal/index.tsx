import { removePostRequestAction } from 'actions/actionPost';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer } from './styles';

interface PostSettingModalProps {
  onMouserLeaveMoreButton: () => void;
  setCurrentModifyPost: Dispatch<SetStateAction<number>>;
  postId: number;
  communityId: number;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

function PostSettingModal({
  onMouserLeaveMoreButton,
  setCurrentModifyPost,
  postId,
  communityId,
  setEditMode,
}: PostSettingModalProps) {
  const dispatch = useDispatch();

  const onClickModifyButton = useCallback(() => {
    setCurrentModifyPost(postId);
    setEditMode(true);
  }, [postId]);

  const onClickDeleteButton = useCallback(() => {
    if (confirm('게시글을 지우시겠습니까?')) {
      return dispatch(removePostRequestAction({ postId, communityId }));
    }
  }, []);

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
