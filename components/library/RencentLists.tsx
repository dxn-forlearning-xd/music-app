import Image from 'next/image';
import React from 'react';

const RencentLists = () => {
  return (
    <div>
      <div className="my-8 flex gap-2 items-center">
        <Image src="/icons/sort.svg" alt="" width={17} height={13} />
        <h3 className="text-[#39C0D4] font-bold tracking-widest">
          Recently played
        </h3>
      </div>
      {[
        { name: 1, image: '', description: 'aaaawww' },
        { name: 2, image: '', description: 'safsaa' },
      ].map((i) => (
        <div
          key={i.name}
          className="flex gap-3 items-center mb-8 rounded-sm overflow-hidden"
        >
          <Image
            alt=""
            src={i.image}
            width={84}
            height={84}
            className="object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[20px] font-bold">{i.name}</span>
            <p className="text-[#8A9A9D] text-[15px]">{i.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RencentLists;
