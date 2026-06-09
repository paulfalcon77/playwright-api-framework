import { test, expect }  from '@playwright/test';
import { testUser } from '../data/users';
import { UsersClient } from '../api-clients/users.client';
import { User } from '../types/user';

test ('Get user by id', async ({request}) => {
    const usersClient = new UsersClient(request);
    const response = await usersClient.getUserById(1);
    expect( response.status()).toBe(200);
    const body: User = await response.json();
    expect( body.id).toBe(testUser.id);
    expect( body.name).toBe(testUser.name);
    expect( body.email).toBe(testUser.email);

});

test ('Negative test for user by id', async ({request}) => {
    const usersClient = new UsersClient(request);
    const response = await usersClient.getUserById(999999);
    expect( response.status()).toBe(404);

});