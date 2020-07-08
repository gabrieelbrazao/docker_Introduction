import express from "express";
import { createConnection } from "mysql";

const app = express();

const connection = createConnection({
  host: "172.26.0.2",
  user: "root",
  port: 3306,
  password: "db_pass",
  database: "db_app",
});

app.get("/", (request, response) => response.json({ Hello: "World" }));

app.get("/dbTest", async (request, response) => {
  connection.query("SELECT 1", (error, results) => {
    if (error) throw error;

    response.send(results);
  });
});

app.listen(3000, "0.0.0.0");
