import { UserState, PostState, CommunityState } from './index';

export interface RootStateInterface {
  user: UserState;
  post: PostState;
  community: CommunityState;
}
