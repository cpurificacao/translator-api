const express = require("express");

const { SV_PORT } = process.env;

const server = express();

server.listen(SV_PORT, () =>
  console.log(`Server is running on port ${SV_PORT}`)
);
