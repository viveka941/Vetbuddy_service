import mongoose from "mongoose";

const connectDB = async () => mongoose.connect("mongodb://127.0.0.1:27017/VetBuddy").then(()=>{
  console.log("DataBse Connected successfull")
}).catch((err)=>{
  console.log("something error ",err)
});

export default connectDB;