exports.id = 3240;
exports.ids = [3240];
exports.modules = {

/***/ 3620:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wt": function() { return /* binding */ CategoryHeader; },
/* harmony export */   "pI": function() { return /* binding */ CategoryContent; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const CategoryContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CategoryLayout__CategoryContainer",
  componentId: "sc-1edo1oy-0"
})(["display:grid;grid-template-rows:200px auto;width:100%;height:100%;background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(", ");background-position:center;background-size:cover;"], props => props.img && props.img);
const CategoryHeader = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CategoryLayout__CategoryHeader",
  componentId: "sc-1edo1oy-1"
})(["height:200px;width:100%;background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3));position:relative;h1{white-space:pre-line;position:absolute;bottom:50px;left:50px;color:#fff;font-weight:bold;font-size:2rem;font-family:'Noto Sans KR',sans-serif;vertical-align:bottom;}"]);
const CategoryContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CategoryLayout__CategoryContent",
  componentId: "sc-1edo1oy-2"
})(["padding:1rem;.cards-container{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,240px);justify-content:space-evenly;}"]);

function CategoryLayout({
  children,
  img
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryContainer, {
    img: img ? `${"https://api.jinu-community.site"}/${img}` : null,
    children: children
  });
}

/* harmony default export */ __webpack_exports__["ZP"] = (CategoryLayout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;