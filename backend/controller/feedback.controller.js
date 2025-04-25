import { feedback } from "../model/feedback.model.js";

export const feedbackFrom = async (req, res) => {
  try {
    const { name, message, rating } = req.body;
    if (!name || !message || !rating) {
      return res.status(403).json({
        message: "requried filds missing",
        success: false,
      });
    }

    const existingName = await feedback.findOne({name})
    if(existingName){
      return res.status(200).json({
        message:"user already exist",
        success : false
      })
    }

    const newFeed = feedback.create({
      name,message,rating
    })
    return res.status(200).json({
      message:"successfull posted feedback",
      success: true,
      newFeed
    })
  } catch (error) {
    console.log("something error ",error)
  }
};


export const allFeedback = async (req, res) => {
  try {
    const allDeta = await feedback.find({});

    if (allDeta.length === 0) {
      return res.status(404).json({
        message: "No feedback data found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "All feedback data fetched successfully",
      success: true,
      data: allDeta,
    });
  } catch (error) {
    console.log("Something went wrong: ", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
