const express=require("express");
const app=express();
const port=5001;
const mongoose=require("mongoose")
const router=require("./routes/user-routes")

//middleware
app.use(express.json())
app.use("/api",router);

//connection to DB
mongoose.connect("mongodb+srv://uttej528:uttej528@cluster0.qk0vfet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{
        console.log("connected to database");
    }
)
//listening to port
app.listen(port,()=>{
    console.log("server is running")
})