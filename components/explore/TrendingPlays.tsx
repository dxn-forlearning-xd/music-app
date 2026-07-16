import Image from "next/image";
import React from "react";

const mockTrendingPlays = [
  {
    id: 1,
    title: "Playground Love",
    artist: "Air",
    cover: "/mock/cover1.jpg",
    plays: "12.4k",
  },
  {
    id: 2,
    title: "Harder, Better, Faster, Stronger",
    artist: "Daft Punk",
    cover: "/mock/cover2.jpg",
    plays: "10.2k",
  },
  {
    id: 3,
    title: "Time",
    artist: "Pink Floyd",
    cover: "/mock/cover3.jpg",
    plays: "9.8k",
  },
];

const TrendingPlays = () => {
  return (
    <div className="mt-5 bg-[#121212] p-6 rounded-2xl border border-white/5 w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-lg font-bold">Trending Now</h2>
        <span className="text-[10px] text-[#00C2CB] bg-[#00C2CB]/10 px-2 py-0.5 rounded font-mono">
          MOST PLAYED
        </span>
      </div>

      <div className="space-y-4">
        {mockTrendingPlays.map((item, i) => (
          <div
            key={item.id}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <span className="text-gray-500 font-mono w-4">{i + 1}</span>
            <div className="w-12 h-12 relative rounded overflow-hidden">
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {item.title}
              </p>
              <p className="text-gray-500 text-xs">{item.artist}</p>
            </div>
            <div className="text-[10px] text-gray-400 font-mono">
              {item.plays}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPlays;
