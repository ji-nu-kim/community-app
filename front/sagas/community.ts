import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  IAddCommunityRequest,
  actionTypesCommunity,
  ICommunityData,
  ILoadCommunityRequest,
  IUploadCommunityImageRequest,
  IChangeCommunityInfoRequest,
  IChangeCommunityInfoData,
  ILoadCountryCommunitiesRequest,
  ILoadCategoryCommunitiesRequest,
  ILoadCategoryRequest,
  IJoinCommunityRequest,
  IAcceptCommunityRequest,
  IRefuseCommunityRequest,
  ILeaveCommunityRequest,
  IAddMeetRequest,
  IAddMeetData,
  IRemoveMeetRequest,
  IJoinMeetRequest,
  ILeaveMeetRequest,
  IModifyMeetRequest,
  IModifyMeetData,
  ISearchCommunitiesRequest,
  IRemoveCommunityRequest,
} from '../interfaces/community/communityAction.interfaces';
import axios from 'axios';
import { ICategory, ICommunity, IMeet, IUser } from 'interfaces/db';
import { actionTypesUser } from 'interfaces';

function uploadCommunityImageAPI(data: FormData) {
  return axios.post('/community/image', data);
}
function* uploadCommunityImage(action: IUploadCommunityImageRequest) {
  try {
    const result: { data: string[] } = yield call(uploadCommunityImageAPI, action.data);
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

function changeCommunityInfoAPI(data: IChangeCommunityInfoData) {
  return axios.post(`/community/${data.communityId}/info`, data);
}
function* changeCommunityInfo(action: IChangeCommunityInfoRequest) {
  try {
    const result: {
      data: {
        description: string;
        caution: string;
        requirement: string;
        profilePhoto: string;
      };
    } = yield call(changeCommunityInfoAPI, action.data);
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

function removeCommunityAPI(data: { communityId: number }) {
  return axios.delete(`/community/${data.communityId}`);
}
function* removeCommunity(action: IRemoveCommunityRequest) {
  try {
    yield call(removeCommunityAPI, action.data);
    yield put({
      type: actionTypesCommunity.REMOVE_COMMUNITY_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.REMOVE_COMMUNITY_ERROR,
      error: error.response.data,
    });
  }
}

function addCommunityAPI(data: ICommunityData) {
  return axios.post('/community', data);
}
function* addCommunity(action: IAddCommunityRequest) {
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

function joinCommunityAPI(data: { communityId: number }) {
  return axios.post(`/community/${data.communityId}/join`);
}
function* joinCommunity(action: IJoinCommunityRequest) {
  try {
    const result: { data: IUser } = yield call(joinCommunityAPI, action.data);
    yield put({
      type: actionTypesCommunity.JOIN_COMMUNITY_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.JOIN_COMMUNITY_ERROR,
      error: error.response.data,
    });
  }
}

function acceptCommunityAPI(data: { communityId: number; userId: number }) {
  return axios.post(`/community/${data.communityId}/accept/${data.userId}`, data);
}
function* acceptCommunity(action: IAcceptCommunityRequest) {
  try {
    const result: { data: IUser } = yield call(acceptCommunityAPI, action.data);
    yield put({
      type: actionTypesCommunity.ACCEPT_COMMUNITY_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.ACCEPT_COMMUNITY_ERROR,
      error: error.response.data,
    });
  }
}

function refuseCommunityAPI(data: { communityId: number; userId: number }) {
  return axios.delete(`/community/${data.communityId}/refuse/${data.userId}`);
}
function* refuseCommunity(action: IRefuseCommunityRequest) {
  try {
    const result: { data: { userId: number } } = yield call(
      refuseCommunityAPI,
      action.data
    );
    yield put({
      type: actionTypesCommunity.REFUSE_COMMUNITY_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.REFUSE_COMMUNITY_ERROR,
      error: error.response.data,
    });
  }
}

function leaveCommunityAPI(data: { communityId: number }) {
  return axios.delete(`/community/${data.communityId}/leave`);
}

function* leaveCommunity(action: ILeaveCommunityRequest) {
  try {
    const result: { data: { userId: number; communityId: number } } = yield call(
      leaveCommunityAPI,
      action.data
    );
    yield put({
      type: actionTypesCommunity.LEAVE_COMMUNITY_SUCCESS,
      data: result.data,
    });
    yield put({
      type: actionTypesUser.LEAVE_COMMUNITY_OF_ME,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.LEAVE_COMMUNITY_ERROR,
      error: error.response.data,
    });
  }
}

function loadCommunityAPI(data: { communityId: number }) {
  return axios.get(`/community/${data.communityId}`);
}
function* loadCommunity(action: ILoadCommunityRequest) {
  try {
    const result: { data: ICommunity } = yield call(loadCommunityAPI, action.data);
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

function searchCommunitiesAPI(data: { keyword: string }) {
  return axios.get(`/search/${encodeURIComponent(data.keyword)}`);
}
function* searchCommunities(action: ISearchCommunitiesRequest) {
  try {
    const result: { data: ICommunity[] } = yield call(searchCommunitiesAPI, action.data);
    yield put({
      type: actionTypesCommunity.SEARCH_COMMUNITIES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.SEARCH_COMMUNITIES_ERROR,
      error: error.response.data,
    });
  }
}

function loadCountryCommunitiesAPI(data: { country: string; communityId: number }) {
  return axios.get(`/communities/country/${data.country}?lastId=${data.communityId}`);
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

function loadCategoryCommunitiesAPI(data: { categoryId: number; communityId: number }) {
  return axios.get(`/communities/category/${data.categoryId}?lastId=${data.communityId}`);
}
function* loadCategoryCommunities(action: ILoadCategoryCommunitiesRequest) {
  try {
    const result: { data: ICommunity[] } = yield call(
      loadCategoryCommunitiesAPI,
      action.data
    );
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

function loadCategoryAPI(data: { categoryId: number }) {
  return axios.get(`/community/category/${data.categoryId}`);
}
function* loadCategory(action: ILoadCategoryRequest) {
  try {
    const result: { data: ICategory } = yield call(loadCategoryAPI, action.data);
    yield put({
      type: actionTypesCommunity.LOAD_CATEGORY_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.LOAD_CATEGORY_ERROR,
      error: error.response.data,
    });
  }
}

function loadCategoriesAPI() {
  return axios.get('/community/categories');
}
function* loadCategories() {
  try {
    const result: { data: ICategory[] } = yield call(loadCategoriesAPI);
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

function addMeetAPI(data: IAddMeetData) {
  return axios.post(`/community/${data.communityId}/meet`, data);
}
function* addMeet(action: IAddMeetRequest) {
  try {
    const result: { data: IMeet } = yield call(addMeetAPI, action.data);
    yield put({
      type: actionTypesCommunity.ADD_MEET_SUCCESS,
      data: result.data,
    });
    yield put({
      type: actionTypesUser.ADD_MEET_OF_ME,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.ADD_MEET_ERROR,
      error: error.response.data,
    });
  }
}

function removeMeetAPI(data: { meetId: number; communityId: number }) {
  return axios.delete(`/community/${data.communityId}/meet/${data.meetId}`);
}
function* removeMeet(action: IRemoveMeetRequest) {
  try {
    const result: { data: { meetId: number } } = yield call(removeMeetAPI, action.data);
    yield put({
      type: actionTypesCommunity.REMOVE_MEET_SUCCESS,
      data: result.data,
    });
    yield put({
      type: actionTypesUser.REMOVE_MEET_OF_ME,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.REMOVE_MEET_ERROR,
      error: error.response.data,
    });
  }
}

function joinMeetAPI(data: { meetId: number; communityId: number }) {
  return axios.post(`/community/${data.communityId}/meet/${data.meetId}/join`);
}
function* joinMeet(action: IJoinMeetRequest) {
  try {
    const result: { data: IMeet } = yield call(joinMeetAPI, action.data);
    yield put({
      type: actionTypesCommunity.JOIN_MEET_SUCCESS,
      data: result.data,
    });
    yield put({
      type: actionTypesUser.JOIN_MEET_OF_ME,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.JOIN_MEET_ERROR,
      error: error.response.data,
    });
  }
}

function leaveMeetAPI(data: { meetId: number; communityId: number }) {
  return axios.delete(`/community/${data.communityId}/meet/${data.meetId}/leave`);
}
function* leaveMeet(action: ILeaveMeetRequest) {
  try {
    const result: { data: { meetId: number; userId: number } } = yield call(
      leaveMeetAPI,
      action.data
    );
    yield put({
      type: actionTypesCommunity.LEAVE_MEET_SUCCESS,
      data: result.data,
    });
    yield put({
      type: actionTypesUser.LEAVE_MEET_OF_ME,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.LEAVE_MEET_ERROR,
      error: error.response.data,
    });
  }
}

function modifyMeetAPI(data: IModifyMeetData) {
  return axios.patch(`/community/${data.communityId}/meet/${data.meetId}`, data);
}
function* modifyMeet(action: IModifyMeetRequest) {
  try {
    const result: { data: IMeet } = yield call(modifyMeetAPI, action.data);
    yield put({
      type: actionTypesCommunity.MODIFY_MEET_SUCCESS,
      data: result.data,
    });
    yield put({
      type: actionTypesUser.MODIFY_MEET_OF_ME,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.MODIFY_MEET_ERROR,
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
function* watchRemoveCommunity() {
  yield takeLatest(actionTypesCommunity.REMOVE_COMMUNITY_REQUEST, removeCommunity);
}
function* watchAddCommunity() {
  yield takeLatest(actionTypesCommunity.ADD_COMMUNITY_REQUEST, addCommunity);
}
function* watchJoinCommunity() {
  yield takeLatest(actionTypesCommunity.JOIN_COMMUNITY_REQUEST, joinCommunity);
}
function* watchAcceptCommunity() {
  yield takeLatest(actionTypesCommunity.ACCEPT_COMMUNITY_REQUEST, acceptCommunity);
}
function* watchRefuseCommunity() {
  yield takeLatest(actionTypesCommunity.REFUSE_COMMUNITY_REQUEST, refuseCommunity);
}
function* watchLeaveCommunity() {
  yield takeLatest(actionTypesCommunity.LEAVE_COMMUNITY_REQUEST, leaveCommunity);
}
function* watchLoadCommunity() {
  yield takeLatest(actionTypesCommunity.LOAD_COMMUNITY_REQUEST, loadCommunity);
}
function* watchLoadCommunities() {
  yield takeLatest(actionTypesCommunity.LOAD_COMMUNITIES_REQUEST, loadCommunities);
}
function* watchsearchCommunities() {
  yield takeLatest(actionTypesCommunity.SEARCH_COMMUNITIES_REQUEST, searchCommunities);
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
function* watchLoadCategory() {
  yield takeLatest(actionTypesCommunity.LOAD_CATEGORY_REQUEST, loadCategory);
}
function* watchLoadCategories() {
  yield takeLatest(actionTypesCommunity.LOAD_CATEGORIES_REQUEST, loadCategories);
}
function* watchAddMeet() {
  yield takeLatest(actionTypesCommunity.ADD_MEET_REQUEST, addMeet);
}
function* watchRemoveMeet() {
  yield takeLatest(actionTypesCommunity.REMOVE_MEET_REQUEST, removeMeet);
}
function* watchJoinMeet() {
  yield takeLatest(actionTypesCommunity.JOIN_MEET_REQUEST, joinMeet);
}
function* watchLeaveMeet() {
  yield takeLatest(actionTypesCommunity.LEAVE_MEET_REQUEST, leaveMeet);
}
function* watchModifyMeet() {
  yield takeLatest(actionTypesCommunity.MODIFY_MEET_REQUEST, modifyMeet);
}

export default function* communitySaga() {
  yield all([
    fork(watchUploadCommunityImage),
    fork(watchChangeCommunityInfo),
    fork(watchRemoveCommunity),
    fork(watchAddCommunity),
    fork(watchJoinCommunity),
    fork(watchAcceptCommunity),
    fork(watchRefuseCommunity),
    fork(watchLeaveCommunity),
    fork(watchLoadCommunity),
    fork(watchLoadCommunities),
    fork(watchsearchCommunities),
    fork(watchLoadCountryCommunities),
    fork(watchLoadCategoryCommunities),
    fork(watchLoadCategory),
    fork(watchLoadCategories),
    fork(watchAddMeet),
    fork(watchRemoveMeet),
    fork(watchJoinMeet),
    fork(watchLeaveMeet),
    fork(watchModifyMeet),
  ]);
}
