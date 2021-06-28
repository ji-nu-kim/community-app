exports.id = 8887;
exports.ids = [8887];
exports.modules = {

/***/ 3046:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Cards_RoundStyleCard; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Cards/RoundStyleCard/styles.tsx

const btnRotateAni = /*#__PURE__*/(0,external_styled_components_.keyframes)(["from{filter:hue-rotate(0deg);}to{filter:hue-rotate(360deg);}"]);
const CardContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__CardContainer",
  componentId: "sc-1xy6uwa-0"
})(["background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(", ");background-position:center;background-repeat:no-repeat;background-size:cover;min-width:", "px;min-height:", "px;border-radius:10px;box-shadow:0 4px 16px 0 rgba(31,38,135,0.37);display:flex;justify-content:center;align-items:center;:hover{background-image:linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(", ");h2{color:coral;animation:", " 1s linear infinite;}}h2{z-index:10;color:#fff;font-weight:bold;font-size:1.5rem;}"], props => props.img && props.img, props => props.width, props => props.height, props => props.img && props.img, btnRotateAni);
;// CONCATENATED MODULE: ./components/Cards/RoundStyleCard/index.tsx




function RoundStyleCard({
  name,
  img,
  width,
  height
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(CardContainer, {
    img: img,
    width: width,
    height: height,
    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: name
    })
  });
}

/* harmony default export */ var Cards_RoundStyleCard = (RoundStyleCard);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;