import { useRouter } from "next/router";
import { FormEvent, useCallback, useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [q, setQ] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      router.push({ pathname: router.pathname, query: { ...router.query, q } });
    },
    [q]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="rounded-full text-md outline-none py-2 pl-6 w-1/4"
      />

      <button type="submit" hidden />
    </form>
  );
}
