import { NextFunction, Request, Response } from 'express';

const errorMessages = {
  required: 'is required',
  array: 'must be an array',
  emptyArray: 'must include only numbers',
};

const verifyOrder = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) {
    return res.status(400).json({ message: `"productsIds" ${errorMessages.required}` });
  }

  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: `"productsIds" ${errorMessages.array}` });
  }

  if (productsIds.length < 1) {
    return res.status(422).json({ message: `"productsIds" ${errorMessages.emptyArray}` });
  }

  return next();
};

export default verifyOrder;
