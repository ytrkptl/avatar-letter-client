import { check, param } from 'express-validator';

export const getFileFromDirValidator = [
  check('set')
    .trim()
    .not()
    .isEmpty()
    .withMessage('set number is required')
    .isLength({ min: 4, max: 4 })
    .withMessage('invalid set number')
    .escape()
    .isAlphanumeric()
    .withMessage('set can only include alphabets or numbers'),
  param('set').customSanitizer(value => {
    if (!['set1', 'set2'].includes(value)) {
      throw new Error('set can only include set1 or set2.');
    }

    // Indicates the success of this synchronous custom validator
    return value;
  }),
  check('size')
    .not()
    .isEmpty()
    .withMessage('size is required')
    .trim()
    .isLength({ min: 3 })
    .withMessage('invalid size')
    .escape()
    .isAlpha()
    .withMessage(
      'size can only include: tiny, small, med, big, large, or full.'
    ),
  param('size').customSanitizer(value => {
    if (!['tiny', 'small', 'med', 'big', 'large', 'full'].includes(value)) {
      throw new Error(
        'size can only include: tiny, small, med, big, large, or full.'
      );
    }

    // Indicates the success of this synchronous custom validator
    return value;
  }),
  check('name')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('name is required')
    .isAlpha()
    .withMessage('name must include alphabets only.'),
  check('fileType')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('format is required and can only include png or webp formats')
    .isAlpha()
    .withMessage('fileType can only include png or webp')
];
