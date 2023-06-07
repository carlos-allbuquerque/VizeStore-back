import { Request, Response } from "express";
import * as productService from "../services/productService.js";

export async function getProducts(req: Request, res: Response) {
  const products = await productService.getProducts();
  res.send(products).status(200);
}

export async function getProduct(req: Request, res: Response) {
  const { id } = req.params;
  const numberId = parseInt(id);
  const product = await productService.getProduct(numberId);
  res.send(product).status(200);
}