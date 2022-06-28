import { Router } from "express";
import ProductsController from "../controllers/products.controller";

const router = Router();

const productsController = new ProductsController();

router.post("", productsController.create);
router.get("", productsController.list);
router.get("/:id", productsController.show);
router.get("/category/:category_id", productsController.listByCategory);
router.patch("/:id", productsController.update);
router.delete("/:id", productsController.delete);

export default router;