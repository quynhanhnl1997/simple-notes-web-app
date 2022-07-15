import mongoose from "mongoose";

export interface INote extends mongoose.Document {
  content?: string;
  date?: Date;
  important?: Boolean;
  user?: mongoose.Schema.Types.ObjectId;
}