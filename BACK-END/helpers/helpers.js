const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');


const securePassword = async(password)=>{
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
  } catch (error) {
    console.log(error.message)
  }
}

//generate token
const createToken = async(id)=>{
  try {
    let token = JWT.sign({ _id: id }, process.env.JWT_SECRET_KEY);
    return token;
  } catch (error) {
    console.log(error.message);
  }
}


module.exports = { securePassword, createToken}