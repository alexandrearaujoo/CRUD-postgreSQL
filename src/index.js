import express from "express";
import { startDatabase } from "./database/index.js";
import userRouter from './routes/user.routes.js'

const app = express();

app.use(express.json());

app.use("/users", userRouter)
app.listen(3001, () => startDatabase());
