import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  username: string;
  name?: string;
  passwordHash: string;
  notes?: mongoose.Schema.Types.ObjectId[];
}