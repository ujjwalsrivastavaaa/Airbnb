import genToken from "../config/token.js";
import {User} from "../model/user.model.js";
import bcrypt from  "bcryptjs"
export const signup=async(req,res)=>{
   try{
    const{name,email,password}=req.body;

    const existuser=await User.findOne({email})

    if(existuser){
        return res.status(400).json({message:"user already exist"})
    }

    const hashPassword=await bcrypt.hash(password,10)
  let user=await User.create({name,email,password:hashPassword})

  let token=await genToken(user._id);
   res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.Node_ENVIRONMENT="production",
    sameSite:"strict",
    maxAge:7*24*60*60*1000
   })
  return res.status(201).json(user)
}
   catch(error){
  return res.status(500).json({message:`signup error ${error}`})
   }
}

export const login=async (req,res)=>{
    try{
    const{email,password}=req.body;
    const user=await User.findOne({email});
    if(!await User.findOne({email})){
       return res.status(401).json({message:"user doesn't exist"})
    }
    const isMatch=await bcrypt.compare(password,user.password)

    if(!isMatch){
        return res.status(401).json({message:"incorrect password"})
    }
  
let token=await genToken(user._id);
   res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.Node_ENVIRONMENT="production",
    sameSite:"strict",
    maxAge:7*24*60*60*1000
   })
}
catch(error){
   return res.status(500).json({messge:`login error ${error}`})
}
    
}