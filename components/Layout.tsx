import { PropsWithChildren } from "react";
import Link from "next/link";
import NoteList from "./NoteList";
import SearchBar from "./Searchbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen bg-slate-100 flex flex-col">
      <div className="w-full bg-purple-700 p-5">
        <SearchBar />
      </div>

      <div className="w-full flex flex-row grow">
        <div className="w-1/3 flex flex-col">
          <div className="p-4">
            <Link href="/notes/create">
              <button className="bg-purple-900 rounded-lg py-3 text-2xl p-4 text-white flex w-full justify-center">
                Add New Note
              </button>
            </Link>
          </div>

          <NoteList />
        </div>
        <div className="grow h-full">{children}</div>
      </div>
    </div>
  );
}
