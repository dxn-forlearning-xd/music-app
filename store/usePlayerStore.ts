import { Track } from "@/src/hooks/useDeezer";
import { create } from "zustand";

interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  currentIndex: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;

  setQueue: (tracks: Track[]) => void;
  playTrack: (track: Track, allTracks: Track[]) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  togglePlay: () => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  queue: [],
  currentIndex: 0,
  isPlaying: false,
  currentTime: 0,
  duration: 0,

  setQueue: (tracks) => set({ queue: tracks }),

  playTrack: (track, allTracks) => {
    const index = allTracks.findIndex((t) => t.id === track.id);
    set({
      currentTrack: track,
      queue: allTracks,
      currentIndex: index,
      isPlaying: true,
    });
  },

  nextTrack: () => {
    const { queue, currentIndex } = get();
    if (currentIndex < queue.length - 1) {
      const nextIndex = currentIndex + 1;
      set({
        currentTrack: queue[nextIndex],
        currentIndex: nextIndex,
        isPlaying: true,
      });
    }
  },

  prevTrack: () => {
    const { queue, currentIndex } = get();
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      set({
        currentTrack: queue[prevIndex],
        currentIndex: prevIndex,
        isPlaying: true,
      });
    }
  },

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  setCurrentTime: (time) => set({ currentTime: time }),

  setDuration: (duration) => set({ duration: duration }),
}));
