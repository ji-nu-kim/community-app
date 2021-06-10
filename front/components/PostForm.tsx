import {
  addPostRequestAction,
  removeImage,
  uploadImagesRequestAction,
} from '../actions/actionPost';
import useInput from '../hooks/useInput';
import { Button, Form, Input } from 'antd';
import React, { ChangeEvent, memo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStateInterface } from '../interfaces/RootState';
import { CloseCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyleButton = styled(Button)`
  background: none;
  border: none;
  position: absolute;
  margin-left: -35px;
  color: #fff;
  margin-top: -5px;

  :hover {
    background: none;
    color: #039be5;
  }
`;

function PostForm() {
  const router = useRouter();
  const { imagePaths, addPostDone } = useSelector(
    (state: RootStateInterface) => state.post
  );
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput<string>('');

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성해주세요');
    }
    const formData = new FormData();
    imagePaths.forEach(p => formData.append('image', p));
    formData.append('content', text);
    return dispatch(
      addPostRequestAction({ formData, communityId: Number(router.query.id) })
    );
  }, [text, imagePaths]);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const onClickImageUpload = useCallback(() => {
    imageInputRef.current?.click();
  }, [imageInputRef.current]);

  const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch(uploadImagesRequestAction(imageFormData));
  }, []);

  const onRemoveImage = useCallback(
    (id: number) => () => {
      dispatch(removeImage(id));
    },
    []
  );

  return (
    <Form
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      {imagePaths && (
        <div
          style={{
            display: 'flex',
            marginBottom: '1rem',
          }}
        >
          {imagePaths.map((v, i) => (
            <div key={v} style={{ marginRight: '1rem', background: 'rgba(0,0,0,.7)' }}>
              <img
                src={`http://localhost:3065/${v}`}
                style={{ width: '100px' }}
                alt={v}
              />
              <StyleButton onClick={onRemoveImage(i)}>
                <CloseCircleOutlined />
              </StyleButton>
            </div>
          ))}
        </div>
      )}
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="글을 작성하세요"
        style={{
          color: '#fff',
          background: 'rgba(0, 0, 0, 0.4)',
          border: 'none',
          resize: 'none',
          height: '70px',
        }}
      />
      <div>
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInputRef}
          onChange={onChangeImages}
        />
        <div
          style={{
            textAlign: 'end',
            marginTop: '0.5rem',
          }}
        >
          <Button onClick={onClickImageUpload}>업로드</Button>
          <Button style={{ marginLeft: '0.5rem' }} type="primary" htmlType="submit">
            올리기
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default memo(PostForm);
