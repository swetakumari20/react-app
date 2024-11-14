const { securePassword, createToken } = require("../helpers/helpers");
const User = require("../models/userModel");
const bcrypt = require('bcrypt');

// Sign-up API
const signUp = async (req, res) => {
  try {
    const {firstName, lastName, email, phone, password, confirmPassword } = req.body;
 
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    // Hash the password
    const hashedPassword = await securePassword(password);
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });
    // Save user to the database
    const savedUser = await newUser.save();
    // Remove sensitive data before sending response
    const { password: _, ...userWithoutSensitiveData } = savedUser.toObject();
    return res.status(200).json({
      success: true,
      message: "Registered Success",
      data: savedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const logIn = async (req, res)=>{
  try {
    const {email, password} = req.body;
     const user = await User.findOne({email});
     if(!user)return res.status(400).json({
      success:false,
      message:"User does not exist!"
     });

    const isCorrPassword = await bcrypt.compare(password, user.password);
    if(!isCorrPassword)return res.status(400).json({success:false, message:"Invalid details, please enter correct details"});
    const token = await createToken(user._id);
    if(!token)return res.status(400).json({success:false, message:"Invalid details, please enter correct details"});
    return res.status(200).json({
      success:true,
      message:"Login Success",
      token:token
    })

  } catch (error) {
    return res.status(500).json({
      success:false,
      error:error.message
    })
  }
}

module.exports = { signUp, logIn };
