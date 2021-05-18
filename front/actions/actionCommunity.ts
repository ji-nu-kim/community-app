import {
  actionTypesCommunity,
  IRemoveCommunityImage,
  IUploadCommunityImageReqeust,
  ChangeCommunityInfoData,
  IChangeCommunityInfoRequest,
  IAddCommunityReqeust,
  IRemoveCommunityReqeust,
  IUpdateCommunityReqeust,
  ILoadCommunityReqeust,
  ILoadCommunitiesReqeust,
  ILoadCategoriesReqeust,
  CommunityData,
} from '../interfaces/community/communityAction.interfaces';

export const removeCommunityImage = (): IRemoveCommunityImage => {
  return {
    type: actionTypesCommunity.REMOVE_COMMUNITY_IMAGE,
  };
};

export const uploadCommunityImageRequestAction = (
  data: FormData
): IUploadCommunityImageReqeust => {
  return {
    type: actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_REQUEST,
    data,
  };
};

export const changeCommunityInfoRequestAction = (
  data: ChangeCommunityInfoData
): IChangeCommunityInfoRequest => {
  return {
    type: actionTypesCommunity.CHANGE_COMMUNITY_INFO_REQUEST,
    data,
  };
};

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

export const loadCommunitiesRequestAction = (data: {
  communityId: number;
}): ILoadCommunitiesReqeust => {
  return {
    type: actionTypesCommunity.LOAD_COMMUNITIES_REQUEST,
    data,
  };
};

export const loadCategoriesReqeustAction = (): ILoadCategoriesReqeust => {
  return {
    type: actionTypesCommunity.LOAD_CATEGORIES_REQUEST,
  };
};
