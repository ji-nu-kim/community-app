exports.ids = [26];
exports.modules = {

/***/ "1fyQ":
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

// EXTERNAL MODULE: ./utils/stylesUtil.tsx
var stylesUtil = __webpack_require__("oZZd");

// CONCATENATED MODULE: ./components/CommunityBody/Info/styles.tsx


const InfoContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__InfoContainer",
  componentId: "sc-12agse4-0"
})(["height:100%;display:grid;grid-template-columns:40% 60%;grid-template-rows:repeat(3,1fr);.common{white-space:pre-line;backdrop-filter:saturate(180%) blur(3px);-webkit-backdrop-filter:saturate(180%) blur(3px);padding:1rem;p{font-size:1.5rem;font-family:'Black Han Sans',sans-serif;text-align:center;color:#039be5;}div{font-weight:bold;}:hover{animation:", " 1s linear infinite;}}.even{display:grid;grid-template-rows:33px auto;}.odd{div{font-size:1rem;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}}.info-leader{background:linear-gradient( 120deg,rgba(238,156,167,0.8),rgba(255,221,225,0.8) );}.info-description{background:linear-gradient(120deg,rgba(168,192,255,0.8),rgba(63,43,150,0.8));}.info-category{background:linear-gradient(120deg,rgba(48,232,191,0.8),rgba(255,130,53,0.8));}.info-caution{background:linear-gradient(120deg,rgba(238,9,121,0.8),rgba(255,106,0,0.8));}.info-community-user{cursor:pointer;background:linear-gradient(120deg,rgba(252,234,187,0.8),rgba(248,181,0,0.8));}.info-requirement{background:linear-gradient(120deg,rgba(44,62,80,0.8),rgba(52,152,219,0.8));}"], stylesUtil["a" /* ColorAni */]);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/CommunityBody/Info/index.tsx






const ShowCommunityUserModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 39).then(__webpack_require__.bind(null, "GHRU")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("GHRU")],
    modules: ["..\\components\\CommunityBody\\Info\\index.tsx -> " + 'components/Modals/ShowCommunityUserModal']
  }
});

function Info({
  singleCommunity
}) {
  const {
    0: showCommunityUserModal,
    1: setShowCommunityUserModal
  } = Object(external_react_["useState"])(false);
  const showCommunityUserModalTrigger = Object(external_react_["useCallback"])(() => {
    setShowCommunityUserModal(prev => !prev);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(InfoContainer, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "info-leader common odd",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uB9AC\uB354"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: singleCommunity.Users.map(v => v.id === singleCommunity.OwnerId && v.nickname)
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "info-description common even",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uC18C\uAC1C"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: singleCommunity.description
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "info-category common odd",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "\uCE74\uD14C\uACE0\uB9AC"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: singleCommunity.Categories[0].name
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "info-caution common even",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "\uC8FC\uC758\uC0AC\uD56D"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: singleCommunity.caution
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "info-community-user common odd",
        onClick: showCommunityUserModalTrigger,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uD68C\uC6D0"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [singleCommunity.Users.length, "\uBA85"]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "info-requirement common even",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "\uAC00\uC785\uC870\uAC74"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: singleCommunity.requirement
        })]
      })]
    }), showCommunityUserModal && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ShowCommunityUserModal, {
      setShowCommunityUserModal: setShowCommunityUserModal,
      singleCommunity: singleCommunity
    })]
  });
}

/* harmony default export */ var CommunityBody_Info = __webpack_exports__["default"] = (Info);

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