export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  data: IUser;
}

export interface IUserListResponse {
  data: IUser[];
}

export interface IUserCreateRequest {
  name: string;
  email: string;
  password: string;
}

export interface IUserUpdateRequest {
  name: string;
  email: string;
  password: string;
}   