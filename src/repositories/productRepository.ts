import { prisma } from "../database/db.js";
import { Products } from "@prisma/client";

export async function getProducts() {
  return prisma.products.findMany({});
}

export async function getProduct(id: number) {
  return prisma.products.findUnique({ where: { id } });
}
