import {
  actionTypesPost,
  IAddPostRequest,
  IRemovePostRequest,
  IUpdatePostRequest,
  IAddCommentRequest,
  IUploadImagesRequest,
  IRemoveImage,
  CommentData,
  AddPostData,
  ILoadPostsRequest,
  IRemoveCommentRequest,
  IUpdateCommentRequest,
} from '../interfaces/post/postAction.interfaces';

export const addPostRequestAction = (data: AddPostData): IAddPostRequest => {
  return {
    type: actionTypesPost.ADD_POST_REQUEST,
    data,
  };
};

export const removePostRequestAction = (data: {
  postId: number;
  communityId: number;
}): IRemovePostRequest => {
  return {
    type: actionTypesPost.REMOVE_POST_REQUEST,
    data,
  };
};

export const updatePostRequestAction = (data: {
  postId: number;
  communityId: number;
  content: string;
}): IUpdatePostRequest => {
  return {
    type: actionTypesPost.UPDATE_POST_REQUEST,
    data,
  };
};

export const loadPostsRequestAction = (data: {
  communityId: number;
  postId: number;
}): ILoadPostsRequest => {
  return {
    type: actionTypesPost.LOAD_POSTS_REQUEST,
    data,
  };
};

export const addCommentRequestAction = (data: CommentData): IAddCommentRequest => {
  return {
    type: actionTypesPost.ADD_COMMENT_REQUEST,
    data,
  };
};

export const updateCommentRequestAction = (data: {
  commentId: number;
  postId: number;
  content: string;
}): IUpdateCommentRequest => {
  return {
    type: actionTypesPost.UPDATE_COMMENT_REQUEST,
    data,
  };
};

export const removeCommentRequestAction = (data: {
  commentId: number;
  postId: number;
}): IRemoveCommentRequest => {
  return {
    type: actionTypesPost.REMOVE_COMMENT_REQUEST,
    data,
  };
};

export const uploadImagesRequestAction = (data: FormData): IUploadImagesRequest => {
  return {
    type: actionTypesPost.UPLOAD_IMAGES_REQUEST,
    data,
  };
};

export const removeImage = (data: number): IRemoveImage => {
  return {
    type: actionTypesPost.REMOVE_IMAGE,
    data,
  };
};
