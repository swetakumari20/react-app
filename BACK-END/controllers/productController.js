const Product = require('../models/productModel');
const addProduct = async (req, res)=>{
  try {
    const product_data =  {
      title:req.body.title,
      price:req.body.price,
      discountPercentage:req.body.discountPercentage,
       stock:req.body.stock,
        brand:req.body.brand,
         category_id:req.body.category_id,
          description:req.body.description,
           rating:req.body.rating,
           images:req.file.path,
    } 
  const product = await Product.create(product_data)
  return res.status(200).json({success:true, message:"Producted created successfully", data:product});

  } catch (error) {
    return res.status(500).json({
      success:false,
      error:error.message
    });
  }
}

//add property sub images 

const addProductSubImages = async (req, res) => {
  try {
      console.log("req.files", req.files);
      const imagePaths = req.files.sub_images.map((image) => image.path);
      const product_id = req.params.id;
      await Product.findByIdAndUpdate(product_id, {sub_images:imagePaths});
      return res.status(200).json({ message: "Image uploaded successfully" })
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}

//get All products
const getAllProducts = async(req, res)=>{
  try {
    const product = await Product.find();
    if(product)return res.status(200).json({
      success:true,
      message:"products fetch successfully",
      data:product
    })
    return res.status(400).json({
      success:false,
      message:"product does not exist"
    })
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      error:error.message
    });
  }
}

//get products details 

const getProductDetails = async(req, res)=>{
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if(!product) return res.status(400).json({
      success:false,
      message:"Product does not exist"
    });
    return res.status(200).json({
      success:true,
      message:"Product fetch successfully",
      data:product
    })
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      error:error.message
    });
  }
}
const updateProduct = async (req, res)=>{
  try {
    const productId = req.params.id;
    const updateData = req.body;
    const updateProduct = await Product.findByIdAndUpdate({_id:productId}, updateData);
    if(!updateProduct)return res.status(400).json({
      success:false,
      message:"Product is not found!"
    });
    return res.status(200).json({
      success:true,
      message:"Product updated successfully"
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      error:error.message
    });
  }
}

module.exports = {addProduct, getAllProducts, getProductDetails, addProductSubImages, updateProduct}