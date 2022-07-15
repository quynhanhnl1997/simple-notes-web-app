import mongoose from "mongoose"
import { INote } from "../interfaces/note.interface";

const noteSchema = new mongoose.Schema<INote>({
  content: {
    type: String,
    required: true,
    minlength: 5
  },
  date: Date,
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Note =  mongoose.model<INote>('Note', noteSchema);

export default Note;