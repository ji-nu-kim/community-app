import { ICommunity, IUser } from '../db';

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
  LOAD_USER_INFO_REQUEST: 'LOAD_USER_INFO_REQUEST',
  LOAD_USER_INFO_SUCCESS: 'LOAD_USER_INFO_SUCCESS',
  LOAD_USER_INFO_ERROR: 'LOAD_USER_INFO_ERROR',
  UPLOAD_IMAGE_REQUEST: 'UPLOAD_IMAGE_REQUEST',
  UPLOAD_IMAGE_SUCCESS: 'UPLOAD_IMAGE_SUCCESS',
  UPLOAD_IMAGE_ERROR: 'UPLOAD_IMAGE_ERROR',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
  CHANGE_PROFILE_REQUEST: 'CHANGE_PROFILE_REQUEST',
  CHANGE_PROFILE_SUCCESS: 'CHANGE_PROFILE_SUCCESS',
  CHANGE_PROFILE_ERROR: 'CHANGE_PROFILE_ERROR',
  ADD_POST_TO_ME: 'ADD_POST_TO_ME',
  ADD_COMMUNITY_TO_ME: 'ADD_COMMUNITY_TO_ME',
  REMOVE_POST_OF_ME: 'REMOVE_POST_OF_ME',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
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
  data: IUser;
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
export interface ILoadUserInfoRequest {
  type: typeof actionTypesUser.LOAD_USER_INFO_REQUEST;
  data: { userId: number };
}
export interface ILoadUserInfoSuccess {
  type: typeof actionTypesUser.LOAD_USER_INFO_SUCCESS;
  data: {
    id: number;
    nickname: string;
    email: string;
    Posts: number;
  };
}

export interface IRemoveImage {
  type: typeof actionTypesUser.REMOVE_IMAGE;
}
export interface ILoadUserInfoError {
  type: typeof actionTypesUser.LOAD_USER_INFO_ERROR;
  error: Error;
}

export interface IUploadImageReqeust {
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
  data: ChangeProfileData;
}
export interface IChangeProfileError {
  type: typeof actionTypesUser.CHANGE_PROFILE_ERROR;
  error: Error;
}
export interface IAddCommunityToMe {
  type: typeof actionTypesUser.ADD_COMMUNITY_TO_ME;
  data: ICommunity;
}

export interface IAddPostToMe {
  type: typeof actionTypesUser.ADD_POST_TO_ME;
  data: number;
}

export interface IRemovePostOfMe {
  type: typeof actionTypesUser.REMOVE_POST_OF_ME;
  data: { postId: number };
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
  | ILoadUserInfoRequest
  | ILoadUserInfoSuccess
  | ILoadUserInfoError
  | IUploadImageReqeust
  | IUploadImageSuccess
  | IUploadImageError
  | ISignUpRequest
  | ISignUpSuccess
  | ISignUpError
  | IChangeProfileRequest
  | IChangeProfileSuccess
  | IChangeProfileError
  | IAddPostToMe
  | IAddCommunityToMe
  | IRemovePostOfMe
  | IRemoveImage;
