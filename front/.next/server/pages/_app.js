module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "5aZt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypesCommunity; });
const actionTypesCommunity = {
  REMOVE_COMMUNITY_IMAGE: 'REMOVE_COMMUNITY_IMAGE',
  // 커뮤니티 프로필 미리보기 이미지 삭제
  UPLOAD_COMMUNITY_IMAGE_REQUEST: 'UPLOAD_COMMUNITY_IMAGE_REQUEST',
  // 커뮤니티 프로필 미리보기 이미지 업로드
  UPLOAD_COMMUNITY_IMAGE_SUCCESS: 'UPLOAD_COMMUNITY_IMAGE_SUCCESS',
  UPLOAD_COMMUNITY_IMAGE_ERROR: 'UPLOAD_COMMUNITY_IMAGE_ERROR',
  CHANGE_COMMUNITY_INFO_REQUEST: 'CHANGE_COMMUNITY_INFO_REQUEST',
  // 커뮤니티 정보 변경
  CHANGE_COMMUNITY_INFO_SUCCESS: 'CHANGE_COMMUNITY_INFO_SUCCESS',
  CHANGE_COMMUNITY_INFO_ERROR: 'CHANGE_COMMUNITY_INFO_ERROR',
  ADD_COMMUNITY_REQUEST: 'ADD_COMMUNITY_REQUEST',
  // 커뮤니티 생성
  ADD_COMMUNITY_SUCCESS: 'ADD_COMMUNITY_SUCCESS',
  ADD_COMMUNITY_ERROR: 'ADD_COMMUNITY_ERROR',
  REMOVE_COMMUNITY_REQUEST: 'REMOVE_COMMUNITY_REQUEST',
  // 커뮤니티 제거(유저가 없을 때만)
  REMOVE_COMMUNITY_SUCCESS: 'REMOVE_COMMUNITY_SUCCESS',
  REMOVE_COMMUNITY_ERROR: 'REMOVE_COMMUNITY_ERROR',
  JOIN_COMMUNITY_REQUEST: 'JOIN_COMMUNITY_REQUEST:',
  // 커뮤니티 가입신청(임시 DB에 저장)
  JOIN_COMMUNITY_SUCCESS: 'JOIN_COMMUNITY_SUCCESS:',
  JOIN_COMMUNITY_ERROR: 'JOIN_COMMUNITY_ERROR:',
  ACCEPT_COMMUNITY_REQUEST: 'ACCEPT_COMMUNITY_REQUEST',
  // 커뮤니티 가입승인(커뮤니티 DB에 저장)
  ACCEPT_COMMUNITY_SUCCESS: 'ACCEPT_COMMUNITY_SUCCESS',
  ACCEPT_COMMUNITY_ERROR: 'ACCEPT_COMMUNITY_ERROR',
  REFUSE_COMMUNITY_REQUEST: 'REFUSE_COMMUNITY_REQUEST',
  // 커뮤니티 가입거절(임시 DB에서 삭제)
  REFUSE_COMMUNITY_SUCCESS: 'REFUSE_COMMUNITY_SUCCESS',
  REFUSE_COMMUNITY_ERROR: 'REFUSE_COMMUNITY_ERROR',
  LEAVE_COMMUNITY_REQUEST: 'LEAVE_COMMUNITY_REQUEST',
  // 커뮤니티 탈퇴
  LEAVE_COMMUNITY_SUCCESS: 'LEAVE_COMMUNITY_SUCCESS',
  LEAVE_COMMUNITY_ERROR: 'LEAVE_COMMUNITY_ERROR',
  LOAD_COMMUNITY_REQUEST: 'LOAD_COMMUNITY_REQUEST',
  // 특정 커뮤니티 불러오기
  LOAD_COMMUNITY_SUCCESS: 'LOAD_COMMUNITY_SUCCESS',
  LOAD_COMMUNITY_ERROR: 'LOAD_COMMUNITY_ERROR',
  LOAD_COMMUNITIES_REQUEST: 'LOAD_COMMUNITIES_REQUEST',
  // 모든 커뮤니티 불러오기
  LOAD_COMMUNITIES_SUCCESS: 'LOAD_COMMUNITIES_SUCCESS',
  LOAD_COMMUNITIES_ERROR: 'LOAD_COMMUNITIES_ERROR',
  SEARCH_COMMUNITIES_REQUEST: 'SEARCH_COMMUNITIES_REQUEST',
  // 커뮤니티 검색
  SEARCH_COMMUNITIES_SUCCESS: 'SEARCH_COMMUNITIES_SUCCESS',
  SEARCH_COMMUNITIES_ERROR: 'SEARCH_COMMUNITIES_ERROR',
  LOAD_COUNTRY_COMMUNITIES_REQUEST: 'LOAD_COUNTRY_COMMUNITIES_REQUEST',
  // 해당 지역의 모든 커뮤니티 불러오기
  LOAD_COUNTRY_COMMUNITIES_SUCCESS: 'LOAD_COUNTRY_COMMUNITIES_SUCCESS',
  LOAD_COUNTRY_COMMUNITIES_ERROR: 'LOAD_COUNTRY_COMMUNITIES_ERROR',
  LOAD_CATEGORY_COMMUNITIES_REQUEST: 'LOAD_CATEGORY_COMMUNITIES_REQUEST',
  // 해당 카테고리의 모든 커뮤니티 불러오기
  LOAD_CATEGORY_COMMUNITIES_SUCCESS: 'LOAD_CATEGORY_COMMUNITIES_SUCCESS',
  LOAD_CATEGORY_COMMUNITIES_ERROR: 'LOAD_CATEGORY_COMMUNITIES_ERROR',
  LOAD_CATEGORY_REQUEST: 'LOAD_CATEGORY_REQUEST',
  // 특정 카테고리 불러오기
  LOAD_CATEGORY_SUCCESS: 'LOAD_CATEGORY_SUCCESS',
  LOAD_CATEGORY_ERROR: 'LOAD_CATEGORY_ERROR',
  LOAD_CATEGORIES_REQUEST: 'LOAD_CATEGORIES_REQUEST',
  // 모든 카테고리 불러오기
  LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',
  LOAD_CATEGORIES_ERROR: 'LOAD_CATEGORIES_ERROR',
  ADD_MEET_REQUEST: 'ADD_MEET_REQUEST',
  // 모임 생성
  ADD_MEET_SUCCESS: 'ADD_MEET_SUCCESS',
  ADD_MEET_ERROR: 'ADD_MEET_ERROR',
  REMOVE_MEET_REQUEST: 'REMOVE_MEET_REQUEST',
  // 모임 제거
  REMOVE_MEET_SUCCESS: 'REMOVE_MEET_SUCCESS',
  REMOVE_MEET_ERROR: 'REMOVE_MEET_ERROR',
  MODIFY_MEET_REQUEST: 'MODIFY_MEET_REQUEST',
  // 모임 수정
  MODIFY_MEET_SUCCESS: 'MODIFY_MEET_SUCCESS',
  MODIFY_MEET_ERROR: 'MODIFY_MEET_ERROR',
  JOIN_MEET_REQUEST: 'JOIN_MEET_REQUEST',
  // 모임 가입
  JOIN_MEET_SUCCESS: 'JOIN_MEET_SUCCESS',
  JOIN_MEET_ERROR: 'JOIN_MEET_ERROR',
  LEAVE_MEET_REQUEST: 'LEAVE_MEET_REQUEST',
  // 모임 탈퇴
  LEAVE_MEET_SUCCESS: 'LEAVE_MEET_SUCCESS',
  LEAVE_MEET_ERROR: 'LEAVE_MEET_ERROR'
};

/***/ }),

/***/ "7ubT":
/***/ (function(module, exports) {



/***/ }),

/***/ "DUEp":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JHou":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7ubT");
/* harmony import */ var _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__, "actionTypesCommunity")) __webpack_require__.d(__webpack_exports__, "actionTypesCommunity", function() { return _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__["actionTypesCommunity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__, "actionTypesPost")) __webpack_require__.d(__webpack_exports__, "actionTypesPost", function() { return _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__["actionTypesPost"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__, "actionTypesUser")) __webpack_require__.d(__webpack_exports__, "actionTypesUser", function() { return _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__["actionTypesUser"]; });

/* harmony import */ var _user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ov2J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionTypesUser", function() { return _user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DUEp");
/* harmony import */ var _post_post_interfaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__, "actionTypesCommunity")) __webpack_require__.d(__webpack_exports__, "actionTypesCommunity", function() { return _post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__["actionTypesCommunity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__, "actionTypesPost")) __webpack_require__.d(__webpack_exports__, "actionTypesPost", function() { return _post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__["actionTypesPost"]; });

/* harmony import */ var _post_postAction_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hiaJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionTypesPost", function() { return _post_postAction_interfaces__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _community_community_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aePX");
/* harmony import */ var _community_community_interfaces__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_community_community_interfaces__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_community_community_interfaces__WEBPACK_IMPORTED_MODULE_4__, "actionTypesCommunity")) __webpack_require__.d(__webpack_exports__, "actionTypesCommunity", function() { return _community_community_interfaces__WEBPACK_IMPORTED_MODULE_4__["actionTypesCommunity"]; });

/* harmony import */ var _community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5aZt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionTypesCommunity", function() { return _community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_5__["a"]; });








/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "RDVA":
/***/ (function(module, exports) {



/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "aePX":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("RDVA");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("sogr");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "community"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].withRedux(App));

/***/ }),

/***/ "hiaJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypesPost; });
const actionTypesPost = {
  ADD_POST_REQUEST: 'ADD_POST_REQUEST',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
  REMOVE_POST_REQUEST: 'REMOVE_POST_REQUEST',
  REMOVE_POST_SUCCESS: 'REMOVE_POST_SUCCESS',
  REMOVE_POST_ERROR: 'REMOVE_POST_ERROR',
  UPDATE_POST_REQUEST: 'UPDATE_POST_REQUEST',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',
  LOAD_POSTS_REQUEST: 'LOAD_POSTS_REQUEST',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',
  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',
  REMOVE_COMMENT_REQUEST: 'REMOVE_COMMENT_REQUEST',
  REMOVE_COMMENT_SUCCESS: 'REMOVE_COMMENT_SUCCESS',
  REMOVE_COMMENT_ERROR: 'REMOVE_COMMENT_ERROR',
  UPDATE_COMMENT_REQUEST: 'UPDATE_COMMENT_REQUEST',
  UPDATE_COMMENT_SUCCESS: 'UPDATE_COMMENT_SUCCESS',
  UPDATE_COMMENT_ERROR: 'UPDATE_COMMENT_ERROR',
  UPLOAD_IMAGES_REQUEST: 'UPLOAD_IMAGES_REQUEST',
  UPLOAD_IMAGES_SUCCESS: 'UPLOAD_IMAGES_SUCCESS',
  UPLOAD_IMAGES_ERROR: 'UPLOAD_IMAGES_ERROR',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
  REPORT_REQUEST: 'REPORT_REQUEST',
  REPORT_SUCCESS: 'REPORT_SUCCESS',
  REPORT_ERROR: 'REPORT_ERROR'
};

/***/ }),

/***/ "ov2J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypesUser; });
const actionTypesUser = {
  LOG_IN_REQUEST: 'LOG_IN_REQUEST',
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_ERROR: 'LOG_IN_ERROR',
  LOG_OUT_REQUEST: 'LOG_OUT_REQUEST',
  LOG_OUT_SUCCESS: 'LOG_OUT_SUCCESS',
  LOG_OUT_ERROR: 'LOG_OUT_ERROR',
  LOAD_MY_INFO_REQUEST: 'LOAD_MY_INFO_REQUEST',
  LOAD_MY_INFO_SUCCESS: 'LOAD_MY_INFO_SUCCESS',
  LOAD_MY_INFO_ERROR: 'LOAD_MY_INFO_ERROR',
  UPLOAD_IMAGE_REQUEST: 'UPLOAD_IMAGE_REQUEST',
  UPLOAD_IMAGE_SUCCESS: 'UPLOAD_IMAGE_SUCCESS',
  UPLOAD_IMAGE_ERROR: 'UPLOAD_IMAGE_ERROR',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
  LEAVE_REQUEST: 'LEAVE_REQUEST',
  LEAVE_SUCCESS: 'LEAVE_SUCCESS',
  LEAVE_ERROR: 'LEAVE_ERROR',
  CHANGE_PROFILE_REQUEST: 'CHANGE_PROFILE_REQUEST',
  CHANGE_PROFILE_SUCCESS: 'CHANGE_PROFILE_SUCCESS',
  CHANGE_PROFILE_ERROR: 'CHANGE_PROFILE_ERROR',
  CHANGE_COUNTRY_REQUEST: 'CHANGE_COUNTRY_REQUEST',
  CHANGE_COUNTRY_SUCCESS: 'CHANGE_COUNTRY_SUCCESS',
  CHANGE_COUNTRY_ERROR: 'CHANGE_COUNTRY_ERROR',
  CHECK_NOTIFICATION_REQUEST: 'CHECK_NOTIFICATION_REQUEST',
  CHECK_NOTIFICATION_SUCCESS: 'CHECK_NOTIFICATION_SUCCESS',
  CHECK_NOTIFICATION_ERROR: 'CHECK_NOTIFICATION_ERROR',
  REMOVE_NOTIFICATION_REQUEST: 'REMOVE_NOTIFICATION_REQUEST',
  REMOVE_NOTIFICATION_SUCCESS: 'REMOVE_NOTIFICATION_SUCCESS',
  REMOVE_NOTIFICATION_ERROR: 'REMOVE_NOTIFICATION_ERROR',
  ADD_MEET_OF_ME: 'ADD_MEET_OF_ME',
  REMOVE_MEET_OF_ME: 'REMOVE_MEET_OF_ME',
  MODIFY_MEET_OF_ME: 'MODIFY_MEET_OF_ME',
  JOIN_MEET_OF_ME: 'JOIN_MEET_OF_ME',
  LEAVE_MEET_OF_ME: 'LEAVE_MEET_OF_ME',
  LEAVE_COMMUNITY_OF_ME: 'LEAVE_COMMUNITY_OF_ME',
  CHANGE_COMMUNITY_OF_ME: 'CHANGE_COMMUNITY_OF_ME'
};

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "sogr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./interfaces/index.ts
var interfaces = __webpack_require__("JHou");

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);

// CONCATENATED MODULE: ./reducers/user.ts


const initialState = {
  imagePath: [],
  me: null,
  userInfo: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  uploadImageLoading: false,
  uploadImageDone: false,
  uploadImageError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  leaveLoading: false,
  leaveDone: false,
  leaveError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  changeProfileLoading: false,
  changeProfileDone: false,
  changeProfileError: null,
  changeCountryLoading: false,
  changeCountryDone: false,
  changeCountryError: null,
  checkNotificationLoading: false,
  checkNotificationDone: false,
  checkNotificationError: null,
  removeNotificationLoading: false,
  removeNotificationDone: false,
  removeNotificationError: null
};

const reducer = (state = initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case interfaces["actionTypesUser"].LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case interfaces["actionTypesUser"].LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        break;

      case interfaces["actionTypesUser"].LOG_IN_ERROR:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case interfaces["actionTypesUser"].LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case interfaces["actionTypesUser"].LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.me = null;
        break;

      case interfaces["actionTypesUser"].LOG_OUT_ERROR:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case interfaces["actionTypesUser"].LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case interfaces["actionTypesUser"].LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case interfaces["actionTypesUser"].LOAD_MY_INFO_ERROR:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case interfaces["actionTypesUser"].UPLOAD_IMAGE_REQUEST:
        draft.uploadImageLoading = true;
        draft.uploadImageDone = false;
        draft.uploadImageError = null;
        break;

      case interfaces["actionTypesUser"].UPLOAD_IMAGE_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadImageLoading = false;
        draft.uploadImageDone = true;
        break;

      case interfaces["actionTypesUser"].UPLOAD_IMAGE_ERROR:
        draft.uploadImageLoading = false;
        draft.uploadImageError = action.error;
        break;

      case interfaces["actionTypesUser"].REMOVE_IMAGE:
        draft.imagePath = [];
        draft.uploadImageDone = false;
        break;

      case interfaces["actionTypesUser"].SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case interfaces["actionTypesUser"].SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case interfaces["actionTypesUser"].SIGN_UP_ERROR:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case interfaces["actionTypesUser"].LEAVE_REQUEST:
        draft.leaveLoading = true;
        draft.leaveDone = false;
        draft.leaveError = null;
        break;

      case interfaces["actionTypesUser"].LEAVE_SUCCESS:
        draft.leaveLoading = false;
        draft.leaveDone = true;
        draft.me = null;
        break;

      case interfaces["actionTypesUser"].LEAVE_ERROR:
        draft.leaveLoading = false;
        draft.leaveError = action.error;
        break;

      case interfaces["actionTypesUser"].CHANGE_PROFILE_REQUEST:
        draft.changeProfileLoading = true;
        draft.changeProfileDone = false;
        draft.changeProfileError = null;
        break;

      case interfaces["actionTypesUser"].CHANGE_PROFILE_SUCCESS:
        draft.changeProfileLoading = false;
        draft.changeProfileDone = true;
        draft.me = action.data;
        draft.imagePath = [];
        break;

      case interfaces["actionTypesUser"].CHANGE_PROFILE_ERROR:
        draft.changeProfileLoading = false;
        draft.changeProfileError = action.error;
        break;

      case interfaces["actionTypesUser"].CHANGE_COUNTRY_REQUEST:
        draft.changeCountryLoading = true;
        draft.changeCountryDone = false;
        draft.changeCountryError = null;
        break;

      case interfaces["actionTypesUser"].CHANGE_COUNTRY_SUCCESS:
        draft.changeCountryLoading = false;
        draft.changeCountryDone = true;

        if (draft.me) {
          draft.me.country = action.data.country;
        }

        break;

      case interfaces["actionTypesUser"].CHANGE_COUNTRY_ERROR:
        draft.changeCountryLoading = false;
        draft.changeCountryError = action.error;
        break;

      case interfaces["actionTypesUser"].CHECK_NOTIFICATION_REQUEST:
        draft.checkNotificationLoading = true;
        draft.checkNotificationDone = false;
        draft.checkNotificationError = null;
        break;

      case interfaces["actionTypesUser"].CHECK_NOTIFICATION_SUCCESS:
        draft.checkNotificationLoading = false;
        draft.checkNotificationDone = true;

        if (draft.me) {
          draft.me.Notices = action.data;
        }

        break;

      case interfaces["actionTypesUser"].CHECK_NOTIFICATION_ERROR:
        draft.checkNotificationLoading = false;
        draft.checkNotificationError = action.error;
        break;

      case interfaces["actionTypesUser"].REMOVE_NOTIFICATION_REQUEST:
        draft.removeNotificationLoading = true;
        draft.removeNotificationDone = false;
        draft.removeNotificationError = null;
        break;

      case interfaces["actionTypesUser"].REMOVE_NOTIFICATION_SUCCESS:
        draft.removeNotificationLoading = false;
        draft.removeNotificationDone = true;

        if (draft.me) {
          draft.me.Notices = draft.me.Notices.filter(notice => notice.id !== action.data.notificationId);
        }

        break;

      case interfaces["actionTypesUser"].REMOVE_NOTIFICATION_ERROR:
        draft.removeNotificationLoading = false;
        draft.removeNotificationError = action.error;
        break;

      case interfaces["actionTypesUser"].JOIN_MEET_OF_ME:
      case interfaces["actionTypesUser"].ADD_MEET_OF_ME:
        if (draft.me) {
          draft.me.Meets.unshift(action.data);
        }

        break;

      case interfaces["actionTypesUser"].LEAVE_MEET_OF_ME:
      case interfaces["actionTypesUser"].REMOVE_MEET_OF_ME:
        if (draft.me) {
          draft.me.Meets = draft.me.Meets.filter(meet => meet.id !== action.data.meetId);
        }

        break;

      case interfaces["actionTypesUser"].MODIFY_MEET_OF_ME:
        if (draft.me) {
          const meetIndex = draft.me.Meets.findIndex(meet => meet.id === action.data.id);
          draft.me.Meets[meetIndex] = action.data;
        }

        break;

      case interfaces["actionTypesUser"].LEAVE_COMMUNITY_OF_ME:
        if (draft.me && draft.me.id === action.data.userId) {
          draft.me.Communities = draft.me.Communities.filter(community => community.id !== action.data.communityId);
        }

        break;

      case interfaces["actionTypesUser"].CHANGE_COMMUNITY_OF_ME:
        if (draft.me) {
          const communityIndex = draft.me.Communities.findIndex(community => community.id === action.data.communityId);
          draft.me.Communities[communityIndex].profilePhoto = action.data.profilePhoto;
        }

        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var user = (reducer);
// CONCATENATED MODULE: ./reducers/post.ts


const post_initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  hasMorePost: true,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  reportLoading: false,
  reportDone: false,
  reportError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null
};

const post_reducer = (state = post_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case interfaces["actionTypesPost"].ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case interfaces["actionTypesPost"].ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        draft.mainPosts.unshift(action.data);
        break;

      case interfaces["actionTypesPost"].ADD_POST_ERROR:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case interfaces["actionTypesPost"].REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case interfaces["actionTypesPost"].REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.postId);
        break;

      case interfaces["actionTypesPost"].REMOVE_POST_ERROR:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case interfaces["actionTypesPost"].UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;

      case interfaces["actionTypesPost"].UPDATE_POST_SUCCESS:
        {
          draft.updatePostLoading = false;
          draft.updatePostDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.postId);

          if (post) {
            post.content = action.data.content;
          }

          break;
        }

      case interfaces["actionTypesPost"].UPDATE_POST_ERROR:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      case interfaces["actionTypesPost"].REPORT_REQUEST:
        draft.reportLoading = true;
        draft.reportDone = false;
        draft.reportError = null;
        break;

      case interfaces["actionTypesPost"].REPORT_SUCCESS:
        draft.reportLoading = false;
        draft.reportDone = true;
        break;

      case interfaces["actionTypesPost"].REPORT_ERROR:
        draft.reportLoading = false;
        draft.reportError = action.error;
        break;

      case interfaces["actionTypesPost"].LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case interfaces["actionTypesPost"].LOAD_POSTS_SUCCESS:
        {
          draft.loadPostsLoading = false;
          draft.loadPostsDone = true;
          draft.mainPosts = draft.mainPosts.concat(action.data);
          draft.hasMorePost = action.data.length === 10;
          break;
        }

      case interfaces["actionTypesPost"].LOAD_POSTS_ERROR:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case interfaces["actionTypesPost"].ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case interfaces["actionTypesPost"].ADD_COMMENT_SUCCESS:
        {
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);

          if (post) {
            post.Comments.unshift(action.data);
          }

          break;
        }

      case interfaces["actionTypesPost"].ADD_COMMENT_ERROR:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case interfaces["actionTypesPost"].UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;

      case interfaces["actionTypesPost"].UPDATE_COMMENT_SUCCESS:
        {
          draft.updateCommentLoading = false;
          draft.updateCommentDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.postId);

          if (post) {
            const comment = post.Comments.find(v => v.id === action.data.commentId);

            if (comment) {
              comment.content = action.data.content;
            }
          }

          break;
        }

      case interfaces["actionTypesPost"].UPDATE_COMMENT_ERROR:
        draft.updateCommentLoading = false;
        draft.updateCommentError = action.error;
        break;

      case interfaces["actionTypesPost"].REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;

      case interfaces["actionTypesPost"].REMOVE_COMMENT_SUCCESS:
        {
          draft.removeCommentLoading = false;
          draft.removeCommentDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.postId);

          if (post) {
            post.Comments = post.Comments.filter(v => v.id !== action.data.commentId);
          }

          break;
        }

      case interfaces["actionTypesPost"].REMOVE_COMMENT_ERROR:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;

      case interfaces["actionTypesPost"].UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case interfaces["actionTypesPost"].UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case interfaces["actionTypesPost"].UPLOAD_IMAGES_ERROR:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case interfaces["actionTypesPost"].REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var post = (post_reducer);
// CONCATENATED MODULE: ./reducers/community.ts


const community_initialState = {
  imagePath: [],
  communityLength: 0,
  singleCommunity: null,
  mainCommunities: [],
  changableCommunities: [],
  singleCategory: null,
  mainCategories: [],
  hasMoreCommunity: true,
  uploadCommunityImageLoading: false,
  uploadCommunityImageDone: false,
  uploadCommunityImageError: null,
  changeCommunityInfoLoading: false,
  changeCommunityInfoDone: false,
  changeCommunityInfoError: null,
  addCommunityLoading: false,
  addCommunityDone: false,
  addCommunityError: null,
  removeCommunityLoading: false,
  removeCommunityDone: false,
  removeCommunityError: null,
  joinCommunityLoading: false,
  joinCommunityDone: false,
  joinCommunityError: null,
  acceptCommunityLoading: false,
  acceptCommunityDone: false,
  acceptCommunityError: null,
  refuseCommunityLoading: false,
  refuseCommunityDone: false,
  refuseCommunityError: null,
  leaveCommunityLoading: false,
  leaveCommunityDone: false,
  leaveCommunityError: null,
  loadCommunityLoading: false,
  loadCommunityDone: false,
  loadCommunityError: null,
  loadCommunitiesLoading: false,
  loadCommunitiesDone: false,
  loadCommunitiesError: null,
  searchCommunitiesLoading: false,
  searchCommunitiesDone: false,
  searchCommunitiesError: null,
  loadCategoryLoading: false,
  loadCategoryDone: false,
  loadCategoryError: null,
  loadCategoriesLoading: false,
  loadCategoriesDone: false,
  loadCategoriesError: null,
  addMeetLoading: false,
  addMeetDone: false,
  addMeetError: null,
  removeMeetLoading: false,
  removeMeetDone: false,
  removeMeetError: null,
  joinMeetLoading: false,
  joinMeetDone: false,
  joinMeetError: null,
  leaveMeetLoading: false,
  leaveMeetDone: false,
  leaveMeetError: null
};

const community_reducer = (state = community_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case interfaces["actionTypesCommunity"].REMOVE_COMMUNITY_IMAGE:
        draft.imagePath = [];
        draft.uploadCommunityImageDone = false;
        break;

      case interfaces["actionTypesCommunity"].UPLOAD_COMMUNITY_IMAGE_REQUEST:
        draft.uploadCommunityImageLoading = true;
        draft.uploadCommunityImageDone = false;
        draft.uploadCommunityImageError = null;
        break;

      case interfaces["actionTypesCommunity"].UPLOAD_COMMUNITY_IMAGE_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadCommunityImageLoading = false;
        draft.uploadCommunityImageDone = true;
        break;

      case interfaces["actionTypesCommunity"].UPLOAD_COMMUNITY_IMAGE_ERROR:
        draft.uploadCommunityImageLoading = false;
        draft.uploadCommunityImageError = action.error;
        break;

      case interfaces["actionTypesCommunity"].CHANGE_COMMUNITY_INFO_REQUEST:
        draft.changeCommunityInfoLoading = true;
        draft.changeCommunityInfoDone = false;
        draft.changeCommunityInfoError = null;
        break;

      case interfaces["actionTypesCommunity"].CHANGE_COMMUNITY_INFO_SUCCESS:
        draft.changeCommunityInfoLoading = false;
        draft.changeCommunityInfoDone = true;
        draft.imagePath = [];

        if (draft.singleCommunity) {
          draft.singleCommunity.caution = action.data.caution;
          draft.singleCommunity.requirement = action.data.requirement;
          draft.singleCommunity.description = action.data.description;
          draft.singleCommunity.profilePhoto = action.data.profilePhoto;
        }

        break;

      case interfaces["actionTypesCommunity"].CHANGE_COMMUNITY_INFO_ERROR:
        draft.changeCommunityInfoLoading = false;
        draft.changeCommunityInfoError = action.error;
        break;

      case interfaces["actionTypesCommunity"].ADD_COMMUNITY_REQUEST:
        draft.addCommunityLoading = true;
        draft.addCommunityDone = false;
        draft.addCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].ADD_COMMUNITY_SUCCESS:
        draft.addCommunityLoading = false;
        draft.addCommunityDone = true;
        break;

      case interfaces["actionTypesCommunity"].ADD_COMMUNITY_ERROR:
        draft.addCommunityLoading = false;
        draft.addCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_COMMUNITY_REQUEST:
        draft.removeCommunityLoading = true;
        draft.removeCommunityDone = false;
        draft.removeCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_COMMUNITY_SUCCESS:
        draft.removeCommunityLoading = false;
        draft.removeCommunityDone = true;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_COMMUNITY_ERROR:
        draft.removeCommunityLoading = false;
        draft.removeCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].JOIN_COMMUNITY_REQUEST:
        draft.joinCommunityLoading = true;
        draft.joinCommunityDone = false;
        draft.joinCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].JOIN_COMMUNITY_SUCCESS:
        draft.joinCommunityLoading = false;
        draft.joinCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.concat(action.data);
        }

        break;

      case interfaces["actionTypesCommunity"].JOIN_COMMUNITY_ERROR:
        draft.joinCommunityLoading = false;
        draft.joinCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].ACCEPT_COMMUNITY_REQUEST:
        draft.acceptCommunityLoading = true;
        draft.acceptCommunityDone = false;
        draft.acceptCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].ACCEPT_COMMUNITY_SUCCESS:
        draft.acceptCommunityLoading = false;
        draft.acceptCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Users = draft.singleCommunity.Users.concat(action.data);
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.filter(user => user.id != action.data.id);
        }

        break;

      case interfaces["actionTypesCommunity"].ACCEPT_COMMUNITY_ERROR:
        draft.acceptCommunityLoading = false;
        draft.acceptCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].REFUSE_COMMUNITY_REQUEST:
        draft.refuseCommunityLoading = true;
        draft.refuseCommunityDone = false;
        draft.refuseCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].REFUSE_COMMUNITY_SUCCESS:
        draft.refuseCommunityLoading = false;
        draft.refuseCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.filter(user => user.id != action.data.userId);
        }

        break;

      case interfaces["actionTypesCommunity"].REFUSE_COMMUNITY_ERROR:
        draft.refuseCommunityLoading = true;
        draft.refuseCommunityDone = false;
        draft.refuseCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].LEAVE_COMMUNITY_REQUEST:
        draft.leaveCommunityLoading = true;
        draft.leaveCommunityDone = false;
        draft.leaveCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].LEAVE_COMMUNITY_SUCCESS:
        draft.leaveCommunityLoading = false;
        draft.leaveCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Users = draft.singleCommunity.Users.filter(user => user.id != action.data.userId);
        }

        break;

      case interfaces["actionTypesCommunity"].LEAVE_COMMUNITY_ERROR:
        draft.leaveCommunityLoading = true;
        draft.leaveCommunityDone = false;
        draft.leaveCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITY_REQUEST:
        draft.loadCommunityLoading = true;
        draft.loadCommunityDone = false;
        draft.loadCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITY_SUCCESS:
        draft.loadCommunityLoading = false;
        draft.loadCommunityDone = true;
        draft.singleCommunity = action.data;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITY_ERROR:
        draft.loadCommunityLoading = false;
        draft.loadCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITIES_REQUEST:
        draft.loadCommunitiesLoading = true;
        draft.loadCommunitiesDone = false;
        draft.loadCommunitiesError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITIES_SUCCESS:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesDone = true;
        draft.mainCommunities = draft.mainCommunities.concat(action.data);
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITIES_ERROR:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesError = action.error;
        break;

      case interfaces["actionTypesCommunity"].SEARCH_COMMUNITIES_REQUEST:
        draft.searchCommunitiesLoading = true;
        draft.searchCommunitiesDone = false;
        draft.searchCommunitiesError = null;
        break;

      case interfaces["actionTypesCommunity"].SEARCH_COMMUNITIES_SUCCESS:
        draft.searchCommunitiesLoading = false;
        draft.searchCommunitiesDone = true;
        draft.changableCommunities = draft.changableCommunities.concat(action.data);
        break;

      case interfaces["actionTypesCommunity"].SEARCH_COMMUNITIES_ERROR:
        draft.searchCommunitiesLoading = false;
        draft.searchCommunitiesError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_COMMUNITIES_REQUEST:
      case interfaces["actionTypesCommunity"].LOAD_COUNTRY_COMMUNITIES_REQUEST:
        draft.loadCommunitiesLoading = true;
        draft.loadCommunitiesDone = false;
        draft.loadCommunitiesError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_COMMUNITIES_SUCCESS:
      case interfaces["actionTypesCommunity"].LOAD_COUNTRY_COMMUNITIES_SUCCESS:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesDone = true;
        draft.changableCommunities = draft.changableCommunities.concat(action.data);
        draft.hasMoreCommunity = action.data.length === 21;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_COMMUNITIES_ERROR:
      case interfaces["actionTypesCommunity"].LOAD_COUNTRY_COMMUNITIES_ERROR:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_REQUEST:
        draft.loadCategoryLoading = true;
        draft.loadCategoryDone = false;
        draft.loadCategoryError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_SUCCESS:
        draft.loadCategoryLoading = false;
        draft.loadCategoryDone = true;
        draft.singleCategory = action.data.category;
        draft.communityLength = action.data.communityLength;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_ERROR:
        draft.loadCategoryLoading = false;
        draft.loadCategoryError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORIES_REQUEST:
        draft.loadCategoriesLoading = true;
        draft.loadCategoriesDone = false;
        draft.loadCategoriesError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORIES_SUCCESS:
        draft.loadCategoriesLoading = false;
        draft.loadCategoriesDone = true;
        draft.mainCategories = draft.mainCategories.concat(action.data);
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORIES_ERROR:
        draft.loadCategoriesLoading = false;
        draft.loadCategoriesError = action.error;
        break;

      case interfaces["actionTypesCommunity"].ADD_MEET_REQUEST:
        draft.addMeetLoading = true;
        draft.addMeetDone = false;
        draft.addMeetError = null;
        break;

      case interfaces["actionTypesCommunity"].ADD_MEET_SUCCESS:
        draft.addMeetLoading = false;
        draft.addMeetDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Meets.unshift(action.data);
        }

        break;

      case interfaces["actionTypesCommunity"].ADD_MEET_ERROR:
        draft.addMeetLoading = false;
        draft.addMeetError = action.error;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_MEET_REQUEST:
        draft.removeMeetLoading = true;
        draft.removeMeetDone = false;
        draft.removeMeetError = null;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_MEET_SUCCESS:
        draft.removeMeetLoading = false;
        draft.removeMeetDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Meets = draft.singleCommunity.Meets.filter(meet => meet.id !== action.data.meetId);
        }

        break;

      case interfaces["actionTypesCommunity"].REMOVE_MEET_ERROR:
        draft.removeMeetLoading = false;
        draft.removeMeetError = action.error;
        break;

      case interfaces["actionTypesCommunity"].MODIFY_MEET_REQUEST:
      case interfaces["actionTypesCommunity"].JOIN_MEET_REQUEST:
        draft.joinMeetLoading = true;
        draft.joinMeetDone = false;
        draft.joinMeetError = null;
        break;

      case interfaces["actionTypesCommunity"].MODIFY_MEET_SUCCESS:
      case interfaces["actionTypesCommunity"].JOIN_MEET_SUCCESS:
        draft.joinMeetLoading = false;
        draft.joinMeetDone = true;

        if (draft.singleCommunity) {
          const meetIndex = draft.singleCommunity.Meets.findIndex(meet => meet.id === action.data.id);
          draft.singleCommunity.Meets[meetIndex] = action.data;
        }

        break;

      case interfaces["actionTypesCommunity"].MODIFY_MEET_ERROR:
      case interfaces["actionTypesCommunity"].JOIN_MEET_ERROR:
        draft.joinMeetLoading = false;
        draft.joinMeetError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LEAVE_MEET_REQUEST:
        draft.leaveMeetLoading = true;
        draft.leaveMeetDone = false;
        draft.leaveMeetError = null;
        break;

      case interfaces["actionTypesCommunity"].LEAVE_MEET_SUCCESS:
        draft.leaveMeetLoading = false;
        draft.leaveMeetDone = true;

        if (draft.singleCommunity) {
          const meet = draft.singleCommunity.Meets.find(meet => meet.id === action.data.meetId);

          if (meet) {
            meet.Users = meet.Users.filter(user => user.id !== action.data.userId);
          }
        }

        break;

      case interfaces["actionTypesCommunity"].LEAVE_MEET_ERROR:
        draft.leaveMeetLoading = false;
        draft.leaveMeetError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var community = (community_reducer);
// CONCATENATED MODULE: ./reducers/index.ts






const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return action.payload;

    default:
      {
        const combinedReducers = Object(external_redux_["combineReducers"])({
          user: user,
          post: post,
          community: community
        });
        return combinedReducers(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./interfaces/user/userAction.interfaces.ts
var userAction_interfaces = __webpack_require__("ov2J");

// CONCATENATED MODULE: ./sagas/user.ts




function loginAPI(data) {
  return external_axios_default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    yield Object(effects_["call"])(loginAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOG_IN_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOG_IN_ERROR,
      error: error.response.data
    });
  }
}

function logOutAPI() {
  return external_axios_default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOG_OUT_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOG_OUT_ERROR,
      error: error.response.data
    });
  }
}

function loadMyInfoAPI() {
  return external_axios_default.a.get('/user');
}

function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOAD_MY_INFO_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOAD_MY_INFO_ERROR,
      error: error.response.data
    });
  }
}

function uploadImageAPI(data) {
  return external_axios_default.a.post('/user/image', data);
}

function* uploadImage(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImageAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].UPLOAD_IMAGE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].UPLOAD_IMAGE_ERROR,
      error: error.response.data
    });
  }
}

function signUpAPI(data) {
  return external_axios_default.a.post('/user/signup', data);
}

function* signUp(action) {
  try {
    yield Object(effects_["call"])(signUpAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].SIGN_UP_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].SIGN_UP_ERROR,
      error: error.response.data
    });
  }
}

function leaveAPI(data) {
  return external_axios_default.a.delete(`/user/${data.userId}`);
}

function* leave(action) {
  try {
    yield Object(effects_["call"])(leaveAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LEAVE_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LEAVE_ERROR,
      error: error.response.data
    });
  }
}

function changeProfileAPI(data) {
  return external_axios_default.a.post('/user/profile', data);
}

function* changeProfile(action) {
  try {
    const result = yield Object(effects_["call"])(changeProfileAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHANGE_PROFILE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHANGE_PROFILE_ERROR,
      error: error.response.data
    });
  }
}

function changeCountryAPI(data) {
  return external_axios_default.a.patch('/user/country', data);
}

function* changeCountry(action) {
  try {
    const result = yield Object(effects_["call"])(changeCountryAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHANGE_COUNTRY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHANGE_COUNTRY_ERROR,
      error: error.response.data
    });
  }
}

function checkNotificationAPI() {
  return external_axios_default.a.patch('/user/notification');
}

function* checkNotification() {
  try {
    const result = yield Object(effects_["call"])(checkNotificationAPI);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHECK_NOTIFICATION_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHECK_NOTIFICATION_ERROR,
      error: error.response.data
    });
  }
}

function removeNotificationAPI(data) {
  return external_axios_default.a.delete(`/user/notification/${data.notificationId}`);
}

function* removeNotification(action) {
  try {
    const result = yield Object(effects_["call"])(removeNotificationAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].REMOVE_NOTIFICATION_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].REMOVE_NOTIFICATION_ERROR,
      error: error.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].LOG_OUT_REQUEST, logOut);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchUploadImage() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].UPLOAD_IMAGE_REQUEST, uploadImage);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].SIGN_UP_REQUEST, signUp);
}

function* watchLeave() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].LEAVE_REQUEST, leave);
}

function* watchChangeProfile() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].CHANGE_PROFILE_REQUEST, changeProfile);
}

function* watchChangeCountry() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].CHANGE_COUNTRY_REQUEST, changeCountry);
}

function* watchCheckNotification() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].CHECK_NOTIFICATION_REQUEST, checkNotification);
}

function* watchRemoveNotification() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].REMOVE_NOTIFICATION_REQUEST, removeNotification);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchUploadImage), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchLeave), Object(effects_["fork"])(watchChangeProfile), Object(effects_["fork"])(watchChangeCountry), Object(effects_["fork"])(watchCheckNotification), Object(effects_["fork"])(watchRemoveNotification)]);
}
// EXTERNAL MODULE: ./interfaces/post/postAction.interfaces.ts
var postAction_interfaces = __webpack_require__("hiaJ");

// CONCATENATED MODULE: ./sagas/post.ts




function postAPI(data) {
  return external_axios_default.a.post(`/post/${data.communityId}`, data.formData);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(postAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].ADD_POST_ERROR,
      error: error.response.data
    });
  }
}

function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/community/${data.communityId}/post/${data.postId}`);
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REMOVE_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REMOVE_POST_ERROR,
      error: error.response.data
    });
  }
}

function updatePostAPI(data) {
  return external_axios_default.a.patch(`/post/community/${data.communityId}/post/${data.postId}`, data);
}

function* updatePost(action) {
  try {
    const result = yield Object(effects_["call"])(updatePostAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPDATE_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPDATE_POST_ERROR,
      error: error.response.data
    });
  }
}

function reportPostAPI(data) {
  return external_axios_default.a.post(`/post/${data.contentId}/report`, data);
}

function* reportPost(action) {
  try {
    yield Object(effects_["call"])(reportPostAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REPORT_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REPORT_ERROR,
      error: error.response.data
    });
  }
}

function loadPostsAPI(data) {
  return external_axios_default.a.get(`/posts/community/${data.communityId}/post?lastId=${data.postId}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].LOAD_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].LOAD_POSTS_ERROR,
      error: error.response.data
    });
  }
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].ADD_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].ADD_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function updateCommentAPI(data) {
  return external_axios_default.a.patch(`/post/${data.postId}/comment/${data.commentId}`, data);
}

function* updateComment(action) {
  try {
    const result = yield Object(effects_["call"])(updateCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPDATE_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPDATE_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function removeCommentAPI(data) {
  return external_axios_default.a.delete(`/post/${data.postId}/comment/${data.commentId}`);
}

function* removeComment(action) {
  try {
    const result = yield Object(effects_["call"])(removeCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REMOVE_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REMOVE_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPLOAD_IMAGES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPLOAD_IMAGES_ERROR,
      error: error.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].ADD_POST_REQUEST, addPost);
}

function* watchUpdatePost() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].UPDATE_POST_REQUEST, updatePost);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].REMOVE_POST_REQUEST, removePost);
}

function* watchReportPost() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].REPORT_REQUEST, reportPost);
}

function* watchloadPosts() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].ADD_COMMENT_REQUEST, addComment);
}

function* watchUpdateComment() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].UPDATE_COMMENT_REQUEST, updateComment);
}

function* watchRemoveComment() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].REMOVE_COMMENT_REQUEST, removeComment);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchUpdatePost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchReportPost), Object(effects_["fork"])(watchloadPosts), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchUpdateComment), Object(effects_["fork"])(watchRemoveComment), Object(effects_["fork"])(watchUploadImages)]);
}
// EXTERNAL MODULE: ./interfaces/community/communityAction.interfaces.ts
var communityAction_interfaces = __webpack_require__("5aZt");

// CONCATENATED MODULE: ./sagas/community.ts





function uploadCommunityImageAPI(data) {
  return external_axios_default.a.post('/community/image', data);
}

function* uploadCommunityImage(action) {
  try {
    const result = yield Object(effects_["call"])(uploadCommunityImageAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].UPLOAD_COMMUNITY_IMAGE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].UPLOAD_COMMUNITY_IMAGE_ERROR,
      error: error.response.data
    });
  }
}

function changeCommunityInfoAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/info`, data);
}

function* changeCommunityInfo(action) {
  try {
    const result = yield Object(effects_["call"])(changeCommunityInfoAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].CHANGE_COMMUNITY_INFO_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].CHANGE_COMMUNITY_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].CHANGE_COMMUNITY_INFO_ERROR,
      error: error.response.data
    });
  }
}

function removeCommunityAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}`);
}

function* removeCommunity(action) {
  try {
    yield Object(effects_["call"])(removeCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_COMMUNITY_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function addCommunityAPI(data) {
  return external_axios_default.a.post('/community', data);
}

function* addCommunity(action) {
  try {
    yield Object(effects_["call"])(addCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ADD_COMMUNITY_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ADD_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function joinCommunityAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/join`);
}

function* joinCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(joinCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function acceptCommunityAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/accept/${data.userId}`, data);
}

function* acceptCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(acceptCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ACCEPT_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ACCEPT_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function refuseCommunityAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}/refuse/${data.userId}`);
}

function* refuseCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(refuseCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REFUSE_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REFUSE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function leaveCommunityAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}/leave`);
}

function* leaveCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(leaveCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_COMMUNITY_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].LEAVE_COMMUNITY_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function loadCommunityAPI(data) {
  return external_axios_default.a.get(`/community/${data.communityId}`);
}

function* loadCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(loadCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function loadCommunitiesAPI() {
  return external_axios_default.a.get('/communities');
}

function* loadCommunities() {
  try {
    const result = yield Object(effects_["call"])(loadCommunitiesAPI);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function searchCommunitiesAPI(data) {
  return external_axios_default.a.get(`/search/${encodeURIComponent(data.keyword)}`);
}

function* searchCommunities(action) {
  try {
    const result = yield Object(effects_["call"])(searchCommunitiesAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].SEARCH_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].SEARCH_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCountryCommunitiesAPI(data) {
  return external_axios_default.a.get(`/communities/country/${data.country}?lastId=${data.communityId}`);
}

function* loadCountryCommunities(action) {
  try {
    const result = yield Object(effects_["call"])(loadCountryCommunitiesAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COUNTRY_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COUNTRY_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoryCommunitiesAPI(data) {
  return external_axios_default.a.get(`/communities/category/${data.categoryId}?lastId=${data.communityId}`);
}

function* loadCategoryCommunities(action) {
  try {
    const result = yield Object(effects_["call"])(loadCategoryCommunitiesAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoryAPI(data) {
  return external_axios_default.a.get(`/community/category/${data.categoryId}`);
}

function* loadCategory(action) {
  try {
    const result = yield Object(effects_["call"])(loadCategoryAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoriesAPI() {
  return external_axios_default.a.get('/community/categories');
}

function* loadCategories() {
  try {
    const result = yield Object(effects_["call"])(loadCategoriesAPI);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORIES_ERROR,
      error: error.response.data
    });
  }
}

function addMeetAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/meet`, data);
}

function* addMeet(action) {
  try {
    const result = yield Object(effects_["call"])(addMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ADD_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].ADD_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ADD_MEET_ERROR,
      error: error.response.data
    });
  }
}

function removeMeetAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}/meet/${data.meetId}`);
}

function* removeMeet(action) {
  try {
    const result = yield Object(effects_["call"])(removeMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].REMOVE_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_MEET_ERROR,
      error: error.response.data
    });
  }
}

function joinMeetAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/meet/${data.meetId}/join`);
}

function* joinMeet(action) {
  try {
    const result = yield Object(effects_["call"])(joinMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].JOIN_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_MEET_ERROR,
      error: error.response.data
    });
  }
}

function leaveMeetAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}/meet/${data.meetId}/leave`);
}

function* leaveMeet(action) {
  try {
    const result = yield Object(effects_["call"])(leaveMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].LEAVE_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_MEET_ERROR,
      error: error.response.data
    });
  }
}

function modifyMeetAPI(data) {
  return external_axios_default.a.patch(`/community/${data.communityId}/meet/${data.meetId}`, data);
}

function* modifyMeet(action) {
  try {
    const result = yield Object(effects_["call"])(modifyMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].MODIFY_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].MODIFY_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].MODIFY_MEET_ERROR,
      error: error.response.data
    });
  }
}

function* watchUploadCommunityImage() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].UPLOAD_COMMUNITY_IMAGE_REQUEST, uploadCommunityImage);
}

function* watchChangeCommunityInfo() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].CHANGE_COMMUNITY_INFO_REQUEST, changeCommunityInfo);
}

function* watchRemoveCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_COMMUNITY_REQUEST, removeCommunity);
}

function* watchAddCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].ADD_COMMUNITY_REQUEST, addCommunity);
}

function* watchJoinCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_COMMUNITY_REQUEST, joinCommunity);
}

function* watchAcceptCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].ACCEPT_COMMUNITY_REQUEST, acceptCommunity);
}

function* watchRefuseCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].REFUSE_COMMUNITY_REQUEST, refuseCommunity);
}

function* watchLeaveCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_COMMUNITY_REQUEST, leaveCommunity);
}

function* watchLoadCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITY_REQUEST, loadCommunity);
}

function* watchLoadCommunities() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITIES_REQUEST, loadCommunities);
}

function* watchsearchCommunities() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].SEARCH_COMMUNITIES_REQUEST, searchCommunities);
}

function* watchLoadCountryCommunities() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COUNTRY_COMMUNITIES_REQUEST, loadCountryCommunities);
}

function* watchLoadCategoryCommunities() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_COMMUNITIES_REQUEST, loadCategoryCommunities);
}

function* watchLoadCategory() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_REQUEST, loadCategory);
}

function* watchLoadCategories() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORIES_REQUEST, loadCategories);
}

function* watchAddMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].ADD_MEET_REQUEST, addMeet);
}

function* watchRemoveMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_MEET_REQUEST, removeMeet);
}

function* watchJoinMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_MEET_REQUEST, joinMeet);
}

function* watchLeaveMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_MEET_REQUEST, leaveMeet);
}

function* watchModifyMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].MODIFY_MEET_REQUEST, modifyMeet);
}

function* communitySaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchUploadCommunityImage), Object(effects_["fork"])(watchChangeCommunityInfo), Object(effects_["fork"])(watchRemoveCommunity), Object(effects_["fork"])(watchAddCommunity), Object(effects_["fork"])(watchJoinCommunity), Object(effects_["fork"])(watchAcceptCommunity), Object(effects_["fork"])(watchRefuseCommunity), Object(effects_["fork"])(watchLeaveCommunity), Object(effects_["fork"])(watchLoadCommunity), Object(effects_["fork"])(watchLoadCommunities), Object(effects_["fork"])(watchsearchCommunities), Object(effects_["fork"])(watchLoadCountryCommunities), Object(effects_["fork"])(watchLoadCategoryCommunities), Object(effects_["fork"])(watchLoadCategory), Object(effects_["fork"])(watchLoadCategories), Object(effects_["fork"])(watchAddMeet), Object(effects_["fork"])(watchRemoveMeet), Object(effects_["fork"])(watchJoinMeet), Object(effects_["fork"])(watchLeaveMeet), Object(effects_["fork"])(watchModifyMeet)]);
}
// CONCATENATED MODULE: ./sagas/index.ts





external_axios_default.a.defaults.baseURL = "http://api.jinu-community.site";
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(userSaga), Object(effects_["fork"])(postSaga), Object(effects_["fork"])(communitySaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.tsx







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });