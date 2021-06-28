exports.id = 4316;
exports.ids = [4316];
exports.modules = {

/***/ 4316:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_CategoryList; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/stylesUtil.tsx
var stylesUtil = __webpack_require__(8502);
;// CONCATENATED MODULE: ./components/CategoryList/styles.tsx


const CheckBoxContainer = /*#__PURE__*/external_styled_components_default().fieldset.withConfig({
  displayName: "styles__CheckBoxContainer",
  componentId: "g7swgl-0"
})(["margin:0.5rem 0;display:grid;grid-template-columns:repeat(5,85px);grid-template-rows:auto;div{label{color:#fff;margin-left:4px;:hover{color:coral;animation:", " 0.5s infinite linear;}}}"], stylesUtil/* ColorAni */.w);
;// CONCATENATED MODULE: ./components/CategoryList/index.tsx





function CategoryList({
  mainCategories,
  setCategories,
  categories
}) {
  const onChangeCheckBox = (0,external_react_.useCallback)(name => e => {
    if (categories.length < 5) {
      if (e.target.checked) {
        setCategories(prev => [...prev, name]);
      } else {
        setCategories(prev => [...prev].filter(v => v != name));
      }
    } else {
      if (e.target.checked) {
        alert('5개만 선택할 수 있습니다');
        e.target.checked = false;
      } else {
        setCategories(prev => [...prev].filter(v => v != name));
      }
    }
  }, [categories]);
  return /*#__PURE__*/jsx_runtime_.jsx(CheckBoxContainer, {
    children: mainCategories && mainCategories.map(category => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [categories.includes(category.name) ? /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "checkbox",
        id: category.name,
        onChange: onChangeCheckBox(category.name),
        defaultChecked: true
      }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "checkbox",
        id: category.name,
        onChange: onChangeCheckBox(category.name)
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: category.name,
        children: category.name
      })]
    }, category.name))
  });
}

/* harmony default export */ var components_CategoryList = (CategoryList);

/***/ })

};
;