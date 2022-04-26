import bcrypt from "bcryptjs";
import database from "../database/index.js";

const createUserService = async ({ email, name, password }) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  try {
    const res = await database.query(
      "INSERT INTO users(email, name, password) VALUES ($1, $2, $3) RETURNING *",
      [email, name, hashedPassword]
    );

    const [user] = res.rows;

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export default createUserService;
