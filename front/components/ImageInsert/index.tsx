import React, { ChangeEvent, useCallback, useRef } from 'react';
import { CameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import { removeImage, uploadImageRequestAction } from 'actions/actionUser';
import { ProfileImgContainer } from './styles';
import { Button } from 'antd';

function ImageInsert() {
  const dispatch = useDispatch();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { imagePath, uploadImageDone, me } = useSelector(
    (state: RootStateInterface) => state.user
  );

  const onClickImageUpload = useCallback(() => {
    if (!uploadImageDone) {
      imageInputRef.current?.click();
    }
  }, [imageInputRef.current, uploadImageDone]);

  const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, f => {
        imageFormData.append('image', f);
      });
      dispatch(uploadImageRequestAction(imageFormData));
    }
  }, []);

  const onRemoveImage = useCallback(() => {
    if (imagePath.length) {
      return dispatch(removeImage());
    }
  }, [imagePath]);

  return (
    <ProfileImgContainer>
      <div>
        <input
          type="file"
          name="image"
          hidden
          ref={imageInputRef}
          onChange={onChangeImages}
        />
        <Button
          onClick={onClickImageUpload}
          shape="circle"
          className="img-input-btn"
        >
          {imagePath.length ? (
            <>
              <img
                width="100"
                height="100"
                src={`http://localhost:3065/${imagePath[0]}`}
                alt="profileimage"
              />
              <div onClick={onRemoveImage} className="img-delete-btn">
                지우기
              </div>
            </>
          ) : me?.profilePhoto ? (
            <img
              width="100"
              height="100"
              src={`http://localhost:3065/${me.profilePhoto}`}
              alt="profileimage"
            />
          ) : (
            <CameraOutlined className="img-input-icon" />
          )}
        </Button>
      </div>
    </ProfileImgContainer>
  );
}

export default ImageInsert;
