import { INote } from "@/types";
import Axios from "axios";
import { handleAPIError } from "../utils/handleAPIError";

export const getNotes = async () => {
  try {
    const response = await Axios.get<INote[]>("/api/notes");

    return response.data;
  } catch (error) {
    throw new Error(handleAPIError(error).message);
  }
};
