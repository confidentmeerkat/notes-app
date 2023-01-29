import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../apis";

export default function useNotes() {
  return useQuery(["notes"], getNotes);
}
