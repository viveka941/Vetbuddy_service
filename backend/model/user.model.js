import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // optional but recommended
    },
    phone: {
      type: String,
      required: true,
    },
    password:{
        type:String,
        required: true
    },
    role: {
      type: String,
      enum: ["Client", "Doctor"],
      required: true,
    },
    education: {
      type: String,
    },
    specialization: {
      type: String,
    },
    experience: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

export const User = mongoose.model("User", userSchema);
