import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  IAddCommunityReqeust,
  actionTypesCommunity,
  CommunityData,
} from '../interfaces/community/communityAction.interfaces';
import { actionTypesUser } from '../interfaces/user/userAction.interfaces';
import axios from 'axios';
import { ICommunity } from 'interfaces/db';

function postAPI(data: CommunityData) {
  return axios.post('/community', data);
}

function* addCommunity(action: IAddCommunityReqeust) {
  try {
    const result: { data: ICommunity } = yield call(postAPI, action.data);
    yield put({
      type: actionTypesCommunity.ADD_COMMUNITY_SUCCESS,
      data: result.data,
    });
    yield put({
      type: actionTypesUser.ADD_COMMUNITY_TO_ME,
      data: result.data.id,
    });
  } catch (error) {
    yield put({
      type: actionTypesCommunity.ADD_COMMUNITY_ERROR,
      error: error.response.data,
    });
  }
}

function* watchAddCommunity() {
  yield takeLatest(actionTypesCommunity.ADD_COMMUNITY_REQUEST, addCommunity);
}

export default function* communitySaga() {
  yield all([fork(watchAddCommunity)]);
}
