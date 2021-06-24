import { IChangeCommunityInfoData } from 'interfaces/community/communityAction.interfaces';
import { IMeet, INotice, IUser } from '../db';

export const actionTypesUser = {
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
  CHANGE_COMMUNITY_OF_ME: 'CHANGE_COMMUNITY_OF_ME',
} as const;
export interface LoginData {
  email: string;
  password: string;
}
export interface ILogInRequest {
  type: typeof actionTypesUser.LOG_IN_REQUEST;
  data: LoginData;
}
export interface ILogInSuccess {
  type: typeof actionTypesUser.LOG_IN_SUCCESS;
}
export interface ILogInError {
  type: typeof actionTypesUser.LOG_IN_ERROR;
  error: Error;
}
export interface ILogOutRequest {
  type: typeof actionTypesUser.LOG_OUT_REQUEST;
}
export interface ILogOutSuccess {
  type: typeof actionTypesUser.LOG_OUT_SUCCESS;
}
export interface ILogOutError {
  type: typeof actionTypesUser.LOG_OUT_ERROR;
  error: Error;
}
export interface ILoadMyInfoRequest {
  type: typeof actionTypesUser.LOAD_MY_INFO_REQUEST;
}
export interface ILoadMyInfoSuccess {
  type: typeof actionTypesUser.LOAD_MY_INFO_SUCCESS;
  data: IUser;
}
export interface ILoadMyInfoError {
  type: typeof actionTypesUser.LOAD_MY_INFO_ERROR;
  error: Error;
}
export interface IRemoveUserImage {
  type: typeof actionTypesUser.REMOVE_IMAGE;
}
export interface IUploadImageRequest {
  type: typeof actionTypesUser.UPLOAD_IMAGE_REQUEST;
  data: FormData;
}
export interface IUploadImageSuccess {
  type: typeof actionTypesUser.UPLOAD_IMAGE_SUCCESS;
  data: string[];
}
export interface IUploadImageError {
  type: typeof actionTypesUser.UPLOAD_IMAGE_ERROR;
  error: Error;
}
export interface SignUpData {
  email: string;
  nickname: string;
  password: string;
  country: string;
}
export interface ISignUpRequest {
  type: typeof actionTypesUser.SIGN_UP_REQUEST;
  data: SignUpData;
}
export interface ISignUpSuccess {
  type: typeof actionTypesUser.SIGN_UP_SUCCESS;
}
export interface ISignUpError {
  type: typeof actionTypesUser.SIGN_UP_ERROR;
  error: Error;
}
export interface ILeaveRequest {
  type: typeof actionTypesUser.LEAVE_REQUEST;
  data: { userId: number };
}
export interface ILeaveSuccess {
  type: typeof actionTypesUser.LEAVE_SUCCESS;
}
export interface ILeaveError {
  type: typeof actionTypesUser.LEAVE_ERROR;
  error: Error;
}
export interface ChangeProfileData {
  nickname: string;
  profilePhoto: string[];
  category: string[];
}
export interface IChangeProfileRequest {
  type: typeof actionTypesUser.CHANGE_PROFILE_REQUEST;
  data: ChangeProfileData;
}
export interface IChangeProfileSuccess {
  type: typeof actionTypesUser.CHANGE_PROFILE_SUCCESS;
  data: IUser;
}
export interface IChangeProfileError {
  type: typeof actionTypesUser.CHANGE_PROFILE_ERROR;
  error: Error;
}
export interface IChangeCountryRequest {
  type: typeof actionTypesUser.CHANGE_COUNTRY_REQUEST;
  data: { country: string };
}
export interface IChangeCountrySuccess {
  type: typeof actionTypesUser.CHANGE_COUNTRY_SUCCESS;
  data: { country: string };
}
export interface IChangeCountryError {
  type: typeof actionTypesUser.CHANGE_COUNTRY_ERROR;
  error: Error;
}
export interface ICheckNotificationRequest {
  type: typeof actionTypesUser.CHECK_NOTIFICATION_REQUEST;
}
export interface ICheckNotificationSuccess {
  type: typeof actionTypesUser.CHECK_NOTIFICATION_SUCCESS;
  data: INotice[];
}
export interface ICheckNotificationError {
  type: typeof actionTypesUser.CHECK_NOTIFICATION_ERROR;
  error: Error;
}
export interface IRemoveNotificationRequest {
  type: typeof actionTypesUser.REMOVE_NOTIFICATION_REQUEST;
  data: { notificationId: number };
}
export interface IRemoveNotificationSuccess {
  type: typeof actionTypesUser.REMOVE_NOTIFICATION_SUCCESS;
  data: { notificationId: number };
}
export interface IRemoveNotificationError {
  type: typeof actionTypesUser.REMOVE_NOTIFICATION_ERROR;
  error: Error;
}
export interface IAddMeetOfMe {
  type: typeof actionTypesUser.ADD_MEET_OF_ME;
  data: IMeet;
}
export interface IRemoveMeetOfMe {
  type: typeof actionTypesUser.REMOVE_MEET_OF_ME;
  data: { meetId: number };
}
export interface IModifyMeetOfMe {
  type: typeof actionTypesUser.MODIFY_MEET_OF_ME;
  data: IMeet;
}
export interface IJoinMeeetOfMe {
  type: typeof actionTypesUser.JOIN_MEET_OF_ME;
  data: IMeet;
}
export interface ILeaveMeetOfMe {
  type: typeof actionTypesUser.LEAVE_MEET_OF_ME;
  data: { meetId: number; userId: number };
}
export interface ILeaveCommunityOfMe {
  type: typeof actionTypesUser.LEAVE_COMMUNITY_OF_ME;
  data: { communityId: number; userId: number };
}

export interface IChangeCommunityOfMe {
  type: typeof actionTypesUser.CHANGE_COMMUNITY_OF_ME;
  data: IChangeCommunityInfoData;
}

export type ActionsUser =
  | ILogInRequest
  | ILogInSuccess
  | ILogInError
  | ILogOutRequest
  | ILogOutSuccess
  | ILogOutError
  | ILoadMyInfoRequest
  | ILoadMyInfoSuccess
  | ILoadMyInfoError
  | IUploadImageRequest
  | IUploadImageSuccess
  | IUploadImageError
  | IRemoveUserImage
  | ISignUpRequest
  | ISignUpSuccess
  | ISignUpError
  | ILeaveRequest
  | ILeaveSuccess
  | ILeaveError
  | IChangeProfileRequest
  | IChangeProfileSuccess
  | IChangeProfileError
  | IChangeCountryRequest
  | IChangeCountrySuccess
  | IChangeCountryError
  | ICheckNotificationRequest
  | ICheckNotificationSuccess
  | ICheckNotificationError
  | IRemoveNotificationRequest
  | IRemoveNotificationSuccess
  | IRemoveNotificationError
  | IAddMeetOfMe
  | IRemoveMeetOfMe
  | IModifyMeetOfMe
  | IJoinMeeetOfMe
  | ILeaveMeetOfMe
  | ILeaveCommunityOfMe
  | IChangeCommunityOfMe;
