const express = require("express");
const path = require("path");

const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;
console.log(port);
fs.writeFile("port.txt", String(port), { flag: "w" }, function (err) {
  if (err) throw err;
  console.log("port set successfully");
});
// Server routes...
app.get("/hello", (req, res) => {
  const port = process.env.PORT;
  console.log(port);
  fs.readFile("port.txt", { encoding: "utf-8" }, function (err, data) {
    if (!err) {
      console.log("received data: " + data);
      res.send({ hi: "there", data });
    } else {
      res.send("there is an error");
    }
  });
});

if (process.env.NODE_ENV !== "production") {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config.js");
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });
}

app.listen(process.env.PORT || 3050, () => console.log("Listening"));
