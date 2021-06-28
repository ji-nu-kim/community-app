exports.id = 1469;
exports.ids = [1469];
exports.modules = {

/***/ 1469:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actionPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8188);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8427);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);








function CommentForm({
  postId
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user);
  const {
    addCommentDone
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.post);
  const [comment, onChangeComment, setComment] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)('');
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (addCommentDone) {
      setComment('');
    }
  }, [addCommentDone]);
  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (!comment.trim() || !comment) {
      alert('댓글을 입력하세요');
      return;
    }

    if (me) {
      return dispatch((0,_actions_actionPost__WEBPACK_IMPORTED_MODULE_3__/* .addCommentRequestAction */ .j6)({
        comment,
        postId
      }));
    }
  }, [comment, postId, me]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      style: {
        marginTop: '0.5rem'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.TextArea, {
        value: comment,
        onChange: onChangeComment,
        rows: 4,
        placeholder: "\uB313\uAE00\uC744 \uC791\uC131\uD558\uC138\uC694",
        style: {
          background: 'rgba(0, 0, 0, .4)',
          border: 'none',
          color: '#fff',
          resize: 'none',
          height: '70px'
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "primary",
        htmlType: "submit",
        style: {
          marginTop: '.5rem'
        },
        children: "\uB4F1\uB85D"
      })]
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(CommentForm));

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