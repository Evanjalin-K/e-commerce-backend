const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../utils/config");

const userController = {
//getdata: (req, res) => {
    //res.send ('Hello Jo... You are bold enough to handle all the situations!!')
//}
register: async (req, res) => {
    try {
    //get the user inputs from the user body

    const {name, email, password } = req.body;

    //check if the user already exist in the database

    const user = await User.findOne({email})

    // if the user already exists, return an error

    if(user){
        return res.send({message: 'User already exists'});
    }  
    //Hash the password
    const hashPassword = await bcrypt.hash(password, 10)

    //Create a new user

    const newUser = new User({name, email, password: hashPassword});

    //Save user to the database

    const savedUser = await newUser.save();

    // return the saved user

    res.send({ message: 'User created successfully', user: savedUser})

    } catch(error){

        res.send({message: error.message})

    }
},
login: async(req, res) => {
    try{
    // get the user input from the request body
    const {email, password} = req.body;

    //Check the user is already exists

    const user = await User.findOne({ email });

    // if the user does not exist

    if(!user){
        return res.send({message:'User does not exist'})
    }

    //Check if the password is correct
     const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // if password incorrect, return an error

    if (!isPasswordCorrect) {
        return res.send({message: 'Invalid Credentials'});
    }

    //Create a token

    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    //set a cookie with the token

    res.cookie('token', token, {
        httpOnly:true,
        sameSite:'none',
        secure:true,
        expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) //24 hrs from now
    });

    //return the user
    res.send({message:'Login Successful'})

}catch(error){
        res.send({message: message.error})
    }
},

logout: async(req,res) => {
    try
    {
       // id usernot logged in, get the user id from the request body

       const userId = req.userId;

       // if userId not found, return an error

        if(!userId) {
            return res.send({ message: 'User not logged in' });
        }
        
        //clear the cookies
        res.clearCookie('token');

        //return the user
        res.send({message: 'Logout Successfully'})
        }
    catch(error){
    res.send({ message:error.message })
    }
},
//get the user profile
getProfile: async(req, res) => {
    try{
     // get the user id from the request

     const userId = req.userId;

     //find the user by id

     const userProfile = await User.findById(userId)

     //if user doesn't exist, return the error

     if(!userProfile){
        return res.send({message:'User does not exist'})
     }
    // return the user profile
    res.send({message: 'User Profile', user: userProfile})
    }
    catch(error) {
        res.send({ message: error.message })

    }
},
updateProfile: async(req, res) => {
    try {
     // get the user id from the request object

     const userId = req.userId;

     // get the user input from the request body

     const { name, email } = req.body;
    
     //find the user by id

     const user = await User.findById(userId);

     //if the user doesn't exist, return an errror
     if(!user){
        return res.send({ message: 'User does not exist'})
     }

     //if user update the profile

     user.name = name || user.name;
     user.email = email || user.email;

     //Save the user to the database
     const updatedUser = await user.save();

     //return the updated user profile

     res.send({ message: 'User profile updated successfully', user: updatedUser })


    }
    catch(error) {
        res.send({ message: error.message })
    }
},
deleteProfile: async(req, res) => {
    try {

        //get the user id from the request object

        const userId = req.userId;

        // find the userId and delete 

        const deleteUser = await User.findByIdAndDelete(userId);

        //If not the user, return an error

        if(!deleteUser){
            return res.send({ messsage: ' User does not exist' })
        }

        // return the deleted user

        res.send({ message: 'User deleted successfully', user:deleteUser})

    }
    catch(error){
        res.send({ message: error.message })
    }
}
}

module.exports = userController;

 //throw new error('This is an error');
