const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false, 
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;