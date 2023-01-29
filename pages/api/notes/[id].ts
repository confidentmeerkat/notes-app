import Note from "@/lib/server/models/Note";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;
  if (req.method === "GET") {
    const note = await Note.findById(id);

    res.status(200).json(note);
  } else if (req.method === "PUT") {
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(updatedNote);
  }
}
