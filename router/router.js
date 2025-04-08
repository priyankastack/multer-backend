const express=require('express');
const router=express.Router();
const upload=require('../middleware/multer');
const {PostImage,getImages}=require('../controller/controller');


router.route('/post').post(upload.single('image'),PostImage);
router.route('/getImages').get(getImages);





module.exports=router;