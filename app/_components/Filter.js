"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex border border-primary-800">
      <Button
        className="text-wrap"
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All Cabins
      </Button>

      <Button
        filter="small"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1&mdash;3
      </Button>

      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4&mdash;7
      </Button>

      <Button
        filter="large"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8&mdash;12
      </Button>
    </div>
  );
}
function Button({ children, filter, handleFilter, activeFilter, className }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`${
        filter === activeFilter ? "bg-primary-700" : ""
      } px-3 sm:px-5 py-2 hover:bg-primary-700 border-l border-primary-700 ${className} text-nowrap`}
    >
      {children}
    </button>
  );
}

export default Filter;
