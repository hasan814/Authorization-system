import config from "../config/config.js";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized:No token provided" });

    const decoded = jwt.verify(token, config.jwtSecret);

    const user = await User.findById(decoded.userId);
    if (!user)
      return res.status(401).json({ message: "Unauthorized:Invalid token" });
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized:Invalid or expired token" });
  }
};
