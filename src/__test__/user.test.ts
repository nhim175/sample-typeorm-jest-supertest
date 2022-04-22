import * as supertest from "supertest";
import app from "../app";
import { AppDataSource } from "../dataSource";
import { User } from "../entities/user";

describe("User APIs", () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
  });

  beforeEach(async () => {
    const userRepo = AppDataSource.getRepository(User);
    const user = userRepo.create({ firstName: "A", lastName: "B" });
    await userRepo.save(user);
  });

  test("GET /users", async () => {
    const response = await supertest(app).get("/users").send();
    expect(response.status).toBe(200);
    console.log(response.body);
  });
});
