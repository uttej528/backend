const User=require("../model/user");
exports.signup=async(req,res)=>{

    try {
        const {name,email,password}=req.body
        let existingUser;
        try {
            existingUser=await User.findOne({email})
        } catch (error) {
            console.log(error.message)
        }
        if(existingUser){
        return res.status(400).json({message:"user already exists"})
        }
    //creating a new user
    const user=new User({
        name,
        email,
        password
})
await user.save();
return res.status(201).json({message:user})
    } catch (error) {
        console.log(error.message)
    }



};

