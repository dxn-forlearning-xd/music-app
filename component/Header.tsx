import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex gap-4.25">
        <div className="w-8.5 h-8.5 rounded-full ring-[2.5px] ring-[#09B3C8]">
          {/* <Image /> */}
        </div>
        <div>
          <p className="text-[15px] text-white">Welcome back!</p>
          <p className="opacity-58 text-[12px] text-white leading-2">
            user.name
          </p>
        </div>
        <div className="flex gap-4.25 ml-24">
          <Image src="/icons/bar.svg" alt="" width={22} height={25} />
          <Image src="/icons/bell.svg" alt="" width={20} height={20} />
          <Image src="/icons/settings.svg" alt="" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
