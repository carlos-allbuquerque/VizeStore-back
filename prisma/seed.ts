import { PrismaClient } from "@prisma/client";
import { createProductData } from "../src/types/ProductType";

const prisma = new PrismaClient();

async function main() {
  console.log("start seeding...");

  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "products" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "orders" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "orderItems" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "carts" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "cartItems" RESTART IDENTITY CASCADE;`;
}

function productsFactory() {
  const products: createProductData[] = [
    //monitors
    {
      name: "MONITOR GAMER SAMSUNG ODYSSEY G30, 24 POL VA, FHD, 1MS, 144HZ, FREESYNC, HDMI/DP, LS24BG300ELMZD",
      imageUrl: "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/l/s/ls24bg300elmzd0111020.jpg",
      category: "monitors",
      price: 1249.90,
      stock: 10,
    },
    {
      name: "Monitor Gamer Mancer Horizon Z PRO, 27 Pol. VA, FHD, 1ms, 165Hz, FreeSync, HDMI/DP, MCR-HZNP27-BL01",
      imageUrl: "https://m.media-amazon.com/images/I/61gPM2ZBGFL._AC_SX679_.jpg",
      category: "monitors",
      price: 999.90,
      stock:15,
    },
    //GPUs
    {
      name: "Placa de Vídeo RTX 3070 MSI Ventus 3X Plus NVIDIA GeForce, 8GB GDDR6, LHR, DLSS, Ray Tracing - GeForce RTX 3070 VENTUS 3X PLUS 8G OC LHR",
      imageUrl: "https://images.kabum.com.br/produtos/fotos/377636/placa-de-video-msi-nvidia-geforce-rtx-3070-ventus-3x-plus-8gb-gddr6-lhr-dlss-ray-tracing-geforce-rtx-3070-ventus-3x-plus-8g-oc-lhr-_1663095435_gg.jpg",
      category: "GPUs",
      price: 999.99,
      stock: 10,
    },
    {
      name: "Placa de Video Geforce Rtx 3060 Gaming X, 12gb, Gddr6, 192-bit, 912-v397-019, Modelo: V397-019R",
      imageUrl: "https://m.media-amazon.com/images/I/811sBakp3+L._AC_SX679_.jpg",
      category: "GPUs",
      price: 999.99,
      stock: 10,
    }
  ];
}
