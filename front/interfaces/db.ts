export interface ICategory {
  id: number;
  name: string;
  profilePhoto: string;
}

export interface IUserInfo {
  id: number;
  nickname: string;
  country: string;
  Categories?: ICategory[];
  profilePhoto?: string;
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
  communityName: string;
  description: string;
  caution?: string;
  requirement?: string;
  profilePhoto: string;
  createdAt: Date;
  updatedAt: Date;
  country: string;
  Users: IUserInfo[];
  Posts: IPost[];
  Categories: ICategory[];
  OwnerId: number;
}

export interface IUser extends IUserInfo {
  email: string;
  Posts: { id: number }[];
  Owned: ICommunity[];
  Communities: ICommunity[];
}
