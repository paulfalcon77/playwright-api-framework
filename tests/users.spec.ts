import { test, expect }  from '@playwright/test';
import { testUser } from '../data/users';

test ('Get user by id', async ({request}) => {
    const response = await request.get('/users/1');
    expect( response.status()).toBe(200);
    const body = await response.json();
    expect( body.id).toBe(testUser.id);
    expect( body.name).toBe(testUser.name);
    expect( body.email).toBe(testUser.email);

});

test ('Negative test for user by id', async ({request}) => {
    const response = await request.get('/users/999999');
    expect( response.status()).toBe(404);

});