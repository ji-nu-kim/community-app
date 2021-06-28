exports.id = 5902;
exports.ids = [5902];
exports.modules = {

/***/ 5902:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tP": function() { return /* binding */ loginRequestAction; },
/* harmony export */   "pt": function() { return /* binding */ logOutRequestAction; },
/* harmony export */   "J5": function() { return /* binding */ loadMyInfoRequestAction; },
/* harmony export */   "CM": function() { return /* binding */ removeImage; },
/* harmony export */   "CS": function() { return /* binding */ uploadImageRequestAction; },
/* harmony export */   "JE": function() { return /* binding */ signUpRequestAction; },
/* harmony export */   "WZ": function() { return /* binding */ leaveRequestAction; },
/* harmony export */   "eI": function() { return /* binding */ changeProfileRequestAction; },
/* harmony export */   "S3": function() { return /* binding */ changeCountryRequestAction; },
/* harmony export */   "K4": function() { return /* binding */ checkNotificationRequestAction; },
/* harmony export */   "_9": function() { return /* binding */ removeNotificationRequestAction; }
/* harmony export */ });
/* unused harmony exports addMeetOfMe, removeMeetOfMe, modifyMeetOfMe, joinMeetOfMe, leaveMeetOfMe, leaveCommunityOfMe, changeCommunityOfMe */
/* harmony import */ var _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);

const loginRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.LOG_IN_REQUEST */ .u.LOG_IN_REQUEST,
    data
  };
};
const logOutRequestAction = () => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.LOG_OUT_REQUEST */ .u.LOG_OUT_REQUEST
  };
};
const loadMyInfoRequestAction = () => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.LOAD_MY_INFO_REQUEST */ .u.LOAD_MY_INFO_REQUEST
  };
};
const removeImage = () => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.REMOVE_IMAGE */ .u.REMOVE_IMAGE
  };
};
const uploadImageRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.UPLOAD_IMAGE_REQUEST */ .u.UPLOAD_IMAGE_REQUEST,
    data
  };
};
const signUpRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.SIGN_UP_REQUEST */ .u.SIGN_UP_REQUEST,
    data
  };
};
const leaveRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.LEAVE_REQUEST */ .u.LEAVE_REQUEST,
    data
  };
};
const changeProfileRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.CHANGE_PROFILE_REQUEST */ .u.CHANGE_PROFILE_REQUEST,
    data
  };
};
const changeCountryRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.CHANGE_COUNTRY_REQUEST */ .u.CHANGE_COUNTRY_REQUEST,
    data
  };
};
const checkNotificationRequestAction = () => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.CHECK_NOTIFICATION_REQUEST */ .u.CHECK_NOTIFICATION_REQUEST
  };
};
const removeNotificationRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__/* .actionTypesUser.REMOVE_NOTIFICATION_REQUEST */ .u.REMOVE_NOTIFICATION_REQUEST,
    data
  };
};
const addMeetOfMe = data => {
  return {
    type: actionTypesUser.ADD_MEET_OF_ME,
    data
  };
};
const removeMeetOfMe = data => {
  return {
    type: actionTypesUser.REMOVE_MEET_OF_ME,
    data
  };
};
const modifyMeetOfMe = data => {
  return {
    type: actionTypesUser.MODIFY_MEET_OF_ME,
    data
  };
};
const joinMeetOfMe = data => {
  return {
    type: actionTypesUser.JOIN_MEET_OF_ME,
    data
  };
};
const leaveMeetOfMe = data => {
  return {
    type: actionTypesUser.LEAVE_MEET_OF_ME,
    data
  };
};
const leaveCommunityOfMe = data => {
  return {
    type: actionTypesUser.LEAVE_COMMUNITY_OF_ME,
    data
  };
};
const changeCommunityOfMe = data => {
  return {
    type: actionTypesUser.CHANGE_COMMUNITY_OF_ME,
    data
  };
};

/***/ })

};
;