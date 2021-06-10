import { CloseCircleOutlined } from '@ant-design/icons';
import { updateCommentRequestAction } from 'actions/actionPost';
import useInput from 'hooks/useInput';
import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer, ModalHeader, ModalBody } from './styles';

interface CommentEditModalProps {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  setCurrentModifyComment: Dispatch<SetStateAction<number>>;
  currentCommentText: string;
  postId: number;
  commentId: number;
}

function CommentEditModal({
  setEditMode,
  setCurrentModifyComment,
  currentCommentText,
  postId,
  commentId,
}: CommentEditModalProps) {
  const dispatch = useDispatch();
  const [content, onChangeContent] = useInput<string>(currentCommentText || '');

  const onCloseCommentEditModal = useCallback(() => {
    setCurrentModifyComment(0);
    setEditMode(false);
  }, []);

  const onClickModify = useCallback(() => {
    if (confirm('댓글을 수정하시겠습니까?')) {
      dispatch(updateCommentRequestAction({ postId, commentId, content }));
      setEditMode(false);
    }
  }, [content]);

  return (
    <ModalContainer>
      <ModalHeader>
        <div className="modal-title">댓글 수정</div>
        <div className="close-button" onClick={onCloseCommentEditModal}>
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

export default memo(CommentEditModal);
