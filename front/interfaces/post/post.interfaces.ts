import { IPost } from '../db';

export interface PostState {
  singlePost: IPost | null;
  mainPosts: IPost[];
  imagePaths: string[];
  hasMorePost: boolean;
  uploadImagesLoading: boolean;
  uploadImagesDone: boolean;
  uploadImagesError: any;

  addPostLoading: boolean;
  addPostDone: boolean;
  addPostError: any;
  removePostLoading: boolean;
  removePostDone: boolean;
  removePostError: any;
  updatePostLoading: boolean;
  updatePostDone: boolean;
  updatePostError: any;
  loadPostsLoading: boolean;
  loadPostsDone: boolean;
  loadPostsError: any;
  addCommentLoading: boolean;
  addCommentDone: boolean;
  addCommentError: any;
  removeCommentLoading: boolean;
  removeCommentDone: boolean;
  removeCommentError: any;
  updateCommentLoading: boolean;
  updateCommentDone: boolean;
  updateCommentError: any;
}
