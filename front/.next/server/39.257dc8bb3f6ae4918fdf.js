exports.ids = [39];
exports.modules = {

/***/ "fT4A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Modals/NotificationModal/styles.tsx

const ModalExternal = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalExternal",
  componentId: "o6qfb-0"
})(["position:absolute;left:0;bottom:0;top:0;right:0;z-index:999;"]);
const ModalContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "o6qfb-1"
})(["position:absolute;z-index:1000;top:50px;right:1rem;width:300px;height:300px;background:rgba(0,0,0,0.4);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);border-radius:10px;overflow-x:hidden;overflow-y:auto;.modal-body{ul{height:inherit;list-style:none;padding:0;margin:0;li{position:relative;padding:1rem;padding-right:4rem;font-size:0.75rem;cursor:pointer;width:100%;position:relative;color:#fff;border-bottom:1px solid rgba(0,0,0,0.4);:hover{background:rgba(0,0,0,0.4);}.delete-button{cursor:pointer;position:absolute;top:50%;right:5%;transform:translateY(-50%);background:#039be5;border:none;width:40px;height:20px;:hover{opacity:0.7;}}}}}"]);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./actions/actionUser.ts
var actionUser = __webpack_require__("Lwpp");

// CONCATENATED MODULE: ./components/Modals/NotificationModal/index.tsx








function NotificationModal({
  setNotificationModal,
  notices
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: showDeleteButton,
    1: setShowDeleteButton
  } = Object(external_react_["useState"])(false);
  const onMouseEnterListElem = Object(external_react_["useCallback"])(() => {
    setShowDeleteButton(true);
  }, []);
  const onMouseLeaveListElem = Object(external_react_["useCallback"])(() => {
    setShowDeleteButton(false);
  }, []);
  const onClickDelete = Object(external_react_["useCallback"])(notificationId => () => {
    return dispatch(Object(actionUser["i" /* removeNotificationRequestAction */])({
      notificationId
    }));
  }, []);
  const notificationModalTrigger = Object(external_react_["useCallback"])(() => {
    setNotificationModal(false);
  }, [setNotificationModal]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalExternal, {
    onClick: notificationModalTrigger,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalContainer, {
      onClick: e => e.stopPropagation(),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "modal-body",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
          children: notices && notices.length > 0 && notices.map(notice => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
            onMouseEnter: onMouseEnterListElem,
            onMouseLeave: onMouseLeaveListElem,
            children: [notice.title, " ", external_moment_default()(notice.createdAt).locale('ko').format('LLL'), showDeleteButton && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "delete-button",
              onClick: onClickDelete(notice.id),
              children: "\uC0AD\uC81C"
            })]
          }, notice.id))
        })
      })
    })
  });
}

/* harmony default export */ var Modals_NotificationModal = __webpack_exports__["default"] = (NotificationModal);

/***/ })

};;