import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: false,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
