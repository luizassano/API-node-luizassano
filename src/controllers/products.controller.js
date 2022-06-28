import createProductService from "../services/products/createProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listProductsService from "../services/products/listProducts.service";
import listProductsByCategoryService from "../services/products/listProductsByCategory.service";
import showProductService from "../services/products/showProduct.service";
import updateProductService from "../services/products/updateProduct.service";

export default class ProductsController {
    async create(request, response) {
        const { name, price, category_id } = request.body;

        try {
            const product = await createProductService( name, price, category_id );
            console.log(product);
            return response.status(201).json({
                message: "Product created",
                product: product,
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
            const deletedProduct = await deleteProductService(id);

            return response.status(204).json({
                message: "Product deleted",
                Product: deletedProduct,
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async list(request, response) {
        try {
            const products = await listProductsService();

            return response.status(200).json(products);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async listByCategory(request, response) {
        const { category_id } = request.params;

        try {
            const productsByCategory = await listProductsByCategoryService(category_id);

            return response.status(200).json(productsByCategory);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async show(request, response) {
        const { id } = request.params;

        try {
            const product = await showProductService(id);
            console.log(product)
            console.log(product.id)
            return response.status(200).json(product);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, price } = request.body;

        try {
            const updatedProduct = await updateProductService(id, name, price);

            return response.status(200).json({
                message: "Product updated",
                product: updatedProduct});
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}