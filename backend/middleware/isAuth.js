import jwt from "jsonwebtoken"
const isAuth= async (req,res,next)=>{
    try{
     let {token}=req.cookies
     if(!token){
       return  res.status(401).json({message:"no user is login"})
     }

     let verifyToken= jwt.verify(token,process.env.JWT_SECRET)
     if(!verifyToken){
       return res.status(400).json({message:"the token is invalid"})
     }
     req.userId=verifyToken.userId

     next()

    }
    catch(error){
        res.status(500).json({message:`isAuth error ${error}`})
    }

}
 export default isAuth;

