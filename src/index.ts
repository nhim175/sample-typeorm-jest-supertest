import { AppDataSource } from "./dataSource";
import { createServer } from "http";
import app from "./app";

AppDataSource.initialize().then(() => {
  const httpServer = createServer(app);
  httpServer.listen(3001, () => {
    console.log("Server listening on port", 3001);
  });
});
