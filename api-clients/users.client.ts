import { BaseApiClient } from './base-api.client';
import { CreateUserRequest } from '../types/user';

export class UsersClient extends BaseApiClient {
    async getUserById(id: number) {
        return this.request.get(`/users/${id}`);
    }

    async createUser(user: CreateUserRequest) {
        return this.request.post(`/users`, { data: user });
    }

    async deleteUser(id: number) {
        return this.request.delete(`/users/${id}`);
    }

    async updateUser(id: number, user: CreateUserRequest) {
        return this.request.put(`/users/${id}`, { data: user });
    }
}
