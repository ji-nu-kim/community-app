import {
  actionTypesUser,
  ILogInRequest,
  ILogOutRequest,
  ILoadMyInfoRequest,
  ILoadUserInfoRequest,
  IUploadImageRequest,
  ISignUpRequest,
  IChangeProfileRequest,
  IChangeCountryRequest,
  SignUpData,
  LoginData,
  IAddPostToMe,
  IRemovePostOfMe,
  IRemoveUserImage,
  ChangeProfileData,
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

export const removeImage = (): IRemoveUserImage => {
  return {
    type: actionTypesUser.REMOVE_IMAGE,
  };
};

export const uploadImageRequestAction = (
  data: FormData
): IUploadImageRequest => {
  return {
    type: actionTypesUser.UPLOAD_IMAGE_REQUEST,
    data,
  };
};

export const signUpRequestAction = (data: SignUpData): ISignUpRequest => {
  return {
    type: actionTypesUser.SIGN_UP_REQUEST,
    data,
  };
};
export const changeProfileRequestAction = (
  data: ChangeProfileData
): IChangeProfileRequest => {
  return {
    type: actionTypesUser.CHANGE_PROFILE_REQUEST,
    data,
  };
};
export const changeCountryRequestAction = (data: {
  country: string;
}): IChangeCountryRequest => {
  return {
    type: actionTypesUser.CHANGE_COUNTRY_REQUEST,
    data,
  };
};
export const addPostToMe = (data: number): IAddPostToMe => {
  return {
    type: actionTypesUser.ADD_POST_TO_ME,
    data,
  };
};
export const removePostOfMe = (data: { postId: number }): IRemovePostOfMe => {
  return {
    type: actionTypesUser.REMOVE_POST_OF_ME,
    data,
  };
};
