exports.id = 4199;
exports.ids = [4199];
exports.modules = {

/***/ 4199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actionPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8188);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8427);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2372);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);










const StyleButton = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7___default()(antd__WEBPACK_IMPORTED_MODULE_3__.Button).withConfig({
  displayName: "PostForm__StyleButton",
  componentId: "sc-458sc1-0"
})(["background:none;border:none;position:absolute;margin-left:-35px;color:#fff;margin-top:-5px;:hover{background:none;color:#039be5;}"]);

function PostForm() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    imagePaths,
    addPostDone
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.post);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const [text, onChangeText, setText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)('');
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성해주세요');
    }

    const formData = new FormData();
    imagePaths.forEach(p => formData.append('image', p));
    formData.append('content', text);
    return dispatch((0,_actions_actionPost__WEBPACK_IMPORTED_MODULE_1__/* .addPostRequestAction */ .LR)({
      formData,
      communityId: Number(router.query.id)
    }));
  }, [text, imagePaths]);
  const imageInputRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const onClickImageUpload = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    var _imageInputRef$curren;

    (_imageInputRef$curren = imageInputRef.current) === null || _imageInputRef$curren === void 0 ? void 0 : _imageInputRef$curren.click();
  }, [imageInputRef.current]);
  const onChangeImages = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    return dispatch((0,_actions_actionPost__WEBPACK_IMPORTED_MODULE_1__/* .uploadImagesRequestAction */ .HY)(imageFormData));
  }, []);
  const onRemoveImage = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(id => () => {
    return dispatch((0,_actions_actionPost__WEBPACK_IMPORTED_MODULE_1__/* .removeImage */ .CM)(id));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Form, {
    style: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [imagePaths && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      style: {
        display: 'flex',
        marginBottom: '1rem'
      },
      children: imagePaths.map((v, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
          marginRight: '1rem',
          background: 'rgba(0,0,0,.7)'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: v.replace(/\/resize\//, '/original/'),
          style: {
            width: '100px'
          },
          alt: v
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyleButton, {
          onClick: onRemoveImage(i),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CloseCircleOutlined, {})
        })]
      }, v))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input.TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uAE00\uC744 \uC791\uC131\uD558\uC138\uC694",
      style: {
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.4)',
        border: 'none',
        resize: 'none',
        height: '70px'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInputRef,
        onChange: onChangeImages
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
          textAlign: 'end',
          marginTop: '0.5rem'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: onClickImageUpload,
          children: "\uC5C5\uB85C\uB4DC"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
          style: {
            marginLeft: '0.5rem'
          },
          type: "primary",
          htmlType: "submit",
          children: "\uC62C\uB9AC\uAE30"
        })]
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(PostForm));

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

/***/ })

};
;