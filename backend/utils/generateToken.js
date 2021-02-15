const jwt = require('jsonwebtoken');

// expresIn determines longevity of the token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '14d',
  });
};

module.exports = generateToken;
