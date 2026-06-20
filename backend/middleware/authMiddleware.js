import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const userAuthVerification = async (req, res) => {
  // grab token from cookies
  const token = req.cookies.token;

  if (!token) {
    return res.json({
      success: false,
      message: "Invalid Token",
    });
  }

  // verify token with jwt
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const userInfo = await userModel.findById(decoded.getId);

      if (userInfo) {
        return res.status(200).json({
          success: true,
          userInfo,
        });
      }
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
        error: error.message,
      });
    }
  }
};
