import {
  removeCommentRequestAction,
  reportCommentRequestAction,
} from 'actions/actionPost';
import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer } from './styles';

interface CommentSettingModalProps {
  setCurrentModifyComment: Dispatch<SetStateAction<number>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  postId: number;
  commentId: number;
  commentOwnerId: number;
  communityUserId: number;
}

function CommentSettingModal({
  setCurrentModifyComment,
  setEditMode,
  postId,
  commentId,
  commentOwnerId,
  communityUserId,
}: CommentSettingModalProps) {
  const dispatch = useDispatch();
  const commentOwner = commentOwnerId === communityUserId;

  const onClickModifyButton = useCallback(() => {
    setCurrentModifyComment(commentId);
    setEditMode(prev => !prev);
  }, [commentId]);

  const onClickDeleteButton = useCallback(() => {
    if (confirm('댓글을 지우시겠습니까?')) {
      return dispatch(removeCommentRequestAction({ postId, commentId }));
    }
  }, [postId, commentId]);

  const onClickReportButton = useCallback(() => {
    const reason = prompt('신고하는 이유를 적어주세요');

    if (reason && communityUserId) {
      dispatch(
        reportCommentRequestAction({
          postId,
          commentId,
          reporter: communityUserId,
          reportedPerson: commentOwnerId,
          reason,
        })
      );
    }
  }, [commentOwnerId, communityUserId]);

  return (
    <ModalContainer>
      <ul>
        {commentOwner ? (
          <>
            <li onClick={onClickModifyButton}>수정</li>
            <li onClick={onClickDeleteButton}>삭제</li>
          </>
        ) : (
          <li onClick={onClickReportButton}>신고하기</li>
        )}
      </ul>
    </ModalContainer>
  );
}

export default memo(CommentSettingModal);
