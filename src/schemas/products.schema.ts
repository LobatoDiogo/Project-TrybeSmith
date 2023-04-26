import Joi from 'joi';

const productsSchema = Joi.object({
  name:
    Joi.string().min(3).required().label('name'),
  amount:
    Joi.string().min(3).required().label('amount'),
}).messages({
  'any.required': '{{#label}} is required',
  'string.empty': '{{#label}} is required',
  'any.string': '{{#label}} must be a string',
  'string.min': '{{#label}} length must be at least 3 characters long',
});

export = productsSchema;