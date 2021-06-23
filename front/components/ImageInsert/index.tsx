import React, { ChangeEvent, memo, useCallback, useRef } from 'react';
import { CameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';
import { removeImage, uploadImageRequestAction } from 'actions/actionUser';
import { ProfileImgContainer } from './styles';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import {
  removeCommunityImage,
  uploadCommunityImageRequestAction,
} from 'actions/actionCommunity';

interface ImageInsertProps {
  imagePath: string[];
  profilePhoto: string | undefined;
}

function ImageInsert({ imagePath, profilePhoto }: ImageInsertProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { uploadImageDone } = useSelector((state: RootStateInterface) => state.user);
  const { uploadCommunityImageDone } = useSelector(
    (state: RootStateInterface) => state.community
  );

  const onClickImageUpload = useCallback(() => {
    const route = router.route.split('/')[1];
    if (route === 'profile' && !uploadImageDone) {
      imageInputRef.current?.click();
    } else if (route === 'community' && !uploadCommunityImageDone) {
      imageInputRef.current?.click();
    }
  }, [imageInputRef.current, uploadImageDone, uploadCommunityImageDone]);

  const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const route = router.route.split('/')[1];
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, f => {
        imageFormData.append('image', f);
      });
      if (route === 'profile') {
        return dispatch(uploadImageRequestAction(imageFormData));
      } else if (route === 'community') {
        return dispatch(uploadCommunityImageRequestAction(imageFormData));
      }
    }
  }, []);

  const onRemoveImage = useCallback(() => {
    const route = router.route.split('/')[1];
    if (imagePath.length) {
      if (route === 'profile') {
        return dispatch(removeImage());
      } else if (route === 'community') {
        return dispatch(removeCommunityImage());
      }
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
        <Button onClick={onClickImageUpload} shape="circle" className="img-input-btn">
          {imagePath.length ? (
            <>
              <img
                width="100"
                height="100"
                src={imagePath[0].replace(/\/resize\//, '/original/')}
                alt="profileimage"
              />
              <div onClick={onRemoveImage} className="img-delete-btn">
                지우기
              </div>
            </>
          ) : profilePhoto ? (
            <img width="100" height="100" src={profilePhoto} alt="profileimage" />
          ) : (
            <CameraOutlined className="img-input-icon" />
          )}
        </Button>
      </div>
    </ProfileImgContainer>
  );
}

export default memo(ImageInsert);
