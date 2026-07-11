import mongoose, { Mongoose } from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{
     type:String,
     required:true
    },
    email:{
       type:String,
     required:true  
    },
    password:{
        type:String,
        password:true
    },
    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing"
    },
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"booking"
    }
},{timestamps:true})


export const User=mongoose.model("User",userSchema)

