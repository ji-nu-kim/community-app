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
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
  CHANGE_NICKNAME_REQUEST: 'CHANGE_NICKNAME_REQUEST',
  CHANGE_NICKNAME_SUCCESS: 'CHANGE_NICKNAME_SUCCESS',
  CHANGE_NICKNAME_ERROR: 'CHANGE_NICKNAME_ERROR',
  ADD_POST_TO_ME: 'ADD_POST_TO_ME',
  ADD_COMMUNITY_TO_ME: 'ADD_COMMUNITY_TO_ME',
  REMOVE_POST_OF_ME: 'REMOVE_POST_OF_ME',
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
export interface ILoadUserInfoError {
  type: typeof actionTypesUser.LOAD_USER_INFO_ERROR;
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
export interface IChangeNicknameRequest {
  type: typeof actionTypesUser.CHANGE_NICKNAME_REQUEST;
  data: { nickname: string };
}
export interface IChangeNicknameSuccess {
  type: typeof actionTypesUser.CHANGE_NICKNAME_SUCCESS;
  data: { nickname: string };
}
export interface IChangeNicknameError {
  type: typeof actionTypesUser.CHANGE_NICKNAME_ERROR;
  error: Error;
}

export interface IAddPostToMe {
  type: typeof actionTypesUser.ADD_POST_TO_ME;
  data: number;
}

export interface IAddCommunityToMe {
  type: typeof actionTypesUser.ADD_COMMUNITY_TO_ME;
  data: ICommunity;
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
  | ISignUpRequest
  | ISignUpSuccess
  | ISignUpError
  | IChangeNicknameRequest
  | IChangeNicknameSuccess
  | IChangeNicknameError
  | IAddPostToMe
  | IAddCommunityToMe
  | IRemovePostOfMe;
