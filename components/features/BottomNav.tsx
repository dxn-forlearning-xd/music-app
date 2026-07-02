'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const BottomNav = () => {
  const tabs = [
    {
      name: 'Home',
      icon: '/icons/home.svg',
      activeIcon: '/icons/home-active.svg',
      width: 19,
      height: 17,
      path: '/',
    },
    {
      name: 'Explore',
      icon: '/icons/explore.svg',
      activeIcon: '/icons/explore-active.svg',
      width: 19,
      height: 18,
      path: '/explore',
    },
    {
      name: 'Library',
      icon: '/icons/library.svg',
      activeIcon: '/icons/library-active.svg',
      width: 17,
      height: 15,
      path: '/library',
    },
  ];
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-112.5 z-20">
      <div
        className="absolute left-0 right-0 bottom-0 h-25"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #000000 30%)',
        }}
      />
      <div className="relative px-12.5 py-3.5 flex justify-between text-white">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <Link
              key={tab.name}
              href={tab.path}
              className="flex flex-col gap-2 items-center"
            >
              <Image
                alt={tab.name}
                src={isActive ? tab.activeIcon : tab.icon}
                width={tab.width}
                height={tab.height}
              />
              <span
                className={`text-[11px] font-bold ${isActive ? 'text-[#1DB1B7] ' : 'text-white'}`}
              >
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
