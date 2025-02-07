import { checkAuth } from "../middleware/auth.middleware.js";
import { Profile } from "../controller/profile.controller.js";
import { Router } from "express";

const profileRouter = Router();

profileRouter.get("/profile", checkAuth, Profile);

export default profileRouter;
