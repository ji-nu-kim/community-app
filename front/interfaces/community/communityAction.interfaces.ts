import { ICategory, ICommunity, IUser, IMeet } from '../db';

export const actionTypesCommunity = {
  REMOVE_COMMUNITY_IMAGE: 'REMOVE_COMMUNITY_IMAGE', // 커뮤니티 프로필 미리보기 이미지 삭제
  UPLOAD_COMMUNITY_IMAGE_REQUEST: 'UPLOAD_COMMUNITY_IMAGE_REQUEST', // 커뮤니티 프로필 미리보기 이미지 업로드
  UPLOAD_COMMUNITY_IMAGE_SUCCESS: 'UPLOAD_COMMUNITY_IMAGE_SUCCESS',
  UPLOAD_COMMUNITY_IMAGE_ERROR: 'UPLOAD_COMMUNITY_IMAGE_ERROR',
  CHANGE_COMMUNITY_INFO_REQUEST: 'CHANGE_COMMUNITY_INFO_REQUEST', // 커뮤니티 정보 변경
  CHANGE_COMMUNITY_INFO_SUCCESS: 'CHANGE_COMMUNITY_INFO_SUCCESS',
  CHANGE_COMMUNITY_INFO_ERROR: 'CHANGE_COMMUNITY_INFO_ERROR',
  ADD_COMMUNITY_REQUEST: 'ADD_COMMUNITY_REQUEST', // 커뮤니티 생성
  ADD_COMMUNITY_SUCCESS: 'ADD_COMMUNITY_SUCCESS',
  ADD_COMMUNITY_ERROR: 'ADD_COMMUNITY_ERROR',
  REMOVE_COMMUNITY_REQUEST: 'REMOVE_COMMUNITY_REQUEST', // 커뮤니티 제거(유저가 없을 때만)
  REMOVE_COMMUNITY_SUCCESS: 'REMOVE_COMMUNITY_SUCCESS',
  REMOVE_COMMUNITY_ERROR: 'REMOVE_COMMUNITY_ERROR',
  JOIN_COMMUNITY_REQUEST: 'JOIN_COMMUNITY_REQUEST:', // 커뮤니티 가입신청(임시 DB에 저장)
  JOIN_COMMUNITY_SUCCESS: 'JOIN_COMMUNITY_SUCCESS:',
  JOIN_COMMUNITY_ERROR: 'JOIN_COMMUNITY_ERROR:',
  ACCEPT_COMMUNITY_REQUEST: 'ACCEPT_COMMUNITY_REQUEST', // 커뮤니티 가입승인(커뮤니티 DB에 저장)
  ACCEPT_COMMUNITY_SUCCESS: 'ACCEPT_COMMUNITY_SUCCESS',
  ACCEPT_COMMUNITY_ERROR: 'ACCEPT_COMMUNITY_ERROR',
  REFUSE_COMMUNITY_REQUEST: 'REFUSE_COMMUNITY_REQUEST', // 커뮤니티 가입거절(임시 DB에서 삭제)
  REFUSE_COMMUNITY_SUCCESS: 'REFUSE_COMMUNITY_SUCCESS',
  REFUSE_COMMUNITY_ERROR: 'REFUSE_COMMUNITY_ERROR',
  LEAVE_COMMUNITY_REQUEST: 'LEAVE_COMMUNITY_REQUEST', // 커뮤니티 탈퇴
  LEAVE_COMMUNITY_SUCCESS: 'LEAVE_COMMUNITY_SUCCESS',
  LEAVE_COMMUNITY_ERROR: 'LEAVE_COMMUNITY_ERROR',
  LOAD_COMMUNITY_REQUEST: 'LOAD_COMMUNITY_REQUEST', // 특정 커뮤니티 불러오기
  LOAD_COMMUNITY_SUCCESS: 'LOAD_COMMUNITY_SUCCESS',
  LOAD_COMMUNITY_ERROR: 'LOAD_COMMUNITY_ERROR',
  LOAD_COMMUNITIES_REQUEST: 'LOAD_COMMUNITIES_REQUEST', // 모든 커뮤니티 불러오기
  LOAD_COMMUNITIES_SUCCESS: 'LOAD_COMMUNITIES_SUCCESS',
  LOAD_COMMUNITIES_ERROR: 'LOAD_COMMUNITIES_ERROR',
  SEARCH_COMMUNITIES_REQUEST: 'SEARCH_COMMUNITIES_REQUEST', // 커뮤니티 검색
  SEARCH_COMMUNITIES_SUCCESS: 'SEARCH_COMMUNITIES_SUCCESS',
  SEARCH_COMMUNITIES_ERROR: 'SEARCH_COMMUNITIES_ERROR',
  LOAD_COUNTRY_COMMUNITIES_REQUEST: 'LOAD_COUNTRY_COMMUNITIES_REQUEST', // 해당 지역의 모든 커뮤니티 불러오기
  LOAD_COUNTRY_COMMUNITIES_SUCCESS: 'LOAD_COUNTRY_COMMUNITIES_SUCCESS',
  LOAD_COUNTRY_COMMUNITIES_ERROR: 'LOAD_COUNTRY_COMMUNITIES_ERROR',
  LOAD_CATEGORY_COMMUNITIES_REQUEST: 'LOAD_CATEGORY_COMMUNITIES_REQUEST', // 해당 카테고리의 모든 커뮤니티 불러오기
  LOAD_CATEGORY_COMMUNITIES_SUCCESS: 'LOAD_CATEGORY_COMMUNITIES_SUCCESS',
  LOAD_CATEGORY_COMMUNITIES_ERROR: 'LOAD_CATEGORY_COMMUNITIES_ERROR',
  LOAD_CATEGORY_REQUEST: 'LOAD_CATEGORY_REQUEST', // 특정 카테고리 불러오기
  LOAD_CATEGORY_SUCCESS: 'LOAD_CATEGORY_SUCCESS',
  LOAD_CATEGORY_ERROR: 'LOAD_CATEGORY_ERROR',
  LOAD_CATEGORIES_REQUEST: 'LOAD_CATEGORIES_REQUEST', // 모든 카테고리 불러오기
  LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',
  LOAD_CATEGORIES_ERROR: 'LOAD_CATEGORIES_ERROR',
  ADD_MEET_REQUEST: 'ADD_MEET_REQUEST', // 모임 생성
  ADD_MEET_SUCCESS: 'ADD_MEET_SUCCESS',
  ADD_MEET_ERROR: 'ADD_MEET_ERROR',
  REMOVE_MEET_REQUEST: 'REMOVE_MEET_REQUEST', // 모임 제거
  REMOVE_MEET_SUCCESS: 'REMOVE_MEET_SUCCESS',
  REMOVE_MEET_ERROR: 'REMOVE_MEET_ERROR',
  MODIFY_MEET_REQUEST: 'MODIFY_MEET_REQUEST', // 모임 수정
  MODIFY_MEET_SUCCESS: 'MODIFY_MEET_SUCCESS',
  MODIFY_MEET_ERROR: 'MODIFY_MEET_ERROR',
  JOIN_MEET_REQUEST: 'JOIN_MEET_REQUEST', // 모임 가입
  JOIN_MEET_SUCCESS: 'JOIN_MEET_SUCCESS',
  JOIN_MEET_ERROR: 'JOIN_MEET_ERROR',
  LEAVE_MEET_REQUEST: 'LEAVE_MEET_REQUEST', // 모임 탈퇴
  LEAVE_MEET_SUCCESS: 'LEAVE_MEET_SUCCESS',
  LEAVE_MEET_ERROR: 'LEAVE_MEET_ERROR',
} as const;

export interface IRemoveCommunityImage {
  type: typeof actionTypesCommunity.REMOVE_COMMUNITY_IMAGE;
}
export interface IUploadCommunityImageRequest {
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
export interface IChangeCommunityInfoData {
  communityId: number;
  profilePhoto: string[];
  description: string;
  caution: string;
  requirement: string;
}
export interface IChangeCommunityInfoRequest {
  type: typeof actionTypesCommunity.CHANGE_COMMUNITY_INFO_REQUEST;
  data: IChangeCommunityInfoData;
}
export interface IChangeCommunityInfoSuccess {
  type: typeof actionTypesCommunity.CHANGE_COMMUNITY_INFO_SUCCESS;
  data: IChangeCommunityInfoData;
}
export interface IChangeCommunityInfoError {
  type: typeof actionTypesCommunity.CHANGE_COMMUNITY_INFO_ERROR;
  error: Error;
}
export interface ICommunityData {
  communityName: string;
  description: string;
  country: string;
  category: string;
}
export interface IAddCommunityRequest {
  type: typeof actionTypesCommunity.ADD_COMMUNITY_REQUEST;
  data: ICommunityData;
}
export interface IAddCommunitySuccess {
  type: typeof actionTypesCommunity.ADD_COMMUNITY_SUCCESS;
}
export interface IAddCommunityError {
  type: typeof actionTypesCommunity.ADD_COMMUNITY_ERROR;
  error: Error;
}
export interface IRemoveCommunityRequest {
  type: typeof actionTypesCommunity.REMOVE_COMMUNITY_REQUEST;
  data: { communityId: number };
}
export interface IRemoveCommunitySuccess {
  type: typeof actionTypesCommunity.REMOVE_COMMUNITY_SUCCESS;
}
export interface IRemoveCommunityError {
  type: typeof actionTypesCommunity.REMOVE_COMMUNITY_ERROR;
  error: Error;
}
export interface IJoinCommunityRequest {
  type: typeof actionTypesCommunity.JOIN_COMMUNITY_REQUEST;
  data: { communityId: number };
}
export interface IJoinCommunitySuccess {
  type: typeof actionTypesCommunity.JOIN_COMMUNITY_SUCCESS;
  data: IUser;
}
export interface IJoinCommunityError {
  type: typeof actionTypesCommunity.JOIN_COMMUNITY_ERROR;
  error: Error;
}
export interface IAcceptCommunityRequest {
  type: typeof actionTypesCommunity.ACCEPT_COMMUNITY_REQUEST;
  data: { communityId: number; userId: number; title: string };
}
export interface IAcceptCommunitySuccess {
  type: typeof actionTypesCommunity.ACCEPT_COMMUNITY_SUCCESS;
  data: IUser;
}
export interface IAcceptCommunityError {
  type: typeof actionTypesCommunity.ACCEPT_COMMUNITY_ERROR;
  error: Error;
}
export interface IRefuseCommunityRequest {
  type: typeof actionTypesCommunity.REFUSE_COMMUNITY_REQUEST;
  data: { communityId: number; userId: number };
}
export interface IRefuseCommunitySuccess {
  type: typeof actionTypesCommunity.REFUSE_COMMUNITY_SUCCESS;
  data: { userId: number };
}
export interface IRefuseCommunityError {
  type: typeof actionTypesCommunity.REFUSE_COMMUNITY_ERROR;
  error: Error;
}
export interface ILeaveCommunityRequest {
  type: typeof actionTypesCommunity.LEAVE_COMMUNITY_REQUEST;
  data: { communityId: number };
}
export interface ILeaveCommunitySuccess {
  type: typeof actionTypesCommunity.LEAVE_COMMUNITY_SUCCESS;
  data: { communityId: number; userId: number };
}
export interface ILeaveCommunityError {
  type: typeof actionTypesCommunity.LEAVE_COMMUNITY_ERROR;
  error: Error;
}
export interface ILoadCommunityRequest {
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
export interface ILoadCommunitiesRequest {
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
export interface ISearchCommunitiesRequest {
  type: typeof actionTypesCommunity.SEARCH_COMMUNITIES_REQUEST;
  data: { keyword: string };
}
export interface ISearchCommunitiesSuccess {
  type: typeof actionTypesCommunity.SEARCH_COMMUNITIES_SUCCESS;
  data: ICommunity[];
}
export interface ISearchCommunitiesError {
  type: typeof actionTypesCommunity.SEARCH_COMMUNITIES_ERROR;
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
export interface ILoadCategoryRequest {
  type: typeof actionTypesCommunity.LOAD_CATEGORY_REQUEST;
  data: { categoryId: number };
}
export interface ILoadCategorySuccess {
  type: typeof actionTypesCommunity.LOAD_CATEGORY_SUCCESS;
  data: { category: ICategory; communityLength: number };
}
export interface ILoadCategoryError {
  type: typeof actionTypesCommunity.LOAD_CATEGORY_ERROR;
  error: Error;
}
export interface ILoadCategoriesRequest {
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
export interface IAddMeetData {
  place: string;
  fee: number;
  members: number;
  date: string;
  title: string;
  communityId: number;
}
export interface IAddMeetRequest {
  type: typeof actionTypesCommunity.ADD_MEET_REQUEST;
  data: IAddMeetData;
}
export interface IAddMeetSuccess {
  type: typeof actionTypesCommunity.ADD_MEET_SUCCESS;
  data: IMeet;
}
export interface IAddMeetError {
  type: typeof actionTypesCommunity.ADD_MEET_ERROR;
  error: Error;
}
export interface IRemoveMeetRequest {
  type: typeof actionTypesCommunity.REMOVE_MEET_REQUEST;
  data: { communityId: number; meetId: number };
}
export interface IRemoveMeetSuccess {
  type: typeof actionTypesCommunity.REMOVE_MEET_SUCCESS;
  data: { meetId: number };
}
export interface IRemoveMeetError {
  type: typeof actionTypesCommunity.REMOVE_MEET_ERROR;
  error: Error;
}
export interface IModifyMeetData extends IAddMeetData {
  meetId: number;
}
export interface IModifyMeetRequest {
  type: typeof actionTypesCommunity.MODIFY_MEET_REQUEST;
  data: IModifyMeetData;
}
export interface IModifyMeetSuccess {
  type: typeof actionTypesCommunity.MODIFY_MEET_SUCCESS;
  data: IMeet;
}
export interface IModifyMeetError {
  type: typeof actionTypesCommunity.MODIFY_MEET_ERROR;
  error: Error;
}
export interface IJoinMeetRequest {
  type: typeof actionTypesCommunity.JOIN_MEET_REQUEST;
  data: { communityId: number; meetId: number };
}
export interface IJoinMeetSuccess {
  type: typeof actionTypesCommunity.JOIN_MEET_SUCCESS;
  data: IMeet;
}
export interface IJoinMeetError {
  type: typeof actionTypesCommunity.JOIN_MEET_ERROR;
  error: Error;
}
export interface ILeaveMeetRequest {
  type: typeof actionTypesCommunity.LEAVE_MEET_REQUEST;
  data: { communityId: number; meetId: number };
}
export interface ILeaveMeetSuccess {
  type: typeof actionTypesCommunity.LEAVE_MEET_SUCCESS;
  data: { meetId: number; userId: number };
}
export interface ILeaveMeetError {
  type: typeof actionTypesCommunity.LEAVE_MEET_ERROR;
  error: Error;
}

export type ActionsCommunity =
  | IRemoveCommunityImage
  | IUploadCommunityImageRequest
  | IUploadCommunityImageSuccess
  | IUploadCommunityImageError
  | IChangeCommunityInfoRequest
  | IChangeCommunityInfoSuccess
  | IChangeCommunityInfoError
  | IAddCommunityRequest
  | IAddCommunitySuccess
  | IAddCommunityError
  | IRemoveCommunityRequest
  | IRemoveCommunitySuccess
  | IRemoveCommunityError
  | IJoinCommunityRequest
  | IJoinCommunitySuccess
  | IJoinCommunityError
  | IAcceptCommunityRequest
  | IAcceptCommunitySuccess
  | IAcceptCommunityError
  | IRefuseCommunityRequest
  | IRefuseCommunitySuccess
  | IRefuseCommunityError
  | ILeaveCommunityRequest
  | ILeaveCommunitySuccess
  | ILeaveCommunityError
  | ILoadCommunityRequest
  | ILoadCommunitySuccess
  | ILoadCommunityError
  | ILoadCommunitiesRequest
  | ILoadCommunitiesSuccess
  | ILoadCommunitiesError
  | ISearchCommunitiesRequest
  | ISearchCommunitiesSuccess
  | ISearchCommunitiesError
  | ILoadCountryCommunitiesRequest
  | ILoadCountryCommunitiesSuccess
  | ILoadCountryCommunitiesError
  | ILoadCategoryCommunitiesRequest
  | ILoadCategoryCommunitiesSuccess
  | ILoadCategoryCommunitiesError
  | ILoadCategoryRequest
  | ILoadCategorySuccess
  | ILoadCategoryError
  | ILoadCategoriesRequest
  | ILoadCategoriesSuccess
  | ILoadCategoriesError
  | IAddMeetRequest
  | IAddMeetSuccess
  | IAddMeetError
  | IRemoveMeetRequest
  | IRemoveMeetSuccess
  | IRemoveMeetError
  | IModifyMeetRequest
  | IModifyMeetSuccess
  | IModifyMeetError
  | IJoinMeetRequest
  | IJoinMeetSuccess
  | IJoinMeetError
  | ILeaveMeetRequest
  | ILeaveMeetSuccess
  | ILeaveMeetError;
