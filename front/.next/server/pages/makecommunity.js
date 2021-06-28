(function() {
var exports = {};
exports.id = 9476;
exports.ids = [9476];
exports.modules = {

/***/ 8164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actionUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5902);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8285);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2166);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Layouts_FormLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7182);
/* harmony import */ var actions_actionCommunity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(247);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3530);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3177);


















const FormErrorMessage = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/* import() */ 4607).then(__webpack_require__.bind(__webpack_require__, 4607)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4607)],
    modules: ["makecommunity.tsx -> " + 'components/Message/FormErrorMessage']
  }
});
const SearchAddressModal = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/* import() */ 5660).then(__webpack_require__.bind(__webpack_require__, 5660)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5660)],
    modules: ["makecommunity.tsx -> " + 'components/Modals/SearchAddressModal']
  }
});

function MakeCommunity() {
  var _errors$communityName, _errors$description;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.user);
  const {
    mainCategories,
    addCommunityDone,
    addCommunityError,
    addCommunityLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.community);
  const {
    0: showSearchAddressModal,
    1: setShowSearchAddressModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: countryError,
    1: setCountryError
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: categoryError,
    1: setcategoryError
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: country,
    1: setCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');
  const {
    0: category,
    1: setCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!me) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');
    }
  }, [me]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (addCommunityError) {
      alert(addCommunityError);
    }
  }, [addCommunityError]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (addCommunityDone) {
      alert('커뮤니티를 생성했습니다');
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');
    }
  }, [addCommunityDone]);
  const {
    handleSubmit,
    errors,
    control
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__.yupResolver)(_utils_yup__WEBPACK_IMPORTED_MODULE_9__/* .addCommunityValidation */ .w8),
    mode: 'onBlur'
  });
  const openSearchAddressModal = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    setCountryError(false);
    setShowSearchAddressModal(true);
  }, []);
  const closeSearchAddressModal = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    setShowSearchAddressModal(false);
  }, []);
  const onChangeCategory = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(e => {
    setCategory(e.target.value);
    setcategoryError(false);
  }, []);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(handleSubmit(data => {
    if (country === '') {
      return setCountryError(true);
    }

    if (category === '') {
      return setcategoryError(true);
    }

    return dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_12__/* .addCommunityRequestAction */ .AS)({
      communityName: data.communityName,
      description: data.description,
      country,
      category
    }));
  }), [country, category]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "community - \uCEE4\uBBA4\uB2C8\uD2F0 \uB9CC\uB4E4\uAE30"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layouts_FormLayout__WEBPACK_IMPORTED_MODULE_11__/* .default */ .ZP, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uB9CC\uB4E4\uAE30"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onFinish: onSubmit,
        className: "form-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layouts_FormLayout__WEBPACK_IMPORTED_MODULE_11__/* .InputContainer */ .fv, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "communityName",
            children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uC774\uB984"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
            as: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {}),
            type: "text",
            name: "communityName",
            control: control,
            placeholder: "\uCEE4\uBBA4\uB2C8\uD2F0 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694",
            defaultValue: ""
          }), ((_errors$communityName = errors.communityName) === null || _errors$communityName === void 0 ? void 0 : _errors$communityName.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormErrorMessage, {
            errorMessage: errors.communityName.message
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layouts_FormLayout__WEBPACK_IMPORTED_MODULE_11__/* .TextAreaContainer */ .Bt, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "description",
            children: "\uCEE4\uBBA4\uB2C8\uD2F0\uC18C\uAC1C"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
            as: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {}),
            name: "description",
            placeholder: "\uCD5C\uB300 140\uAE00\uC790\uAE4C\uC9C0 \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4",
            control: control,
            defaultValue: ""
          }), ((_errors$description = errors.description) === null || _errors$description === void 0 ? void 0 : _errors$description.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormErrorMessage, {
            errorMessage: errors.description.message
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layouts_FormLayout__WEBPACK_IMPORTED_MODULE_11__/* .InputContainer */ .fv, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
            htmlFor: "country",
            children: "\uC8FC\uC18C"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            style: {
              cursor: 'pointer'
            },
            value: country,
            readOnly: true,
            placeholder: "\uC8FC\uC18C\uB97C \uAC80\uC0C9\uD558\uC138\uC694",
            onClick: openSearchAddressModal
          }), countryError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormErrorMessage, {
            errorMessage: "\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
          htmlFor: "categories",
          children: "\uCE74\uD14C\uACE0\uB9AC"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
          id: "categories",
          className: "select-category",
          onChange: onChangeCategory,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
            value: "",
            children: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694"
          }), mainCategories.map(v => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
            value: v.id,
            children: v.name
          }, v.name))]
        }), categoryError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormErrorMessage, {
          errorMessage: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layouts_FormLayout__WEBPACK_IMPORTED_MODULE_11__/* .ButtonContainer */ .qO, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "primary",
            htmlType: "submit",
            loading: addCommunityLoading,
            children: "\uC0DD\uC131\uD558\uAE30"
          })
        })]
      }), showSearchAddressModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchAddressModal, {
        closeSearchAddressModal: closeSearchAddressModal,
        setCountry: setCountry,
        type: "village"
      })]
    })]
  });
}

const getServerSideProps = store_configureStore__WEBPACK_IMPORTED_MODULE_15__/* .default.getServerSideProps */ .Z.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  (axios__WEBPACK_IMPORTED_MODULE_14___default().defaults.headers.Cookie) = '';

  if (context.req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_14___default().defaults.headers.Cookie) = cookie;
  }

  context.store.dispatch((0,_actions_actionUser__WEBPACK_IMPORTED_MODULE_1__/* .loadMyInfoRequestAction */ .J5)());
  context.store.dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_12__/* .loadCategoriesRequestAction */ .Rh)());
  context.store.dispatch(_redux_saga_core__WEBPACK_IMPORTED_MODULE_13__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (MakeCommunity);

/***/ }),

/***/ 2166:
/***/ (function(module) {

"use strict";
module.exports = require("@hookform/resolvers/yup");;

/***/ }),

/***/ 3530:
/***/ (function(module) {

"use strict";
module.exports = require("@redux-saga/core");;

/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 4584:
/***/ (function(module) {

"use strict";
module.exports = require("immer");;

/***/ }),

/***/ 2744:
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3903:
/***/ (function(module) {

"use strict";
module.exports = require("react-daum-postcode");;

/***/ }),

/***/ 2662:
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7561:
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ 5176:
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ 7765:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ 9440:
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [2245,5902,3177,247,8285,7182], function() { return __webpack_exec__(8164); });
module.exports = __webpack_exports__;

})();