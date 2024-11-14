const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')

dotenv.config({path:"config/config.env"});
dbConnection();


//import routes
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const categoryRouter = require('./routes/categoryRoute');
const userRouter = require('./routes/userRoute');


const app = express();

//uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use("/uploads",express.static( path.join(__dirname, '/uploads')));

//routes
app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT, ()=>{
  console.log("Server is running at port", process.env.PORT);
})



