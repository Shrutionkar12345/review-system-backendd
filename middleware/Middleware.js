import userModel from "../models/User.js";
import user from "../models/User.js"
export const isAdmin=async(req,res,next)=>{
try {
   const{email} =req.body;
   const userInfo=await userModel.findOne({email});
    if(userInfo && userInfo.role=="Admin"){
        next();
    }
  else{
    res.status(403).json({
        Message:"Access denied only admin can access through it"
    })
  }
} catch (error) {
    res.status(500).json({
        Message:"internet server error"
    })
}
}