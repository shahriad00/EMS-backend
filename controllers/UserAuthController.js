const User = require('../models/user');
const bcrypt = require('bcrypt');
const AppError = require('../utils/appError');
const catchAsync =  require('../utils/catchAsync');
const getToken = require('../helpers/token');

const login = catchAsync( async(req, res, next) => {
    const {email, password, role} = req.body;

    if(!email || !password){
        return next( new AppError('Enter email and password',400))
    }
    const user = await User.findOne({email})
    console.log(user.role,'- this is a test')
    if(!user){
        return next( new AppError('Email or password does not match',400))
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        return next( new AppError('Email or password does not match',400))
    }
    if(user.role !== role){
        return next( new AppError('your role does not match',400))
    }
    createSendToken(user,200,res);
})

const logOut = (req, res)=>{
    res.status(202).clearCookie('token').send({
        status: 202,
        message: 'successfully logged out!'
    })
}

const createSendToken = async(user, statusCode, res) => {
    const token = await getToken.generateAccessToken(user._id,user.name, statusCode)
    const timeLimit = 31536000000; // one year

    const cookieOptions = {
        expires: new Date(Date.now() + timeLimit),
        httpOnly: true,
    };

    res.cookie('token',token,cookieOptions)

    user.password = undefined; // hiding the password

    user.isVerified = true;

    user.emailToken = undefined;

    res.status(statusCode).json({
        message: 'login successful !',
        user,
        token,
        statusCode: 200,
    });
}

module.exports = {
    login,
    logOut
}