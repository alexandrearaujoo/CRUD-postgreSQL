import database from "../database/index.js";

const showUserService = async ({ id }) => {
  try {
    const res = await database.query("SELECT * FROM users WHERE id = $1", [id]);

    if (res.rows.length === 0) {
      throw new Error("User not found");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default showUserService;
