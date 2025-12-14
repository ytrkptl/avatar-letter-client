import { validationResult } from 'express-validator';

export const runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({
      title: 'validators error',
      messageForLog: errors.array()[0].msg,
      status: 422,
      message: errors.array()[0].msg,
      addToDb: true
    });
  }
  return next();
};

export const runAvatarLetterValidation = (err, req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({
      title: 'validators error',
      messageForLog: errors.array()[0].msg,
      status: 422,
      message: errors.array()[0].msg,
      addToDb: true
    });
  }
  if (err) {
    return next({
      title: 'validators error',
      messageForLog: err.message,
      status: 400,
      message: err.message,
      addToDb: true
    });
  }
  return next();
};
