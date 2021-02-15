const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

/* Cannot use Arrow functions in Mongoose */

// Comparing passwords with bcrypt
userSchema.methods.matchPassword = async function (inputPassword) {
  return await bcryptjs.compare(inputPassword, this.password);
};

// Middleware
// -> Runs before save is called.
userSchema.pre('save', async function (next) {
  // Check if password is being modified
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

const User = mongoose.mongo.model('User', userSchema);

module.exports = User;
