import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import { loginSchema, registerSchema } from "../validation/userValidation.js";
import { generateToken } from "../util/generateTokenMethod.js";

// register user
export const registerUser = async (req, res) => {
  const { name, email, password } = await req.body;

  // checking user inputs validation
  const { error } = registerSchema.validate({ name, email, password });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    // check if user already exist in db
    const isEmailExist = await userModel.findOne({ email });

    if (isEmailExist) {
      return res.status(400).json({
        success: false,
        message: "User email already exist.",
      });
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 12);

    const newlyCreatedUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    // create token
    if (newlyCreatedUser) {
      const token = generateToken(newlyCreatedUser?._id);

      //   store token in cookie
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: true,
      });

      // send response back to frontend
      return res.status(201).json({
        success: true,
        message: "User successfully registered",
        userData: {
          name: newlyCreatedUser.name,
          email: newlyCreatedUser.email,
          _id: newlyCreatedUser._id,
        },
      });
    }
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // validated user inputs
  const { error } = loginSchema.validate({ email, password });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    // check if user exists in db
    const getUser = await userModel.findOne({ email });

    if (!getUser) {
      return res.status(404).json({
        success: false,
        message: "Incorrect Email",
      });
    }

    // check if user password matches with the db
    const isPasswordMatch = await bcrypt.compare(password, getUser.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // generate token
    const token = generateToken(getUser?._id);

    // save token in cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // finally send the response to the user
    res.status(201).json({
      success: true,
      message: `${getUser.name}, your login is successfull!`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// logout user
// logout simply refers to to deleting/resetting the cookie
export const logoutUser = async (req, res) => {
  res.cookie("token", "", {
    withCredentials: true,
    httpOnly: false,
  });

  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};
