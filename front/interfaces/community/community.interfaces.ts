import { ICategory, ICommunity } from '../db';

export interface CommunityState {
  imagePath: string[];
  singleCommunity: ICommunity | null;
  mainCommunities: ICommunity[];
  changableCommunities: ICommunity[];
  singleCategory: ICategory | null;
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
  joinCommunityLoading: boolean;
  joinCommunityDone: boolean;
  joinCommunityError: any;

  loadCommunityLoading: boolean;
  loadCommunityDone: boolean;
  loadCommunityError: any;
  loadCommunitiesLoading: boolean;
  loadCommunitiesDone: boolean;
  loadCommunitiesError: any;

  loadCategoryLoading: boolean;
  loadCategoryDone: boolean;
  loadCategoryError: any;
  loadCategoriesLoading: boolean;
  loadCategoriesDone: boolean;
  loadCategoriesError: any;
}
