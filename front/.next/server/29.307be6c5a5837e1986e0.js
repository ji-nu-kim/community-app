exports.ids = [29];
exports.modules = {

/***/ "m1Q/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./actions/actionCommunity.ts
var actionCommunity = __webpack_require__("YXRT");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/stylesUtil.tsx
var stylesUtil = __webpack_require__("oZZd");

// CONCATENATED MODULE: ./components/Modals/JoinUserModal/styles.tsx


const ModalExternal = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalExternal",
  componentId: "sc-1ss77wj-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;"]);
const ModalContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "sc-1ss77wj-1"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;width:300px;height:500px;background:rgba(0,0,0,0.7);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);display:grid;grid-template-rows:44px auto;label{color:#e4e4e4;}"]);
const ModalHeader = /*#__PURE__*/external_styled_components_default.a.header.withConfig({
  displayName: "styles__ModalHeader",
  componentId: "sc-1ss77wj-2"
})(["display:flex;color:#e4e4e4;font-weight:bold;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.1);border-bottom:1px solid rgba(255,255,255,0.1);.modal-title{margin-left:1rem;}.close-btn{margin-right:1rem;cursor:pointer;:hover{color:coral;animation:", " 0.5s linear infinite;}}"], stylesUtil["a" /* ColorAni */]);
const ModalBody = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalBody",
  componentId: "sc-1ss77wj-3"
})(["overflow-y:auto;padding:1rem;.card-container{background:rgba(255,255,255,0.4);outline:1px solid rgba(255,255,255,1);color:#fff;display:grid;grid-template-rows:250px 70px 50px;margin-bottom:30px;.card-image{position:relative;display:flex;justify-content:center;align-items:center;border-bottom:1px solid rgba(255,255,255,0.4);img{position:absolute;width:100%;height:100%;object-fit:cover;}}.card-info{align-self:center;margin-left:8px;}.card-button{display:grid;grid-template-columns:1fr 1fr;button{background:#039be5;border:none;cursor:pointer;:hover{background:#007ebd;}:first-child{border-right:1px solid rgba(255,255,255,0.4);}}}}"]);
// CONCATENATED MODULE: ./components/Modals/JoinUserModal/index.tsx








function JoinUserModal({
  setJoinUserModal,
  singleCommunity
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    JoinUsers
  } = singleCommunity;
  const closeJoinUserModal = Object(external_react_["useCallback"])(() => {
    setJoinUserModal(false);
  }, [setJoinUserModal]);
  const onClickAccept = Object(external_react_["useCallback"])(userId => async () => {
    return dispatch(Object(actionCommunity["a" /* acceptCommunityRequestAction */])({
      communityId: singleCommunity.id,
      userId,
      title: `${singleCommunity.communityName} ???????????? ??????????????? ?????????????????????`
    }));
  }, [singleCommunity]);
  const onClickRefuse = Object(external_react_["useCallback"])(userId => async () => {
    return dispatch(Object(actionCommunity["p" /* refuseCommunityRequestAction */])({
      communityId: singleCommunity.id,
      userId
    }));
  }, [singleCommunity]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalExternal, {
    onClick: closeJoinUserModal,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ModalContainer, {
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(ModalHeader, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "modal-title",
          children: "\uAC00\uC785\uC2E0\uCCAD\uD55C \uC720\uC800\uBAA9\uB85D"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "close-btn",
          onClick: closeJoinUserModal,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["CloseCircleOutlined"], {})
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalBody, {
        children: JoinUsers.map(user => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "card-container",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "card-image",
            children: user.profilePhoto ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: user.profilePhoto,
              alt: "profile-photo"
            }) : '?????????'
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "card-info",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: ["\uB2C9\uB124\uC784: ", user.nickname]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: ["\uC9C0\uC5ED: ", user.country]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "card-button",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              onClick: onClickAccept(user.id),
              children: "\uC2B9\uC778"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              onClick: onClickRefuse(user.id),
              children: "\uAC70\uC808"
            })]
          })]
        }, user.id))
      })]
    })
  });
}

/* harmony default export */ var Modals_JoinUserModal = __webpack_exports__["default"] = (JoinUserModal);

/***/ }),

/***/ "oZZd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorAni; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ColorAni = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{filter:hue-rotate(0deg);}to{filter:hue-rotate(360deg);}"]);

/***/ })

};;