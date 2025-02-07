import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/auth-system",
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
};

export default config;
