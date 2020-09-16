const express = require("express");
const app = express();

app.use(express.static("./dist/amplifiqueme-teste"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/amplifiqueme-teste" });
});

app.listen(process.env.PORT || 8080);
