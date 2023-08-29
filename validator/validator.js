const Joi = require('joi');

const validationSchema = Joi.object({
  price: Joi.number().min(0).required(),
  name: Joi.string().pattern(/^[A-Za-z]/).max(50).required(),
  description: Joi.string().max(250),
  duration: Joi.number(),
});

module.exports ={ validationSchema}