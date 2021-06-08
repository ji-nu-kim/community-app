import { CloseCircleOutlined } from '@ant-design/icons';
import { updatePostRequestAction } from 'actions/actionPost';
import useInput from 'hooks/useInput';
import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer, ModalHeader, ModalBody } from './styles';

interface PostEditModalProps {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  setCurrentModifyPost: Dispatch<SetStateAction<number>>;
  currentPostText: string;
  postId: number;
  communityId: number;
}

function PostEditModal({
  setEditMode,
  setCurrentModifyPost,
  currentPostText,
  postId,
  communityId,
}: PostEditModalProps) {
  const dispatch = useDispatch();

  const [content, onChangeContent] = useInput<string>(currentPostText || '');

  const onClosePostEditModal = useCallback(() => {
    setCurrentModifyPost(0);
    setEditMode(false);
  }, []);

  const onClickModify = useCallback(() => {
    if (confirm('게시글을 수정하시겠습니까?')) {
      dispatch(updatePostRequestAction({ content, postId, communityId }));
      setEditMode(false);
    }
  }, [content]);

  return (
    <ModalContainer>
      <ModalHeader>
        <div className="modal-title">포스트 수정</div>
        <div className="close-button" onClick={onClosePostEditModal}>
          <CloseCircleOutlined />
        </div>
      </ModalHeader>
      <ModalBody>
        <div>
          <textarea onChange={onChangeContent} value={content} />
        </div>
        <div className="modify-button">
          <button onClick={onClickModify}>수정하기</button>
        </div>
      </ModalBody>
    </ModalContainer>
  );
}

export default memo(PostEditModal);
