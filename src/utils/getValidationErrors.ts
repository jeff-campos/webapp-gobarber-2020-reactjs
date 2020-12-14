import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Error {
  const validationError: Error = {};

  err.inner.forEach(error => {
    validationError[error.path || 'inputName'] = error.message;
  });

  return validationError;
}
