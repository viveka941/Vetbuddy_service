import { Contact } from "../model/contact.model.js"

export const contactMsg = async(req,res)=>{
  try {
    const {name,email,phone,message} = req.body
    if(!name||!email||!phone||!message){
      return res.status(403).json({
         message:"missing requried fields",
         success:false

      })

    }
    const newContact = await Contact.create({
      name,email,phone,message
    })

    return res.status(200).json({
      message:"Successfull message sending ",
      success: true,
      contact: newContact
    })
  } catch (error) {
    console.log("somthing error in contact pages ",error)
  }
}