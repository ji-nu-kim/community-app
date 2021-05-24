import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  IAddCommunityReqeust,
  actionTypesCommunity,
  CommunityData,
  ILoadCommunityReqeust,
  IUploadCommunityImageReqeust,
  IChangeCommunityInfoRequest,
  ChangeCommunityInfoData,
  ILoadCountryCommunitiesRequest,
  ILoadCategoryCommunitiesRequest,
} from '../interfaces/community/communityAction.interfaces';
import axios from 'axios';
import { ICommunity } from 'interfaces/db';

function uploadCommunityImageAPI(data: FormData) {
  return axios.post('/community/image', data);
}

function* uploadCommunityImage(action: IUploadCommunityImageReqeust) {
  try {
    const result: { data: string[] } = yield call(
      uploadCommunityImageAPI,
      action.data
    );
    yield put({
      type: actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_ERROR,
      error: error.response.data,
    });
  }
}

function changeCommunityInfoAPI(data: ChangeCommunityInfoData) {
  return axios.post('/community/info', data);
}

function* changeCommunityInfo(action: IChangeCommunityInfoRequest) {
  try {
    const result: { data: string } = yield call(
      changeCommunityInfoAPI,
      action.data
    );
    yield put({
      type: actionTypesCommunity.CHANGE_COMMUNITY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.CHANGE_COMMUNITY_INFO_ERROR,
      error: error.response.data,
    });
  }
}

function addCommunityAPI(data: CommunityData) {
  return axios.post('/community', data);
}

function* addCommunity(action: IAddCommunityReqeust) {
  try {
    yield call(addCommunityAPI, action.data);
    yield put({
      type: actionTypesCommunity.ADD_COMMUNITY_SUCCESS,
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

function loadCommunitiesAPI() {
  return axios.get('/communities');
}

function* loadCommunities() {
  try {
    const result: { data: ICommunity[] } = yield call(loadCommunitiesAPI);
    yield put({
      type: actionTypesCommunity.LOAD_COMMUNITIES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.LOAD_COMMUNITIES_ERROR,
      error: error.response.data,
    });
  }
}

function loadCountryCommunitiesAPI(data: {
  country: string;
  communityId: number;
}) {
  return axios.get(
    `/communities/country/${data.country}?lastId=${data.communityId}`
  );
}

function* loadCountryCommunities(action: ILoadCountryCommunitiesRequest) {
  try {
    const result: { data: ICommunity[] } = yield call(
      loadCountryCommunitiesAPI,
      action.data
    );
    yield put({
      type: actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_ERROR,
      error: error.response.data,
    });
  }
}

function loadCategoryCommunitiesAPI(data: {
  categoryId: number;
  communityId: number;
}) {
  console.log(data);
  return axios.get(
    `/communities/category/${data.categoryId}?lastId=${data.communityId}`
  );
}

function* loadCategoryCommunities(action: ILoadCategoryCommunitiesRequest) {
  try {
    const result: { data: ICommunity[] } = yield call(
      loadCategoryCommunitiesAPI,
      action.data
    );
    console.log(result.data);
    yield put({
      type: actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_ERROR,
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

function* watchUploadCommunityImage() {
  yield takeLatest(
    actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_REQUEST,
    uploadCommunityImage
  );
}
function* watchChangeCommunityInfo() {
  yield takeLatest(
    actionTypesCommunity.CHANGE_COMMUNITY_INFO_REQUEST,
    changeCommunityInfo
  );
}
function* watchAddCommunity() {
  yield takeLatest(actionTypesCommunity.ADD_COMMUNITY_REQUEST, addCommunity);
}
function* watchLoadCommunity() {
  yield takeLatest(actionTypesCommunity.LOAD_COMMUNITY_REQUEST, loadCommunity);
}
function* watchLoadCommunities() {
  yield takeLatest(
    actionTypesCommunity.LOAD_COMMUNITIES_REQUEST,
    loadCommunities
  );
}
function* watchLoadCountryCommunities() {
  yield takeLatest(
    actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_REQUEST,
    loadCountryCommunities
  );
}
function* watchLoadCategoryCommunities() {
  yield takeLatest(
    actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_REQUEST,
    loadCategoryCommunities
  );
}
function* watchLoadCategories() {
  yield takeLatest(
    actionTypesCommunity.LOAD_CATEGORIES_REQUEST,
    loadCategories
  );
}

export default function* communitySaga() {
  yield all([
    fork(watchUploadCommunityImage),
    fork(watchChangeCommunityInfo),
    fork(watchAddCommunity),
    fork(watchLoadCommunity),
    fork(watchLoadCommunities),
    fork(watchLoadCountryCommunities),
    fork(watchLoadCategoryCommunities),
    fork(watchLoadCategories),
  ]);
}
