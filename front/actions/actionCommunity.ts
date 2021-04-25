import {
  actionTypesCommunity,
  IAddCommunityReqeust,
  IRemoveCommunityReqeust,
  IUpdateCommunityReqeust,
  ILoadCommunityReqeust,
  ILoadCommunitysReqeust,
  CommunityData,
} from '../interfaces/community/communityAction.interfaces';

export const addCommunityRequestAction = (
  data: CommunityData
): IAddCommunityReqeust => {
  return {
    type: actionTypesCommunity.ADD_COMMUNITY_REQUEST,
    data,
  };
};

export const removeCommunityRequestAction = (data: {
  communityId: number;
}): IRemoveCommunityReqeust => {
  return {
    type: actionTypesCommunity.REMOVE_COMMUNITY_REQUEST,
    data,
  };
};

export const updateCommunityRequestAction = (data: {
  communityId: number;
  content: string;
}): IUpdateCommunityReqeust => {
  return {
    type: actionTypesCommunity.UPDATE_COMMUNITY_REQUEST,
    data,
  };
};

export const loadCommunityRequestAction = (data: {
  communityId: number;
}): ILoadCommunityReqeust => {
  return {
    type: actionTypesCommunity.LOAD_COMMUNITY_REQUEST,
    data,
  };
};

export const loadCommunitysRequestAction = (data: {
  communityId: number;
}): ILoadCommunitysReqeust => {
  return {
    type: actionTypesCommunity.LOAD_COMMUNITYS_REQUEST,
    data,
  };
};
