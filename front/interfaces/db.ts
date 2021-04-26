export interface IUserInfo {
  id: number;
  nickname: string;
  country: string;
  categories?: string;
  profilePhoto?: string;
}
export interface IUser extends IUserInfo {
  email: string;
  Posts: { id: number }[];
  Owned: {
    id: number;
    name: string;
    description: string;
    profilePhoto?: string;
    createdAt: Date;
    OwnerId: number;
  }[];
}
export interface IComment {
  id: number;
  content: string;
  PostId: number;
  User: IUserInfo;
}
export interface IPost {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  User: IUserInfo;
  Images: { src: string }[];
  Likers: { id: number }[];
  Comments: IComment[];
}
export interface ICommunity {
  id: number;
  name: string;
  description: string;
  profilePhoto: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  Categories: string[];
  OwnerId: number;
}
