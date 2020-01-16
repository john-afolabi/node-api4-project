const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.static("client/build"));
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/api", (req, res) => {
  res.status(200).json("This API works correctly");
});

module.exports = server;
