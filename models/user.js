const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const userScheme = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: [true, "avatar url is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userScheme.post("save", handleMongooseError);

const User = model("user", userScheme);

module.exports = User;
