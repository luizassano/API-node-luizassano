import database from "../../database";

const updateProductService = async (id, name, price) => {
    try {
        const selectProduct = await database.query(
            `
            SELECT
                *
            FROM
                products
            WHERE
                products.id = $1
        `,
            [id]
        );

        const [product] = selectProduct.rows;

        name && (product.name = name);
        price && (product.price = price);

        const response = await database.query(
            `
            UPDATE
                products
            SET
                name = $1, price = $2
            WHERE
                products.id = $3
            RETURNING *
        `,
            [product.name, product.price, id]
        );

        return response.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};

export default updateProductService;