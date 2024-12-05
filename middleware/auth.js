const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require("../utils/config")

const auth = {
    verifyToken: async( req, res, next ) => {
        try {
        // get the token form the request cookies

        const token = req.cookies.token
        //if the token doesn't exist, return an error
        if(!token){
            return res.send({ message: 'Token not found'})
        }
        //verify token

        try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
        }
        catch(error){

        }
        }
        catch(error){
        res.send({message: 'Invalid Token'})
        }
    }
}

module.exports = auth;
