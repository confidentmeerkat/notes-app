import NoteForm from "@/components/NoteForm";
import { useCreateNote } from "@/lib/hooks/useNotes";

export default function CreateNote() {
  const { mutate: createNote } = useCreateNote();

  return (
    <div className="flex flex-1 py-4 pr-4 h-full">
      <NoteForm onSubmit={createNote} initialValues={{}} />
    </div>
  );
}
