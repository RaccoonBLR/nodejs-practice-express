const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");
const { schemes } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemes.registerScheme), register);

router.post("/login", validateBody(schemes.loginScheme), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router;
