const Joi = require("joi");

const addContactScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const updateStatusContactScheme = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { addContactScheme, updateStatusContactScheme };
