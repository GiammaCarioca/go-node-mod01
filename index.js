const express = require("express");
const app = express();

app.get("/teste", (req, res) => {
  res.send("Hello Rocketseat");
});

app.use("/user", (req, res, next) => {
  console.log("Acessou!");
  next();
});

app.get("/user", (req, res) => {
  res.send("Usuário: Giamma");
});

app.get("/user/name", (req, res) => {
  res.send("Usuário: Thiago Giammattey");
});

app.listen(3000);
