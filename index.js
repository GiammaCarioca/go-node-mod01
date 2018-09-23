const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Acessou!");
  next();
});

app.get("/teste", (req, res) => {
  res.send("Hello Rocketseat");
});

app.listen(3000);
