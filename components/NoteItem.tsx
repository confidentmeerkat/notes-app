import type { INote } from "@/types";

import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import classNames from "classnames";

dayjs.extend(calendar);

export default function NoteItem({ item, selected }: { item: INote; selected?: boolean }) {
  return (
    <div
      className={classNames("w-full flex flex-row items-center px-4 py-6 my-1 rounded-lg", {
        "bg-white shadow-md": selected,
      })}
    >
      <div className="flex grow flex-col items-start pl-4">
        <caption className="text-xl text-purple-800 font-semibold">{item.title}</caption>

        <p className="text-sm text-purple-400 mt-3">{dayjs(item.created_at).calendar()}</p>
      </div>

      <div className="flex">
        <button>Delete</button>
      </div>
    </div>
  );
}
