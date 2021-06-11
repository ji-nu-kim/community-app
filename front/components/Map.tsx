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
        console.log(result);

        let iwContent = `<div><a href="https://map.kakao.com/link/search/${result.address_name}" target="_blank">큰 지도 보기</a></div>`;
        let infoWindow = new (window as any).kakao.maps.InfoWindow({
          content: iwContent,
          position: map.getCenter(),
        });
        infoWindow.open(map, marker);
      }
    });
  }, [address]);

  return (
    <div
      id={`map${number}`}
      style={{
        width: '100%',
        height: '100%',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
      }}
    ></div>
  );
}

export default Map;
