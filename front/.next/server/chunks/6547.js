exports.id = 6547;
exports.ids = [6547];
exports.modules = {

/***/ 6547:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Modals_CommentEditModal; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./actions/actionPost.ts
var actionPost = __webpack_require__(8188);
// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__(8427);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/stylesUtil.tsx
var stylesUtil = __webpack_require__(8502);
;// CONCATENATED MODULE: ./components/Modals/CommentEditModal/styles.tsx


const ModalContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "o6pbqb-0"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:100;width:300px;height:300px;background:rgba(0,0,0,0.7);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);display:grid;grid-template-rows:44px auto;label{color:#e4e4e4;}"]);
const ModalHeader = /*#__PURE__*/external_styled_components_default().header.withConfig({
  displayName: "styles__ModalHeader",
  componentId: "o6pbqb-1"
})(["display:flex;color:#e4e4e4;font-weight:bold;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.1);border-bottom:1px solid rgba(255,255,255,0.1);.modal-title{margin-left:1rem;}.close-button{margin-right:1rem;cursor:pointer;:hover{color:coral;animation:", " 0.5s linear infinite;}}"], stylesUtil/* ColorAni */.w);
const ModalBody = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalBody",
  componentId: "o6pbqb-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;.post-image{width:250px;height:200px;border:1px solid rgba(255,255,255,0.1);}textarea{margin-top:0.5rem;color:#fff;background:rgba(255,255,255,0.2);width:250px;height:120px;border:none;resize:none;}.modify-button{margin-top:1rem;button{cursor:pointer;background:#039be5;border:none;height:30px;:hover{background:#0083c4;}}}"]);
;// CONCATENATED MODULE: ./components/Modals/CommentEditModal/index.tsx









function CommentEditModal({
  setEditMode,
  setCurrentModifyComment,
  currentCommentText,
  postId,
  commentId
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const [content, onChangeContent] = (0,useInput/* default */.Z)(currentCommentText || '');
  const onCloseCommentEditModal = (0,external_react_.useCallback)(() => {
    setCurrentModifyComment(0);
    setEditMode(false);
  }, []);
  const onClickModify = (0,external_react_.useCallback)(() => {
    if (confirm('댓글을 수정하시겠습니까?')) {
      dispatch((0,actionPost/* updateCommentRequestAction */.sD)({
        postId,
        commentId,
        content
      }));
    }
  }, [postId, commentId, content]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalHeader, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-title",
        children: "\uB313\uAE00 \uC218\uC815"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "close-button",
        onClick: onCloseCommentEditModal,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.CloseCircleOutlined, {})
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalBody, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
          onChange: onChangeContent,
          value: content
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modify-button",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: onClickModify,
          children: "\uC218\uC815\uD558\uAE30"
        })
      })]
    })]
  });
}

/* harmony default export */ var Modals_CommentEditModal = (/*#__PURE__*/(0,external_react_.memo)(CommentEditModal));

/***/ }),

/***/ 8427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useInput(initialValue) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
}

/* harmony default export */ __webpack_exports__["Z"] = (useInput);

/***/ }),

/***/ 8502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ ColorAni; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ColorAni = /*#__PURE__*/(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{filter:hue-rotate(0deg);}to{filter:hue-rotate(360deg);}"]);

/***/ })

};
;