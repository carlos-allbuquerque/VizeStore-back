import * as productRepository from "../repositories/productRepository.js";

export async function getProducts() {
  return await productRepository.getProducts();
}
