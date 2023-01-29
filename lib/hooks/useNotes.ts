import { INote } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNote, getNotes } from "../apis";

export default function useNotes() {
  return useQuery(["notes"], getNotes);
}

export function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onSuccess(data) {
      queryClient.setQueryData<INote[]>(["notes"], (notes) => {
        return [...(notes || []), data];
      });
    },
  });
}
