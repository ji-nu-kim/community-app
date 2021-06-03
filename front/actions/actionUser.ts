import {
  actionTypesUser,
  ILogInRequest,
  ILogOutRequest,
  ILoadMyInfoRequest,
  ILoadUserInfoRequest,
  IUploadImageRequest,
  ISignUpRequest,
  ILeaveRequest,
  IChangeProfileRequest,
  IChangeCountryRequest,
  ISendNotificationRequest,
  ICheckNotificationRequest,
  IRemoveNotificationRequest,
  SignUpData,
  LoginData,
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
export const leaveRequestAction = (): ILeaveRequest => {
  return {
    type: actionTypesUser.LEAVE_REQUEST,
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
export const sendNotificationRequestAction = (data: {
  title: string;
  userId: number;
}): ISendNotificationRequest => {
  return {
    type: actionTypesUser.SEND_NOTIFICATION_REQUEST,
    data,
  };
};
export const checkNotificationRequestAction = (): ICheckNotificationRequest => {
  return {
    type: actionTypesUser.CHECK_NOTIFICATION_REQUEST,
  };
};
export const removeNotificationRequestAction = (data: {
  notificationId: number;
}): IRemoveNotificationRequest => {
  return {
    type: actionTypesUser.REMOVE_NOTIFICATION_REQUEST,
    data,
  };
};
