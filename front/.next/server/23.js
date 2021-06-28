exports.ids = [23];
exports.modules = {

/***/ "Avh3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useInput(initialValue) {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
}

/* harmony default export */ __webpack_exports__["a"] = (useInput);

/***/ }),

/***/ "XmWp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./actions/actionPost.ts
var actionPost = __webpack_require__("7pp9");

// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__("Avh3");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/stylesUtil.tsx
var stylesUtil = __webpack_require__("oZZd");

// CONCATENATED MODULE: ./components/Modals/PostEditModal/styles.tsx


const ModalContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "fp8gie-0"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:100;width:300px;height:300px;background:rgba(0,0,0,0.7);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);display:grid;grid-template-rows:44px auto;label{color:#e4e4e4;}"]);
const ModalHeader = /*#__PURE__*/external_styled_components_default.a.header.withConfig({
  displayName: "styles__ModalHeader",
  componentId: "fp8gie-1"
})(["display:flex;color:#e4e4e4;font-weight:bold;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.1);border-bottom:1px solid rgba(255,255,255,0.1);.modal-title{margin-left:1rem;}.close-button{margin-right:1rem;cursor:pointer;:hover{color:coral;animation:", " 0.5s linear infinite;}}"], stylesUtil["a" /* ColorAni */]);
const ModalBody = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalBody",
  componentId: "fp8gie-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;.post-image{width:250px;height:200px;border:1px solid rgba(255,255,255,0.1);}textarea{margin-top:0.5rem;color:#fff;background:rgba(255,255,255,0.2);width:250px;height:120px;border:none;resize:none;}.modify-button{margin-top:1rem;button{cursor:pointer;background:#039be5;border:none;height:30px;:hover{background:#0083c4;}}}"]);
// CONCATENATED MODULE: ./components/Modals/PostEditModal/index.tsx









function PostEditModal({
  setEditMode,
  setCurrentModifyPost,
  currentPostText,
  postId,
  communityId
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [content, onChangeContent] = Object(useInput["a" /* default */])(currentPostText || '');
  const onClosePostEditModal = Object(external_react_["useCallback"])(() => {
    setCurrentModifyPost(0);
    setEditMode(false);
  }, []);
  const onClickModify = Object(external_react_["useCallback"])(() => {
    if (confirm('게시글을 수정하시겠습니까?')) {
      dispatch(Object(actionPost["i" /* updatePostRequestAction */])({
        content,
        postId,
        communityId
      }));
      setEditMode(false);
    }
  }, [content]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ModalContainer, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(ModalHeader, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "modal-title",
        children: "\uD3EC\uC2A4\uD2B8 \uC218\uC815"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "close-button",
        onClick: onClosePostEditModal,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["CloseCircleOutlined"], {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ModalBody, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
          onChange: onChangeContent,
          value: content
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "modify-button",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: onClickModify,
          children: "\uC218\uC815\uD558\uAE30"
        })
      })]
    })]
  });
}

/* harmony default export */ var Modals_PostEditModal = __webpack_exports__["default"] = (/*#__PURE__*/Object(external_react_["memo"])(PostEditModal));

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