import { PropsWithChildren } from "react";
import NoteList from "./NoteList";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen bg-slate-100 flex flex-row">
      <div className="w-1/3 flex flex-col">
        <button className="bg-purple-900 rounded-lg py-3 text-2xl m-4 text-white">Add New Note</button>

        <NoteList />
      </div>
      <div className="grow h-full py-4 pr-4">{children}</div>
    </div>
  );
}
