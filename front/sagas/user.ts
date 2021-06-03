import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  actionTypesUser,
  ChangeProfileData,
  IChangeCountryRequest,
  IChangeProfileRequest,
  ILoadUserInfoRequest,
  ILogInRequest,
  IRemoveNotificationRequest,
  ISendNotificationRequest,
  ISignUpRequest,
  IUploadImageRequest,
  LoginData,
  SignUpData,
} from '../interfaces/user/userAction.interfaces';
import axios from 'axios';
import { INotice, IUser } from 'interfaces/db';

function loginAPI(data: LoginData) {
  return axios.post('/user/login', data);
}
function* logIn(action: ILogInRequest) {
  try {
    yield call(loginAPI, action.data);
    yield put({
      type: actionTypesUser.LOG_IN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.LOG_IN_ERROR,
      error: error.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}
function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: actionTypesUser.LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.LOG_OUT_ERROR,
      error: error.response.data,
    });
  }
}

function loadMyInfoAPI() {
  return axios.get('/user');
}
function* loadMyInfo() {
  try {
    const result: { data: IUser } = yield call(loadMyInfoAPI);
    yield put({
      type: actionTypesUser.LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.LOAD_MY_INFO_ERROR,
      error: error.response.data,
    });
  }
}

function loadUserInfoAPI(data: { userId: number }) {
  return axios.get(`/user/${data.userId}`);
}
function* loadUserInfo(action: ILoadUserInfoRequest) {
  try {
    const result: {
      data: IUser;
    } = yield call(loadUserInfoAPI, action.data);
    yield put({
      type: actionTypesUser.LOAD_USER_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.LOAD_USER_INFO_ERROR,
      error: error.response.data,
    });
  }
}

function uploadImageAPI(data: FormData) {
  return axios.post('/user/image', data);
}
function* uploadImage(action: IUploadImageRequest) {
  try {
    const result: { data: string[] } = yield call(uploadImageAPI, action.data);
    yield put({
      type: actionTypesUser.UPLOAD_IMAGE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.UPLOAD_IMAGE_ERROR,
      error: error.response.data,
    });
  }
}

function signUpAPI(data: SignUpData) {
  return axios.post('/user/signup', data);
}
function* signUp(action: ISignUpRequest) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: actionTypesUser.SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.SIGN_UP_ERROR,
      error: error.response.data,
    });
  }
}

function leaveAPI() {
  return axios.delete('/user/leave');
}
function* leave() {
  try {
    yield call(leaveAPI);
    yield put({
      type: actionTypesUser.LEAVE_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.LEAVE_ERROR,
      error: error.response.data,
    });
  }
}

function changeProfileAPI(data: ChangeProfileData) {
  return axios.post('/user/profile', data);
}
function* changeProfile(action: IChangeProfileRequest) {
  try {
    const result: { data: IUser } = yield call(changeProfileAPI, action.data);
    yield put({
      type: actionTypesUser.CHANGE_PROFILE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.CHANGE_PROFILE_ERROR,
      error: error.response.data,
    });
  }
}

function changeCountryAPI(data: { country: string }) {
  return axios.patch('/user/country', data);
}
function* changeCountry(action: IChangeCountryRequest) {
  try {
    const result: { data: { country: string } } = yield call(
      changeCountryAPI,
      action.data
    );
    yield put({
      type: actionTypesUser.CHANGE_COUNTRY_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.CHANGE_COUNTRY_ERROR,
      error: error.response.data,
    });
  }
}

function sendNotificationAPI(data: { title: string; userId: number }) {
  return axios.post('/user/notification', data);
}

function* sendNotification(action: ISendNotificationRequest) {
  try {
    yield call(sendNotificationAPI, action.data);
    yield put({
      type: actionTypesUser.SEND_NOTIFICATION_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.SEND_NOTIFICATION_ERROR,
      error: error.response.data,
    });
  }
}

function checkNotificationAPI() {
  return axios.patch('/user/notification');
}

function* checkNotification() {
  try {
    const result: { data: INotice[] } = yield call(checkNotificationAPI);
    yield put({
      type: actionTypesUser.CHECK_NOTIFICATION_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.CHECK_NOTIFICATION_ERROR,
      error: error.response.data,
    });
  }
}

function removeNotificationAPI(data: { notificationId: number }) {
  return axios.delete(`/user/notification/${data.notificationId}`);
}

function* removeNotification(action: IRemoveNotificationRequest) {
  try {
    const result: { data: { notificationId: number } } = yield call(
      removeNotificationAPI,
      action.data
    );
    yield put({
      type: actionTypesUser.REMOVE_NOTIFICATION_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.REMOVE_NOTIFICATION_ERROR,
      error: error.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(actionTypesUser.LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(actionTypesUser.LOG_OUT_REQUEST, logOut);
}
function* watchLoadMyInfo() {
  yield takeLatest(actionTypesUser.LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchLoadUserInfo() {
  yield takeLatest(actionTypesUser.LOAD_USER_INFO_REQUEST, loadUserInfo);
}
function* watchUploadImage() {
  yield takeLatest(actionTypesUser.UPLOAD_IMAGE_REQUEST, uploadImage);
}
function* watchSignUp() {
  yield takeLatest(actionTypesUser.SIGN_UP_REQUEST, signUp);
}
function* watchLeave() {
  yield takeLatest(actionTypesUser.LEAVE_REQUEST, leave);
}
function* watchChangeProfile() {
  yield takeLatest(actionTypesUser.CHANGE_PROFILE_REQUEST, changeProfile);
}
function* watchChangeCountry() {
  yield takeLatest(actionTypesUser.CHANGE_COUNTRY_REQUEST, changeCountry);
}
function* watchSendNotification() {
  yield takeLatest(actionTypesUser.SEND_NOTIFICATION_REQUEST, sendNotification);
}
function* watchCheckNotification() {
  yield takeLatest(
    actionTypesUser.CHECK_NOTIFICATION_REQUEST,
    checkNotification
  );
}
function* watchRemoveNotification() {
  yield takeLatest(
    actionTypesUser.REMOVE_NOTIFICATION_REQUEST,
    removeNotification
  );
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadMyInfo),
    fork(watchLoadUserInfo),
    fork(watchUploadImage),
    fork(watchSignUp),
    fork(watchLeave),
    fork(watchChangeProfile),
    fork(watchChangeCountry),
    fork(watchSendNotification),
    fork(watchCheckNotification),
    fork(watchRemoveNotification),
  ]);
}
