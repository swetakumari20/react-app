const express = require('express');
const { signUp, logIn } = require('../controllers/authController');
const { handleJoiValidation } = require('../helpers/validation');


const router = express.Router();



//routes
router.post("/register",handleJoiValidation, signUp);
router.post("/login", logIn);



module.exports = router;