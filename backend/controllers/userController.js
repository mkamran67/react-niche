const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');
const generateToken = require('../utils/generateToken.js');

// @description - Authenticate  the user & get token.
// @route       - POST /api/user/login
// @access      - Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Checking by email
  const user = await User.findOne({ email });

  // Confirm if user was found and if the passwords match
  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error(`Invalid Credentials.`);
  }
});

// @description - Register a new user & return a token
// @route       - POST /api/user/register
// @access      - Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(`User already exists`);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  // if no user found save new user and return;
  if (user) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error(`Invalid user Credentials`);
  }
});

module.exports = {
  authUser,
  registerUser,
};
