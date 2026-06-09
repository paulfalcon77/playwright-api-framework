import { test, expect }  from '@playwright/test';

test ('Get user by id', async ({request}) => {
    const response = await request.get('/users/1');
    expect( response.status()).toBe(200);
    const body = await response.json();
    expect( body.id).toBe(1);
    expect( body.name).toBeTruthy();
    expect( body.email).toBeTruthy();

});

test ('Negative test for user by id', async ({request}) => {
    const response = await request.get('/users/999999');
    expect( response.status()).toBe(404);

});