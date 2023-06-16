const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  registerScheme,
  loginScheme,
  emailScheme,
} = require("../../schemes/users.js");
const {
  register,
  verificationEmail,
  resendVerificationEmail,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(registerScheme), register);

router.get("/verify/:verificationToken", verificationEmail);

router.post("/verify", validateBody(emailScheme), resendVerificationEmail);

router.post("/login", validateBody(loginScheme), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
