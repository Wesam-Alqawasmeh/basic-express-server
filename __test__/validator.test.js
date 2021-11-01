"use strict";

const validatorMiddleware = require("../src/middleware/validator");
const { server } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(server);

describe("validator middle ware", () => {
  test("person path without qeury check", async () => {
    const res = await mockRequest.get("/person");
    expect(res.status).toBe(500);
  });

  test("person path with qeury check", async () => {
    const res = await mockRequest.get("/person?name=wesam");
    expect(res.status).toBe(200);
  });

  test("check that the validator moves to the next line", async () => {
    let next = jest.fn();
    let req = {
      query: {},
    };
    let res = {};

    await validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
