// src/validations/userValidation.js
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const validateUser = (user) => userSchema.validate(user);

module.exports = validateUser;