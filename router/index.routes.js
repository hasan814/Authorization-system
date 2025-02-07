import { Router } from "express";

import profileRouter from "./profile.routes.js";
import authRouter from "./auth.routes.js";

const router = Router();
router.use("/auth", authRouter);
router.use("/user", profileRouter);

export default router;
