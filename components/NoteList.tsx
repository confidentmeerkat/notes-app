import useNotes from "@/lib/hooks/useNotes";
import { useRouter } from "next/router";
import { useMemo } from "react";
import NoteItem from "./NoteItem";

export default function NoteList() {
  const router = useRouter();

  const { data: notes } = useNotes(router.query.q as string);

  const noteList = useMemo(() => {
    return notes?.map((item) => <NoteItem item={item} key={item.id as string} />);
  }, [notes]);

  return <div>{noteList}</div>;
}
