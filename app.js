const express = require("express");

const usersRouter = require("./router/userRoute");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server...");
});

app.use("/api/v1/user", usersRouter);

module.exports = app;
