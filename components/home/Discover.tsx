'use client';

import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Playlist, useDeezerData } from '@/src/hooks/useDeezer';
import Image from 'next/image';
import Link from 'next/link';

const Discover = () => {
  const { data, isLoading, isError } = useDeezerData('chart');
  const playlists = data?.playlists.data;
  if (isLoading) {
    return (
      <div className="mt-8.75 text-white">
        <SectionTitle title="Discover" />
        <div className="flex gap-7.75 overflow-x-auto no-scrollbar">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="w-36 h-36 shrink-0 bg-gray-700 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (isError || !playlists || playlists.length === 0) {
    return (
      <div className="mt-8.75 text-white">
        <SectionTitle title="Discover" />
        <div className="py-8 text-center text-red-400">
          Failed to load playlists
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8.75 text-white">
      <SectionTitle title="Discover" />

      <div className="flex gap-7.75 overflow-x-auto no-scrollbar">
        {playlists?.map((i: Playlist) => {
          return (
            <Link key={i.id} href={`/discover/${i.id}`}>
              <div className="relative w-36 h-36 shrink-0  cursor-pointer">
                <Image
                  src={i.picture_medium}
                  alt={i.title}
                  fill
                  sizes=""
                  className="object-cover rounded"
                />
                <div className="absolute bottom-0 h-5 w-full flex items-center overflow-hidden"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
