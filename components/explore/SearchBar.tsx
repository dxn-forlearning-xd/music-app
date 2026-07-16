"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`./search?q=${input}`);
  };
  return (
    <div>
      <div className="flex items-center tracking-widest">
        <Image src="/icons/logo.png" alt="" width={63} height={48} />
        <h1 className="text-[27px] text-[#00C2CB] bold">Search</h1>
      </div>
      <form>
        <label htmlFor="search-input" className="sr-only">
          search
        </label>
        <div className="relative w-full mt-5.25">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="search"
            placeholder="Songs, Artists, Podcasts & More"
            className="pl-10 bg-[#D9D9D9] w-91 h-11 rounded-l-2xl text-[#8A9A9D] outline-none"
          />
          <button
            onClick={handleSearch}
            type="submit"
            className="absolute right-0 top-0 h-11 w-11 rounded-r-2xl bg-mist-200 hover:bg-mist-300 flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            <Image src="/icons/search.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
