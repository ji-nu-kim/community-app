import React, { useEffect } from 'react';

interface MapProps {
  address: string;
  number: number;
}

function Map({ address, number }: MapProps) {
  useEffect(() => {
    let container = document.getElementById(`map${number}`);

    let geocoder = new (window as any).kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (results: any, status: any) {
      if (status === (window as any).kakao.maps.services.Status.OK) {
        let result = results[0];

        let options = {
          center: new (window as any).kakao.maps.LatLng(result.y, result.x),
          level: 5,
        };
        let map = new (window as any).kakao.maps.Map(container, options);

        let marker = new (window as any).kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);
        console.log(result.address_name);

        let iwContent = `<div style="padding:5px;"><a href="https://map.kakao.com/link/search/${result.address_name}" target="_blank" rel="noreferer">큰 지도 보기</a></div>`;
        let iwRemoveable = true;

        // 인포윈도우를 생성합니다
        let infowindow = new (window as any).kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        new (window as any).kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    });
  }, []);

  return (
    <div
      id={`map${number}`}
      style={{
        width: '100%',
        height: '100%',
      }}
    ></div>
  );
}

export default Map;
