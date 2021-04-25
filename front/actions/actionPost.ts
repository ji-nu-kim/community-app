import {
  actionTypesPost,
  IAddPostReqeust,
  IRemovePostReqeust,
  IUpdatePostReqeust,
  IAddCommentReqeust,
  ILoadPostReqeust,
  ILoadPostsReqeust,
  ILoadUserPostsReqeust,
  ILikePostReqeust,
  IUnlikePostReqeust,
  IUploadImagesReqeust,
  IRemoveImage,
  CommentData,
} from '../interfaces/post/postAction.interfaces';

export const addPostRequestAction = (data: FormData): IAddPostReqeust => {
  return {
    type: actionTypesPost.ADD_POST_REQUEST,
    data,
  };
};

export const removePostRequestAction = (data: {
  postId: number;
}): IRemovePostReqeust => {
  return {
    type: actionTypesPost.REMOVE_POST_REQUEST,
    data,
  };
};

export const updatePostRequestAction = (data: {
  postId: number;
  content: string;
}): IUpdatePostReqeust => {
  return {
    type: actionTypesPost.UPDATE_POST_REQUEST,
    data,
  };
};

export const loadPostRequestAction = (data: {
  postId: number;
}): ILoadPostReqeust => {
  return {
    type: actionTypesPost.LOAD_POST_REQUEST,
    data,
  };
};

export const loadPostsRequestAction = (data: {
  postId: number;
}): ILoadPostsReqeust => {
  return {
    type: actionTypesPost.LOAD_POSTS_REQUEST,
    data,
  };
};

export const loadUserPostsRequestAction = (data: {
  postId: number;
  userId: number;
}): ILoadUserPostsReqeust => {
  return {
    type: actionTypesPost.LOAD_USER_POSTS_REQUEST,
    data,
  };
};

export const addCommentRequestAction = (
  data: CommentData
): IAddCommentReqeust => {
  return {
    type: actionTypesPost.ADD_COMMENT_REQUEST,
    data,
  };
};

export const likePostRequestAction = (data: {
  postId: number;
}): ILikePostReqeust => {
  return {
    type: actionTypesPost.LIKE_POST_REQUEST,
    data,
  };
};

export const unlikePostRequestAction = (data: {
  postId: number;
}): IUnlikePostReqeust => {
  return {
    type: actionTypesPost.UNLIKE_POST_REQUEST,
    data,
  };
};

export const uploadImagesRequestAction = (
  data: FormData
): IUploadImagesReqeust => {
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
