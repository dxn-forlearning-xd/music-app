'use client';
import { Track, useDeezerData } from '@/src/hooks/useDeezer';
import { getImageUrl } from '@/utils/imageHelper';
import { Play } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TopPicks = () => {
  const { data, isLoading, isError } = useDeezerData('chart');

  const tracks = data?.tracks.data;
  if (isLoading) {
    return (
      <div className="mt-8 mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Top Picks</h2>
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 bg-gray-800/60 rounded-lg animate-pulse"
            >
              <div className="w-16 h-16 bg-gray-700 rounded shrink-0"></div>
              <div className="flex flex-col flex-1 gap-2">
                <div className="w-28 h-4 bg-gray-700 rounded"></div>
                <div className="w-20 h-3 bg-gray-700 rounded"></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-700"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError || !tracks || tracks.length === 0) {
    return (
      <div className="mt-8 mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Top Picks</h2>
        <div className="p-6 bg-gray-800/40 rounded-lg text-center">
          <p className="text-red-400">Failed to load track list</p>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-8 mb-15 ">
      <h2 className="text-2xl font-bold text-white mb-4">Top Picks</h2>
      <div className="flex flex-col gap-4 ">
        {tracks?.map((i: Track) => (
          <div
            key={i.id}
            className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition"
          >
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src={getImageUrl(i.md5_image, 100)}
                alt={i.title}
                fill
                sizes=""
                className="object-cover rounded"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white font-bold">{i.title}</p>
              <p className="text-gray-400 text-sm">{i.artist.name}</p>
            </div>
            <div className="ml-auto z-10 transition">
              <button className="w-10 h-10 bg-cyan-500 text-white fill-white rounded-full flex items-center justify-center cursor-pointer">
                <Play />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
