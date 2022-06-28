import database from "../../database";

const createProductService = async (name, price, category_id) => {
    try {
        const response = await database.query(
            `
            INSERT INTO 
                products (name, price, category_id) 
            VALUES 
                ($1, $2, $3) 
            RETURNING *
            `,
            [name, price, category_id]
        );
        return response.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};

export default createProductService;