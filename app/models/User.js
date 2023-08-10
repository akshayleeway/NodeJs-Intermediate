// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  userType: { type: String , default: 'User' },
});

module.exports = mongoose.model('User', userSchema);
