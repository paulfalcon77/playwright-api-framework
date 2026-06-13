import { test, expect } from '@playwright/test';
import { newUser, testUser, updatedUser } from '../data/users';
import { UsersClient } from '../api-clients/users.client';
import { User } from '../types/user';

let usersClient: UsersClient;

test.beforeEach(async ({ request }) => {
    usersClient = new UsersClient(request);
});

test('Get user by id', async () => {
    const response = await usersClient.getUserById(1);
    expect(response.status()).toBe(200);
    const body: User = await response.json();
    expect(body.id).toBe(testUser.id);
    expect(body.name).toBe(testUser.name);
    expect(body.email).toBe(testUser.email);
});

test('Negative test for user by id', async () => {
    const response = await usersClient.getUserById(999999);
    expect(response.status()).toBe(404);
});

test('Should create a new user', async () => {
    const response = await usersClient.createUser(newUser);
    expect(response.status()).toBe(201);
    const body: User = await response.json();
    expect(body.id).toBeDefined();
    expect(body.name).toBe(newUser.name);
    expect(body.email).toBe(newUser.email);
});

test('Should delete created user', async () => {
    const createResponse = await usersClient.createUser(newUser);
    expect(createResponse.status()).toBe(201);
    const body: User = await createResponse.json();
    expect(body.id).toBeDefined();
    const deleteResponse = await usersClient.deleteUser(body.id);
    expect(deleteResponse.status()).toBe(200);
});

test('Should update existing user', async () => {
    const response = await usersClient.updateUser(1, updatedUser);
    expect(response.status()).toBe(200);
    const body: User = await response.json();
    expect(body.name).toBe(updatedUser.name);
    expect(body.email).toBe(updatedUser.email);
});

// npx playwright test -g "Should create a new user"
// npx playwright test -g "Should delete created user"
// npx playwright test -g "Should update existing user"
