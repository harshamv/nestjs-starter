// NPM Packages
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, 'Please enter First Name'],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'Please enter Last Name'],
    },
    email: {
      type: String,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid Email Address.',
      ],
      required: [true, 'Please enter Email Address'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter password'],
      minlength: [6, 'Password must be at least 6 characters'],
      // select: false,
    },
    passwordSalt: {
      type: String,
      // select: false,
    },
  },
  { timestamps: true },
);

// Generate Salt & Encrypt User Password
UserSchema.pre('save', async function(next) {
  const salt = (this.passwordSalt = await bcrypt.genSalt(10));
  this.password = await bcrypt.hash(this.password, salt);
});
