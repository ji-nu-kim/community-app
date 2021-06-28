exports.id = 7964;
exports.ids = [7964];
exports.modules = {

/***/ 7964:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);






const NavBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.all(/* import() */[__webpack_require__.e(1664), __webpack_require__.e(3327)]).then(__webpack_require__.bind(__webpack_require__, 199)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(199)],
    modules: ["..\\components\\Layouts\\AppLayout.tsx -> " + 'components/NavBar']
  }
});
const SideBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.all(/* import() */[__webpack_require__.e(1664), __webpack_require__.e(2673)]).then(__webpack_require__.bind(__webpack_require__, 3125)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3125)],
    modules: ["..\\components\\Layouts\\AppLayout.tsx -> " + 'components/SideBar']
  }
});
const UserInfoModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.all(/* import() */[__webpack_require__.e(1664), __webpack_require__.e(9663)]).then(__webpack_require__.bind(__webpack_require__, 886)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(886)],
    modules: ["..\\components\\Layouts\\AppLayout.tsx -> " + 'components/Modals/UserInfoModal']
  }
});
const NotificationModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 6610).then(__webpack_require__.bind(__webpack_require__, 6610)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6610)],
    modules: ["..\\components\\Layouts\\AppLayout.tsx -> " + 'components/Modals/NotificationModal']
  }
});
const Global = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 0 !important;
  }
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

function AppLayout({
  children
}) {
  const {
    me,
    leaveDone,
    leaveError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user);
  const {
    0: userInfoModal,
    1: setUserInfoModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: notificationModal,
    1: setNotificationModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (leaveDone) {
      alert('탈퇴처리가 완료되었습니다');
    }
  }, [leaveDone]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (leaveError) {
      alert(leaveError);
    }
  }, [leaveError]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Global, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavBar, {
      notices: me === null || me === void 0 ? void 0 : me.Notices,
      userInfoModal: userInfoModal,
      setUserInfoModal: setUserInfoModal,
      setNotificationModal: setNotificationModal
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '200px auto'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SideBar, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: children
      })]
    }), userInfoModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserInfoModal, {
      setUserInfoModal: setUserInfoModal
    }), notificationModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationModal, {
      setNotificationModal: setNotificationModal,
      notices: me === null || me === void 0 ? void 0 : me.Notices
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(AppLayout));

/***/ })

};
;