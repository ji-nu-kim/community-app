import {
  actionTypesCommunity,
  IRemoveCommunityImage,
  IUploadCommunityImageRequest,
  IChangeCommunityInfoData,
  IChangeCommunityInfoRequest,
  IAddCommunityRequest,
  IRemoveCommunityRequest,
  IJoinCommunityRequest,
  IAcceptCommunityRequest,
  IRefuseCommunityRequest,
  ILeaveCommunityRequest,
  ILoadCommunityRequest,
  ILoadCommunitiesRequest,
  ISearchCommunitiesRequest,
  ILoadCountryCommunitiesRequest,
  ILoadCategoryCommunitiesRequest,
  ILoadCategoryRequest,
  ILoadCategoriesRequest,
  IAddMeetRequest,
  IRemoveMeetRequest,
  IModifyMeetRequest,
  IJoinMeetRequest,
  ILeaveMeetRequest,
  IAddMeetData,
  IModifyMeetData,
  ICommunityData,
} from '../interfaces/community/communityAction.interfaces';

export const removeCommunityImage = (): IRemoveCommunityImage => {
  return {
    type: actionTypesCommunity.REMOVE_COMMUNITY_IMAGE,
  };
};
export const uploadCommunityImageRequestAction = (
  data: FormData
): IUploadCommunityImageRequest => {
  return {
    type: actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_REQUEST,
    data,
  };
};

export const changeCommunityInfoRequestAction = (
  data: IChangeCommunityInfoData
): IChangeCommunityInfoRequest => {
  return {
    type: actionTypesCommunity.CHANGE_COMMUNITY_INFO_REQUEST,
    data,
  };
};
export const addCommunityRequestAction = (data: ICommunityData): IAddCommunityRequest => {
  return {
    type: actionTypesCommunity.ADD_COMMUNITY_REQUEST,
    data,
  };
};
export const removeCommunityRequestAction = (data: {
  communityId: number;
}): IRemoveCommunityRequest => {
  return {
    type: actionTypesCommunity.REMOVE_COMMUNITY_REQUEST,
    data,
  };
};
export const joinCommunityRequestAction = (data: {
  communityId: number;
}): IJoinCommunityRequest => {
  return {
    type: actionTypesCommunity.JOIN_COMMUNITY_REQUEST,
    data,
  };
};
export const acceptCommunityRequestAction = (data: {
  communityId: number;
  userId: number;
  title: string;
}): IAcceptCommunityRequest => {
  return {
    type: actionTypesCommunity.ACCEPT_COMMUNITY_REQUEST,
    data,
  };
};
export const refuseCommunityRequestAction = (data: {
  communityId: number;
  userId: number;
}): IRefuseCommunityRequest => {
  return {
    type: actionTypesCommunity.REFUSE_COMMUNITY_REQUEST,
    data,
  };
};
export const leaveCommunityRequestAction = (data: {
  communityId: number;
}): ILeaveCommunityRequest => {
  return {
    type: actionTypesCommunity.LEAVE_COMMUNITY_REQUEST,
    data,
  };
};
export const loadCommunityRequestAction = (data: {
  communityId: number;
}): ILoadCommunityRequest => {
  return {
    type: actionTypesCommunity.LOAD_COMMUNITY_REQUEST,
    data,
  };
};
export const loadCommunitiesRequestAction = (): ILoadCommunitiesRequest => {
  return {
    type: actionTypesCommunity.LOAD_COMMUNITIES_REQUEST,
  };
};
export const searchCommunitiesRequestAction = (data: {
  keyword: string;
}): ISearchCommunitiesRequest => {
  return {
    type: actionTypesCommunity.SEARCH_COMMUNITIES_REQUEST,
    data,
  };
};
export const loadCountryCommunitiesRequestAction = (data: {
  country: string;
  communityId: number;
}): ILoadCountryCommunitiesRequest => {
  return {
    type: actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_REQUEST,
    data,
  };
};
export const loadCategoryCommunitiesRequestAction = (data: {
  categoryId: number;
  communityId: number;
}): ILoadCategoryCommunitiesRequest => {
  return {
    type: actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_REQUEST,
    data,
  };
};

export const loadCategoryRequestAction = (data: {
  categoryId: number;
}): ILoadCategoryRequest => {
  return {
    type: actionTypesCommunity.LOAD_CATEGORY_REQUEST,
    data,
  };
};
export const loadCategoriesRequestAction = (): ILoadCategoriesRequest => {
  return {
    type: actionTypesCommunity.LOAD_CATEGORIES_REQUEST,
  };
};

export const addMeetRequestAction = (data: IAddMeetData): IAddMeetRequest => {
  return {
    type: actionTypesCommunity.ADD_MEET_REQUEST,
    data,
  };
};
export const removeMeetRequestAction = (data: {
  communityId: number;
  meetId: number;
}): IRemoveMeetRequest => {
  return {
    type: actionTypesCommunity.REMOVE_MEET_REQUEST,
    data,
  };
};
export const modifyMeetRequestAction = (data: IModifyMeetData): IModifyMeetRequest => {
  return {
    type: actionTypesCommunity.MODIFY_MEET_REQUEST,
    data,
  };
};
export const joinMeetRequestAction = (data: {
  communityId: number;
  meetId: number;
}): IJoinMeetRequest => {
  return {
    type: actionTypesCommunity.JOIN_MEET_REQUEST,
    data,
  };
};
export const leaveMeetRequestAction = (data: {
  communityId: number;
  meetId: number;
}): ILeaveMeetRequest => {
  return {
    type: actionTypesCommunity.LEAVE_MEET_REQUEST,
    data,
  };
};
