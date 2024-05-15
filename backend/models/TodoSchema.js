const mongoose=require("mongoose");

const todoSchema=mongoose.Schema({
    task:String,
    location:String,
    id:Number,
},
{timestamps:true}
)

const TodoSchema=mongoose.model("todo",todoSchema)
module.exports=TodoSchema;