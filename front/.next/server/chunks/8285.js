exports.id = 8285;
exports.ids = [8285];
exports.modules = {

/***/ 8285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": function() { return /* binding */ signUpValidation; },
/* harmony export */   "w8": function() { return /* binding */ addCommunityValidation; },
/* harmony export */   "$J": function() { return /* binding */ createMeetValidation; }
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9440);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const signUpValidation = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('아이디를 입력하세요'),
  nickname: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('닉네임을 입력하세요').max(10, '닉네임은 10글자 이하여야 합니다'),
  password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('비밀번호를 입력하세요').max(20, '비밀번호는 20자리 이하여야 합니다').min(8, '비밀번호는 8자리 이상이어야 합니다'),
  passwordCheck: yup__WEBPACK_IMPORTED_MODULE_0__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_0__.ref('password'), null], '비밀번호가 일치하지 않습니다'),
  term: yup__WEBPACK_IMPORTED_MODULE_0__.boolean().oneOf([true], '약관에 동의해주세요')
});
const addCommunityValidation = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  communityName: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('커뮤니티이름을 입력하세요').max(10, '커뮤니티 이름은 10글자 이하여야 합니다'),
  description: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('커뮤니티를 소개하세요').max(140, '최대 140글자까지 입력가능합니다')
});
const createMeetValidation = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  title: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('모임 이름을 입력하세요').max(15, '최대 15자리까지 가능합니다'),
  fee: yup__WEBPACK_IMPORTED_MODULE_0__.number().min(0).required('참가비를 입력하세요(없으면 0)'),
  members: yup__WEBPACK_IMPORTED_MODULE_0__.number().min(1, '최소 1명이상이여야 합니다').required('인원 수를 입력하세요'),
  date: yup__WEBPACK_IMPORTED_MODULE_0__.date().required('날짜를 입력하세요')
});

/***/ })

};
;