import { useMemo, useState } from "react";

type TagInputProps = {
  onChange: (tags: string[]) => void;
  value: string[];
};

export default function TagInput({ value: tags = [], onChange }: TagInputProps) {
  const [tag, setTag] = useState<string>("");

  const tagList = useMemo(() => {
    return tags.map((tag, index) => (
      <div
        className="p-1 bg-purple-600 mx-1 rounded-sm text-white text-xs"
        onClick={() => onChange(tags.filter((_, idx) => idx !== index))}
        key={index}
      >
        {tag}
      </div>
    ));
  }, [tags]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-row">{tagList}</div>

      <input
        className="outline-none"
        value={tag}
        placeholder="Enter tag here"
        onChange={(e) => {
          setTag(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            onChange([...tags, tag]);
            setTag("");
          }
        }}
      />
    </div>
  );
}
