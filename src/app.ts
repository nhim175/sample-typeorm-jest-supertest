import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./dataSource";
import { User } from "./entities/user";

// create and setup express app
const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  console.log("/users");
  const userRepo = AppDataSource.getRepository(User);
  const users = await userRepo.find();
  res.json(users);
});

export default app;
