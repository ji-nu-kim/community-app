import {
  actionTypesPost,
  IAddPostRequest,
  IRemovePostRequest,
  IUpdatePostRequest,
  IAddCommentRequest,
  ILoadPostRequest,
  ILoadPostsRequest,
  ILoadUserPostsRequest,
  ILikePostRequest,
  IUnlikePostRequest,
  IUploadImagesRequest,
  IRemoveImage,
  CommentData,
  AddPostData,
} from '../interfaces/post/postAction.interfaces';

export const addPostRequestAction = (data: AddPostData): IAddPostRequest => {
  return {
    type: actionTypesPost.ADD_POST_REQUEST,
    data,
  };
};

export const removePostRequestAction = (data: {
  postId: number;
}): IRemovePostRequest => {
  return {
    type: actionTypesPost.REMOVE_POST_REQUEST,
    data,
  };
};

export const updatePostRequestAction = (data: {
  postId: number;
  content: string;
}): IUpdatePostRequest => {
  return {
    type: actionTypesPost.UPDATE_POST_REQUEST,
    data,
  };
};

export const loadPostRequestAction = (data: {
  postId: number;
}): ILoadPostRequest => {
  return {
    type: actionTypesPost.LOAD_POST_REQUEST,
    data,
  };
};

export const loadPostsRequestAction = (data: {
  postId: number;
}): ILoadPostsRequest => {
  return {
    type: actionTypesPost.LOAD_POSTS_REQUEST,
    data,
  };
};

export const loadUserPostsRequestAction = (data: {
  postId: number;
  userId: number;
}): ILoadUserPostsRequest => {
  return {
    type: actionTypesPost.LOAD_USER_POSTS_REQUEST,
    data,
  };
};

export const addCommentRequestAction = (
  data: CommentData
): IAddCommentRequest => {
  return {
    type: actionTypesPost.ADD_COMMENT_REQUEST,
    data,
  };
};

export const likePostRequestAction = (data: {
  postId: number;
}): ILikePostRequest => {
  return {
    type: actionTypesPost.LIKE_POST_REQUEST,
    data,
  };
};

export const unlikePostRequestAction = (data: {
  postId: number;
}): IUnlikePostRequest => {
  return {
    type: actionTypesPost.UNLIKE_POST_REQUEST,
    data,
  };
};

export const uploadImagesRequestAction = (
  data: FormData
): IUploadImagesRequest => {
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
