import { Router } from 'express';
import productsController from '../controllers/products.controller';
import { productsLengthVerify, productsVerify } from '../middlewares/products.middleware';

const productsRouter = Router();

productsRouter
  .post('/', productsVerify, productsLengthVerify, productsController.registerProduct)
  .get('/', productsController.findAll);

export = productsRouter;