const express = require("express");
const app = express();

app.get("/teste", (req, res, next) => {
  res.send("Hello Rocketseat");
  next();
});

app.get("/teste", (req, res) => {
  console.log("Funcionou!");
});

app.listen(3000);
