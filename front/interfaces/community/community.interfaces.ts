import { ICommunity } from '../db';

export interface CommunityState {
  singleCommunity: ICommunity | null;
  mainCommunities: ICommunity[];
  hasMoreCommunity: boolean;

  addCommunityLoading: boolean;
  addCommunityDone: boolean;
  addCommunityError: any;
  removeCommunityLoading: boolean;
  removeCommunityDone: boolean;
  removeCommunityError: any;
  updateCommunityLoading: boolean;
  updateCommunityDone: boolean;
  updateCommunityError: any;

  loadCommunityLoading: boolean;
  loadCommunityDone: boolean;
  loadCommunityError: any;
  loadCommunitysLoading: boolean;
  loadCommunitysDone: boolean;
  loadCommunitysError: any;
}
