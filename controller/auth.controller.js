import User from "../model/user.model.js";

export const register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.create({ fullName, email, password });

    res.send(user);
  } catch (error) {
    next(error);
  }
};
export const login = (req, res, next) => {
  res.send("Login System");
};
