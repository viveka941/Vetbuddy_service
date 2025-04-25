import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export const feedback = mongoose.model("feedback", feedbackSchema);
