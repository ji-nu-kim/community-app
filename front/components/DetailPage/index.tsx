import { CameraOutlined } from '@ant-design/icons';
import { ICommunity } from 'interfaces/db';
import React, { useCallback, useState } from 'react';
import {
  GridContainer,
  CommunityDetail,
  DetailHeader,
  DetailMain,
  DetailSub,
} from './styles';

interface DetailPageProps {
  singleCommunity: ICommunity;
}

function DetailPage({ singleCommunity }: DetailPageProps) {
  const [collapse, setCollapse] = useState(false);

  const onChangeCollapse = useCallback(() => {
    setCollapse(prev => !prev);
  }, []);

  return (
    <GridContainer className={collapse ? 'collapse' : 'null'}>
      <CommunityDetail>
        <DetailHeader>
          <h2>{singleCommunity.name}</h2>
          <div className="btn-wrapper">
            <div
              className="btn btn-red"
              title="축소"
              onClick={onChangeCollapse}
            ></div>
            <div className="btn btn-yellow" title="설정"></div>
            <div className="btn btn-green" title="탈퇴"></div>
          </div>
        </DetailHeader>
        {collapse ? null : (
          <>
            <DetailMain>
              <div className="detail-image">
                {singleCommunity.profilePhoto ? (
                  <img src={singleCommunity.profilePhoto} alt="profilephoto" />
                ) : (
                  <div>
                    <span>
                      <CameraOutlined />
                    </span>
                    사진을 올려보세요
                  </div>
                )}
              </div>
              <div>2</div>
              <div className="main3">3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </DetailMain>
            <DetailSub>3</DetailSub>
          </>
        )}
      </CommunityDetail>
      <div>2</div>
    </GridContainer>
  );
}

export default DetailPage;
