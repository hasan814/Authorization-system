import bcrypt from "bcryptjs";
import User from "../model/user.model.js";

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
export const login = (req, res, next) => {
  res.send("Login System");
};
