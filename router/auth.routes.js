import { login, register } from "../controller/auth.controller.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/register", register);

export default authRouter;
