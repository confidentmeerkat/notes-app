import useNotes from "@/lib/hooks/useNotes";
import { useMemo } from "react";
import NoteItem from "./NoteItem";

export default function NoteList() {
  const { data: notes } = useNotes();

  const noteList = useMemo(() => {
    return notes?.map((item) => <NoteItem item={item} key={item.id as string} />);
  }, [notes]);

  return <div>{noteList}</div>;
}
