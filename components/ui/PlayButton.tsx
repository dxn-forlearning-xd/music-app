"use client";
import { Track } from "@/src/hooks/useDeezer";
import { usePlayerStore } from "@/store/usePlayerStore";
import { Pause, Play } from "lucide-react";
import React from "react";

const PlayButton = ({
  track,
  playlist,
}: {
  track: Track;
  playlist: Track[];
}) => {
  const { playTrack, togglePlay, isPlaying, currentTrack } = usePlayerStore();
  if (!track) return null;

  const isCurrentTrack = currentTrack?.id === track.id;
  return (
    <div className="ml-auto transition">
      <button
        onClick={() => {
          if (isCurrentTrack) {
            togglePlay();
          } else {
            playTrack(track, playlist);
          }
        }}
        className="w-10 h-10 rounded-full flex items-center justify-center"
      >
        {isCurrentTrack && isPlaying ? (
          <Pause className="w-5 h-5 text-white fill-white" />
        ) : (
          <Play className="w-5 h-5 text-white fill-white" />
        )}
      </button>
    </div>
  );
};

export default PlayButton;
