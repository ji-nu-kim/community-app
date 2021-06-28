exports.ids = [35];
exports.modules = {

/***/ "NLB4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Map({
  address,
  number
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let container = document.getElementById(`map${number}`);
    let geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (results, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        let result = results[0];
        let options = {
          center: new window.kakao.maps.LatLng(result.y, result.x),
          level: 5
        };
        let map = new window.kakao.maps.Map(container, options);
        let marker = new window.kakao.maps.Marker({
          position: map.getCenter()
        });
        marker.setMap(map);
        let iwContent = `<div style="padding:5px;"><a href="https://map.kakao.com/link/search/${result.address_name}" target="_blank" rel="noreferer">큰 지도 보기</a></div>`;
        let iwRemoveable = true;
        let infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable
        });
        new window.kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    id: `map${number}`,
    style: {
      width: '100%',
      height: '100%'
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

};;