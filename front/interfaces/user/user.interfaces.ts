import { IUser } from '../db';

export interface UserState {
  imagePath: string;
  logInLoading: boolean;
  logInDone: boolean;
  logInError: any;
  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: any;
  uploadImageLoading: boolean;
  uploadImageDone: boolean;
  uploadImageError: any;
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: any;
  loadMyInfoLoading: boolean;
  loadMyInfoDone: boolean;
  loadMyInfoError: any;
  loadUserInfoLoading: boolean;
  loadUserInfoDone: boolean;
  loadUserInfoError: any;
  changeNicknameLoading: boolean;
  changeNicknameDone: boolean;
  changeNicknameError: any;

  me: IUser | null;
  userInfo: any;
}
