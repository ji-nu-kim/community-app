import {
  actionTypesCommunity,
  CommunityState,
  ActionsCommunity,
} from '../interfaces/index';

import produce from 'immer';

export const initialState: CommunityState = {
  singleCommunity: null,
  mainCommunities: [],
  hasMoreCommunity: true,

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
  loadCommunitysLoading: false,
  loadCommunitysDone: false,
  loadCommunitysError: null,
};

const reducer = (
  state = initialState,
  action: ActionsCommunity
): CommunityState => {
  return produce(state, draft => {
    switch (action.type) {
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
      case actionTypesCommunity.LOAD_COMMUNITYS_REQUEST:
        draft.loadCommunitysLoading = true;
        draft.loadCommunitysDone = false;
        draft.loadCommunitysError = null;
        break;
      case actionTypesCommunity.LOAD_COMMUNITYS_SUCCESS:
        draft.loadCommunitysLoading = false;
        draft.loadCommunitysDone = true;
        draft.mainCommunities = draft.mainCommunities.concat(action.data);
        draft.hasMoreCommunity = action.data.length === 10;
        break;
      case actionTypesCommunity.LOAD_COMMUNITYS_ERROR:
        draft.loadCommunitysLoading = false;
        draft.loadCommunitysError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
