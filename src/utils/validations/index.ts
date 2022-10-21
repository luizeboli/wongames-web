import Joi from 'joi';

import { TUsersPermissionsRegisterInput } from 'graphql/generated';

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' }),
};

export type FieldErrors = {
  [key: string]: string;
};

function getFieldErrors(objErrors: Joi.ValidationResult) {
  const normalizedErrors: FieldErrors = {};

  if (objErrors.error) {
    objErrors.error.details.forEach((error) => (normalizedErrors[error.path.join('.')] = error.message));
  }

  return normalizedErrors;
}

export function signUpValidate(values: TUsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations);

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

export function signInValidate(values: Omit<TUsersPermissionsRegisterInput, 'username'>) {
  const { email, password } = fieldsValidations;
  const schema = Joi.object({ email, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

type ForgotPasswordValidateParams = Pick<TUsersPermissionsRegisterInput, 'email'>;
export function forgotPasswordValidate(values: ForgotPasswordValidateParams) {
  const { email } = fieldsValidations;
  const schema = Joi.object({ email });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

type ResetPasswordValidate = {
  password: string;
  confirm_password: string;
};

export function resetPasswordValidate(values: ResetPasswordValidate) {
  const { password, confirm_password } = fieldsValidations;
  const schema = Joi.object({ password, confirm_password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
