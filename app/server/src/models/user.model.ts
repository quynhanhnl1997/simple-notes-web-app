import mongoose from "mongoose"
import { IUser } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>({
  username: String,
  name: String,
  passwordHash: String,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note'
    }
  ],
})

const User = mongoose.model<IUser>('User', userSchema);

export default User;