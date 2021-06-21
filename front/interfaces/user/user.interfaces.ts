import { IUser } from '../db';

export interface UserState {
  imagePath: string[];
  me: IUser | null;
  userInfo: any;
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
}
