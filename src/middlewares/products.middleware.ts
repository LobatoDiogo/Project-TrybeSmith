import { NextFunction, Request, Response } from 'express';
import productsSchema from '../schemas/products.schema';

const productsVerify = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const { error } = productsSchema.validate({ name, amount });

  if (!name || !amount) {
    res.status(400).json({ message: error?.message });
  }
  
  if (typeof name !== 'string' || typeof amount !== 'string') {
    res.status(422).json({ message: error?.message });
  }

  next();
};

const productsLengthVerify = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const { error } = productsSchema.validate({ name, amount });
  if (name.length < 3 || amount.length < 3) {
    res.status(422).json({ message: error?.message });
  }

  next();
};

export {
  productsVerify,
  productsLengthVerify,
};
