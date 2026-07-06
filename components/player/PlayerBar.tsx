"use client";
import { Pause, Play, PlayIcon, SkipBack, SkipForward } from "lucide-react";
import { usePlayerStore } from "@/store/usePlayerStore";
import Image from "next/image";
import { useRef } from "react";

const PlayerBar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const {
    currentTrack,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    setCurrentTime,
    nextTrack,
    prevTrack,
  } = usePlayerStore();

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !duration) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const percentage = clickPosition / rect.width;

    const newTime = percentage * duration;
    setCurrentTime(newTime);
  };
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-112.5 h-20 bg-black/80 backdrop-blur-xl border-t border-white/10 px-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative rounded bg-gray-800">
          {currentTrack ? (
            <Image
              src={currentTrack.album.cover_medium}
              fill
              alt="cover"
              className="rounded"
            />
          ) : (
            <div className="w-full h-full bg-gray-900" />
          )}
        </div>
        {currentTrack ? (
          <div className="flex flex-col">
            <p className="text-white text-sm font-bold truncate max-w-37.5">
              {currentTrack.title}
            </p>
            <p className="text-gray-400 text-xs">{currentTrack.artist.name}</p>
          </div>
        ) : (
          <p className="text-gray-400 text-xs">Select a song to start</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white" onClick={prevTrack}>
          <SkipBack />
        </button>
        <button
          onClick={togglePlay}
          className="w-10 h-10 bg-cyan-400 text-white rounded-full flex items-center justify-center"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button className="text-white" onClick={nextTrack}>
          <SkipForward />
        </button>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-2 group cursor-pointer"
        onClick={handleProgressClick}
        ref={progressBarRef}
      >
        <div className="w-full h-full bg-white/10" />
        <div
          className="absolute top-0 left-0 h-full bg-cyan-500 transition-all duration-75"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
    </div>
  );
};
export default PlayerBar;
