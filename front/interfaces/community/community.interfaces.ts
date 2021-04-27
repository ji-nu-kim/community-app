import { ICategory, ICommunity } from '../db';

export interface CommunityState {
  singleCommunity: ICommunity | null;
  mainCommunities: ICommunity[];
  mainCategories: ICategory[];
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
  loadCommunitiesLoading: boolean;
  loadCommunitiesDone: boolean;
  loadCommunitiesError: any;

  loadCategoriesLoading: boolean;
  loadCategoriesDone: boolean;
  loadCategoriesError: any;
}
