import database from "../../database";

const createCategoriesService = async (name) => {
    try {
        const response = await database.query(
            `
            INSERT INTO
                categories(name)
            VALUES
                ($1)
            RETURNING *
            `,
            [name]
        );

        return response.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};

export default createCategoriesService;