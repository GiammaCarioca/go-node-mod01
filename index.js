const express = require("express");
const app = express();

const userMiddleware = (req, res, next) => {
  console.log("Acessou!");
  next();
};

app.get("/teste", (req, res) => {
  res.send("Hello Rocketseat");
});

app.get("/user", userMiddleware, (req, res) => {
  res.send("Usuário: Giamma");
});

app.listen(3000);
