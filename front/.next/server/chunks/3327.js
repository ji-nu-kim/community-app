exports.id = 3327;
exports.ids = [3327];
exports.modules = {

/***/ 199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_NavBar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/NavBar/styles.tsx

const NavWrapper = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__NavWrapper",
  componentId: "sc-1gvn53e-0"
})(["z-index:100;position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;height:44px;background:rgba(0,0,0,0.8);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);.nav-logo{margin-left:1rem;h1{font-family:'Luckiest Guy',cursive;margin:0;color:#fff;}}.button-style{margin-right:1rem;font-size:0.5rem;cursor:pointer;color:#fff;font-weight:bold;:hover{transform:scale(1.05);}}.glass-style-button{display:flex;align-items:center;justify-content:center;width:100px;height:26px;background:rgba(255,255,255,0.2);border-radius:10px;}"]);
const NavSearch = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__NavSearch",
  componentId: "sc-1gvn53e-1"
})(["width:30vw;height:30px;display:grid;grid-template-columns:auto 44px;input{border:none;border-top-left-radius:5px;border-bottom-left-radius:5px;padding-left:4px;background:rgba(125,125,125,0.2);color:#b3b3b3;}button{color:#b3b3b3;background:rgba(125,125,125,0.3);border-top-right-radius:5px;border-bottom-right-radius:5px;cursor:pointer;border:none;:hover{background:rgba(125,125,125,0.5);}}"]);
const UserButtons = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__UserButtons",
  componentId: "sc-1gvn53e-2"
})(["display:flex;.notification-button{position:relative;cursor:pointer;margin-right:1rem;color:#fff;:hover{opacity:0.5;}.notification-numbers{background:hotpink;width:14px;height:14px;border-radius:50%;text-align:center;font-size:10px;position:absolute;top:-4px;right:-8px;}}.info-button{display:flex;justify-content:space-evenly;}"]);
const VisitorButtons = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__VisitorButtons",
  componentId: "sc-1gvn53e-3"
})(["display:flex;align-items:center;"]);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__(8427);
// EXTERNAL MODULE: ./actions/actionUser.ts
var actionUser = __webpack_require__(5902);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/NavBar/index.tsx












function NavBar({
  setUserInfoModal,
  userInfoModal,
  setNotificationModal,
  notices
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [keyword, onChangeKeword] = (0,useInput/* default */.Z)(''); // 새로 온 알림의 수(확인하면 사라짐)

  const newNotification = notices === null || notices === void 0 ? void 0 : notices.filter(notice => notice.checked === false).length;
  const path = router.asPath.split('/')[1];
  const notificationModalTrigger = (0,external_react_.useCallback)(() => {
    setNotificationModal(prev => !prev);

    if (newNotification && newNotification > 0) {
      return dispatch((0,actionUser/* checkNotificationRequestAction */.K4)());
    }
  }, [newNotification]);
  const userInfoModalTrigger = (0,external_react_.useCallback)(() => {
    setUserInfoModal(prev => !prev);
  }, [setUserInfoModal]);
  const sumbitKeword = (0,external_react_.useCallback)(() => {
    if (keyword !== '') {
      return router_default().push(`/search/${encodeURIComponent(keyword)}`);
    }
  }, [keyword]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "nav-logo",
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Community"
        })
      }), path === 'search' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavSearch, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "search",
          placeholder: "\uCEE4\uBBA4\uB2C8\uD2F0 \uAC80\uC0C9",
          onChange: onChangeKeword,
          onKeyPress: e => e.key === 'Enter' && sumbitKeword()
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: sumbitKeword,
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.SearchOutlined, {})
        })]
      }), me ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(UserButtons, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "notification-button",
          onClick: notificationModalTrigger,
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.NotificationOutlined, {}), newNotification && newNotification > 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "notification-numbers",
            children: newNotification
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "info-button glass-style-button button-style",
          onClick: userInfoModalTrigger,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: me === null || me === void 0 ? void 0 : me.nickname
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: userInfoModal ? /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretUpOutlined, {}) : /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})
          })]
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(VisitorButtons, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/signup",
          prefetch: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "button-style",
              children: "\uAC00\uC785\uD558\uAE30"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/login",
          prefetch: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "glass-style-button button-style",
              children: "\uB85C\uADF8\uC778\uD558\uAE30"
            })
          })
        })]
      })]
    })
  });
}

/* harmony default export */ var components_NavBar = (/*#__PURE__*/(0,external_react_.memo)(NavBar));

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

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;