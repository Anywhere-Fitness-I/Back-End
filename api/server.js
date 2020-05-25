require("dotenv").config();

const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authRouter = require("../routers/authentication/authRouter");
const instructorRouter = require("../routers/instructor/instructorRouter");
const clientRouter = require("../routers/clientuser/clientRouter");
const {
  validateBody,
  validateEmail,
  validateUser,
  restricted,
  isInstructor,
  isClient,
} = require("../helpers/middleware");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", validateBody, validateEmail, validateUser, authRouter);
server.use("/api/instructor", restricted, isInstructor, instructorRouter);
server.use("/api/client", restricted, isClient, clientRouter);
server.get("/", (req, res) => {
  res.json({ server: "Well, Hello there. I'm up!" });
});
module.exports = server;
