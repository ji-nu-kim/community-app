import { Form, Input, Button } from 'antd';
import React, { memo, useCallback, useEffect } from 'react';
import { addCommentRequestAction } from '../actions/actionPost';
import useInput from '../hooks/useInput';
import { RootStateInterface } from '../interfaces/RootState';
import { useDispatch, useSelector } from 'react-redux';

interface CommentFormProps {
  postId: number;
}

function CommentForm({ postId }: CommentFormProps) {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const { addCommentDone } = useSelector((state: RootStateInterface) => state.post);
  const [comment, onChangeComment, setComment] = useInput<string>('');

  useEffect(() => {
    if (addCommentDone) {
      setComment('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    if (!comment.trim() || !comment) {
      alert('댓글을 입력하세요');
      return;
    }

    if (me) {
      return dispatch(
        addCommentRequestAction({
          comment,
          postId,
        })
      );
    }
  }, [comment, postId, me]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item
        style={{
          marginTop: '0.5rem',
        }}
      >
        <Input.TextArea
          value={comment}
          onChange={onChangeComment}
          rows={4}
          placeholder="댓글을 작성하세요"
          style={{
            background: 'rgba(0, 0, 0, .4)',
            border: 'none',
            color: '#fff',
            resize: 'none',
            height: '70px',
          }}
        />
        <Button type="primary" htmlType="submit" style={{ marginTop: '.5rem' }}>
          등록
        </Button>
      </Form.Item>
    </Form>
  );
}

export default memo(CommentForm);
