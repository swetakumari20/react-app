const express = require('express');
const { userList } = require('../controllers/userController');
const router = express.Router();

//routes
router.get("/list", userList);



module.exports = router;