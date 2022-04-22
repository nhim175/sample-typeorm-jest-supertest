import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/user";

export const AppDataSource = new DataSource({
  type: "mysql",
  url: "mysql://mysql:password@localhost:3307/test",
  entities: [User],
  synchronize: true,
  logging: false,
});
