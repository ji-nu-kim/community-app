import {
  actionTypesCommunity,
  CommunityState,
  ActionsCommunity,
} from '../interfaces/index';

import produce from 'immer';

export const initialState: CommunityState = {
  imagePath: [],
  singleCommunity: null,
  mainCommunities: [],
  mainCategories: [],
  hasMoreCommunity: true,

  uploadCommunityImageLoading: false,
  uploadCommunityImageDone: false,
  uploadCommunityImageError: null,
  changeCommunityInfoLoading: false,
  changeCommunityInfoDone: false,
  changeCommunityInfoError: null,
  addCommunityLoading: false,
  addCommunityDone: false,
  addCommunityError: null,
  removeCommunityLoading: false,
  removeCommunityDone: false,
  removeCommunityError: null,
  updateCommunityLoading: false,
  updateCommunityDone: false,
  updateCommunityError: null,

  loadCommunityLoading: false,
  loadCommunityDone: false,
  loadCommunityError: null,
  loadCommunitiesLoading: false,
  loadCommunitiesDone: false,
  loadCommunitiesError: null,

  loadCategoriesLoading: false,
  loadCategoriesDone: false,
  loadCategoriesError: null,
};

const reducer = (
  state = initialState,
  action: ActionsCommunity
): CommunityState => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypesCommunity.REMOVE_COMMUNITY_IMAGE:
        draft.imagePath = [];
        draft.uploadCommunityImageDone = false;
        break;
      case actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_REQUEST:
        draft.uploadCommunityImageLoading = true;
        draft.uploadCommunityImageDone = false;
        draft.uploadCommunityImageError = null;
        break;
      case actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadCommunityImageLoading = false;
        draft.uploadCommunityImageDone = true;
        break;
      case actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_ERROR:
        draft.uploadCommunityImageLoading = false;
        draft.uploadCommunityImageError = action.error;
        break;
      case actionTypesCommunity.CHANGE_COMMUNITY_INFO_REQUEST:
        draft.changeCommunityInfoLoading = true;
        draft.changeCommunityInfoDone = false;
        draft.changeCommunityInfoError = null;
        break;
      case actionTypesCommunity.CHANGE_COMMUNITY_INFO_SUCCESS:
        draft.changeCommunityInfoLoading = false;
        draft.changeCommunityInfoDone = true;
        break;
      case actionTypesCommunity.CHANGE_COMMUNITY_INFO_ERROR:
        draft.changeCommunityInfoLoading = false;
        draft.changeCommunityInfoError = action.error;
        break;
      case actionTypesCommunity.ADD_COMMUNITY_REQUEST:
        draft.addCommunityLoading = true;
        draft.addCommunityDone = false;
        draft.addCommunityError = null;
        break;
      case actionTypesCommunity.ADD_COMMUNITY_SUCCESS:
        draft.addCommunityLoading = false;
        draft.addCommunityDone = true;
        draft.mainCommunities.unshift(action.data);
        break;
      case actionTypesCommunity.ADD_COMMUNITY_ERROR:
        draft.addCommunityLoading = false;
        draft.addCommunityError = action.error;
        break;
      case actionTypesCommunity.REMOVE_COMMUNITY_REQUEST:
        draft.removeCommunityLoading = true;
        draft.removeCommunityDone = false;
        draft.removeCommunityError = null;
        break;
      case actionTypesCommunity.REMOVE_COMMUNITY_SUCCESS:
        draft.removeCommunityLoading = false;
        draft.removeCommunityDone = true;
        draft.mainCommunities = draft.mainCommunities.filter(
          v => v.id !== action.data.communityId
        );
        break;
      case actionTypesCommunity.REMOVE_COMMUNITY_ERROR:
        draft.removeCommunityLoading = false;
        draft.removeCommunityError = action.error;
        break;
      case actionTypesCommunity.UPDATE_COMMUNITY_REQUEST:
        draft.updateCommunityLoading = true;
        draft.updateCommunityDone = false;
        draft.updateCommunityError = null;
        break;
      case actionTypesCommunity.UPDATE_COMMUNITY_SUCCESS: {
        draft.updateCommunityLoading = false;
        draft.updateCommunityDone = true;
        const community = draft.mainCommunities.find(
          v => v.id === action.data.communityId
        );
        if (community) {
          community.description = action.data.content;
        }
        break;
      }
      case actionTypesCommunity.UPDATE_COMMUNITY_ERROR:
        draft.updateCommunityLoading = false;
        draft.updateCommunityError = action.error;
        break;

      case actionTypesCommunity.LOAD_COMMUNITY_REQUEST:
        draft.loadCommunityLoading = true;
        draft.loadCommunityDone = false;
        draft.loadCommunityError = null;
        break;
      case actionTypesCommunity.LOAD_COMMUNITY_SUCCESS:
        draft.loadCommunityLoading = false;
        draft.loadCommunityDone = true;
        draft.singleCommunity = action.data;
        break;
      case actionTypesCommunity.LOAD_COMMUNITY_ERROR:
        draft.loadCommunityLoading = false;
        draft.loadCommunityError = action.error;
        break;

      case actionTypesCommunity.LOAD_COMMUNITIES_REQUEST:
        draft.loadCommunitiesLoading = true;
        draft.loadCommunitiesDone = false;
        draft.loadCommunitiesError = null;
        break;
      case actionTypesCommunity.LOAD_COMMUNITIES_SUCCESS:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesDone = true;
        draft.mainCommunities = draft.mainCommunities.concat(action.data);
        draft.hasMoreCommunity = action.data.length === 10;
        break;
      case actionTypesCommunity.LOAD_COMMUNITIES_ERROR:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesError = action.error;
        break;

      case actionTypesCommunity.LOAD_CATEGORIES_REQUEST:
        draft.loadCategoriesLoading = true;
        draft.loadCategoriesDone = false;
        draft.loadCategoriesError = null;
        break;
      case actionTypesCommunity.LOAD_CATEGORIES_SUCCESS:
        draft.loadCategoriesLoading = false;
        draft.loadCategoriesDone = true;
        draft.mainCategories = draft.mainCategories.concat(action.data);
        break;
      case actionTypesCommunity.LOAD_CATEGORIES_ERROR:
        draft.loadCategoriesLoading = false;
        draft.loadCategoriesError = action.error;
        break;

      default:
        break;
    }
  });
};

export default reducer;
