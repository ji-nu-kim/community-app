import { UserState, ActionsUser, actionTypesUser } from '../interfaces/index';
import produce from 'immer';

export const initialState: UserState = {
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
  loadUserInfoLoading: false,
  loadUserInfoDone: false,
  loadUserInfoError: null,
  changeProfileLoading: false,
  changeProfileDone: false,
  changeProfileError: null,
  changeCountryLoading: false,
  changeCountryDone: false,
  changeCountryError: null,
  sendNotificationLoading: false,
  sendNotificationDone: false,
  sendNotificationError: null,
  checkNotificationLoading: false,
  checkNotificationDone: false,
  checkNotificationError: null,
  removeNotificationLoading: false,
  removeNotificationDone: false,
  removeNotificationError: null,
};

const reducer = (state = initialState, action: ActionsUser): UserState => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypesUser.LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case actionTypesUser.LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        break;
      case actionTypesUser.LOG_IN_ERROR:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case actionTypesUser.LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case actionTypesUser.LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.me = null;
        break;
      case actionTypesUser.LOG_OUT_ERROR:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case actionTypesUser.LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;
      case actionTypesUser.LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;
      case actionTypesUser.LOAD_MY_INFO_ERROR:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      case actionTypesUser.LOAD_USER_INFO_REQUEST:
        draft.loadUserInfoLoading = true;
        draft.loadUserInfoDone = false;
        draft.loadUserInfoError = null;
        break;
      case actionTypesUser.LOAD_USER_INFO_SUCCESS:
        draft.loadUserInfoLoading = false;
        draft.loadUserInfoDone = true;
        draft.userInfo = action.data;
        break;
      case actionTypesUser.LOAD_USER_INFO_ERROR:
        draft.loadUserInfoLoading = false;
        draft.loadUserInfoError = action.error;
        break;
      case actionTypesUser.UPLOAD_IMAGE_REQUEST:
        draft.uploadImageLoading = true;
        draft.uploadImageDone = false;
        draft.uploadImageError = null;
        break;
      case actionTypesUser.UPLOAD_IMAGE_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadImageLoading = false;
        draft.uploadImageDone = true;
        break;
      case actionTypesUser.UPLOAD_IMAGE_ERROR:
        draft.uploadImageLoading = false;
        draft.uploadImageError = action.error;
        break;
      case actionTypesUser.REMOVE_IMAGE:
        draft.imagePath = [];
        draft.uploadImageDone = false;
        break;
      case actionTypesUser.SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case actionTypesUser.SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case actionTypesUser.SIGN_UP_ERROR:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case actionTypesUser.LEAVE_REQUEST:
        draft.leaveLoading = true;
        draft.leaveDone = false;
        draft.leaveError = null;
        break;
      case actionTypesUser.LEAVE_SUCCESS:
        draft.leaveLoading = false;
        draft.leaveDone = true;
        draft.me = null;
        break;
      case actionTypesUser.LEAVE_ERROR:
        draft.leaveLoading = false;
        draft.leaveError = action.error;
        break;
      case actionTypesUser.CHANGE_PROFILE_REQUEST:
        draft.changeProfileLoading = true;
        draft.changeProfileDone = false;
        draft.changeProfileError = null;
        break;
      case actionTypesUser.CHANGE_PROFILE_SUCCESS:
        draft.changeProfileLoading = false;
        draft.changeProfileDone = true;
        draft.me = action.data;
        break;
      case actionTypesUser.CHANGE_PROFILE_ERROR:
        draft.changeProfileLoading = false;
        draft.changeProfileError = action.error;
        break;
      case actionTypesUser.CHANGE_COUNTRY_REQUEST:
        draft.changeCountryLoading = true;
        draft.changeCountryDone = false;
        draft.changeCountryError = null;
        break;
      case actionTypesUser.CHANGE_COUNTRY_SUCCESS:
        draft.changeCountryLoading = false;
        draft.changeCountryDone = true;
        if (draft.me) {
          draft.me.country = action.data.country;
        }
        break;
      case actionTypesUser.CHANGE_COUNTRY_ERROR:
        draft.changeCountryLoading = false;
        draft.changeCountryError = action.error;
        break;

      case actionTypesUser.SEND_NOTIFICATION_REQUEST:
        draft.sendNotificationLoading = true;
        draft.sendNotificationDone = false;
        draft.sendNotificationError = null;
        break;
      case actionTypesUser.SEND_NOTIFICATION_SUCCESS:
        draft.sendNotificationLoading = false;
        draft.sendNotificationDone = true;
        if (draft.me && draft.me.id === action.data.userId) {
          draft.me.Notices.unshift(action.data.notice);
        }
        break;
      case actionTypesUser.SEND_NOTIFICATION_ERROR:
        draft.sendNotificationLoading = false;
        draft.sendNotificationError = action.error;
        break;
      case actionTypesUser.CHECK_NOTIFICATION_REQUEST:
        draft.checkNotificationLoading = true;
        draft.checkNotificationDone = false;
        draft.checkNotificationError = null;
        break;
      case actionTypesUser.CHECK_NOTIFICATION_SUCCESS:
        draft.checkNotificationLoading = false;
        draft.checkNotificationDone = true;
        if (draft.me) {
          draft.me.Notices = action.data;
        }
        break;
      case actionTypesUser.CHECK_NOTIFICATION_ERROR:
        draft.checkNotificationLoading = false;
        draft.checkNotificationError = action.error;
        break;
      case actionTypesUser.REMOVE_NOTIFICATION_REQUEST:
        draft.removeNotificationLoading = true;
        draft.removeNotificationDone = false;
        draft.removeNotificationError = null;
        break;
      case actionTypesUser.REMOVE_NOTIFICATION_SUCCESS:
        draft.removeNotificationLoading = false;
        draft.removeNotificationDone = true;
        if (draft.me) {
          draft.me.Notices = draft.me.Notices.filter(
            notice => notice.id !== action.data.notificationId
          );
        }
        break;
      case actionTypesUser.REMOVE_NOTIFICATION_ERROR:
        draft.removeNotificationLoading = false;
        draft.removeNotificationError = action.error;
        break;
      case actionTypesUser.JOIN_MEET_OF_ME:
      case actionTypesUser.ADD_MEET_OF_ME:
        if (draft.me) {
          draft.me.Meets.unshift(action.data);
        }
        break;
      case actionTypesUser.LEAVE_MEET_OF_ME:
      case actionTypesUser.REMOVE_MEET_OF_ME:
        if (draft.me) {
          draft.me.Meets = draft.me.Meets.filter(meet => meet.id !== action.data.meetId);
        }
        break;
      case actionTypesUser.MODIFY_MEET_OF_ME:
        if (draft.me) {
          const meetIndex = draft.me.Meets.findIndex(meet => meet.id === action.data.id);
          draft.me.Meets[meetIndex] = action.data;
        }
        break;
      case actionTypesUser.LEAVE_COMMUNITY_OF_ME:
        if (draft.me && draft.me.id === action.data.userId) {
          console.log(action.data.communityId);
          draft.me.Communities = draft.me.Communities.filter(
            community => community.id !== action.data.communityId
          );
        }
        break;
      default:
        break;
    }
  });
};

export default reducer;
