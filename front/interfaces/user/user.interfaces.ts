import { IUser } from '../db';

export interface UserState {
  imagePath: string[];
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
  leaveLoading: boolean;
  leaveDone: boolean;
  leaveError: any;
  loadMyInfoLoading: boolean;
  loadMyInfoDone: boolean;
  loadMyInfoError: any;
  loadUserInfoLoading: boolean;
  loadUserInfoDone: boolean;
  loadUserInfoError: any;
  changeProfileLoading: boolean;
  changeProfileDone: boolean;
  changeProfileError: any;
  changeCountryLoading: boolean;
  changeCountryDone: boolean;
  changeCountryError: any;
  checkNotificationLoading: boolean;
  checkNotificationDone: boolean;
  checkNotificationError: any;
  removeNotificationLoading: boolean;
  removeNotificationDone: boolean;
  removeNotificationError: any;

  me: IUser | null;
  userInfo: any;
}
