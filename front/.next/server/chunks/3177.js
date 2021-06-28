exports.id = 3177;
exports.ids = [3177];
exports.modules = {

/***/ 7898:
/***/ (function() {



/***/ }),

/***/ 8420:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ actionTypesCommunity; }
/* harmony export */ });
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

/***/ 7697:
/***/ (function() {



/***/ }),

/***/ 8518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ actionTypesPost; }
/* harmony export */ });
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

/***/ 6813:
/***/ (function() {



/***/ }),

/***/ 3177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ store_configureStore; }
});

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(2744);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(7561);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(5176);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);
// EXTERNAL MODULE: ./interfaces/user/user.interfaces.ts
var user_interfaces = __webpack_require__(6813);
// EXTERNAL MODULE: ./interfaces/user/userAction.interfaces.ts
var userAction_interfaces = __webpack_require__(2245);
// EXTERNAL MODULE: ./interfaces/post/post.interfaces.ts
var post_interfaces = __webpack_require__(7697);
// EXTERNAL MODULE: ./interfaces/post/postAction.interfaces.ts
var postAction_interfaces = __webpack_require__(8518);
// EXTERNAL MODULE: ./interfaces/community/community.interfaces.ts
var community_interfaces = __webpack_require__(7898);
// EXTERNAL MODULE: ./interfaces/community/communityAction.interfaces.ts
var communityAction_interfaces = __webpack_require__(8420);
;// CONCATENATED MODULE: ./interfaces/index.ts






// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__(4584);
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);
;// CONCATENATED MODULE: ./reducers/user.ts


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
      case userAction_interfaces/* actionTypesUser.LOG_IN_REQUEST */.u.LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case userAction_interfaces/* actionTypesUser.LOG_IN_SUCCESS */.u.LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        break;

      case userAction_interfaces/* actionTypesUser.LOG_IN_ERROR */.u.LOG_IN_ERROR:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.LOG_OUT_REQUEST */.u.LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case userAction_interfaces/* actionTypesUser.LOG_OUT_SUCCESS */.u.LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.me = null;
        break;

      case userAction_interfaces/* actionTypesUser.LOG_OUT_ERROR */.u.LOG_OUT_ERROR:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.LOAD_MY_INFO_REQUEST */.u.LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case userAction_interfaces/* actionTypesUser.LOAD_MY_INFO_SUCCESS */.u.LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case userAction_interfaces/* actionTypesUser.LOAD_MY_INFO_ERROR */.u.LOAD_MY_INFO_ERROR:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.UPLOAD_IMAGE_REQUEST */.u.UPLOAD_IMAGE_REQUEST:
        draft.uploadImageLoading = true;
        draft.uploadImageDone = false;
        draft.uploadImageError = null;
        break;

      case userAction_interfaces/* actionTypesUser.UPLOAD_IMAGE_SUCCESS */.u.UPLOAD_IMAGE_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadImageLoading = false;
        draft.uploadImageDone = true;
        break;

      case userAction_interfaces/* actionTypesUser.UPLOAD_IMAGE_ERROR */.u.UPLOAD_IMAGE_ERROR:
        draft.uploadImageLoading = false;
        draft.uploadImageError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.REMOVE_IMAGE */.u.REMOVE_IMAGE:
        draft.imagePath = [];
        draft.uploadImageDone = false;
        break;

      case userAction_interfaces/* actionTypesUser.SIGN_UP_REQUEST */.u.SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case userAction_interfaces/* actionTypesUser.SIGN_UP_SUCCESS */.u.SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case userAction_interfaces/* actionTypesUser.SIGN_UP_ERROR */.u.SIGN_UP_ERROR:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.LEAVE_REQUEST */.u.LEAVE_REQUEST:
        draft.leaveLoading = true;
        draft.leaveDone = false;
        draft.leaveError = null;
        break;

      case userAction_interfaces/* actionTypesUser.LEAVE_SUCCESS */.u.LEAVE_SUCCESS:
        draft.leaveLoading = false;
        draft.leaveDone = true;
        draft.me = null;
        break;

      case userAction_interfaces/* actionTypesUser.LEAVE_ERROR */.u.LEAVE_ERROR:
        draft.leaveLoading = false;
        draft.leaveError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.CHANGE_PROFILE_REQUEST */.u.CHANGE_PROFILE_REQUEST:
        draft.changeProfileLoading = true;
        draft.changeProfileDone = false;
        draft.changeProfileError = null;
        break;

      case userAction_interfaces/* actionTypesUser.CHANGE_PROFILE_SUCCESS */.u.CHANGE_PROFILE_SUCCESS:
        draft.changeProfileLoading = false;
        draft.changeProfileDone = true;
        draft.me = action.data;
        draft.imagePath = [];
        break;

      case userAction_interfaces/* actionTypesUser.CHANGE_PROFILE_ERROR */.u.CHANGE_PROFILE_ERROR:
        draft.changeProfileLoading = false;
        draft.changeProfileError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.CHANGE_COUNTRY_REQUEST */.u.CHANGE_COUNTRY_REQUEST:
        draft.changeCountryLoading = true;
        draft.changeCountryDone = false;
        draft.changeCountryError = null;
        break;

      case userAction_interfaces/* actionTypesUser.CHANGE_COUNTRY_SUCCESS */.u.CHANGE_COUNTRY_SUCCESS:
        draft.changeCountryLoading = false;
        draft.changeCountryDone = true;

        if (draft.me) {
          draft.me.country = action.data.country;
        }

        break;

      case userAction_interfaces/* actionTypesUser.CHANGE_COUNTRY_ERROR */.u.CHANGE_COUNTRY_ERROR:
        draft.changeCountryLoading = false;
        draft.changeCountryError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.CHECK_NOTIFICATION_REQUEST */.u.CHECK_NOTIFICATION_REQUEST:
        draft.checkNotificationLoading = true;
        draft.checkNotificationDone = false;
        draft.checkNotificationError = null;
        break;

      case userAction_interfaces/* actionTypesUser.CHECK_NOTIFICATION_SUCCESS */.u.CHECK_NOTIFICATION_SUCCESS:
        draft.checkNotificationLoading = false;
        draft.checkNotificationDone = true;

        if (draft.me) {
          draft.me.Notices = action.data;
        }

        break;

      case userAction_interfaces/* actionTypesUser.CHECK_NOTIFICATION_ERROR */.u.CHECK_NOTIFICATION_ERROR:
        draft.checkNotificationLoading = false;
        draft.checkNotificationError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.REMOVE_NOTIFICATION_REQUEST */.u.REMOVE_NOTIFICATION_REQUEST:
        draft.removeNotificationLoading = true;
        draft.removeNotificationDone = false;
        draft.removeNotificationError = null;
        break;

      case userAction_interfaces/* actionTypesUser.REMOVE_NOTIFICATION_SUCCESS */.u.REMOVE_NOTIFICATION_SUCCESS:
        draft.removeNotificationLoading = false;
        draft.removeNotificationDone = true;

        if (draft.me) {
          draft.me.Notices = draft.me.Notices.filter(notice => notice.id !== action.data.notificationId);
        }

        break;

      case userAction_interfaces/* actionTypesUser.REMOVE_NOTIFICATION_ERROR */.u.REMOVE_NOTIFICATION_ERROR:
        draft.removeNotificationLoading = false;
        draft.removeNotificationError = action.error;
        break;

      case userAction_interfaces/* actionTypesUser.JOIN_MEET_OF_ME */.u.JOIN_MEET_OF_ME:
      case userAction_interfaces/* actionTypesUser.ADD_MEET_OF_ME */.u.ADD_MEET_OF_ME:
        if (draft.me) {
          draft.me.Meets.unshift(action.data);
        }

        break;

      case userAction_interfaces/* actionTypesUser.LEAVE_MEET_OF_ME */.u.LEAVE_MEET_OF_ME:
      case userAction_interfaces/* actionTypesUser.REMOVE_MEET_OF_ME */.u.REMOVE_MEET_OF_ME:
        if (draft.me) {
          draft.me.Meets = draft.me.Meets.filter(meet => meet.id !== action.data.meetId);
        }

        break;

      case userAction_interfaces/* actionTypesUser.MODIFY_MEET_OF_ME */.u.MODIFY_MEET_OF_ME:
        if (draft.me) {
          const meetIndex = draft.me.Meets.findIndex(meet => meet.id === action.data.id);
          draft.me.Meets[meetIndex] = action.data;
        }

        break;

      case userAction_interfaces/* actionTypesUser.LEAVE_COMMUNITY_OF_ME */.u.LEAVE_COMMUNITY_OF_ME:
        if (draft.me && draft.me.id === action.data.userId) {
          draft.me.Communities = draft.me.Communities.filter(community => community.id !== action.data.communityId);
        }

        break;

      case userAction_interfaces/* actionTypesUser.CHANGE_COMMUNITY_OF_ME */.u.CHANGE_COMMUNITY_OF_ME:
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
;// CONCATENATED MODULE: ./reducers/post.ts


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
      case postAction_interfaces/* actionTypesPost.ADD_POST_REQUEST */.O.ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case postAction_interfaces/* actionTypesPost.ADD_POST_SUCCESS */.O.ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        draft.mainPosts.unshift(action.data);
        break;

      case postAction_interfaces/* actionTypesPost.ADD_POST_ERROR */.O.ADD_POST_ERROR:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.REMOVE_POST_REQUEST */.O.REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case postAction_interfaces/* actionTypesPost.REMOVE_POST_SUCCESS */.O.REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.postId);
        break;

      case postAction_interfaces/* actionTypesPost.REMOVE_POST_ERROR */.O.REMOVE_POST_ERROR:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.UPDATE_POST_REQUEST */.O.UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;

      case postAction_interfaces/* actionTypesPost.UPDATE_POST_SUCCESS */.O.UPDATE_POST_SUCCESS:
        {
          draft.updatePostLoading = false;
          draft.updatePostDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.postId);

          if (post) {
            post.content = action.data.content;
          }

          break;
        }

      case postAction_interfaces/* actionTypesPost.UPDATE_POST_ERROR */.O.UPDATE_POST_ERROR:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.REPORT_REQUEST */.O.REPORT_REQUEST:
        draft.reportLoading = true;
        draft.reportDone = false;
        draft.reportError = null;
        break;

      case postAction_interfaces/* actionTypesPost.REPORT_SUCCESS */.O.REPORT_SUCCESS:
        draft.reportLoading = false;
        draft.reportDone = true;
        break;

      case postAction_interfaces/* actionTypesPost.REPORT_ERROR */.O.REPORT_ERROR:
        draft.reportLoading = false;
        draft.reportError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.LOAD_POSTS_REQUEST */.O.LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case postAction_interfaces/* actionTypesPost.LOAD_POSTS_SUCCESS */.O.LOAD_POSTS_SUCCESS:
        {
          draft.loadPostsLoading = false;
          draft.loadPostsDone = true;
          draft.mainPosts = draft.mainPosts.concat(action.data);
          draft.hasMorePost = action.data.length === 10;
          break;
        }

      case postAction_interfaces/* actionTypesPost.LOAD_POSTS_ERROR */.O.LOAD_POSTS_ERROR:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.ADD_COMMENT_REQUEST */.O.ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case postAction_interfaces/* actionTypesPost.ADD_COMMENT_SUCCESS */.O.ADD_COMMENT_SUCCESS:
        {
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);

          if (post) {
            post.Comments.unshift(action.data);
          }

          break;
        }

      case postAction_interfaces/* actionTypesPost.ADD_COMMENT_ERROR */.O.ADD_COMMENT_ERROR:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.UPDATE_COMMENT_REQUEST */.O.UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;

      case postAction_interfaces/* actionTypesPost.UPDATE_COMMENT_SUCCESS */.O.UPDATE_COMMENT_SUCCESS:
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

      case postAction_interfaces/* actionTypesPost.UPDATE_COMMENT_ERROR */.O.UPDATE_COMMENT_ERROR:
        draft.updateCommentLoading = false;
        draft.updateCommentError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.REMOVE_COMMENT_REQUEST */.O.REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;

      case postAction_interfaces/* actionTypesPost.REMOVE_COMMENT_SUCCESS */.O.REMOVE_COMMENT_SUCCESS:
        {
          draft.removeCommentLoading = false;
          draft.removeCommentDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.postId);

          if (post) {
            post.Comments = post.Comments.filter(v => v.id !== action.data.commentId);
          }

          break;
        }

      case postAction_interfaces/* actionTypesPost.REMOVE_COMMENT_ERROR */.O.REMOVE_COMMENT_ERROR:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.UPLOAD_IMAGES_REQUEST */.O.UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case postAction_interfaces/* actionTypesPost.UPLOAD_IMAGES_SUCCESS */.O.UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case postAction_interfaces/* actionTypesPost.UPLOAD_IMAGES_ERROR */.O.UPLOAD_IMAGES_ERROR:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case postAction_interfaces/* actionTypesPost.REMOVE_IMAGE */.O.REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var post = (post_reducer);
;// CONCATENATED MODULE: ./reducers/community.ts


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
      case communityAction_interfaces/* actionTypesCommunity.REMOVE_COMMUNITY_IMAGE */.I.REMOVE_COMMUNITY_IMAGE:
        draft.imagePath = [];
        draft.uploadCommunityImageDone = false;
        break;

      case communityAction_interfaces/* actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_REQUEST */.I.UPLOAD_COMMUNITY_IMAGE_REQUEST:
        draft.uploadCommunityImageLoading = true;
        draft.uploadCommunityImageDone = false;
        draft.uploadCommunityImageError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_SUCCESS */.I.UPLOAD_COMMUNITY_IMAGE_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadCommunityImageLoading = false;
        draft.uploadCommunityImageDone = true;
        break;

      case communityAction_interfaces/* actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_ERROR */.I.UPLOAD_COMMUNITY_IMAGE_ERROR:
        draft.uploadCommunityImageLoading = false;
        draft.uploadCommunityImageError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.CHANGE_COMMUNITY_INFO_REQUEST */.I.CHANGE_COMMUNITY_INFO_REQUEST:
        draft.changeCommunityInfoLoading = true;
        draft.changeCommunityInfoDone = false;
        draft.changeCommunityInfoError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.CHANGE_COMMUNITY_INFO_SUCCESS */.I.CHANGE_COMMUNITY_INFO_SUCCESS:
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

      case communityAction_interfaces/* actionTypesCommunity.CHANGE_COMMUNITY_INFO_ERROR */.I.CHANGE_COMMUNITY_INFO_ERROR:
        draft.changeCommunityInfoLoading = false;
        draft.changeCommunityInfoError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.ADD_COMMUNITY_REQUEST */.I.ADD_COMMUNITY_REQUEST:
        draft.addCommunityLoading = true;
        draft.addCommunityDone = false;
        draft.addCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.ADD_COMMUNITY_SUCCESS */.I.ADD_COMMUNITY_SUCCESS:
        draft.addCommunityLoading = false;
        draft.addCommunityDone = true;
        break;

      case communityAction_interfaces/* actionTypesCommunity.ADD_COMMUNITY_ERROR */.I.ADD_COMMUNITY_ERROR:
        draft.addCommunityLoading = false;
        draft.addCommunityError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.REMOVE_COMMUNITY_REQUEST */.I.REMOVE_COMMUNITY_REQUEST:
        draft.removeCommunityLoading = true;
        draft.removeCommunityDone = false;
        draft.removeCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.REMOVE_COMMUNITY_SUCCESS */.I.REMOVE_COMMUNITY_SUCCESS:
        draft.removeCommunityLoading = false;
        draft.removeCommunityDone = true;
        break;

      case communityAction_interfaces/* actionTypesCommunity.REMOVE_COMMUNITY_ERROR */.I.REMOVE_COMMUNITY_ERROR:
        draft.removeCommunityLoading = false;
        draft.removeCommunityError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.JOIN_COMMUNITY_REQUEST */.I.JOIN_COMMUNITY_REQUEST:
        draft.joinCommunityLoading = true;
        draft.joinCommunityDone = false;
        draft.joinCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.JOIN_COMMUNITY_SUCCESS */.I.JOIN_COMMUNITY_SUCCESS:
        draft.joinCommunityLoading = false;
        draft.joinCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.concat(action.data);
        }

        break;

      case communityAction_interfaces/* actionTypesCommunity.JOIN_COMMUNITY_ERROR */.I.JOIN_COMMUNITY_ERROR:
        draft.joinCommunityLoading = false;
        draft.joinCommunityError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.ACCEPT_COMMUNITY_REQUEST */.I.ACCEPT_COMMUNITY_REQUEST:
        draft.acceptCommunityLoading = true;
        draft.acceptCommunityDone = false;
        draft.acceptCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.ACCEPT_COMMUNITY_SUCCESS */.I.ACCEPT_COMMUNITY_SUCCESS:
        draft.acceptCommunityLoading = false;
        draft.acceptCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Users = draft.singleCommunity.Users.concat(action.data);
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.filter(user => user.id != action.data.id);
        }

        break;

      case communityAction_interfaces/* actionTypesCommunity.ACCEPT_COMMUNITY_ERROR */.I.ACCEPT_COMMUNITY_ERROR:
        draft.acceptCommunityLoading = false;
        draft.acceptCommunityError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.REFUSE_COMMUNITY_REQUEST */.I.REFUSE_COMMUNITY_REQUEST:
        draft.refuseCommunityLoading = true;
        draft.refuseCommunityDone = false;
        draft.refuseCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.REFUSE_COMMUNITY_SUCCESS */.I.REFUSE_COMMUNITY_SUCCESS:
        draft.refuseCommunityLoading = false;
        draft.refuseCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.filter(user => user.id != action.data.userId);
        }

        break;

      case communityAction_interfaces/* actionTypesCommunity.REFUSE_COMMUNITY_ERROR */.I.REFUSE_COMMUNITY_ERROR:
        draft.refuseCommunityLoading = true;
        draft.refuseCommunityDone = false;
        draft.refuseCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LEAVE_COMMUNITY_REQUEST */.I.LEAVE_COMMUNITY_REQUEST:
        draft.leaveCommunityLoading = true;
        draft.leaveCommunityDone = false;
        draft.leaveCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LEAVE_COMMUNITY_SUCCESS */.I.LEAVE_COMMUNITY_SUCCESS:
        draft.leaveCommunityLoading = false;
        draft.leaveCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Users = draft.singleCommunity.Users.filter(user => user.id != action.data.userId);
        }

        break;

      case communityAction_interfaces/* actionTypesCommunity.LEAVE_COMMUNITY_ERROR */.I.LEAVE_COMMUNITY_ERROR:
        draft.leaveCommunityLoading = true;
        draft.leaveCommunityDone = false;
        draft.leaveCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITY_REQUEST */.I.LOAD_COMMUNITY_REQUEST:
        draft.loadCommunityLoading = true;
        draft.loadCommunityDone = false;
        draft.loadCommunityError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITY_SUCCESS */.I.LOAD_COMMUNITY_SUCCESS:
        draft.loadCommunityLoading = false;
        draft.loadCommunityDone = true;
        draft.singleCommunity = action.data;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITY_ERROR */.I.LOAD_COMMUNITY_ERROR:
        draft.loadCommunityLoading = false;
        draft.loadCommunityError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITIES_REQUEST */.I.LOAD_COMMUNITIES_REQUEST:
        draft.loadCommunitiesLoading = true;
        draft.loadCommunitiesDone = false;
        draft.loadCommunitiesError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITIES_SUCCESS */.I.LOAD_COMMUNITIES_SUCCESS:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesDone = true;
        draft.mainCommunities = draft.mainCommunities.concat(action.data);
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITIES_ERROR */.I.LOAD_COMMUNITIES_ERROR:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.SEARCH_COMMUNITIES_REQUEST */.I.SEARCH_COMMUNITIES_REQUEST:
        draft.searchCommunitiesLoading = true;
        draft.searchCommunitiesDone = false;
        draft.searchCommunitiesError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.SEARCH_COMMUNITIES_SUCCESS */.I.SEARCH_COMMUNITIES_SUCCESS:
        draft.searchCommunitiesLoading = false;
        draft.searchCommunitiesDone = true;
        draft.changableCommunities = draft.changableCommunities.concat(action.data);
        break;

      case communityAction_interfaces/* actionTypesCommunity.SEARCH_COMMUNITIES_ERROR */.I.SEARCH_COMMUNITIES_ERROR:
        draft.searchCommunitiesLoading = false;
        draft.searchCommunitiesError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_REQUEST */.I.LOAD_CATEGORY_COMMUNITIES_REQUEST:
      case communityAction_interfaces/* actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_REQUEST */.I.LOAD_COUNTRY_COMMUNITIES_REQUEST:
        draft.loadCommunitiesLoading = true;
        draft.loadCommunitiesDone = false;
        draft.loadCommunitiesError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_SUCCESS */.I.LOAD_CATEGORY_COMMUNITIES_SUCCESS:
      case communityAction_interfaces/* actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_SUCCESS */.I.LOAD_COUNTRY_COMMUNITIES_SUCCESS:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesDone = true;
        draft.changableCommunities = draft.changableCommunities.concat(action.data);
        draft.hasMoreCommunity = action.data.length === 21;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_ERROR */.I.LOAD_CATEGORY_COMMUNITIES_ERROR:
      case communityAction_interfaces/* actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_ERROR */.I.LOAD_COUNTRY_COMMUNITIES_ERROR:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_REQUEST */.I.LOAD_CATEGORY_REQUEST:
        draft.loadCategoryLoading = true;
        draft.loadCategoryDone = false;
        draft.loadCategoryError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_SUCCESS */.I.LOAD_CATEGORY_SUCCESS:
        draft.loadCategoryLoading = false;
        draft.loadCategoryDone = true;
        draft.singleCategory = action.data.category;
        draft.communityLength = action.data.communityLength;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_ERROR */.I.LOAD_CATEGORY_ERROR:
        draft.loadCategoryLoading = false;
        draft.loadCategoryError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORIES_REQUEST */.I.LOAD_CATEGORIES_REQUEST:
        draft.loadCategoriesLoading = true;
        draft.loadCategoriesDone = false;
        draft.loadCategoriesError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORIES_SUCCESS */.I.LOAD_CATEGORIES_SUCCESS:
        draft.loadCategoriesLoading = false;
        draft.loadCategoriesDone = true;
        draft.mainCategories = draft.mainCategories.concat(action.data);
        break;

      case communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORIES_ERROR */.I.LOAD_CATEGORIES_ERROR:
        draft.loadCategoriesLoading = false;
        draft.loadCategoriesError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.ADD_MEET_REQUEST */.I.ADD_MEET_REQUEST:
        draft.addMeetLoading = true;
        draft.addMeetDone = false;
        draft.addMeetError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.ADD_MEET_SUCCESS */.I.ADD_MEET_SUCCESS:
        draft.addMeetLoading = false;
        draft.addMeetDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Meets.unshift(action.data);
        }

        break;

      case communityAction_interfaces/* actionTypesCommunity.ADD_MEET_ERROR */.I.ADD_MEET_ERROR:
        draft.addMeetLoading = false;
        draft.addMeetError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.REMOVE_MEET_REQUEST */.I.REMOVE_MEET_REQUEST:
        draft.removeMeetLoading = true;
        draft.removeMeetDone = false;
        draft.removeMeetError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.REMOVE_MEET_SUCCESS */.I.REMOVE_MEET_SUCCESS:
        draft.removeMeetLoading = false;
        draft.removeMeetDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Meets = draft.singleCommunity.Meets.filter(meet => meet.id !== action.data.meetId);
        }

        break;

      case communityAction_interfaces/* actionTypesCommunity.REMOVE_MEET_ERROR */.I.REMOVE_MEET_ERROR:
        draft.removeMeetLoading = false;
        draft.removeMeetError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.MODIFY_MEET_REQUEST */.I.MODIFY_MEET_REQUEST:
      case communityAction_interfaces/* actionTypesCommunity.JOIN_MEET_REQUEST */.I.JOIN_MEET_REQUEST:
        draft.joinMeetLoading = true;
        draft.joinMeetDone = false;
        draft.joinMeetError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.MODIFY_MEET_SUCCESS */.I.MODIFY_MEET_SUCCESS:
      case communityAction_interfaces/* actionTypesCommunity.JOIN_MEET_SUCCESS */.I.JOIN_MEET_SUCCESS:
        draft.joinMeetLoading = false;
        draft.joinMeetDone = true;

        if (draft.singleCommunity) {
          const meetIndex = draft.singleCommunity.Meets.findIndex(meet => meet.id === action.data.id);
          draft.singleCommunity.Meets[meetIndex] = action.data;
        }

        break;

      case communityAction_interfaces/* actionTypesCommunity.MODIFY_MEET_ERROR */.I.MODIFY_MEET_ERROR:
      case communityAction_interfaces/* actionTypesCommunity.JOIN_MEET_ERROR */.I.JOIN_MEET_ERROR:
        draft.joinMeetLoading = false;
        draft.joinMeetError = action.error;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LEAVE_MEET_REQUEST */.I.LEAVE_MEET_REQUEST:
        draft.leaveMeetLoading = true;
        draft.leaveMeetDone = false;
        draft.leaveMeetError = null;
        break;

      case communityAction_interfaces/* actionTypesCommunity.LEAVE_MEET_SUCCESS */.I.LEAVE_MEET_SUCCESS:
        draft.leaveMeetLoading = false;
        draft.leaveMeetDone = true;

        if (draft.singleCommunity) {
          const meet = draft.singleCommunity.Meets.find(meet => meet.id === action.data.meetId);

          if (meet) {
            meet.Users = meet.Users.filter(user => user.id !== action.data.userId);
          }
        }

        break;

      case communityAction_interfaces/* actionTypesCommunity.LEAVE_MEET_ERROR */.I.LEAVE_MEET_ERROR:
        draft.leaveMeetLoading = false;
        draft.leaveMeetError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var community = (community_reducer);
;// CONCATENATED MODULE: ./reducers/index.ts






const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_.HYDRATE:
      return action.payload;

    default:
      {
        const combinedReducers = (0,external_redux_.combineReducers)({
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
var effects_ = __webpack_require__(5060);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./sagas/user.ts




function loginAPI(data) {
  return external_axios_default().post('/user/login', data);
}

function* logIn(action) {
  try {
    yield (0,effects_.call)(loginAPI, action.data);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LOG_IN_SUCCESS */.u.LOG_IN_SUCCESS
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LOG_IN_ERROR */.u.LOG_IN_ERROR,
      error: error.response.data
    });
  }
}

function logOutAPI() {
  return external_axios_default().post('/user/logout');
}

function* logOut() {
  try {
    yield (0,effects_.call)(logOutAPI);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LOG_OUT_SUCCESS */.u.LOG_OUT_SUCCESS
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LOG_OUT_ERROR */.u.LOG_OUT_ERROR,
      error: error.response.data
    });
  }
}

function loadMyInfoAPI() {
  return external_axios_default().get('/user');
}

function* loadMyInfo() {
  try {
    const result = yield (0,effects_.call)(loadMyInfoAPI);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LOAD_MY_INFO_SUCCESS */.u.LOAD_MY_INFO_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LOAD_MY_INFO_ERROR */.u.LOAD_MY_INFO_ERROR,
      error: error.response.data
    });
  }
}

function uploadImageAPI(data) {
  return external_axios_default().post('/user/image', data);
}

function* uploadImage(action) {
  try {
    const result = yield (0,effects_.call)(uploadImageAPI, action.data);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.UPLOAD_IMAGE_SUCCESS */.u.UPLOAD_IMAGE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.UPLOAD_IMAGE_ERROR */.u.UPLOAD_IMAGE_ERROR,
      error: error.response.data
    });
  }
}

function signUpAPI(data) {
  return external_axios_default().post('/user/signup', data);
}

function* signUp(action) {
  try {
    yield (0,effects_.call)(signUpAPI, action.data);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.SIGN_UP_SUCCESS */.u.SIGN_UP_SUCCESS
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.SIGN_UP_ERROR */.u.SIGN_UP_ERROR,
      error: error.response.data
    });
  }
}

function leaveAPI(data) {
  return external_axios_default().delete(`/user/${data.userId}`);
}

function* leave(action) {
  try {
    yield (0,effects_.call)(leaveAPI, action.data);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LEAVE_SUCCESS */.u.LEAVE_SUCCESS
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LEAVE_ERROR */.u.LEAVE_ERROR,
      error: error.response.data
    });
  }
}

function changeProfileAPI(data) {
  return external_axios_default().post('/user/profile', data);
}

function* changeProfile(action) {
  try {
    const result = yield (0,effects_.call)(changeProfileAPI, action.data);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.CHANGE_PROFILE_SUCCESS */.u.CHANGE_PROFILE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.CHANGE_PROFILE_ERROR */.u.CHANGE_PROFILE_ERROR,
      error: error.response.data
    });
  }
}

function changeCountryAPI(data) {
  return external_axios_default().patch('/user/country', data);
}

function* changeCountry(action) {
  try {
    const result = yield (0,effects_.call)(changeCountryAPI, action.data);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.CHANGE_COUNTRY_SUCCESS */.u.CHANGE_COUNTRY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.CHANGE_COUNTRY_ERROR */.u.CHANGE_COUNTRY_ERROR,
      error: error.response.data
    });
  }
}

function checkNotificationAPI() {
  return external_axios_default().patch('/user/notification');
}

function* checkNotification() {
  try {
    const result = yield (0,effects_.call)(checkNotificationAPI);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.CHECK_NOTIFICATION_SUCCESS */.u.CHECK_NOTIFICATION_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.CHECK_NOTIFICATION_ERROR */.u.CHECK_NOTIFICATION_ERROR,
      error: error.response.data
    });
  }
}

function removeNotificationAPI(data) {
  return external_axios_default().delete(`/user/notification/${data.notificationId}`);
}

function* removeNotification(action) {
  try {
    const result = yield (0,effects_.call)(removeNotificationAPI, action.data);
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.REMOVE_NOTIFICATION_SUCCESS */.u.REMOVE_NOTIFICATION_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.REMOVE_NOTIFICATION_ERROR */.u.REMOVE_NOTIFICATION_ERROR,
      error: error.response.data
    });
  }
}

function* watchLogIn() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.LOG_IN_REQUEST */.u.LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.LOG_OUT_REQUEST */.u.LOG_OUT_REQUEST, logOut);
}

function* watchLoadMyInfo() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.LOAD_MY_INFO_REQUEST */.u.LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchUploadImage() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.UPLOAD_IMAGE_REQUEST */.u.UPLOAD_IMAGE_REQUEST, uploadImage);
}

function* watchSignUp() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.SIGN_UP_REQUEST */.u.SIGN_UP_REQUEST, signUp);
}

function* watchLeave() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.LEAVE_REQUEST */.u.LEAVE_REQUEST, leave);
}

function* watchChangeProfile() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.CHANGE_PROFILE_REQUEST */.u.CHANGE_PROFILE_REQUEST, changeProfile);
}

function* watchChangeCountry() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.CHANGE_COUNTRY_REQUEST */.u.CHANGE_COUNTRY_REQUEST, changeCountry);
}

function* watchCheckNotification() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.CHECK_NOTIFICATION_REQUEST */.u.CHECK_NOTIFICATION_REQUEST, checkNotification);
}

function* watchRemoveNotification() {
  yield (0,effects_.takeLatest)(userAction_interfaces/* actionTypesUser.REMOVE_NOTIFICATION_REQUEST */.u.REMOVE_NOTIFICATION_REQUEST, removeNotification);
}

function* userSaga() {
  yield (0,effects_.all)([(0,effects_.fork)(watchLogIn), (0,effects_.fork)(watchLogOut), (0,effects_.fork)(watchLoadMyInfo), (0,effects_.fork)(watchUploadImage), (0,effects_.fork)(watchSignUp), (0,effects_.fork)(watchLeave), (0,effects_.fork)(watchChangeProfile), (0,effects_.fork)(watchChangeCountry), (0,effects_.fork)(watchCheckNotification), (0,effects_.fork)(watchRemoveNotification)]);
}
;// CONCATENATED MODULE: ./sagas/post.ts




function postAPI(data) {
  return external_axios_default().post(`/post/${data.communityId}`, data.formData);
}

function* addPost(action) {
  try {
    const result = yield (0,effects_.call)(postAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.ADD_POST_SUCCESS */.O.ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.ADD_POST_ERROR */.O.ADD_POST_ERROR,
      error: error.response.data
    });
  }
}

function removePostAPI(data) {
  return external_axios_default().delete(`/post/community/${data.communityId}/post/${data.postId}`);
}

function* removePost(action) {
  try {
    const result = yield (0,effects_.call)(removePostAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.REMOVE_POST_SUCCESS */.O.REMOVE_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.REMOVE_POST_ERROR */.O.REMOVE_POST_ERROR,
      error: error.response.data
    });
  }
}

function updatePostAPI(data) {
  return external_axios_default().patch(`/post/community/${data.communityId}/post/${data.postId}`, data);
}

function* updatePost(action) {
  try {
    const result = yield (0,effects_.call)(updatePostAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.UPDATE_POST_SUCCESS */.O.UPDATE_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.UPDATE_POST_ERROR */.O.UPDATE_POST_ERROR,
      error: error.response.data
    });
  }
}

function reportPostAPI(data) {
  return external_axios_default().post(`/post/${data.contentId}/report`, data);
}

function* reportPost(action) {
  try {
    yield (0,effects_.call)(reportPostAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.REPORT_SUCCESS */.O.REPORT_SUCCESS
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.REPORT_ERROR */.O.REPORT_ERROR,
      error: error.response.data
    });
  }
}

function loadPostsAPI(data) {
  return external_axios_default().get(`/posts/community/${data.communityId}/post?lastId=${data.postId}`);
}

function* loadPosts(action) {
  try {
    const result = yield (0,effects_.call)(loadPostsAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.LOAD_POSTS_SUCCESS */.O.LOAD_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.LOAD_POSTS_ERROR */.O.LOAD_POSTS_ERROR,
      error: error.response.data
    });
  }
}

function addCommentAPI(data) {
  return external_axios_default().post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield (0,effects_.call)(addCommentAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.ADD_COMMENT_SUCCESS */.O.ADD_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.ADD_COMMENT_ERROR */.O.ADD_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function updateCommentAPI(data) {
  return external_axios_default().patch(`/post/${data.postId}/comment/${data.commentId}`, data);
}

function* updateComment(action) {
  try {
    const result = yield (0,effects_.call)(updateCommentAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.UPDATE_COMMENT_SUCCESS */.O.UPDATE_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.UPDATE_COMMENT_ERROR */.O.UPDATE_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function removeCommentAPI(data) {
  return external_axios_default().delete(`/post/${data.postId}/comment/${data.commentId}`);
}

function* removeComment(action) {
  try {
    const result = yield (0,effects_.call)(removeCommentAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.REMOVE_COMMENT_SUCCESS */.O.REMOVE_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.REMOVE_COMMENT_ERROR */.O.REMOVE_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default().post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield (0,effects_.call)(uploadImagesAPI, action.data);
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.UPLOAD_IMAGES_SUCCESS */.O.UPLOAD_IMAGES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: postAction_interfaces/* actionTypesPost.UPLOAD_IMAGES_ERROR */.O.UPLOAD_IMAGES_ERROR,
      error: error.response.data
    });
  }
}

function* watchAddPost() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.ADD_POST_REQUEST */.O.ADD_POST_REQUEST, addPost);
}

function* watchUpdatePost() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.UPDATE_POST_REQUEST */.O.UPDATE_POST_REQUEST, updatePost);
}

function* watchRemovePost() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.REMOVE_POST_REQUEST */.O.REMOVE_POST_REQUEST, removePost);
}

function* watchReportPost() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.REPORT_REQUEST */.O.REPORT_REQUEST, reportPost);
}

function* watchloadPosts() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.LOAD_POSTS_REQUEST */.O.LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddComment() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.ADD_COMMENT_REQUEST */.O.ADD_COMMENT_REQUEST, addComment);
}

function* watchUpdateComment() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.UPDATE_COMMENT_REQUEST */.O.UPDATE_COMMENT_REQUEST, updateComment);
}

function* watchRemoveComment() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.REMOVE_COMMENT_REQUEST */.O.REMOVE_COMMENT_REQUEST, removeComment);
}

function* watchUploadImages() {
  yield (0,effects_.takeLatest)(postAction_interfaces/* actionTypesPost.UPLOAD_IMAGES_REQUEST */.O.UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* postSaga() {
  yield (0,effects_.all)([(0,effects_.fork)(watchAddPost), (0,effects_.fork)(watchUpdatePost), (0,effects_.fork)(watchRemovePost), (0,effects_.fork)(watchReportPost), (0,effects_.fork)(watchloadPosts), (0,effects_.fork)(watchAddComment), (0,effects_.fork)(watchUpdateComment), (0,effects_.fork)(watchRemoveComment), (0,effects_.fork)(watchUploadImages)]);
}
;// CONCATENATED MODULE: ./sagas/community.ts





function uploadCommunityImageAPI(data) {
  return external_axios_default().post('/community/image', data);
}

function* uploadCommunityImage(action) {
  try {
    const result = yield (0,effects_.call)(uploadCommunityImageAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_SUCCESS */.I.UPLOAD_COMMUNITY_IMAGE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_ERROR */.I.UPLOAD_COMMUNITY_IMAGE_ERROR,
      error: error.response.data
    });
  }
}

function changeCommunityInfoAPI(data) {
  return external_axios_default().post(`/community/${data.communityId}/info`, data);
}

function* changeCommunityInfo(action) {
  try {
    const result = yield (0,effects_.call)(changeCommunityInfoAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.CHANGE_COMMUNITY_INFO_SUCCESS */.I.CHANGE_COMMUNITY_INFO_SUCCESS,
      data: result.data
    });
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.CHANGE_COMMUNITY_OF_ME */.u.CHANGE_COMMUNITY_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.CHANGE_COMMUNITY_INFO_ERROR */.I.CHANGE_COMMUNITY_INFO_ERROR,
      error: error.response.data
    });
  }
}

function removeCommunityAPI(data) {
  return external_axios_default().delete(`/community/${data.communityId}`);
}

function* removeCommunity(action) {
  try {
    yield (0,effects_.call)(removeCommunityAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.REMOVE_COMMUNITY_SUCCESS */.I.REMOVE_COMMUNITY_SUCCESS
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.REMOVE_COMMUNITY_ERROR */.I.REMOVE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function addCommunityAPI(data) {
  return external_axios_default().post('/community', data);
}

function* addCommunity(action) {
  try {
    yield (0,effects_.call)(addCommunityAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.ADD_COMMUNITY_SUCCESS */.I.ADD_COMMUNITY_SUCCESS
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.ADD_COMMUNITY_ERROR */.I.ADD_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function joinCommunityAPI(data) {
  return external_axios_default().post(`/community/${data.communityId}/join`);
}

function* joinCommunity(action) {
  try {
    const result = yield (0,effects_.call)(joinCommunityAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.JOIN_COMMUNITY_SUCCESS */.I.JOIN_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.JOIN_COMMUNITY_ERROR */.I.JOIN_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function acceptCommunityAPI(data) {
  return external_axios_default().post(`/community/${data.communityId}/accept/${data.userId}`, data);
}

function* acceptCommunity(action) {
  try {
    const result = yield (0,effects_.call)(acceptCommunityAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.ACCEPT_COMMUNITY_SUCCESS */.I.ACCEPT_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.ACCEPT_COMMUNITY_ERROR */.I.ACCEPT_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function refuseCommunityAPI(data) {
  return external_axios_default().delete(`/community/${data.communityId}/refuse/${data.userId}`);
}

function* refuseCommunity(action) {
  try {
    const result = yield (0,effects_.call)(refuseCommunityAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.REFUSE_COMMUNITY_SUCCESS */.I.REFUSE_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.REFUSE_COMMUNITY_ERROR */.I.REFUSE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function leaveCommunityAPI(data) {
  return external_axios_default().delete(`/community/${data.communityId}/leave`);
}

function* leaveCommunity(action) {
  try {
    const result = yield (0,effects_.call)(leaveCommunityAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LEAVE_COMMUNITY_SUCCESS */.I.LEAVE_COMMUNITY_SUCCESS,
      data: result.data
    });
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LEAVE_COMMUNITY_OF_ME */.u.LEAVE_COMMUNITY_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LEAVE_COMMUNITY_ERROR */.I.LEAVE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function loadCommunityAPI(data) {
  return external_axios_default().get(`/community/${data.communityId}`);
}

function* loadCommunity(action) {
  try {
    const result = yield (0,effects_.call)(loadCommunityAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITY_SUCCESS */.I.LOAD_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITY_ERROR */.I.LOAD_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function loadCommunitiesAPI() {
  return external_axios_default().get('/communities');
}

function* loadCommunities() {
  try {
    const result = yield (0,effects_.call)(loadCommunitiesAPI);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITIES_SUCCESS */.I.LOAD_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITIES_ERROR */.I.LOAD_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function searchCommunitiesAPI(data) {
  return external_axios_default().get(`/search/${encodeURIComponent(data.keyword)}`);
}

function* searchCommunities(action) {
  try {
    const result = yield (0,effects_.call)(searchCommunitiesAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.SEARCH_COMMUNITIES_SUCCESS */.I.SEARCH_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.SEARCH_COMMUNITIES_ERROR */.I.SEARCH_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCountryCommunitiesAPI(data) {
  return external_axios_default().get(`/communities/country/${data.country}?lastId=${data.communityId}`);
}

function* loadCountryCommunities(action) {
  try {
    const result = yield (0,effects_.call)(loadCountryCommunitiesAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_SUCCESS */.I.LOAD_COUNTRY_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_ERROR */.I.LOAD_COUNTRY_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoryCommunitiesAPI(data) {
  return external_axios_default().get(`/communities/category/${data.categoryId}?lastId=${data.communityId}`);
}

function* loadCategoryCommunities(action) {
  try {
    const result = yield (0,effects_.call)(loadCategoryCommunitiesAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_SUCCESS */.I.LOAD_CATEGORY_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_ERROR */.I.LOAD_CATEGORY_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoryAPI(data) {
  return external_axios_default().get(`/community/category/${data.categoryId}`);
}

function* loadCategory(action) {
  try {
    const result = yield (0,effects_.call)(loadCategoryAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_SUCCESS */.I.LOAD_CATEGORY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_ERROR */.I.LOAD_CATEGORY_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoriesAPI() {
  return external_axios_default().get('/community/categories');
}

function* loadCategories() {
  try {
    const result = yield (0,effects_.call)(loadCategoriesAPI);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORIES_SUCCESS */.I.LOAD_CATEGORIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORIES_ERROR */.I.LOAD_CATEGORIES_ERROR,
      error: error.response.data
    });
  }
}

function addMeetAPI(data) {
  return external_axios_default().post(`/community/${data.communityId}/meet`, data);
}

function* addMeet(action) {
  try {
    const result = yield (0,effects_.call)(addMeetAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.ADD_MEET_SUCCESS */.I.ADD_MEET_SUCCESS,
      data: result.data
    });
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.ADD_MEET_OF_ME */.u.ADD_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.ADD_MEET_ERROR */.I.ADD_MEET_ERROR,
      error: error.response.data
    });
  }
}

function removeMeetAPI(data) {
  return external_axios_default().delete(`/community/${data.communityId}/meet/${data.meetId}`);
}

function* removeMeet(action) {
  try {
    const result = yield (0,effects_.call)(removeMeetAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.REMOVE_MEET_SUCCESS */.I.REMOVE_MEET_SUCCESS,
      data: result.data
    });
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.REMOVE_MEET_OF_ME */.u.REMOVE_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.REMOVE_MEET_ERROR */.I.REMOVE_MEET_ERROR,
      error: error.response.data
    });
  }
}

function joinMeetAPI(data) {
  return external_axios_default().post(`/community/${data.communityId}/meet/${data.meetId}/join`);
}

function* joinMeet(action) {
  try {
    const result = yield (0,effects_.call)(joinMeetAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.JOIN_MEET_SUCCESS */.I.JOIN_MEET_SUCCESS,
      data: result.data
    });
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.JOIN_MEET_OF_ME */.u.JOIN_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.JOIN_MEET_ERROR */.I.JOIN_MEET_ERROR,
      error: error.response.data
    });
  }
}

function leaveMeetAPI(data) {
  return external_axios_default().delete(`/community/${data.communityId}/meet/${data.meetId}/leave`);
}

function* leaveMeet(action) {
  try {
    const result = yield (0,effects_.call)(leaveMeetAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LEAVE_MEET_SUCCESS */.I.LEAVE_MEET_SUCCESS,
      data: result.data
    });
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.LEAVE_MEET_OF_ME */.u.LEAVE_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.LEAVE_MEET_ERROR */.I.LEAVE_MEET_ERROR,
      error: error.response.data
    });
  }
}

function modifyMeetAPI(data) {
  return external_axios_default().patch(`/community/${data.communityId}/meet/${data.meetId}`, data);
}

function* modifyMeet(action) {
  try {
    const result = yield (0,effects_.call)(modifyMeetAPI, action.data);
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.MODIFY_MEET_SUCCESS */.I.MODIFY_MEET_SUCCESS,
      data: result.data
    });
    yield (0,effects_.put)({
      type: userAction_interfaces/* actionTypesUser.MODIFY_MEET_OF_ME */.u.MODIFY_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield (0,effects_.put)({
      type: communityAction_interfaces/* actionTypesCommunity.MODIFY_MEET_ERROR */.I.MODIFY_MEET_ERROR,
      error: error.response.data
    });
  }
}

function* watchUploadCommunityImage() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_REQUEST */.I.UPLOAD_COMMUNITY_IMAGE_REQUEST, uploadCommunityImage);
}

function* watchChangeCommunityInfo() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.CHANGE_COMMUNITY_INFO_REQUEST */.I.CHANGE_COMMUNITY_INFO_REQUEST, changeCommunityInfo);
}

function* watchRemoveCommunity() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.REMOVE_COMMUNITY_REQUEST */.I.REMOVE_COMMUNITY_REQUEST, removeCommunity);
}

function* watchAddCommunity() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.ADD_COMMUNITY_REQUEST */.I.ADD_COMMUNITY_REQUEST, addCommunity);
}

function* watchJoinCommunity() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.JOIN_COMMUNITY_REQUEST */.I.JOIN_COMMUNITY_REQUEST, joinCommunity);
}

function* watchAcceptCommunity() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.ACCEPT_COMMUNITY_REQUEST */.I.ACCEPT_COMMUNITY_REQUEST, acceptCommunity);
}

function* watchRefuseCommunity() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.REFUSE_COMMUNITY_REQUEST */.I.REFUSE_COMMUNITY_REQUEST, refuseCommunity);
}

function* watchLeaveCommunity() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.LEAVE_COMMUNITY_REQUEST */.I.LEAVE_COMMUNITY_REQUEST, leaveCommunity);
}

function* watchLoadCommunity() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITY_REQUEST */.I.LOAD_COMMUNITY_REQUEST, loadCommunity);
}

function* watchLoadCommunities() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.LOAD_COMMUNITIES_REQUEST */.I.LOAD_COMMUNITIES_REQUEST, loadCommunities);
}

function* watchsearchCommunities() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.SEARCH_COMMUNITIES_REQUEST */.I.SEARCH_COMMUNITIES_REQUEST, searchCommunities);
}

function* watchLoadCountryCommunities() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_REQUEST */.I.LOAD_COUNTRY_COMMUNITIES_REQUEST, loadCountryCommunities);
}

function* watchLoadCategoryCommunities() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_REQUEST */.I.LOAD_CATEGORY_COMMUNITIES_REQUEST, loadCategoryCommunities);
}

function* watchLoadCategory() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORY_REQUEST */.I.LOAD_CATEGORY_REQUEST, loadCategory);
}

function* watchLoadCategories() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.LOAD_CATEGORIES_REQUEST */.I.LOAD_CATEGORIES_REQUEST, loadCategories);
}

function* watchAddMeet() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.ADD_MEET_REQUEST */.I.ADD_MEET_REQUEST, addMeet);
}

function* watchRemoveMeet() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.REMOVE_MEET_REQUEST */.I.REMOVE_MEET_REQUEST, removeMeet);
}

function* watchJoinMeet() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.JOIN_MEET_REQUEST */.I.JOIN_MEET_REQUEST, joinMeet);
}

function* watchLeaveMeet() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.LEAVE_MEET_REQUEST */.I.LEAVE_MEET_REQUEST, leaveMeet);
}

function* watchModifyMeet() {
  yield (0,effects_.takeLatest)(communityAction_interfaces/* actionTypesCommunity.MODIFY_MEET_REQUEST */.I.MODIFY_MEET_REQUEST, modifyMeet);
}

function* communitySaga() {
  yield (0,effects_.all)([(0,effects_.fork)(watchUploadCommunityImage), (0,effects_.fork)(watchChangeCommunityInfo), (0,effects_.fork)(watchRemoveCommunity), (0,effects_.fork)(watchAddCommunity), (0,effects_.fork)(watchJoinCommunity), (0,effects_.fork)(watchAcceptCommunity), (0,effects_.fork)(watchRefuseCommunity), (0,effects_.fork)(watchLeaveCommunity), (0,effects_.fork)(watchLoadCommunity), (0,effects_.fork)(watchLoadCommunities), (0,effects_.fork)(watchsearchCommunities), (0,effects_.fork)(watchLoadCountryCommunities), (0,effects_.fork)(watchLoadCategoryCommunities), (0,effects_.fork)(watchLoadCategory), (0,effects_.fork)(watchLoadCategories), (0,effects_.fork)(watchAddMeet), (0,effects_.fork)(watchRemoveMeet), (0,effects_.fork)(watchJoinMeet), (0,effects_.fork)(watchLeaveMeet), (0,effects_.fork)(watchModifyMeet)]);
}
;// CONCATENATED MODULE: ./sagas/index.ts





(external_axios_default()).defaults.baseURL = "https://api.jinu-community.site";
(external_axios_default()).defaults.withCredentials = true;
function* rootSaga() {
  yield (0,effects_.all)([(0,effects_.fork)(userSaga), (0,effects_.fork)(postSaga), (0,effects_.fork)(communitySaga)]);
}
;// CONCATENATED MODULE: ./store/configureStore.tsx







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer =  true ? (0,external_redux_.compose)((0,external_redux_.applyMiddleware)(...middlewares)) : 0;
  const store = (0,external_redux_.createStore)(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = (0,external_next_redux_wrapper_.createWrapper)(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = (wrapper);

/***/ })

};
;