"use strict";

const {server} = require("../src/server");
const supertest = require("supertest");

const mockRequest = supertest(server);


describe("API server testing", () => {

    test('home route', async() => {
        const res = await mockRequest.get('/');
        expect(res.status).toBe(200);
    });

    test('invalid route', async() => {
        const res = await mockRequest.get('/bad');
        expect(res.status).toBe(404);
    });

    test('person route', async() => {
        const res = await mockRequest.get('/person');
        expect(res.status).toBe(500);
    });
});