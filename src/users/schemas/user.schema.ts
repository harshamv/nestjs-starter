import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
