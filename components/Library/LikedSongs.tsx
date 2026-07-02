import React from 'react';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

const LikedSongs = () => {
  return (
    <div>
      <button className="flex gap-10 items-center">
        <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#A6F3FF] to-[#00C2CB] flex items-center justify-center">
          <Image src="/icons/love.svg" width={20} height={19} alt="" />
        </div>
        <div className="-mb-3">
          <SectionTitle title="Your Liked Songs" />
        </div>
      </button>
    </div>
  );
};

export default LikedSongs;
