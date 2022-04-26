import createUserService from "../services/createUser.service.js";
import deleteUserService from "../services/deleteUser.service.js";
import listUsersService from "../services/listUser.service.js";
import userLoginService from "../services/login.services.js";
import showUserService from "../services/showUser.service.js";
import updateUserService from "../services/updateUser.service.js";

class UserController {
  static async store(req, res) {
    const { name, email, password } = req.body;
    try {
      const user = await createUserService({ email, name, password });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async index(req, res) {
    try {
      const users = await listUsersService();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async show(req, res) {
    const { id } = req.params;

    try {
      const user = await showUserService({ id });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      const upadtedUser = await updateUserService({ id, name, email });

      return res.status(200).json(upadtedUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      const deletedUser = await deleteUserService({ id });

      return res.status(204).json(deletedUser);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      const userToken = await userLoginService({ email, password });

      return res.json(userToken);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

export default UserController;
