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
  createdAt: Date;
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

export interface IMeet {
  id: number;
  place: string;
  fee: number;
  members: number;
  date: string;
  title: string;
  MeetOwnerId: number;
  Users: {
    id: number;
    nickname: string;
  }[];
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
  JoinUsers: IUserInfo[];
  Categories: ICategory[];
  OwnerId: number;
  Meets: IMeet[];
}

export interface INotice {
  id: number;
  createdAt: string;
  title: string;
  checked: boolean;
}
export interface IUser extends IUserInfo {
  email: string;
  Owned: ICommunity[];
  Communities: ICommunity[];
  Notices: INotice[];
  Meets: IMeet[];
}
