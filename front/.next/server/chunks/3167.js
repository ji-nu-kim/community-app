exports.id = 3167;
exports.ids = [3167];
exports.modules = {

/***/ 3167:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Modals_PostSettingModal; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./actions/actionPost.ts
var actionPost = __webpack_require__(8188);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Modals/PostSettingModal/styles.tsx

const ModalContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "no2cmf-0"
})(["position:absolute;z-index:2000;top:0;right:0;width:100px;background:rgba(0,0,0,0.7);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);cursor:pointer;ul{height:inherit;list-style:none;padding:0;display:grid;grid-template-rows:auto;margin-bottom:0;li{height:40px;position:relative;color:#fff;display:flex;align-items:center;justify-content:center;border-bottom:1px solid rgba(255,255,255,0.15);:last-child{border-bottom:none;}:hover{background:rgba(0,0,0,0.3);}a{padding:10px;position:absolute;display:flex;align-items:center;justify-content:center;color:#fff;width:100%;height:100%;}}}"]);
;// CONCATENATED MODULE: ./components/Modals/PostSettingModal/index.tsx








function PostSettingModal({
  setCurrentModifyPost,
  setEditMode,
  postId,
  communityId,
  postOwnerId,
  communityUserId,
  content
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const postOwner = postOwnerId === communityUserId;
  const onClickModifyButton = (0,external_react_.useCallback)(() => {
    setCurrentModifyPost(postId);
    setEditMode(prev => !prev);
  }, [postId]);
  const onClickDeleteButton = (0,external_react_.useCallback)(() => {
    if (confirm('게시글을 지우시겠습니까?')) {
      return dispatch((0,actionPost/* removePostRequestAction */.Q4)({
        postId,
        communityId
      }));
    }
  }, []);
  const onClickReportButton = (0,external_react_.useCallback)(() => {
    const reason = prompt('신고하는 이유를 적어주세요');

    if (reason && communityUserId) {
      dispatch((0,actionPost/* reportRequestAction */.kw)({
        contentId: postId,
        reporter: communityUserId,
        reportedPerson: postOwnerId,
        reason,
        variety: 'post',
        content
      }));
    }
  }, [postOwnerId, communityUserId, postId, content]);
  return /*#__PURE__*/jsx_runtime_.jsx(ModalContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: postOwner ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: onClickModifyButton,
          children: "\uC218\uC815"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: onClickDeleteButton,
          children: "\uC0AD\uC81C"
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: onClickReportButton,
        children: "\uC2E0\uACE0\uD558\uAE30"
      })
    })
  });
}

/* harmony default export */ var Modals_PostSettingModal = (PostSettingModal);

/***/ })

};
;