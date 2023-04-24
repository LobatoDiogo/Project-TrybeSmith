import { Products } from '../interfaces/Products';
import productsModel from '../models/products.model';

async function registerProduct(name: string, amount: string): Promise<Products> {
  const newProduct = await productsModel.registerProduct(name, amount);

  return newProduct;
}

export default {
  registerProduct,
};
