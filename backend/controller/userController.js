import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'

// description Auth user/set Token
//route Post /api/users/auth
//access Public
const authUser = asyncHandler(async (req, res) =>{

  res.status(200).json({message: 'Auth User'});
});


// description Register new user
//route Post /api/users
//access Public
const registerUser = asyncHandler(async (req, res) =>{
  const { name, email, password, phoneNumber } = req.body;
  const userExist = await User.findOne({email})
  if( userExist){
    res.status(400);
    throw new Error('User already exist');
  }
  const user = await User.create({
    name,
    email,
    password,
    phoneNumber
  })
  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data')
  };

});

// description Logout user
//route Post /api/users/logout
//access Public
const logoutUser = asyncHandler(async (req, res) =>{

  res.status(200).json({message: 'Log out User'});
});

// description Get user profile
//route Get /api/users/profile
//access Private
const getUserProfile = asyncHandler(async (req, res) =>{

  res.status(200).json({message: 'User profile'});
});

// description Update user profile
//route Put /api/users/profile
//access Private
const updateUserProfile = asyncHandler(async (req, res) =>{

  res.status(200).json({message: 'Update User Profile'});
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
}