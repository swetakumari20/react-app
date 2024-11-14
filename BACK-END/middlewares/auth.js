const jwt = require('jsonwebtoken');
// const JWT_SERCET_KEY = process.env.JWT_SERCET_KEY;

// verify token............................ 

const verifyToken = (req, res, next) => {
   const token =
    req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
     req.user = decoded;
     console.log("user decoded token", req.user)
    console.log("decoded",decoded);
    return next();
};
module.exports = verifyToken