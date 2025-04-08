const mongoose=require('mongoose');


const connectdb=async(req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://priyankastack:zMzmE8YbTIy6VlH5@nk.v49wg.mongodb.net/?retryWrites=true&w=majority&appName=nk");
        console.log("database successfully connected.")

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}



module.exports=connectdb;