import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

// ============== Register ===============
export const register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already in use" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User Registered Successfully", user });
  } catch (error) {
    next(error);
  }
};

// ============== Login ===============
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or Password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or Password" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      config.jwtSecret,
      { expiresIn: "1d" }
    );
    res.status(200).json({ message: "Login Successfully", token });
  } catch (error) {
    next(error);
  }
};
