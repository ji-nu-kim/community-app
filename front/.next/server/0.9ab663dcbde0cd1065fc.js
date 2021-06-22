exports.ids = [0];
exports.modules = {

/***/ "yNRX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5jdO");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_daum_postcode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);






const SearchAddressModalContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SearchAddressModal__SearchAddressModalContainer",
  componentId: "hp5yq4-0"
})(["width:100%;height:100%;backdrop-filter:saturate(180%) blur(12px);position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;flex-direction:column;z-index:100;"]);

function SearchAddressModal({
  closeSearchAddressModal,
  setCountry,
  type
}) {
  const handleComplete = data => {
    if (type === 'village') {
      setCountry(`${data.sido} ${data.sigungu} ${data.bname}`);
    } else if (type === 'road') {
      setCountry(data.address);
    }

    closeSearchAddressModal();
  };

  const postCodeStyle = {
    width: '350px',
    height: '350px',
    border: '1px solid rgba(0, 0, 0, .3)'
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(SearchAddressModalContainer, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_daum_postcode__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: postCodeStyle,
      onComplete: handleComplete
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        marginTop: '1rem'
      },
      type: "primary",
      onClick: closeSearchAddressModal,
      children: "\uB2EB\uAE30"
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(SearchAddressModal));

/***/ })

};;