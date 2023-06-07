import * as productRepository from "../repositories/productRepository.js";

export async function getProducts() {
  return await productRepository.getProducts();
}


export async function getProduct(id: number) {
  return await productRepository.getProduct(id);
}
