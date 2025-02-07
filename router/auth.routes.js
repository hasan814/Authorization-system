import { login, register } from "../controller/auth.controller.js";
import { Router } from "express";
import {
  validateLogin,
  validateRegister,
} from "../validators/authValidator.js";

const authRouter = Router();

authRouter.post("/login", validateLogin, login);
authRouter.post("/register", validateRegister, register);

export default authRouter;
