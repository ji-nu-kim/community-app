import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  IAddCommunityReqeust,
  actionTypesCommunity,
  CommunityData,
  ILoadCommunityReqeust,
} from '../interfaces/community/communityAction.interfaces';
import { actionTypesUser } from '../interfaces/user/userAction.interfaces';
import axios from 'axios';
import { ICommunity } from 'interfaces/db';

function addCommunityAPI(data: CommunityData) {
  return axios.post('/community', data);
}

function* addCommunity(action: IAddCommunityReqeust) {
  try {
    const result: { data: ICommunity } = yield call(
      addCommunityAPI,
      action.data
    );
    yield put({
      type: actionTypesCommunity.ADD_COMMUNITY_SUCCESS,
      data: result.data,
    });
    yield put({
      type: actionTypesUser.ADD_COMMUNITY_TO_ME,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.ADD_COMMUNITY_ERROR,
      error: error.response.data,
    });
  }
}

function loadCommunityAPI(data: { communityId: number }) {
  return axios.get(`/community/${data.communityId}`);
}

function* loadCommunity(action: ILoadCommunityReqeust) {
  try {
    const result: { data: ICommunity } = yield call(
      loadCommunityAPI,
      action.data
    );
    yield put({
      type: actionTypesCommunity.LOAD_COMMUNITY_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.LOAD_COMMUNITY_ERROR,
      error: error.response.data,
    });
  }
}

function loadCategoriesAPI() {
  return axios.get('/community/categories');
}

function* loadCategories() {
  try {
    const result: { data: ICommunity } = yield call(loadCategoriesAPI);
    yield put({
      type: actionTypesCommunity.LOAD_CATEGORIES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.LOAD_CATEGORIES_ERROR,
      error: error.response.data,
    });
  }
}

function* watchAddCommunity() {
  yield takeLatest(actionTypesCommunity.ADD_COMMUNITY_REQUEST, addCommunity);
}
function* watchLoadCommunity() {
  yield takeLatest(actionTypesCommunity.LOAD_COMMUNITY_REQUEST, loadCommunity);
}
function* watchLoadCategories() {
  yield takeLatest(
    actionTypesCommunity.LOAD_CATEGORIES_REQUEST,
    loadCategories
  );
}

export default function* communitySaga() {
  yield all([
    fork(watchAddCommunity),
    fork(watchLoadCommunity),
    fork(watchLoadCategories),
  ]);
}
