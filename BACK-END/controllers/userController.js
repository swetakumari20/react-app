const User = require('../models/userModel');

const userList = async(req, res)=>{
  try {
   const page = parseInt(req.query.page) || 1;
   const limit = 10;
   const totalUsers = await User.countDocuments();
   const totalPages = Math.ceil(totalUsers / limit);
   const nextPage = page < totalPages ? page + 1: null;
   const user = await User.find().skip((page - 1) * limit).limit(limit);
   return res.status(200).json({
    success:true,
    message:"User fetch successfully...",
    data:user,
    page,
    nextPage,
    totalPages,
    totalUsers        
   }) 
  } catch (error) {
    return res.status(500).json({
      success:false,
      error:error.message,
    });
  }
}



module.exports = {userList}