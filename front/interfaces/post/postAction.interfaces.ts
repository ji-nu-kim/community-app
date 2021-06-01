import { IComment, IPost } from '../db';

export const actionTypesPost = {
  ADD_POST_REQUEST: 'ADD_POST_REQUEST',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
  REMOVE_POST_REQUEST: 'REMOVE_POST_REQUEST',
  REMOVE_POST_SUCCESS: 'REMOVE_POST_SUCCESS',
  REMOVE_POST_ERROR: 'REMOVE_POST_ERROR',
  UPDATE_POST_REQUEST: 'UPDATE_POST_REQUEST',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',
  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',
  LOAD_POST_REQUEST: 'LOAD_POST_REQUEST',
  LOAD_POST_SUCCESS: 'LOAD_POST_SUCCESS',
  LOAD_POST_ERROR: 'LOAD_POST_ERROR',
  LOAD_POSTS_REQUEST: 'LOAD_POSTS_REQUEST',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',
  LOAD_USER_POSTS_REQUEST: 'LOAD_USER_POSTS_REQUEST',
  LOAD_USER_POSTS_SUCCESS: 'LOAD_USER_POSTS_SUCCESS',
  LOAD_USER_POSTS_ERROR: 'LOAD_USER_POSTS_ERROR',
  LIKE_POST_REQUEST: 'LIKE_POST_REQUEST',
  LIKE_POST_SUCCESS: 'LIKE_POST_SUCCESS',
  LIKE_POST_ERROR: 'LIKE_POST_ERROR',
  UNLIKE_POST_REQUEST: 'UNLIKE_POST_REQUEST',
  UNLIKE_POST_SUCCESS: 'UNLIKE_POST_SUCCESS',
  UNLIKE_POST_ERROR: 'UNLIKE_POST_ERROR',
  UPLOAD_IMAGES_REQUEST: 'UPLOAD_IMAGES_REQUEST',
  UPLOAD_IMAGES_SUCCESS: 'UPLOAD_IMAGES_SUCCESS',
  UPLOAD_IMAGES_ERROR: 'UPLOAD_IMAGES_ERROR',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
} as const;

export interface AddPostData {
  formData: FormData;
  communityId: number;
}
export interface IAddPostRequest {
  type: typeof actionTypesPost.ADD_POST_REQUEST;
  data: AddPostData;
}
export interface IAddPostSuccess {
  type: typeof actionTypesPost.ADD_POST_SUCCESS;
}
export interface IAddPostError {
  type: typeof actionTypesPost.ADD_POST_ERROR;
  error: Error;
}
export interface IRemovePostRequest {
  type: typeof actionTypesPost.REMOVE_POST_REQUEST;
  data: { postId: number };
}
export interface IRemovePostSuccess {
  type: typeof actionTypesPost.REMOVE_POST_SUCCESS;
  data: { postId: number };
}
export interface IRemovePostError {
  type: typeof actionTypesPost.REMOVE_POST_ERROR;
  error: Error;
}
export interface IUpdatePostRequest {
  type: typeof actionTypesPost.UPDATE_POST_REQUEST;
  data: { postId: number; content: string };
}
export interface IUpdatePostSuccess {
  type: typeof actionTypesPost.UPDATE_POST_SUCCESS;
  data: { postId: number; content: string };
}
export interface IUpdatePostError {
  type: typeof actionTypesPost.UPDATE_POST_ERROR;
  error: Error;
}

export interface ILoadPostRequest {
  type: typeof actionTypesPost.LOAD_POST_REQUEST;
  data: { postId: number };
}
export interface ILoadPostSuccess {
  type: typeof actionTypesPost.LOAD_POST_SUCCESS;
  data: IPost;
}
export interface ILoadPostError {
  type: typeof actionTypesPost.LOAD_POST_ERROR;
  error: Error;
}
export interface ILoadPostsRequest {
  type: typeof actionTypesPost.LOAD_POSTS_REQUEST;
  data: { postId: number };
}
export interface ILoadPostsSuccess {
  type: typeof actionTypesPost.LOAD_POSTS_SUCCESS;
  data: IPost[];
}
export interface ILoadPostsError {
  type: typeof actionTypesPost.LOAD_POSTS_ERROR;
  error: Error;
}
export interface ILoadUserPostsRequest {
  type: typeof actionTypesPost.LOAD_USER_POSTS_REQUEST;
  data: { postId: number; userId: number };
}
export interface ILoadUserPostsSuccess {
  type: typeof actionTypesPost.LOAD_USER_POSTS_SUCCESS;
  data: IPost[];
}
export interface ILoadUserPostsError {
  type: typeof actionTypesPost.LOAD_USER_POSTS_ERROR;
  error: Error;
}

export interface CommentData {
  comment: string;
  postId: number;
}
export interface IAddCommentRequest {
  type: typeof actionTypesPost.ADD_COMMENT_REQUEST;
  data: CommentData;
}
export interface IAddCommentSuccess {
  type: typeof actionTypesPost.ADD_COMMENT_SUCCESS;
  data: IComment;
}
export interface IAddCommentError {
  type: typeof actionTypesPost.ADD_COMMENT_ERROR;
  error: Error;
}

export interface ILikePostRequest {
  type: typeof actionTypesPost.LIKE_POST_REQUEST;
  data: { postId: number };
}
export interface ILikePostSuccess {
  type: typeof actionTypesPost.LIKE_POST_SUCCESS;
  data: { postId: number; userId: number };
}
export interface ILikePostError {
  type: typeof actionTypesPost.LIKE_POST_ERROR;
  error: Error;
}
export interface IUnlikePostRequest {
  type: typeof actionTypesPost.UNLIKE_POST_REQUEST;
  data: { postId: number };
}
export interface IUnlikePostSuccess {
  type: typeof actionTypesPost.UNLIKE_POST_SUCCESS;
  data: { postId: number; userId: number };
}
export interface IUnlikePostError {
  type: typeof actionTypesPost.UNLIKE_POST_ERROR;
  error: Error;
}
export interface IUploadImagesRequest {
  type: typeof actionTypesPost.UPLOAD_IMAGES_REQUEST;
  data: FormData;
}
export interface IUploadImagesSuccess {
  type: typeof actionTypesPost.UPLOAD_IMAGES_SUCCESS;
  data: string[];
}
export interface IUploadImagesError {
  type: typeof actionTypesPost.UPLOAD_IMAGES_ERROR;
  error: Error;
}
export interface IRemoveImage {
  type: typeof actionTypesPost.REMOVE_IMAGE;
  data: number;
}

export type ActionsPost =
  | IAddPostRequest
  | IAddPostSuccess
  | IAddPostError
  | IRemovePostRequest
  | IRemovePostSuccess
  | IRemovePostError
  | IUpdatePostRequest
  | IUpdatePostSuccess
  | IUpdatePostError
  | ILoadPostRequest
  | ILoadPostSuccess
  | ILoadPostError
  | ILoadPostsRequest
  | ILoadPostsSuccess
  | ILoadPostsError
  | ILoadUserPostsRequest
  | ILoadUserPostsSuccess
  | ILoadUserPostsError
  | IAddCommentRequest
  | IAddCommentSuccess
  | IAddCommentError
  | ILikePostRequest
  | ILikePostSuccess
  | ILikePostError
  | IUnlikePostRequest
  | IUnlikePostSuccess
  | IUnlikePostError
  | IUploadImagesRequest
  | IUploadImagesSuccess
  | IUploadImagesError
  | IRemoveImage;
