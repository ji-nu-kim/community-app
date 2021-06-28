exports.ids = [35];
exports.modules = {

/***/ "awaa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);






const NavBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "4EMY")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("4EMY")],
    modules: ['components/NavBar']
  }
});
const SideBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "fnIl")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("fnIl")],
    modules: ['components/SideBar']
  }
});
const UserInfoModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "yi+a")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("yi+a")],
    modules: ['components/Modals/UserInfoModal']
  }
});
const NotificationModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 39).then(__webpack_require__.bind(null, "fT4A")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("fT4A")],
    modules: ['components/Modals/NotificationModal']
  }
});
const Global = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
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
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    0: userInfoModal,
    1: setUserInfoModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: notificationModal,
    1: setNotificationModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (leaveDone) {
      alert('탈퇴처리가 완료되었습니다');
    }
  }, [leaveDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (leaveError) {
      alert(leaveError);
    }
  }, [leaveError]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Global, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(NavBar, {
      notices: me === null || me === void 0 ? void 0 : me.Notices,
      userInfoModal: userInfoModal,
      setUserInfoModal: setUserInfoModal,
      setNotificationModal: setNotificationModal
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '200px auto'
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SideBar, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        children: children
      })]
    }), userInfoModal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(UserInfoModal, {
      setUserInfoModal: setUserInfoModal
    }), notificationModal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(NotificationModal, {
      setNotificationModal: setNotificationModal,
      notices: me === null || me === void 0 ? void 0 : me.Notices
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(AppLayout));

/***/ })

};;