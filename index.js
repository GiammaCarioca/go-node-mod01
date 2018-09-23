const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

// configurando extensão dos arquivos
app.set("view engine", "njk");

// configurando o caminho das views
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/auth", (req, res) => {
  res.send(
    `Você logou com usuário ${req.body.username} e senha ${req.body.password}`
  );
});

app.listen(3000);
