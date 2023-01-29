import { INote } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNote, getNote, getNotes, updateNote } from "../apis";

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

export function useNote(id: string) {
  return useQuery(["note", { id }], () => getNote(id));
}

export function useUpdateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNote,
    onSuccess(data, { id }) {
      queryClient.setQueryData<INote>(["note", { id }], () => {
        return data;
      });

      queryClient.invalidateQueries(["notes"]);
    },
  });
}
