const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

// configurando extensão dos arquivos
app.set("view engine", "njk");

// configurando o caminho das views
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { nome: "Thiago Giammattey" });
});

app.listen(3000);
