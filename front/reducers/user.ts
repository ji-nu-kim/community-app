import { UserState, ActionsUser, actionTypesUser } from '../interfaces/index';
import produce from 'immer';

export const initialState: UserState = {
  imagePath: '',
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
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserInfoLoading: false,
  loadUserInfoDone: false,
  loadUserInfoError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,

  me: null,
  userInfo: null,
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
        draft.me = action.data;
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
      case actionTypesUser.UPLOAD_IMAGE_SUCCESS: {
        draft.imagePath = action.data;
        draft.uploadImageLoading = false;
        draft.uploadImageDone = true;
        break;
      }
      case actionTypesUser.UPLOAD_IMAGE_ERROR:
        draft.uploadImageLoading = false;
        draft.uploadImageError = action.error;
        break;

      case actionTypesUser.REMOVE_IMAGE:
        draft.imagePath = '';
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

      case actionTypesUser.CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case actionTypesUser.CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        if (draft.me) {
          draft.me.nickname = action.data.nickname;
        }
        break;
      case actionTypesUser.CHANGE_NICKNAME_ERROR:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case actionTypesUser.ADD_POST_TO_ME:
        if (draft.me) {
          draft.me.Posts.unshift({ id: action.data });
        }
        break;
      case actionTypesUser.ADD_COMMUNITY_TO_ME:
        if (draft.me) {
          draft.me.Owned.unshift(action.data);
        }
        break;

      case actionTypesUser.REMOVE_POST_OF_ME:
        if (draft.me) {
          draft.me.Posts = draft.me.Posts.filter(
            v => v.id !== action.data.postId
          );
        }
        break;

      default:
        break;
    }
  });
};

export default reducer;
