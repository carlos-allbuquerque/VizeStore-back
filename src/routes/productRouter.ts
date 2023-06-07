import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { getProducts, getProduct } from "../controllers/productController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.use(ensureAuthenticatedMiddleware);
productRouter.get("/products", getProducts);
productRouter.get("/product/:id", getProduct);

export default productRouter;
