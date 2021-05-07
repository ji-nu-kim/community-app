import { ICategory, ICommunity } from '../db';

export interface CommunityState {
  imagePath: string[];
  singleCommunity: ICommunity | null;
  mainCommunities: ICommunity[];
  mainCategories: ICategory[];
  hasMoreCommunity: boolean;

  uploadCommunityImageLoading: boolean;
  uploadCommunityImageDone: boolean;
  uploadCommunityImageError: any;
  changeCommunityInfoLoading: boolean;
  changeCommunityInfoDone: boolean;
  changeCommunityInfoError: any;

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
