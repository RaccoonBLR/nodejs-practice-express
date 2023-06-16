const express = require("express");
const {
  getAll,
  getById,
  add,
  updateById,
  updateStatusContact,
  deleteById,
} = require("../../controllers/contacts.js");
const {
  validateBody,
  isValidId,
  authenticate,
} = require("../../middlewares/index.js");
const {
  addContactScheme,
  updateStatusContactScheme,
} = require("../../schemes/contacts.js");

const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(addContactScheme), add);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(addContactScheme),
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateStatusContactScheme),
  updateStatusContact
);

router.delete("/:contactId", authenticate, isValidId, deleteById);

module.exports = router;
