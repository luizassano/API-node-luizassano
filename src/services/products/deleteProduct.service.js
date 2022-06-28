import database from "../../database";

const deleteProductService = async (id) => {
    try {
        const response = await database.query(
            `
        DELETE FROM 
            products 
        WHERE 
            id = ($1) 
        RETURNING *
        `,
            [id]
        );
        return response.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};

export default deleteProductService;