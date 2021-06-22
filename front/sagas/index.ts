import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import postSaga from './post';
import communitySaga from './community';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACK_URL_KEY;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga), fork(communitySaga)]);
}
