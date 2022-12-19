const request = require("supertest");
import app from '../../src/server';

jest.mock('launchdarkly-node-server-sdk');

describe("testing health route", () => {
  it("GET /health - success", async () => {
    const { body } = await request(app).get("/health");
    expect(body).toEqual({"status": "UP"}
    );
  });
});