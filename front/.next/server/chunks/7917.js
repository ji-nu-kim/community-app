exports.id = 7917;
exports.ids = [7917];
exports.modules = {

/***/ 7917:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Cards_BoxStyleCard; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Cards/BoxStyleCard/styles.tsx

const CardContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__CardContainer",
  componentId: "sc-14t7usz-0"
})(["width:240px;height:260px;cursor:pointer;background:linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,255,0.7));box-shadow:4px 4px 8px 4px rgba(0,0,0,0.4);:hover{outline:4px solid hotpink;}img{filter:saturate(120%);object-fit:cover;}.fake-image{border-bottom:1px solid rgba(0,0,0,0.2);height:166px;}.card-info{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem;.info-title{font-weight:bold;font-size:1rem;}.info-country{color:#aaabaf;font-size:0.75rem;}.info-category{font-weight:bold;color:#ff5edc;}}"]);
;// CONCATENATED MODULE: ./components/Cards/BoxStyleCard/index.tsx





function BoxStyleCard({
  profilePhoto,
  communityName,
  categoryName,
  country
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardContainer, {
    children: [profilePhoto ? /*#__PURE__*/jsx_runtime_.jsx("img", {
      width: "240",
      height: "166",
      src: profilePhoto,
      alt: "\uC0AC\uC9C4"
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "fake-image"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-info",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "info-title",
        children: communityName
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "info-category",
        children: categoryName
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "info-country",
        children: country
      })]
    })]
  });
}

/* harmony default export */ var Cards_BoxStyleCard = (BoxStyleCard);

/***/ })

};
;