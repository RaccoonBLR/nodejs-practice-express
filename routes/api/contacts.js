const express = require("express");
const {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
} = require("../../controllers/contacts.js");
const { validateBody } = require("../../middlewares");
const { contactScheme } = require("../../schemes/contacts.js");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", validateBody(contactScheme), add);

router.put("/:contactId", validateBody(contactScheme), updateById);

router.delete("/:contactId", deleteById);

module.exports = router;
