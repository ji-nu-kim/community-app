exports.id = 8578;
exports.ids = [8578];
exports.modules = {

/***/ 8578:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Modals_UserProfileModifyModal; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/stylesUtil.tsx
var stylesUtil = __webpack_require__(8502);
;// CONCATENATED MODULE: ./components/Modals/UserProfileModifyModal/styles.tsx


const ModalContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalContainer",
  componentId: "pvy1hr-0"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:100;width:500px;height:500px;background:rgba(0,0,0,0.7);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);display:grid;grid-template-rows:44px auto;label{color:#e4e4e4;}"]);
const ModalHeader = /*#__PURE__*/external_styled_components_default().header.withConfig({
  displayName: "styles__ModalHeader",
  componentId: "pvy1hr-1"
})(["display:flex;color:#e4e4e4;font-weight:bold;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.1);border-bottom:1px solid rgba(255,255,255,0.1);.modal-title{margin-left:1rem;}.close-btn{margin-right:1rem;cursor:pointer;:hover{color:coral;animation:", " 0.5s linear infinite;}}"], stylesUtil/* ColorAni */.w);
const ModalBody = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ModalBody",
  componentId: "pvy1hr-2"
})(["display:flex;justify-content:center;align-items:center;.form{display:grid;grid-template-rows:repeat(3,auto);.form-profile{display:grid;grid-template-columns:1fr 1fr;margin-bottom:1rem;justify-items:flex-start;.profile-nickname{#nickname{background:rgba(255,255,255,0.1);padding-left:4px;color:#fff;margin-top:0.5rem;height:33px;border:none;:hover{background:rgba(255,255,255,0.2);}}}}.form-category{margin-bottom:1rem;span{font-size:0.75rem;color:#fff;}}}.create-btn{display:flex;justify-content:center;}"]);
// EXTERNAL MODULE: ./hooks/useInput.tsx
var useInput = __webpack_require__(8427);
// EXTERNAL MODULE: ./actions/actionUser.ts
var actionUser = __webpack_require__(5902);
;// CONCATENATED MODULE: ./components/Modals/UserProfileModifyModal/index.tsx










const ImageInsert = dynamic_default()(() => __webpack_require__.e(/* import() */ 8085).then(__webpack_require__.bind(__webpack_require__, 32)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(32)],
    modules: ["..\\components\\Modals\\UserProfileModifyModal\\index.tsx -> " + 'components/ImageInsert']
  }
});
const CategoryList = dynamic_default()(() => __webpack_require__.e(/* import() */ 4316).then(__webpack_require__.bind(__webpack_require__, 4316)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4316)],
    modules: ["..\\components\\Modals\\UserProfileModifyModal\\index.tsx -> " + 'components/CategoryList']
  }
});

function UserProfileModifyModal({
  setUserProfileModifyModal
}) {
  var _me$Categories;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me,
    imagePath
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [newNickname, onChangeNewNickname] = (0,useInput/* default */.Z)((me === null || me === void 0 ? void 0 : me.nickname) || '');
  const mainCategories = (0,external_react_redux_.useSelector)(state => state.community.mainCategories);
  const {
    0: categories,
    1: setCategories
  } = (0,external_react_.useState)((me === null || me === void 0 ? void 0 : (_me$Categories = me.Categories) === null || _me$Categories === void 0 ? void 0 : _me$Categories.map(v => v.name)) || []);
  const onCloseUserProfileModifyModal = (0,external_react_.useCallback)(() => {
    setUserProfileModifyModal(false);
  }, []);
  const onSubmit = (0,external_react_.useCallback)(() => {
    if (confirm('정보를 수정하시겠습니까?')) {
      setTimeout(() => {
        return dispatch((0,actionUser/* changeProfileRequestAction */.eI)({
          nickname: newNickname,
          profilePhoto: imagePath,
          category: categories
        }));
      }, 3000);
    }
  }, [imagePath, newNickname, categories]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalHeader, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-title",
        children: "\uD504\uB85C\uD544\uC218\uC815"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "close-btn",
        onClick: onCloseUserProfileModifyModal,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.CloseCircleOutlined, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ModalBody, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
        onFinish: onSubmit,
        className: "form",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-profile",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "profile-img",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              children: "\uD504\uB85C\uD544\uC0AC\uC9C4"
            }), /*#__PURE__*/jsx_runtime_.jsx(ImageInsert, {
              imagePath: imagePath,
              profilePhoto: me === null || me === void 0 ? void 0 : me.profilePhoto
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "profile-nickname",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "nickname",
              children: "\uB2C9\uB124\uC784"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("input", {
              id: "nickname",
              type: "text",
              value: newNickname,
              onChange: onChangeNewNickname
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "form-category",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            children: ["\uAD00\uC2EC\uC0AC", /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: " (\uCD5C\uB300 5\uAC1C\uAE4C\uC9C0 \uC120\uD0DD\uAC00\uB2A5\uD569\uB2C8\uB2E4)"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(CategoryList, {
            mainCategories: mainCategories,
            categories: categories,
            setCategories: setCategories
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "create-btn",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            ghost: true,
            htmlType: "submit",
            children: "\uC218\uC815\uD558\uAE30"
          })
        })]
      })
    })]
  });
}

/* harmony default export */ var Modals_UserProfileModifyModal = (/*#__PURE__*/(0,external_react_.memo)(UserProfileModifyModal));

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