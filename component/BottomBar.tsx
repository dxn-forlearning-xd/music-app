import Image from "next/image";
import React from "react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-112.5 z-20">
      <div
        className="absolute left-0 right-0 bottom-0 h-25"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #000000 30%)",
        }}
      />
      <div className="relative px-12.5 py-3.5 flex justify-between text-white">
        <div className="flex flex-col gap-2 items-center">
          <Image alt="home" src="/icons/home.svg" width={19} height={17} />
          <span className="text-[11px]">Home</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image
            alt="explore"
            src="/icons/explore.svg"
            width={19}
            height={18}
          />
          <span className="text-[11px]">Explore</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image
            alt="library"
            src="/icons/library.svg"
            width={17}
            height={15}
          />
          <span className="text-[11px]">Library</span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
