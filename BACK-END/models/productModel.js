const { required, string, number } = require('joi');
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
  },
  discountPercentage:{
    type:Number,
    required:true,
  },
  stock:{
    type:Number,
    required:true,
  },
  brand:{
    type:String,
    required:true,
  },
  category_id:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  rating:{
    type:Number,
    required:true,
  },
 images:[String],

 sub_images:[String]
},
{
  timestamps:true
}
);

const Product = mongoose.model("Produsct", productSchema);
module.exports = Product

