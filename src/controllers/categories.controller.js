import createCategoryService from "../services/categories/createCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import showCategoryService from "../services/categories/showCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";

export default class CategoriesController {
    async create(request, response) {
        const { name } = request.body;

        try {
            const category = await createCategoryService(name);

            return response.status(201).json({
                message: "Category created",
                category: category,
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async delete(request, response) {
        const { id } = request.params;

        try {
            const deletedCategory = await deleteCategoryService(id);

            return response.status(204).json({
                message: "Category deleted",
                Category: deletedCategory,
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async list(request, response) {
        try {
            const category = await listCategoriesService();

            return response.status(200).json(category);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async show(request, response) {
        const { id } = request.params;
        try {
            const category = await showCategoryService(id);

            return response.status(200).json(category);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;

        try {
            const updatedCategory = await updateCategoryService(name, id);

            return response.status(200).json({
                message: "Category updated",
                category: updatedCategory,
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}