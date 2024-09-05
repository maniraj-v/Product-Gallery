"use client";

import useDebounce from "@/hooks/useDebounce";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ISearchBar {
  onSearch: (searchTerm: string) => void;
  placeHolder?: string;
}

export default function SearchBar({
  placeHolder = "Search...",
  onSearch,
}: ISearchBar) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 300);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="flex justify-center mb-8 px-12">
      <div className="relative flex items-center w-full max-w-md border border-gray-400 rounded-md overflow-hidden focus:border-gray-800">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400 block m-0 outline-none rounded-md"
          placeholder={placeHolder}
        />
        {/* Search Icon SVG */}
        <svg
          xmlns="(link unavailable)"
          className="w-5 h-5 absolute left-3 top-3 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}
