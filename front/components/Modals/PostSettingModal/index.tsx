import { removePostRequestAction, reportPostRequestAction } from 'actions/actionPost';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer } from './styles';

interface PostSettingModalProps {
  setCurrentModifyPost: Dispatch<SetStateAction<number>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  postId: number;
  communityId: number;
  postOwnerId: number;
  communityUserId: number;
}

function PostSettingModal({
  setCurrentModifyPost,
  setEditMode,
  postId,
  communityId,
  postOwnerId,
  communityUserId,
}: PostSettingModalProps) {
  const dispatch = useDispatch();
  const postOwner = postOwnerId === communityUserId;

  const onClickModifyButton = useCallback(() => {
    setCurrentModifyPost(postId);
    setEditMode(prev => !prev);
  }, [postId]);

  const onClickDeleteButton = useCallback(() => {
    if (confirm('게시글을 지우시겠습니까?')) {
      return dispatch(removePostRequestAction({ postId, communityId }));
    }
  }, []);

  const onClickReportButton = useCallback(() => {
    const reason = prompt('신고하는 이유를 적어주세요');

    if (reason && communityUserId) {
      dispatch(
        reportPostRequestAction({
          postId,
          reporter: communityUserId,
          reportedPerson: postOwnerId,
          reason,
        })
      );
    }
  }, [postOwnerId, communityUserId]);

  return (
    <ModalContainer>
      <ul>
        {postOwner ? (
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

export default PostSettingModal;
