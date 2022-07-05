import { Router } from "express";
import CategoriesController from "../controllers/categories.controller";

const router = Router();

const categoriesController = new CategoriesController();

router.post("", categoriesController.create);
router.get("", categoriesController.list);
router.get("/:id", categoriesController.show);
router.patch("/:id", categoriesController.update);
router.delete("/:id", categoriesController.delete);

export default router;
