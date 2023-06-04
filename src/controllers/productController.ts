import { Request, Response } from "express";
import * as productService from "../services/productService.js";

export async function getProducts(req: Request, res: Response) {
  const products = await productService.getProducts();
  res.send(products).status(200);
}
