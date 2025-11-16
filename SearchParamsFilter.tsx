"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchParamsFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Updates URL With Query
  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log("params", params);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key); 
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div>
        <h2>size : {searchParams.get("size")}</h2>
        <h2>color : {searchParams.get("color")}</h2>
      </div>

      <select
        value={searchParams.get("size") ?? ""}
        onChange={(e) => updateParam("size", e.target.value)}
      >
        <option value="">All Sizes</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>

      <select
        value={searchParams.get("color") ?? ""}
        onChange={(e) => updateParam("color", e.target.value)}
      >
        <option value="">All Colors</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
