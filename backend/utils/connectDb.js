import mongoose from "mongoose";
<<<<<<< HEAD
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => mongoose.connect(process.env.MONGODB_URI).then(()=>{
=======

const connectDB = async () => mongoose.connect("mongodb://127.0.0.1:27017/VetBuddy").then(()=>{
>>>>>>> upstream/main
  console.log("DataBse Connected successfull")
}).catch((err)=>{
  console.log("something error ",err)
});

export default connectDB;