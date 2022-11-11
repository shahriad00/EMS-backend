const User = require('../models/user');
const bcrypt = require('bcrypt');
const AppError = require('../utils/appError');
const catchAsync =  require('../utils/catchAsync');
const getToken = require('../helpers/token');


// register new user
const addUser = catchAsync(async (req, res, next) => {

  const { name, email, password, isAdmin } = req.body;

  let doesEmailExist = await User.findOne({email})
  
  if(doesEmailExist){
    return next(new AppError('The email is already in use', 400));
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  await User.create({
    name, 
    email, 
    password : hashedPassword,
    isAdmin
  })
  const user = await User.findOne({email})

  createSendToken(user,200,res);
})

//token created
const createSendToken = async(user, statusCode, res) => {
  const token = await getToken.generateAccessToken(user._id,user.name, statusCode)
  const timeLimit = 31536000000; // one year

  const cookieOptions = {
      expires: new Date(Date.now() + timeLimit),
      httpOnly: true,
  };

  res.cookie('token',token,cookieOptions)

  user.password = undefined; // hiding the password

  res.status(statusCode).json({
      message: 'registration successful',
      user,
      token,
      statusCode: 200,
  });
}



module.exports={
    addUser
}