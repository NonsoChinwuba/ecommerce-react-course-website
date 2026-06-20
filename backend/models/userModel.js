import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
