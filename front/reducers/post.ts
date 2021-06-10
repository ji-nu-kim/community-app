import { actionTypesPost, PostState, ActionsPost } from '../interfaces/index';

import produce from 'immer';

export const initialState: PostState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  hasMorePost: true,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  reportPostLoading: false,
  reportPostDone: false,
  reportPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  reportCommentLoading: false,
  reportCommentDone: false,
  reportCommentError: null,
};

const reducer = (state = initialState, action: ActionsPost): PostState => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypesPost.ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case actionTypesPost.ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        draft.mainPosts.unshift(action.data);
        break;

      case actionTypesPost.ADD_POST_ERROR:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case actionTypesPost.REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case actionTypesPost.REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.postId);
        break;
      case actionTypesPost.REMOVE_POST_ERROR:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case actionTypesPost.UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case actionTypesPost.UPDATE_POST_SUCCESS: {
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        if (post) {
          post.content = action.data.content;
        }
        break;
      }
      case actionTypesPost.UPDATE_POST_ERROR:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      case actionTypesPost.REPORT_POST_REQUEST:
        draft.reportPostLoading = true;
        draft.reportPostDone = false;
        draft.reportPostError = null;
        break;
      case actionTypesPost.REPORT_POST_SUCCESS:
        draft.reportPostLoading = false;
        draft.reportPostDone = true;
        break;
      case actionTypesPost.REPORT_POST_ERROR:
        draft.reportPostLoading = false;
        draft.reportPostError = action.error;
        break;
      case actionTypesPost.LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case actionTypesPost.LOAD_POSTS_SUCCESS: {
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePost = action.data.length === 10;
        break;
      }
      case actionTypesPost.LOAD_POSTS_ERROR:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case actionTypesPost.ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case actionTypesPost.ADD_COMMENT_SUCCESS: {
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        if (post) {
          post.Comments.unshift(action.data);
        }
        break;
      }
      case actionTypesPost.ADD_COMMENT_ERROR:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case actionTypesPost.UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;
      case actionTypesPost.UPDATE_COMMENT_SUCCESS: {
        draft.updateCommentLoading = false;
        draft.updateCommentDone = true;
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        if (post) {
          const comment = post.Comments.find(v => v.id === action.data.commentId);
          if (comment) {
            comment.content = action.data.content;
          }
        }
        break;
      }
      case actionTypesPost.UPDATE_COMMENT_ERROR:
        draft.updateCommentLoading = false;
        draft.updateCommentError = action.error;
        break;
      case actionTypesPost.REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;
      case actionTypesPost.REMOVE_COMMENT_SUCCESS: {
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        if (post) {
          post.Comments = post.Comments.filter(v => v.id !== action.data.commentId);
        }
        break;
      }
      case actionTypesPost.REMOVE_COMMENT_ERROR:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;
      case actionTypesPost.REPORT_COMMENT_REQUEST:
        draft.reportCommentLoading = true;
        draft.reportCommentDone = false;
        draft.reportCommentError = null;
        break;
      case actionTypesPost.REPORT_COMMENT_SUCCESS: {
        draft.reportCommentLoading = false;
        draft.reportCommentDone = true;
        break;
      }
      case actionTypesPost.REPORT_COMMENT_ERROR:
        draft.reportCommentLoading = false;
        draft.reportCommentError = action.error;
        break;
      case actionTypesPost.UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case actionTypesPost.UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
      case actionTypesPost.UPLOAD_IMAGES_ERROR:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case actionTypesPost.REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      default:
        break;
    }
  });
};

export default reducer;
