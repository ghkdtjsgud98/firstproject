const express = require("express");

const server = express();
const port = 3000;
server.get("/", (req, res) => {
  res.send("<h1>Hello from Nodejs</h1>");
});

server.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});
