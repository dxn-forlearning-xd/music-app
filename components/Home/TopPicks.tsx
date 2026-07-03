"use client";
import { useDeezerData } from "@/src/hooks/useDeezer";
import { getImageUrl } from "@/utils/imageHelper";
import Image from "next/image";
import React from "react";

const TopPicks = () => {
  const { data, isLoading, isError } = useDeezerData("chart");
  const tracks = data?.tracks.data;
  return (
    <div className="mt-8 mb-15">
      <h2 className="text-2xl font-bold text-white mb-4">Top Picks</h2>
      <div className="flex flex-col gap-4">
        {tracks?.map((i) => (
          <div
            key={i.id}
            className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition"
          >
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src={getImageUrl(i.md5_image, 100)}
                alt={i.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white font-bold">{i.title}</p>
              <p className="text-gray-400 text-sm">{i.artist.name}</p>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition">
              <button className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                ▶
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
