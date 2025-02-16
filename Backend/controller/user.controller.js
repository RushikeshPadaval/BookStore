// import User from "../model/user.model.js";
// import bcryptjs from "bcryptjs"

// export const signup= async (req,res)=>{

//     try{
//         const {fullname,email,password}=req.body;
//         const user= await User.findOne({email})

//         if (user){
//             return res.status(400).json({message:"User already exits"})

//         }
//         const hashPassword = await bcryptjs.hash(password,10)
//         const createdUser=new User({
//             fullname: fullname,
//             email: email, 
//             password: hashPassword,
//         })
//         await createdUser.save()
//         res.status(201).json({message:"User Created Successfully"})


//     }catch(error){
//         console.log("Error: "+error.message);
//         res.status(500).json({message:"Internal server error"})
        

//     }
// };

// export const login=async(req,res)=>{
//     try{
//         const {email,password}=req.body;
//         const user = await User.findOne({email});
//         const isMatch = bcryptjs.compare(password,user.password)

//         if(!user || !isMatch){
//             return res.status(400).json({message:"Invalid username or password"});
            
//         }
//         else {
//             res.status(200).json({message:"Login successful",user:{
//                 _id:user._id,
//                 fullname:user.fullname,
//                 email:user.email
//         }});
    

//         } catch(error){
//             console.log("Error: "+error.message);
//             res.status(500).json({message:"Internal server error"})
            

//         }
//     }
// }

import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    // Save the created user to the database
    await createdUser.save();

    res.status(201).json({ message: "User Created Successfully",user:{
        _id: createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email,

    }

     });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if user exists and if the password matches
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Respond with user details after successful login
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

