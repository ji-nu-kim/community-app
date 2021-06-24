import { IChangeCommunityInfoData } from 'interfaces';
import { IMeet } from 'interfaces/db';
import {
  actionTypesUser,
  ILogInRequest,
  ILogOutRequest,
  ILoadMyInfoRequest,
  IUploadImageRequest,
  ISignUpRequest,
  ILeaveRequest,
  IChangeProfileRequest,
  IChangeCountryRequest,
  ICheckNotificationRequest,
  IRemoveNotificationRequest,
  IAddMeetOfMe,
  IRemoveMeetOfMe,
  IModifyMeetOfMe,
  IJoinMeeetOfMe,
  ILeaveMeetOfMe,
  ILeaveCommunityOfMe,
  IChangeCommunityOfMe,
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
export const removeImage = (): IRemoveUserImage => {
  return {
    type: actionTypesUser.REMOVE_IMAGE,
  };
};
export const uploadImageRequestAction = (data: FormData): IUploadImageRequest => {
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
export const leaveRequestAction = (data: { userId: number }): ILeaveRequest => {
  return {
    type: actionTypesUser.LEAVE_REQUEST,
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
export const addMeetOfMe = (data: IMeet): IAddMeetOfMe => {
  return {
    type: actionTypesUser.ADD_MEET_OF_ME,
    data,
  };
};
export const removeMeetOfMe = (data: { meetId: number }): IRemoveMeetOfMe => {
  return {
    type: actionTypesUser.REMOVE_MEET_OF_ME,
    data,
  };
};
export const modifyMeetOfMe = (data: IMeet): IModifyMeetOfMe => {
  return {
    type: actionTypesUser.MODIFY_MEET_OF_ME,
    data,
  };
};
export const joinMeetOfMe = (data: IMeet): IJoinMeeetOfMe => {
  return {
    type: actionTypesUser.JOIN_MEET_OF_ME,
    data,
  };
};
export const leaveMeetOfMe = (data: {
  meetId: number;
  userId: number;
}): ILeaveMeetOfMe => {
  return {
    type: actionTypesUser.LEAVE_MEET_OF_ME,
    data,
  };
};
export const leaveCommunityOfMe = (data: {
  communityId: number;
  userId: number;
}): ILeaveCommunityOfMe => {
  return {
    type: actionTypesUser.LEAVE_COMMUNITY_OF_ME,
    data,
  };
};
export const changeCommunityOfMe = (
  data: IChangeCommunityInfoData
): IChangeCommunityOfMe => {
  return {
    type: actionTypesUser.CHANGE_COMMUNITY_OF_ME,
    data,
  };
};
