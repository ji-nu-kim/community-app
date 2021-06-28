exports.ids = [22];
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

/***/ "CS4g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/stylesUtil.tsx
var stylesUtil = __webpack_require__("oZZd");

// CONCATENATED MODULE: ./components/Modals/CommunityModifyModal/styles.tsx


const ModalContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "ucrwkn-0"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;width:600px;height:500px;background:rgba(0,0,0,0.4);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);display:grid;grid-template-rows:44px auto;label{color:#e4e4e4;}"]);
const ModalHeader = /*#__PURE__*/external_styled_components_default.a.header.withConfig({
  displayName: "styles__ModalHeader",
  componentId: "ucrwkn-1"
})(["display:flex;color:#e4e4e4;font-weight:bold;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.1);border-bottom:1px solid rgba(255,255,255,0.1);.modal-title{margin-left:1rem;}.close-btn{margin-right:1rem;cursor:pointer;:hover{color:coral;animation:", " 0.5s linear infinite;}}"], stylesUtil["a" /* ColorAni */]);
const ModalFormContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ModalFormContainer",
  componentId: "ucrwkn-2"
})(["display:grid;grid-template-rows:1fr 1fr 44px;grid-template-columns:1fr 1fr;height:100%;padding:0.5rem;gap:0.5rem;.profile-img{background:rgba(0,0,0,0.1);display:flex;flex-direction:column;justify-content:center;align-items:center;}.create-btn{display:flex;justify-content:center;align-items:center;grid-column:1 / 3;}"]);
const TextAreaContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__TextAreaContainer",
  componentId: "ucrwkn-3"
})(["background:rgba(0,0,0,0.1);display:flex;flex-direction:column;justify-content:center;align-items:center;textarea{margin-top:0.5rem;color:#fff;background:rgba(255,255,255,0.2);width:250px;height:120px;border:none;resize:none;::placeholder{color:#fff;}}"]);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__("Avh3");

// EXTERNAL MODULE: ./actions/actionCommunity.ts
var actionCommunity = __webpack_require__("YXRT");

// CONCATENATED MODULE: ./components/Modals/CommunityModifyModal/index.tsx










const ImageInsert = dynamic_default()(() => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "MQtY")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("MQtY")],
    modules: ["..\\components\\Modals\\CommunityModifyModal\\index.tsx -> " + 'components/ImageInsert']
  }
});

function CommunityModal({
  setShowCommunityModifyModal
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    singleCommunity,
    imagePath
  } = Object(external_react_redux_["useSelector"])(state => state.community);
  const [description, onChangeDescription] = Object(useInput["a" /* default */])((singleCommunity === null || singleCommunity === void 0 ? void 0 : singleCommunity.description) || '');
  const [caution, onChangeCaution] = Object(useInput["a" /* default */])((singleCommunity === null || singleCommunity === void 0 ? void 0 : singleCommunity.caution) || '');
  const [requirement, onChangeRequirement] = Object(useInput["a" /* default */])((singleCommunity === null || singleCommunity === void 0 ? void 0 : singleCommunity.requirement) || '');
  const closeCommunityModal = Object(external_react_["useCallback"])(() => {
    setShowCommunityModifyModal(false);
  }, [setShowCommunityModifyModal]);
  const onSubmit = Object(external_react_["useCallback"])(() => {
    if (confirm('정보를 수정하시겠습니까?') && singleCommunity) {
      setTimeout(() => {
        return dispatch(Object(actionCommunity["d" /* changeCommunityInfoRequestAction */])({
          communityId: singleCommunity.id,
          caution,
          requirement,
          description,
          profilePhoto: imagePath
        }));
      }, 3000);
    }
  }, [description, requirement, caution, imagePath, singleCommunity]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ModalContainer, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(ModalHeader, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "modal-title",
        children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uC218\uC815\uD558\uAE30"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "close-btn",
        onClick: closeCommunityModal,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["CloseCircleOutlined"], {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"], {
      className: "form",
      onFinish: onSubmit,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ModalFormContainer, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "profile-img",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "\uD504\uB85C\uD544\uC0AC\uC9C4"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageInsert, {
            imagePath: imagePath,
            profilePhoto: singleCommunity === null || singleCommunity === void 0 ? void 0 : singleCommunity.profilePhoto
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TextAreaContainer, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uC18C\uAC1C"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
            value: description,
            name: "description",
            placeholder: "\uCD5C\uB300 140\uAE00\uC790\uAE4C\uC9C0 \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4",
            onChange: onChangeDescription
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TextAreaContainer, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uC8FC\uC758\uC0AC\uD56D"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
            value: caution,
            name: "caution",
            placeholder: "\uCD5C\uB300 140\uAE00\uC790\uAE4C\uC9C0 \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4",
            onChange: onChangeCaution
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TextAreaContainer, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uAC00\uC785\uC870\uAC74"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
            value: requirement,
            name: "requirement",
            placeholder: "\uCD5C\uB300 140\uAE00\uC790\uAE4C\uC9C0 \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4",
            onChange: onChangeRequirement
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "create-btn",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
            ghost: true,
            htmlType: "submit",
            children: "\uC218\uC815\uD558\uAE30"
          })
        })]
      })
    })]
  });
}

/* harmony default export */ var CommunityModifyModal = __webpack_exports__["default"] = (/*#__PURE__*/Object(external_react_["memo"])(CommunityModal));

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