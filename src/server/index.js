const express = require("express");

const translateController = require("../controllers/translate");

const { SV_PORT } = process.env;

const server = express();

server.get("/", translateController);

server.listen(SV_PORT, () =>
  console.log(`Server is running on port ${SV_PORT}...`)
);
