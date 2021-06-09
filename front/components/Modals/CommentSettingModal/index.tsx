import { removeCommentRequestAction } from 'actions/actionPost';
import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer } from './styles';

interface CommentSettingModalProps {
  onMouserLeaveCommentSettingButton: () => void;
  setCurrentModifyComment: Dispatch<SetStateAction<number>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  setShowCommentSettingButton: Dispatch<SetStateAction<boolean>>;
  postId: number;
  commentId: number;
}

function CommentSettingModal({
  onMouserLeaveCommentSettingButton,
  setCurrentModifyComment,
  setShowCommentSettingButton,
  setEditMode,
  postId,
  commentId,
}: CommentSettingModalProps) {
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setShowCommentSettingButton(false);
  }, []);

  const onClickModifyButton = useCallback(() => {
    setCurrentModifyComment(commentId);
    setEditMode(prev => !prev);
  }, [commentId]);

  const onClickDeleteButton = useCallback(() => {
    if (confirm('댓글을 지우시겠습니까?')) {
      return dispatch(removeCommentRequestAction({ postId, commentId }));
    }
  }, []);

  return (
    <ModalContainer
      onMouseLeave={onMouserLeaveCommentSettingButton}
      onClick={onCloseModal}
    >
      <ul>
        <li onClick={onClickModifyButton}>수정</li>
        <li onClick={onClickDeleteButton}>삭제</li>
      </ul>
    </ModalContainer>
  );
}

export default memo(CommentSettingModal);
