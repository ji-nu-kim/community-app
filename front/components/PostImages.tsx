import { PlusOutlined } from '@ant-design/icons';
import React from 'react';

interface PostImagesProps {
  images: { src: string }[];
}

function PostImages({ images }: PostImagesProps) {
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
        />
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: '50%', display: 'inline-block' }}
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
        />
        <img
          role="presentation"
          style={{ width: '50%', display: 'inline-block' }}
          src={`http://localhost:3065/${images[1].src}`}
          alt={images[1].src}
        />
      </>
    );
  }

  return (
    <>
      <div>
        <img
          role="presentation"
          width="50%"
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
        />
        <div
          role="presetation"
          style={{
            display: 'inline-block',
            width: '50%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}개의 사진 더보기
        </div>
      </div>
    </>
  );
}

export default PostImages;
