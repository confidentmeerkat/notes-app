import { INote } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { createNote, deleteNote, getNote, getNotes, updateNote } from "../apis";

export default function useNotes(q: string) {
  return useQuery(["notes", { q }], () => getNotes(q));
}

export function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onSuccess() {
      queryClient.invalidateQueries(["notes"]);
    },
  });
}

export function useNote(id: string) {
  return useQuery(["note", { id }], () => getNote(id), { enabled: !!id });
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

export function useDeleteNote() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess(_, id) {
      queryClient.invalidateQueries(["notes"]);
      queryClient.removeQueries(["note", { id }]);
      router.push("/");
    },
  });
}
