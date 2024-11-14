const Joi = require('joi');

const signUpSchema = Joi.object({
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  password: Joi.string()
    .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/))
    .required()
    .messages({
      'string.pattern.base': 'Password must be between 8 and 10 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character.',
      'any.required': 'Password is required',
    }),

  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords do not match, please enter the correct password',
      'any.required': 'Confirm password is required',
    }),

  firstName: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({
      'string.min': 'First name must be at least 2 characters long',
      'string.max': 'First name cannot exceed 30 characters',
      'any.required': 'First name is required',
    }),

  lastName: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({
      'string.min': 'Last name must be at least 2 characters long',
      'string.max': 'Last name cannot exceed 30 characters',
      'any.required': 'Last name is required',
    }),

  phone: Joi.string()
    .pattern(new RegExp(/^\d{10}$/))
    .required()
    .messages({
      'string.pattern.base': 'Phone number must be exactly 10 digits long',
      'any.required': 'Phone number is required',
    }),

  empty: Joi.string().allow('').optional()
});

const handleJoiValidation = (req, res, next) => {
  const { error } = signUpSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      errors: error.details.map(err => err.message),
    });
  }
  next();
};

module.exports = { handleJoiValidation };
