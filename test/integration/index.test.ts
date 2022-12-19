const request = require("supertest");
import app from '../../src/server';

describe("testing health route", () => {
  it("GET /health - success", async () => {
    const { body } = await request(app).get("/health");
    expect(body).toEqual({"status": "UP"}
    );
  });
});