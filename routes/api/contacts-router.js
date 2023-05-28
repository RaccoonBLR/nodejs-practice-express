const express = require("express");
const {
  getAll,
  getById,
  add,
  updateById,
  updateStatusContact,
  deleteById,
} = require("../../controllers/contacts.js");
const { validateBody, isValidId } = require("../../middlewares/index.js");
const {
  addContactScheme,
  updateStatusContactScheme,
} = require("../../schemes/contacts.js");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(addContactScheme), add);

router.put(
  "/:contactId",
  isValidId,
  validateBody(addContactScheme),
  updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateStatusContactScheme),
  updateStatusContact
);

router.delete("/:contactId", isValidId, deleteById);

module.exports = router;
