const { HttpError } = require("../utils");

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) next(HttpError(400, "missing required name field"));
    next();
  };
};

module.exports = validateBody;
