import mongoose from "mongoose";

// Define the schema
const appointmentSchema = new mongoose.Schema(
  {
    animalName: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    DoctorName: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
