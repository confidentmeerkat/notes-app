import { NextApiRequest, NextApiResponse } from "next";

import Note from "@/lib/server/models/Note";
import { INote } from "@/types";

export async function getNotes() {
  return await Note.find();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const noteData = <INote>req.body;

    try {
      const newNote = await Note.create(noteData);
      res.status(200).json(newNote);
    } catch (error) {
      res.status(500);
    }
  } else if (req.method === "GET") {
    console.log("getting notes");

    try {
      const notes = await getNotes();

      res.status(200).json(notes);
    } catch {
      res.status(500);
    }
  } else {
    res.status(405);
    res.end();
  }
}
