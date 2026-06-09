
import { BaseApiClient } from './base-api.client';

export class UsersClient extends BaseApiClient {

    async getUserById(id: number) {
        return this.request.get(`/users/${id}`);
    }
}