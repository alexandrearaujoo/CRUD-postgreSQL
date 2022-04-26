import { Router } from "express";
import UserControler from '../controllers/user.controller.js'
import verifyToken from "../middlewares/verifyToken.js";

const userRouter = Router()

userRouter.post('', (req,res) => UserControler.store(req, res))
userRouter.post('/login', (req, res) => UserControler.loginUser(req, res))
userRouter.get('', verifyToken, (req, res) => UserControler.index(req, res))
userRouter.get('/:id', verifyToken, (req, res) => UserControler.show(req, res))
userRouter.put('/:id', verifyToken, (req, res) => UserControler.update(req, res))
userRouter.delete('/:id', verifyToken,(req, res) => UserControler.delete(req, res))

export default userRouter 