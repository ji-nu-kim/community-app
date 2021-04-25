import {
  actionTypesUser,
  ILogInRequest,
  ILogOutRequest,
  ILoadMyInfoRequest,
  ILoadUserInfoRequest,
  ISignUpRequest,
  IChangeNicknameRequest,
  IAddPostToMe,
  IRemovePostOfMe,
  SignUpData,
  LoginData,
  IAddCommunityToMe,
} from '../interfaces/user/userAction.interfaces';

export const loginRequestAction = (data: LoginData): ILogInRequest => {
  return {
    type: actionTypesUser.LOG_IN_REQUEST,
    data,
  };
};
export const logOutRequestAction = (): ILogOutRequest => {
  return {
    type: actionTypesUser.LOG_OUT_REQUEST,
  };
};
export const loadMyInfoRequestAction = (): ILoadMyInfoRequest => {
  return {
    type: actionTypesUser.LOAD_MY_INFO_REQUEST,
  };
};
export const loadUserInfoRequestAction = (data: {
  userId: number;
}): ILoadUserInfoRequest => {
  return {
    type: actionTypesUser.LOAD_USER_INFO_REQUEST,
    data,
  };
};
export const signUpRequestAction = (data: SignUpData): ISignUpRequest => {
  return {
    type: actionTypesUser.SIGN_UP_REQUEST,
    data,
  };
};
export const changeNicknameRequestAction = (data: {
  nickname: string;
}): IChangeNicknameRequest => {
  return {
    type: actionTypesUser.CHANGE_NICKNAME_REQUEST,
    data,
  };
};
export const addPostToMe = (data: number): IAddPostToMe => {
  return {
    type: actionTypesUser.ADD_POST_TO_ME,
    data,
  };
};
export const addCommunityToMe = (data: number): IAddCommunityToMe => {
  return {
    type: actionTypesUser.ADD_COMMUNITY_TO_ME,
    data,
  };
};
export const removePostOfMe = (data: { postId: number }): IRemovePostOfMe => {
  return {
    type: actionTypesUser.REMOVE_POST_OF_ME,
    data,
  };
};
