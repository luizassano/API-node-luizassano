import database from "../../database";

const listProductsByCategoryService = async (category_id) => {
    try {
        const response = await database.query(
            `
            SELECT
                p.name, p.price, c.name category
            FROM
                products p
            INNER JOIN
                categories c
            ON
                p.category_id = c.id
            WHERE
                p.category_id = $1
            `,
            [category_id]
        );

        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};

export default listProductsByCategoryService;