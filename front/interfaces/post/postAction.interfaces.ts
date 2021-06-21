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
  LOAD_POSTS_REQUEST: 'LOAD_POSTS_REQUEST',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',
  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',
  REMOVE_COMMENT_REQUEST: 'REMOVE_COMMENT_REQUEST',
  REMOVE_COMMENT_SUCCESS: 'REMOVE_COMMENT_SUCCESS',
  REMOVE_COMMENT_ERROR: 'REMOVE_COMMENT_ERROR',
  UPDATE_COMMENT_REQUEST: 'UPDATE_COMMENT_REQUEST',
  UPDATE_COMMENT_SUCCESS: 'UPDATE_COMMENT_SUCCESS',
  UPDATE_COMMENT_ERROR: 'UPDATE_COMMENT_ERROR',
  UPLOAD_IMAGES_REQUEST: 'UPLOAD_IMAGES_REQUEST',
  UPLOAD_IMAGES_SUCCESS: 'UPLOAD_IMAGES_SUCCESS',
  UPLOAD_IMAGES_ERROR: 'UPLOAD_IMAGES_ERROR',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
  REPORT_REQUEST: 'REPORT_REQUEST',
  REPORT_SUCCESS: 'REPORT_SUCCESS',
  REPORT_ERROR: 'REPORT_ERROR',
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
  data: IPost;
}
export interface IAddPostError {
  type: typeof actionTypesPost.ADD_POST_ERROR;
  error: Error;
}
export interface IRemovePostRequest {
  type: typeof actionTypesPost.REMOVE_POST_REQUEST;
  data: { postId: number; communityId: number };
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
  data: { postId: number; communityId: number; content: string };
}
export interface IUpdatePostSuccess {
  type: typeof actionTypesPost.UPDATE_POST_SUCCESS;
  data: { postId: number; content: string };
}
export interface IUpdatePostError {
  type: typeof actionTypesPost.UPDATE_POST_ERROR;
  error: Error;
}
export interface IReportData {
  contentId: number;
  reporter: number;
  reportedPerson: number;
  reason: string;
  content: string;
  variety: string;
}
export interface IReportRequest {
  type: typeof actionTypesPost.REPORT_REQUEST;
  data: IReportData;
}
export interface IReportSuccess {
  type: typeof actionTypesPost.REPORT_SUCCESS;
}
export interface IReportError {
  type: typeof actionTypesPost.REPORT_ERROR;
  error: Error;
}
export interface ILoadPostsRequest {
  type: typeof actionTypesPost.LOAD_POSTS_REQUEST;
  data: { communityId: number; postId: number };
}
export interface ILoadPostsSuccess {
  type: typeof actionTypesPost.LOAD_POSTS_SUCCESS;
  data: IPost[];
}
export interface ILoadPostsError {
  type: typeof actionTypesPost.LOAD_POSTS_ERROR;
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
export interface IUpdateCommentRequest {
  type: typeof actionTypesPost.UPDATE_COMMENT_REQUEST;
  data: { commentId: number; postId: number; content: string };
}
export interface IUpdateCommentSuccess {
  type: typeof actionTypesPost.UPDATE_COMMENT_SUCCESS;
  data: { commentId: number; postId: number; content: string };
}
export interface IUpdateCommentError {
  type: typeof actionTypesPost.UPDATE_COMMENT_ERROR;
  error: Error;
}
export interface IRemoveCommentRequest {
  type: typeof actionTypesPost.REMOVE_COMMENT_REQUEST;
  data: { commentId: number; postId: number };
}
export interface IRemoveCommentSuccess {
  type: typeof actionTypesPost.REMOVE_COMMENT_SUCCESS;
  data: { commentId: number; postId: number };
}
export interface IRemoveCommentError {
  type: typeof actionTypesPost.REMOVE_COMMENT_ERROR;
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
  | IReportRequest
  | IReportSuccess
  | IReportError
  | ILoadPostsRequest
  | ILoadPostsSuccess
  | ILoadPostsError
  | IAddCommentRequest
  | IAddCommentSuccess
  | IAddCommentError
  | IUpdateCommentRequest
  | IUpdateCommentSuccess
  | IUpdateCommentError
  | IRemoveCommentRequest
  | IRemoveCommentSuccess
  | IRemoveCommentError
  | IUploadImagesRequest
  | IUploadImagesSuccess
  | IUploadImagesError
  | IRemoveImage;
