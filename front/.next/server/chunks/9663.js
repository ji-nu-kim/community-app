exports.id = 9663;
exports.ids = [9663];
exports.modules = {

/***/ 886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Modals_UserInfoModal; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./actions/actionUser.ts
var actionUser = __webpack_require__(5902);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Modals/UserInfoModal/styles.tsx

const ModalExternal = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalExternal",
  componentId: "sc-11gurw7-0"
})(["position:fixed;left:0;bottom:0;top:0;right:0;z-index:1022;"]);
const ModalContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "sc-11gurw7-1"
})(["position:absolute;z-index:1000;top:50px;right:1rem;width:150px;height:150px;background:rgba(0,0,0,0.4);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);border-radius:10px;cursor:pointer;ul{height:inherit;list-style:none;padding:0;display:grid;grid-template-rows:repeat(3,1fr);li{position:relative;color:#fff;display:flex;align-items:center;justify-content:center;border-bottom:1px solid rgba(255,255,255,0.15);:last-child{padding:10px;border-bottom:none;}:hover{background:rgba(0,0,0,0.3);border-radius:10px;}a{padding:10px;position:absolute;display:flex;align-items:center;justify-content:center;color:#fff;width:100%;height:100%;}}}"]);
;// CONCATENATED MODULE: ./components/Modals/UserInfoModal/index.tsx








function UserInfoModal({
  setUserInfoModal
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const UserInfoModalTrigger = (0,external_react_.useCallback)(() => {
    setUserInfoModal(false);
  }, [setUserInfoModal]);
  const onClickLogOutBtn = (0,external_react_.useCallback)(() => {
    return dispatch((0,actionUser/* logOutRequestAction */.pt)());
  }, []);
  const onClickDeleteAccountBtun = (0,external_react_.useCallback)(() => {
    if (!me) return;

    if (confirm('탈퇴하시겠습니까?')) {
      return dispatch((0,actionUser/* leaveRequestAction */.WZ)({
        userId: me.id
      }));
    } else {
      return null;
    }
  }, [me]);
  return /*#__PURE__*/jsx_runtime_.jsx(ModalExternal, {
    onClick: UserInfoModalTrigger,
    children: /*#__PURE__*/jsx_runtime_.jsx(ModalContainer, {
      onClick: UserInfoModalTrigger,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/profile",
            prefetch: false,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "\uD504\uB85C\uD544"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: onClickLogOutBtn,
          children: "\uB85C\uADF8\uC544\uC6C3"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: onClickDeleteAccountBtun,
          children: "\uD68C\uC6D0\uD0C8\uD1F4"
        })]
      })
    })
  });
}

/* harmony default export */ var Modals_UserInfoModal = (UserInfoModal);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;