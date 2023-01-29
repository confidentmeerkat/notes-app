import { Types } from "mongoose";

export interface INote {
  id?: string | Types.ObjectId;
  title: string;
  content: string;
  tags: string[];
}
