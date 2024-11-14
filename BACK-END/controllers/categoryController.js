const Category = require('../models/categoryModel');

const addCategory = async (req, res)=>{
  try {
    const {title} = req.body;
    const category = await Category.create({title});
    if(!category)return res.status(400)
      .json({
    success:false,
  message:"please provide category title"
})
return res.status(200).json({
  success:true,
  message:"Category added successfully",
  data:category
})
  } catch (error) {
    return res
    .status(500)
    .json({
      success:false,
      error:error.message
    });
  }
}


module.exports = {addCategory}