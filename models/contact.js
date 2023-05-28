const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const contactScheme = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactScheme.post("save", handleMongooseError);

const Contact = model("contact", contactScheme);

module.exports = Contact;
