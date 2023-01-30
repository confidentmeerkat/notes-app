import { NoteFormFields } from "@/components/NoteForm";
import { INote } from "@/types";
import Axios from "axios";
import { handleAPIError } from "../utils/handleAPIError";

export const getNotes = async (q: string) => {
  try {
    const response = await Axios.get<INote[]>("/api/notes", { params: { q } });

    return response.data;
  } catch (error) {
    throw new Error(handleAPIError(error).message);
  }
};

export const createNote = async (note: NoteFormFields) => {
  try {
    const response = await Axios.post<INote>("/api/notes", note);

    return response.data;
  } catch (error) {
    throw new Error(handleAPIError(error).message);
  }
};

export const getNote = async (id: string) => {
  try {
    const response = await Axios.get<INote>(`/api/notes/${id}`);

    return response.data;
  } catch (error) {
    throw new Error(handleAPIError(error).message);
  }
};

export const updateNote = async ({ id, ...data }: NoteFormFields & { id: string }) => {
  try {
    const response = await Axios.put<INote>(`/api/notes/${id}`, data);

    return response.data;
  } catch (error) {
    throw new Error(handleAPIError(error).message);
  }
};

export const deleteNote = async (id: string) => {
  try {
    const response = await Axios.delete(`/api/notes/${id}`);

    return response.data;
  } catch (error) {
    throw new Error(handleAPIError(error).message);
  }
};
