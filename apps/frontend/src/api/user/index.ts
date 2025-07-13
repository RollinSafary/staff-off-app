import { IUserCreateRequest, IUserListResponse, IUserResponse, IUserUpdateRequest } from './types';

const userApi = {
  getUser: async (id: string): Promise<IUserResponse> => {
    const response = await fetch(`/users/${id}`);
    return response.json();
  },
  getUsers: async (): Promise<IUserListResponse> => {
    const response = await fetch('/users');
    return response.json();
  },
  createUser: async (user: IUserCreateRequest): Promise<IUserResponse> => {
    const response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
    return response.json();
  },
  updateUser: async (id: string, user: IUserUpdateRequest): Promise<IUserResponse> => {
    const response = await fetch(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    });
    return response.json();
  },
};

export default userApi;