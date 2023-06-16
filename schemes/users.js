const Joi = require("joi");

const registerScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const emailScheme = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "missing required field email",
  }),
});

const loginScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = { registerScheme, loginScheme, emailScheme };
