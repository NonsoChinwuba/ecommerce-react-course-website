import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET_KEY;

export const generateToken = (getId) => {
  return jwt.sign({ getId }, secret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
