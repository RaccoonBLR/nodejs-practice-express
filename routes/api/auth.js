const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { registerScheme, loginScheme } = require("../../schemes/users.js");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(registerScheme), register);

router.post("/login", validateBody(loginScheme), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
