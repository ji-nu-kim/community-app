import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  actionTypesUser,
  IChangeNicknameRequest,
  ILoadUserInfoRequest,
  ILogInRequest,
  ISignUpRequest,
  LoginData,
  SignUpData,
} from '../interfaces/user/userAction.interfaces';
import axios from 'axios';
import { IUser } from 'interfaces/db';

function loginAPI(data: LoginData) {
  return axios.post('/user/login', data);
}

function* logIn(action: ILogInRequest) {
  try {
    const result: { data: IUser } = yield call(loginAPI, action.data);
    yield put({
      type: actionTypesUser.LOG_IN_SUCCESS,
      data: result.data,
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
      data: {
        id: number;
        nickname: string;
        email: string;
        Posts: number;
      };
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

function changeNicknameAPI(data: { nickname: string }) {
  return axios.patch('/user/nickname', data);
}

function* changeNickname(action: IChangeNicknameRequest) {
  try {
    const result: { data: { nickname: string } } = yield call(
      changeNicknameAPI,
      action.data
    );
    yield put({
      type: actionTypesUser.CHANGE_NICKNAME_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesUser.CHANGE_NICKNAME_ERROR,
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
function* watchSignUp() {
  yield takeLatest(actionTypesUser.SIGN_UP_REQUEST, signUp);
}
function* watchChangeNickname() {
  yield takeLatest(actionTypesUser.CHANGE_NICKNAME_REQUEST, changeNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadMyInfo),
    fork(watchLoadUserInfo),
    fork(watchSignUp),
    fork(watchChangeNickname),
  ]);
}
