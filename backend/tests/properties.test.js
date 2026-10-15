const request = require("supertest");
const app = require("../src/server");

describe("GET /health", () => {
  it("returns ok status", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe("GET /api/properties", () => {
  it("returns all 12 properties by default", async () => {
    const res = await request(app).get("/api/properties");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(12);
  });

  it("filters by city", async () => {
    const res = await request(app).get("/api/properties?city=Austin");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    res.body.forEach((p) => expect(p.city).toBe("Austin"));
  });

  it("filters by minPrice and maxPrice", async () => {
    const res = await request(app).get("/api/properties?minPrice=500000&maxPrice=700000");
    expect(res.statusCode).toBe(200);
    res.body.forEach((p) => {
      expect(p.price).toBeGreaterThanOrEqual(500000);
      expect(p.price).toBeLessThanOrEqual(700000);
    });
  });

  it("filters by minimum bedrooms", async () => {
    const res = await request(app).get("/api/properties?bedrooms=4");
    expect(res.statusCode).toBe(200);
    res.body.forEach((p) => expect(p.bedrooms).toBeGreaterThanOrEqual(4));
  });
});

describe("GET /api/properties/:id", () => {
  it("returns a single property", async () => {
    const res = await request(app).get("/api/properties/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it("returns 404 for a missing property", async () => {
    const res = await request(app).get("/api/properties/9999");
    expect(res.statusCode).toBe(404);
  });
});

describe("GET /api/properties/cities", () => {
  it("returns a sorted list of unique cities", async () => {
    const res = await request(app).get("/api/properties/cities");
    expect(res.statusCode).toBe(200);
    const sorted = [...res.body].sort();
    expect(res.body).toEqual(sorted);
  });
});
