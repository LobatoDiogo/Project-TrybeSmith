import Joi from 'joi';

const loginSchema = Joi.object({
  username:
    Joi.string().min(3).required().label('username'),
  password:
    Joi.string().min(6).required().label('password'),
}).messages({
  'any.required': '{{#label}} is required',
  'string.empty': '{{#label}} is required',
});

export = loginSchema;
