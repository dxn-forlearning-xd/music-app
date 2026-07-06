import Image from 'next/image';
import React from 'react';

const Search = () => {
  return (
    <div>
      <div className="flex items-center tracking-widest">
        <Image src="/icons/logo.png" alt="" width={63} height={48} />
        <h1 className="text-[27px] text-[#00C2CB] bold">Search</h1>
      </div>
      <form action="search">
        <label htmlFor="search-input" className="sr-only">
          search
        </label>
        <div className="relative w-full mt-5.25">
          <Image
            className="absolute left-3 top-1/2 -translate-y-1/2"
            src="/icons/search.svg"
            alt=""
            width={20}
            height={20}
          />
          <input
            type="search"
            placeholder="Songs, Artists, Podcasts & More"
            className="pl-10 bg-[#D9D9D9] w-91 h-11 rounded-2xl text-[#8A9A9D] outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
