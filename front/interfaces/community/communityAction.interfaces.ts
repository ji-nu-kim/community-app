import { ICommunity } from '../db';

export const actionTypesCommunity = {
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
  LOAD_COMMUNITYS_REQUEST: 'LOAD_COMMUNITYS_REQUEST',
  LOAD_COMMUNITYS_SUCCESS: 'LOAD_COMMUNITYS_SUCCESS',
  LOAD_COMMUNITYS_ERROR: 'LOAD_COMMUNITYS_ERROR',
} as const;

export interface CommunityData {
  name: string;
  description: string;
}

export interface IAddCommunityReqeust {
  type: typeof actionTypesCommunity.ADD_COMMUNITY_REQUEST;
  data: CommunityData;
}
export interface IAddCommunitySuccess {
  type: typeof actionTypesCommunity.ADD_COMMUNITY_SUCCESS;
  data: ICommunity;
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
export interface ILoadCommunitysReqeust {
  type: typeof actionTypesCommunity.LOAD_COMMUNITYS_REQUEST;
  data: { communityId: number };
}
export interface ILoadCommunitysSuccess {
  type: typeof actionTypesCommunity.LOAD_COMMUNITYS_SUCCESS;
  data: ICommunity[];
}
export interface ILoadCommunitysError {
  type: typeof actionTypesCommunity.LOAD_COMMUNITYS_ERROR;
  error: Error;
}

export type ActionsCommunity =
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
  | ILoadCommunitysReqeust
  | ILoadCommunitysSuccess
  | ILoadCommunitysError;
