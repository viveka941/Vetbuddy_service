import { User } from "../model/user.model.js";

export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      role,
      education,
      specialization,
      experience,
    } = req.body;

    // Validate required fields
    if (!name || !email ||!password|| !phone || !role ) {
      return res.status(400).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(203).json({
        message: "User already exists",
        success: false,
      });
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password,
      phone,
      role,
      education,
      specialization,
      experience,
    });

    return res.status(200).json({
      message: "User successfully registered",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email,password , role} = req.body; // use req.body for POST requests

    // Check for missing fields
    if (!email || !password ||!role) {
      return res.status(400).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    // Look for user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }

    // Optional: match phone number too if required
    if (user.password !== password ) {
      return res.status(401).json({
        message: "Invalid password ",
        success: false,
      });
    }if(user.role !== role){
       return res.status(401).json({
         message: "Invalid phone Role",
         success: false,
       });
    }

    return res.status(200).json({
      message: "Login successful",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};


export const getUser = async (req, res) => {
  try {
    const { id } = req.params; // You could also use req.params if you're passing it in the URL
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Successful user login",
      success: true,
      user: user,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};


export const getAllUser = async(req,res)=>{
  try {
    const allUser = await User.find({})
      return res.status(200).json({
        message:"all user fetch",
        success: true,
        user: allUser
      })
  } catch (error) {
     console.error("Login error:", error);
     return res.status(500).json({
       message: "Internal server error",
       success: false,
     });
  }
}
