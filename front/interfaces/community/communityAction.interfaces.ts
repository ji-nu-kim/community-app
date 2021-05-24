import { ICategory, ICommunity } from '../db';

export const actionTypesCommunity = {
  REMOVE_COMMUNITY_IMAGE: 'REMOVE_COMMUNITY_IMAGE',
  UPLOAD_COMMUNITY_IMAGE_REQUEST: 'UPLOAD_COMMUNITY_IMAGE_REQUEST',
  UPLOAD_COMMUNITY_IMAGE_SUCCESS: 'UPLOAD_COMMUNITY_IMAGE_SUCCESS',
  UPLOAD_COMMUNITY_IMAGE_ERROR: 'UPLOAD_COMMUNITY_IMAGE_ERROR',
  CHANGE_COMMUNITY_INFO_REQUEST: 'CHANGE_COMMUNITY_INFO_REQUEST',
  CHANGE_COMMUNITY_INFO_SUCCESS: 'CHANGE_COMMUNITY_INFO_SUCCESS',
  CHANGE_COMMUNITY_INFO_ERROR: 'CHANGE_COMMUNITY_INFO_ERROR',
  ADD_COMMUNITY_REQUEST: 'ADD_COMMUNITY_REQUEST',
  ADD_COMMUNITY_SUCCESS: 'ADD_COMMUNITY_SUCCESS',
  ADD_COMMUNITY_ERROR: 'ADD_COMMUNITY_ERROR',
  REMOVE_COMMUNITY_REQUEST: 'REMOVE_COMMUNITY_REQUEST',
  REMOVE_COMMUNITY_SUCCESS: 'REMOVE_COMMUNITY_SUCCESS',
  REMOVE_COMMUNITY_ERROR: 'REMOVE_COMMUNITY_ERROR',
  UPDATE_COMMUNITY_REQUEST: 'UPDATE_COMMUNITY_REQUEST',
  UPDATE_COMMUNITY_SUCCESS: 'UPDATE_COMMUNITY_SUCCESS',
  UPDATE_COMMUNITY_ERROR: 'UPDATE_COMMUNITY_ERROR',
  LOAD_COMMUNITY_REQUEST: 'LOAD_COMMUNITY_REQUEST',
  LOAD_COMMUNITY_SUCCESS: 'LOAD_COMMUNITY_SUCCESS',
  LOAD_COMMUNITY_ERROR: 'LOAD_COMMUNITY_ERROR',
  LOAD_COMMUNITIES_REQUEST: 'LOAD_COMMUNITIES_REQUEST',
  LOAD_COMMUNITIES_SUCCESS: 'LOAD_COMMUNITIES_SUCCESS',
  LOAD_COMMUNITIES_ERROR: 'LOAD_COMMUNITIES_ERROR',
  LOAD_COUNTRY_COMMUNITIES_REQUEST: 'LOAD_COUNTRY_COMMUNITIES_REQUEST',
  LOAD_COUNTRY_COMMUNITIES_SUCCESS: 'LOAD_COUNTRY_COMMUNITIES_SUCCESS',
  LOAD_COUNTRY_COMMUNITIES_ERROR: 'LOAD_COUNTRY_COMMUNITIES_ERROR',
  LOAD_CATEGORY_COMMUNITIES_REQUEST: 'LOAD_CATEGORY_COMMUNITIES_REQUEST',
  LOAD_CATEGORY_COMMUNITIES_SUCCESS: 'LOAD_CATEGORY_COMMUNITIES_SUCCESS',
  LOAD_CATEGORY_COMMUNITIES_ERROR: 'LOAD_CATEGORY_COMMUNITIES_ERROR',
  LOAD_CATEGORIES_REQUEST: 'LOAD_CATEGORIES_REQUEST',
  LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',
  LOAD_CATEGORIES_ERROR: 'LOAD_CATEGORIES_ERROR',
} as const;

export interface IRemoveCommunityImage {
  type: typeof actionTypesCommunity.REMOVE_COMMUNITY_IMAGE;
}
export interface IUploadCommunityImageReqeust {
  type: typeof actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_REQUEST;
  data: FormData;
}
export interface IUploadCommunityImageSuccess {
  type: typeof actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_SUCCESS;
  data: string[];
}
export interface IUploadCommunityImageError {
  type: typeof actionTypesCommunity.UPLOAD_COMMUNITY_IMAGE_ERROR;
  error: Error;
}

export interface ChangeCommunityInfoData {
  id: number;
  profilePhoto: string[];
  description: string;
  caution: string;
  requirement: string;
}
export interface IChangeCommunityInfoRequest {
  type: typeof actionTypesCommunity.CHANGE_COMMUNITY_INFO_REQUEST;
  data: ChangeCommunityInfoData;
}
export interface IChangeCommunityInfoSuccess {
  type: typeof actionTypesCommunity.CHANGE_COMMUNITY_INFO_SUCCESS;
  data: string;
}
export interface IChangeCommunityInfoError {
  type: typeof actionTypesCommunity.CHANGE_COMMUNITY_INFO_ERROR;
  error: Error;
}
export interface CommunityData {
  communityName: string;
  description: string;
  country: string;
  category: string;
}

export interface IAddCommunityReqeust {
  type: typeof actionTypesCommunity.ADD_COMMUNITY_REQUEST;
  data: CommunityData;
}
export interface IAddCommunitySuccess {
  type: typeof actionTypesCommunity.ADD_COMMUNITY_SUCCESS;
}
export interface IAddCommunityError {
  type: typeof actionTypesCommunity.ADD_COMMUNITY_ERROR;
  error: Error;
}
export interface IRemoveCommunityReqeust {
  type: typeof actionTypesCommunity.REMOVE_COMMUNITY_REQUEST;
  data: { communityId: number };
}
export interface IRemoveCommunitySuccess {
  type: typeof actionTypesCommunity.REMOVE_COMMUNITY_SUCCESS;
  data: { communityId: number };
}
export interface IRemoveCommunityError {
  type: typeof actionTypesCommunity.REMOVE_COMMUNITY_ERROR;
  error: Error;
}
export interface IUpdateCommunityReqeust {
  type: typeof actionTypesCommunity.UPDATE_COMMUNITY_REQUEST;
  data: { communityId: number; content: string };
}
export interface IUpdateCommunitySuccess {
  type: typeof actionTypesCommunity.UPDATE_COMMUNITY_SUCCESS;
  data: { communityId: number; content: string };
}
export interface IUpdateCommunityError {
  type: typeof actionTypesCommunity.UPDATE_COMMUNITY_ERROR;
  error: Error;
}

export interface ILoadCommunityReqeust {
  type: typeof actionTypesCommunity.LOAD_COMMUNITY_REQUEST;
  data: { communityId: number };
}
export interface ILoadCommunitySuccess {
  type: typeof actionTypesCommunity.LOAD_COMMUNITY_SUCCESS;
  data: ICommunity;
}
export interface ILoadCommunityError {
  type: typeof actionTypesCommunity.LOAD_COMMUNITY_ERROR;
  error: Error;
}
export interface ILoadCommunitiesReqeust {
  type: typeof actionTypesCommunity.LOAD_COMMUNITIES_REQUEST;
}
export interface ILoadCommunitiesSuccess {
  type: typeof actionTypesCommunity.LOAD_COMMUNITIES_SUCCESS;
  data: ICommunity[];
}
export interface ILoadCommunitiesError {
  type: typeof actionTypesCommunity.LOAD_COMMUNITIES_ERROR;
  error: Error;
}

export interface ILoadCountryCommunitiesRequest {
  type: typeof actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_REQUEST;
  data: { country: string; communityId: number };
}
export interface ILoadCountryCommunitiesSuccess {
  type: typeof actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_SUCCESS;
  data: ICommunity[];
}
export interface ILoadCountryCommunitiesError {
  type: typeof actionTypesCommunity.LOAD_COUNTRY_COMMUNITIES_ERROR;
  error: Error;
}

export interface ILoadCategoryCommunitiesRequest {
  type: typeof actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_REQUEST;
  data: { categoryId: number; communityId: number };
}
export interface ILoadCategoryCommunitiesSuccess {
  type: typeof actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_SUCCESS;
  data: ICommunity[];
}
export interface ILoadCategoryCommunitiesError {
  type: typeof actionTypesCommunity.LOAD_CATEGORY_COMMUNITIES_ERROR;
  error: Error;
}

export interface ILoadCategoriesReqeust {
  type: typeof actionTypesCommunity.LOAD_CATEGORIES_REQUEST;
}
export interface ILoadCategoriesSuccess {
  type: typeof actionTypesCommunity.LOAD_CATEGORIES_SUCCESS;
  data: ICategory[];
}
export interface ILoadCategoriesError {
  type: typeof actionTypesCommunity.LOAD_CATEGORIES_ERROR;
  error: Error;
}

export type ActionsCommunity =
  | IRemoveCommunityImage
  | IUploadCommunityImageReqeust
  | IUploadCommunityImageSuccess
  | IUploadCommunityImageError
  | IChangeCommunityInfoRequest
  | IChangeCommunityInfoSuccess
  | IChangeCommunityInfoError
  | IAddCommunityReqeust
  | IAddCommunitySuccess
  | IAddCommunityError
  | IRemoveCommunityReqeust
  | IRemoveCommunitySuccess
  | IRemoveCommunityError
  | IUpdateCommunityReqeust
  | IUpdateCommunitySuccess
  | IUpdateCommunityError
  | ILoadCommunityReqeust
  | ILoadCommunitySuccess
  | ILoadCommunityError
  | ILoadCommunitiesReqeust
  | ILoadCommunitiesSuccess
  | ILoadCommunitiesError
  | ILoadCountryCommunitiesRequest
  | ILoadCountryCommunitiesSuccess
  | ILoadCountryCommunitiesError
  | ILoadCategoryCommunitiesRequest
  | ILoadCategoryCommunitiesSuccess
  | ILoadCategoryCommunitiesError
  | ILoadCategoriesReqeust
  | ILoadCategoriesSuccess
  | ILoadCategoriesError;
