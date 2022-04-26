import database from "../database/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userLoginService = async ({ email, password }) => {
  try {
    const res = await database.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (res.rows.length === 0) {
      throw new Error("Email ou senha Invalidos");
    }

    const user = res.rows[0];

    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email ou senha Invalidos");
    }

    const token = jwt.sign({ email: email }, "SECRET_KEY", {
      expiresIn: "24h",
    });

    return { token };
  } catch (error) {
    throw new Error(error);
  }
};

export default userLoginService