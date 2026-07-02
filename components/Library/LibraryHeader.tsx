import Image from 'next/image';
import React from 'react';

const LibraryHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center tracking-widest">
        <Image src="/icons/logo.png" alt="" width={63} height={48} />
        <h1 className="text-[27px] text-[#00C2CB] font-bold">Your Library</h1>
      </div>
      <Image src="/icons/explore.svg" alt="" width={24} height={24} />
    </div>
  );
};

export default LibraryHeader;
