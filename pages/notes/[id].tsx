import NoteForm from "@/components/NoteForm";
import { useNote, useUpdateNote } from "@/lib/hooks/useNotes";
import { useRouter } from "next/router";

export default function Note() {
  const router = useRouter();

  console.log(router.query.id);

  const { data: note, isFetched } = useNote(router.query.id as string);
  const { mutate: updateNote } = useUpdateNote();

  return (
    <div className="flex flex-1 py-4 pr-4 h-full">
      {isFetched && note && (
        <NoteForm onSubmit={(data) => updateNote({ id: router.query.id as string, ...data })} initialValues={note} />
      )}
    </div>
  );
}
