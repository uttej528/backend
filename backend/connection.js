const mongoose=require("mongoose");
const MONGO_URI="mongodb+srv://uthumbal:uttej528@cluster0.tomryrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB=async()=>{
    await mongoose.connect(MONGO_URI);
    console.log("connected to database🔥")
};
module.exports=connectDB;