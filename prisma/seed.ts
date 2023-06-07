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

  const products = productsFactory();

  const product = await prisma.products.createMany({ data: products });
  console.log(`Created ${product.count} products`);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

function productsFactory() {
  const products: createProductData[] = [
    //monitors
    {
      name: "MONITOR GAMER SAMSUNG ODYSSEY",
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_0_Aqb5E45yewvXSdBRCEEH2oOuDkVKsT6asvjdeeFQdsgwPEcBs9hb7hpwPLYur0Jc4GfgQv6iofsU4__v_UXLeOmleW6_KDx4K9iekndchwUwJKtG1A_w&usqp=CAE",
      category: "monitors",
      price: 1249.9,
      stock: 10,
    },
    {
      name: "Monitor Gamer Mancer ",
      imageUrl:
        "https://m.media-amazon.com/images/I/61gPM2ZBGFL._AC_SX679_.jpg",
      category: "monitors",
      price: 999.9,
      stock: 15,
    },
    //GPUs
    {
      name: "Placa de Vídeo RTX 3070",
      imageUrl:
        "https://images.kabum.com.br/produtos/fotos/377636/placa-de-video-msi-nvidia-geforce-rtx-3070-ventus-3x-plus-8gb-gddr6-lhr-dlss-ray-tracing-geforce-rtx-3070-ventus-3x-plus-8g-oc-lhr-_1663095435_gg.jpg",
      category: "GPUs",
      price: 999.99,
      stock: 10,
    },
    {
      name: "Placa de Video Geforce Rtx 3060",
      imageUrl:
        "https://m.media-amazon.com/images/I/811sBakp3+L._AC_SX679_.jpg",
      category: "GPUs",
      price: 999.99,
      stock: 10,
    },
  ];

  return products;
}
