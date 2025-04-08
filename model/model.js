const mongoose=require('mongoose');


const ImageSchema=new mongoose.Schema({
    url:{type:String,required:true},
    urlId:{type:String},
});



const Image=mongoose.model('Image',ImageSchema);
module.exports=Image;