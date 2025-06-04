import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    unique: true,
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    enum: ['Admin', 'User'],
    default: 'User',
    type: String,
  },



}, { timestamps: true });


export const User = mongoose.models.User || mongoose.model('User', userSchema);
