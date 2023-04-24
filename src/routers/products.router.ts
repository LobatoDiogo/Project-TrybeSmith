import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter
  .post('/', productsController.registerProduct)
  .get('/', productsController.findAll);

export = productsRouter;