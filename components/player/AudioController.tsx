"use client";
import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useRef } from "react";

export const AudioController = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    currentTrack,
    isPlaying,
    setDuration,
    setCurrentTime,
    currentTime,
    nextTrack,
  } = usePlayerStore();

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.preview;
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrack]);
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (Math.abs(audio.currentTime - currentTime) > 0.5) {
        audio.currentTime = currentTime;
      }
    }
  }, [currentTime]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);
  return (
    <audio
      ref={audioRef}
      onEnded={() => {
        nextTrack();
      }}
      onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
    />
  );
};
