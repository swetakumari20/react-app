const express = require('express');
const { addProduct, getAllProducts, getProductDetails, addProductSubImages } = require('../controllers/productController');
const upload = require('../helpers/image');
const router = express.Router();


//routes
router.post("/add-product",upload.single("images"), addProduct);
router.get("/get-products", getAllProducts);
router.get("/product-details/:id", getProductDetails);
router.post("/add-sub-images/:id",upload.fields([{ name: "sub_images", maxCount: 5 }]),addProductSubImages)


module.exports = router;