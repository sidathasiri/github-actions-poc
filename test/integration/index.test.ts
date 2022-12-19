const request = require("supertest"); // supertest is a framework 
import app from '../../src/server';

describe("testing health route", () => {
  it("GET /health - success", async () => {
    const { body } = await request(app).get("/health"); //uses the request function that calls on express app instance
    expect(body).toEqual({"status": "UP"}
    );
  });
});