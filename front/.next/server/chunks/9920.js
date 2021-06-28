exports.id = 9920;
exports.ids = [9920];
exports.modules = {

/***/ 9920:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Modals_ShowCommunityUserModal; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/stylesUtil.tsx
var stylesUtil = __webpack_require__(8502);
;// CONCATENATED MODULE: ./components/Modals/ShowCommunityUserModal/styles.tsx


const ModalExternal = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalExternal",
  componentId: "sc-1xyicst-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;"]);
const ModalContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "sc-1xyicst-1"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;width:600px;height:500px;background:rgba(0,0,0,0.7);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);display:grid;grid-template-rows:44px auto;label{color:#e4e4e4;}"]);
const ModalHeader = /*#__PURE__*/external_styled_components_default().header.withConfig({
  displayName: "styles__ModalHeader",
  componentId: "sc-1xyicst-2"
})(["display:flex;color:#e4e4e4;font-weight:bold;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.1);border-bottom:1px solid rgba(255,255,255,0.1);.modal-title{margin-left:1rem;}.close-btn{margin-right:1rem;cursor:pointer;:hover{color:coral;animation:", " 0.5s linear infinite;}}"], stylesUtil/* ColorAni */.w);
const ModalBody = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalBody",
  componentId: "sc-1xyicst-3"
})(["padding:1rem;display:flex;flex-wrap:wrap;align-content:flex-start;overflow:auto;.user-container{display:flex;flex-direction:column;align-items:center;border:2px solid rgba(255,255,255,0.3);border-radius:10px;padding:0.5rem;margin-bottom:1rem;margin-right:1rem;:hover{border:2px solid #039be5;background:rgba(0,0,0,0.1);}.user-name{padding:0.25rem;display:flex;align-items:center;img{border-radius:50%;object-fit:cover;}.fake-image{width:24px;height:24px;background:rgba(255,255,255,0.5);border-radius:50%;display:flex;justify-content:center;align-items:center;color:#fff;}.user-nickname{margin-left:4px;font-weight:bold;color:#b3b3b3;}}.user-country{padding:0.25rem;color:#039be5;font-size:0.75rem;}}"]);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
;// CONCATENATED MODULE: ./components/Modals/ShowCommunityUserModal/index.tsx






function ShowCommunityUserModal({
  setShowCommunityUserModal,
  singleCommunity
}) {
  const closeShowCommunityUserModal = (0,external_react_.useCallback)(() => {
    setShowCommunityUserModal(false);
  }, [setShowCommunityUserModal]);
  return /*#__PURE__*/jsx_runtime_.jsx(ModalExternal, {
    onClick: closeShowCommunityUserModal,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalContainer, {
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalHeader, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "modal-title",
          children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uD68C\uC6D0"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "close-btn",
          onClick: closeShowCommunityUserModal,
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.CloseCircleOutlined, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ModalBody, {
        children: singleCommunity.Users.map(user => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "user-container",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "user-name",
            children: [user.profilePhoto ? /*#__PURE__*/jsx_runtime_.jsx("img", {
              width: "24px",
              height: "24px",
              src: user.profilePhoto,
              alt: "user-image"
            }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "fake-image",
              children: user.nickname[0]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "user-nickname",
              children: user.nickname
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "user-country",
            children: user.country
          })]
        }, user.nickname))
      })]
    })
  });
}

/* harmony default export */ var Modals_ShowCommunityUserModal = (ShowCommunityUserModal);

/***/ })

};
;