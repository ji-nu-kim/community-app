import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  actionTypesPost,
  AddPostData,
  CommentData,
  IAddCommentRequest,
  IAddPostRequest,
  ILoadPostsRequest,
  IRemovePostRequest,
  IUpdatePostRequest,
  IUploadImagesRequest,
} from '../interfaces/post/postAction.interfaces';
import axios from 'axios';
import { IComment, IPost } from 'interfaces/db';

function postAPI(data: AddPostData) {
  return axios.post(`/post/${data.communityId}`, data.formData);
}

function* addPost(action: IAddPostRequest) {
  try {
    const result: { data: IPost } = yield call(postAPI, action.data);
    yield put({
      type: actionTypesPost.ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesPost.ADD_POST_ERROR,
      error: error.response.data,
    });
  }
}

function removePostAPI(data: { communityId: number; postId: number }) {
  return axios.delete(`/post/community/${data.communityId}/post/${data.postId}`);
}

function* removePost(action: IRemovePostRequest) {
  try {
    const result: { data: { postId: number } } = yield call(removePostAPI, action.data);
    yield put({
      type: actionTypesPost.REMOVE_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesPost.REMOVE_POST_ERROR,
      error: error.response.data,
    });
  }
}

function updatePostAPI(data: { postId: number; communityId: number; content: string }) {
  return axios.patch(`/post/community/${data.communityId}/post/${data.postId}`, data);
}

function* updatePost(action: IUpdatePostRequest) {
  try {
    const result: { data: { postId: number; content: string } } = yield call(
      updatePostAPI,
      action.data
    );
    yield put({
      type: actionTypesPost.UPDATE_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesPost.UPDATE_POST_ERROR,
      error: error.response.data,
    });
  }
}

function loadPostsAPI(data: { communityId: number; postId: number }) {
  return axios.get(`/posts/community/${data.communityId}/post?lastId=${data.postId}`);
}

function* loadPosts(action: ILoadPostsRequest) {
  try {
    const result: { data: IPost[] } = yield call(loadPostsAPI, action.data);
    yield put({
      type: actionTypesPost.LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesPost.LOAD_POSTS_ERROR,
      error: error.response.data,
    });
  }
}

function addCommentAPI(data: CommentData) {
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action: IAddCommentRequest) {
  try {
    const result: { data: IComment } = yield call(addCommentAPI, action.data);
    yield put({
      type: actionTypesPost.ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesPost.ADD_COMMENT_ERROR,
      error: error.response.data,
    });
  }
}

function uploadImagesAPI(data: FormData) {
  return axios.post('/post/images', data);
}

function* uploadImages(action: IUploadImagesRequest) {
  try {
    const result: { data: string[] } = yield call(uploadImagesAPI, action.data);
    yield put({
      type: actionTypesPost.UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: actionTypesPost.UPLOAD_IMAGES_ERROR,
      error: error.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(actionTypesPost.ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
  yield takeLatest(actionTypesPost.REMOVE_POST_REQUEST, removePost);
}
function* watchUpdatePost() {
  yield takeLatest(actionTypesPost.UPDATE_POST_REQUEST, updatePost);
}
function* watchloadPosts() {
  yield takeLatest(actionTypesPost.LOAD_POSTS_REQUEST, loadPosts);
}
function* watchAddComment() {
  yield takeLatest(actionTypesPost.ADD_COMMENT_REQUEST, addComment);
}
function* watchUploadImages() {
  yield takeLatest(actionTypesPost.UPLOAD_IMAGES_REQUEST, uploadImages);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchUpdatePost),
    fork(watchloadPosts),
    fork(watchAddComment),
    fork(watchUploadImages),
  ]);
}
