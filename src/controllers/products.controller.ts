import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function registerProduct(req: Request, res: Response) {
  const { name, amount } = req.body;

  const newProduct = await productsService.registerProduct(name, amount);
  
  return res.status(201).json(newProduct);
}

async function findAll(req: Request, res: Response) {
  const allProducts = await productsService.findAll();
  res.status(200).json(allProducts);
}

export default {
  registerProduct,
  findAll,
};
