import BrowseAll from '@/components/explore/BrowseAll';
import Search from '@/components/explore/Search';
import YourTopGenres from '@/components/explore/YourTopGenres';
import React from 'react';

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0E0E0E]">
      <div
        className="fixed top-[-40vh] w-112.5 h-screen z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #06A0B5 0%, #102B2D 46%, #0e0e0e 100%)',
        }}
      />
      <div className="z-10 relative">
        <div className="p-6">
          <Search />
          <YourTopGenres />
          <BrowseAll />
        </div>
      </div>
    </div>
  );
};

export default page;
