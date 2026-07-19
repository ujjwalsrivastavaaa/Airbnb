import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'



    
    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });


    const uploadOnCloudinary= async (localFilePath)=>{
    try{
       if(!localFilePath){
        return null;
       }
     const response = await cloudinary.uploader.upload(localFilePath,{resource_type:auto});
     console.log("file uploaded successfully")

     fs.unlinkSync(localFilePath);

     return response;
  
    }

    catch(error){
      fs.unlinkSync(localFilePath);//remove the file from the server if there is an error while uploading on cloudinary
             console.error('Error uploading to Cloudinary:', error);
             return null;
    }

};

export default uploadOnCloudinary

