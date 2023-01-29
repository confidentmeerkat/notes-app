import mongoose from "../mongoose";

import type { INote } from "types";

const noteSchema = new mongoose.Schema<INote>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [String],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Note = mongoose.models.Note || mongoose.model<INote>("Note", noteSchema);

export default Note;
