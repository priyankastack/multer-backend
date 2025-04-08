const Image=require('../model/model');
const cloudinary=require('../config/cloudinary');
const fs = require('fs');


const PostImage=async(req,res)=>{
 
try {
  
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      // Save URL to MongoDB
    const file = await Image.create({ url: result.secure_url });

       // Delete local file
       fs.unlinkSync(req.file.path);

       
    return res.status(200).json({
        message: "File uploaded successfully!",              
        success: true,
        data: file,
      });
    
} catch (error) {
  return  res.status(500).json({
        message:error.message,
        success:false
    });
}
}


const getImages=async(req,res)=>{
    try {
        const response=await Image.find();
        if(response.length===0){
            return res.status(404).json({
                message:"Data not found.",
                success:false,
            });
        }else{
            return res.status(200).json({
                message:"Data fetched successfully!",
                success:true,
                data:response
            });
        }
    } catch (error) {
     res.status(500).json({
            message:error.message,
            success:false
        });
        console.log(error.message);
    }
}

module.exports={PostImage,getImages};