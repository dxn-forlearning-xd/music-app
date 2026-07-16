"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import PlayButton from "@/components/ui/PlayButton";
import { useTrackDetails } from "@/src/hooks/useDeezer";
import BackButton from "@/components/ui/BackButton";

const TrackDetails = () => {
  const { id } = useParams() as { id: string };
  const { data: track, isLoading, isError } = useTrackDetails(id);

  if (isLoading) return <div className="text-white p-10">Loading...</div>;
  if (isError || !track)
    return <div className="text-white p-10">Track not found.</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <BackButton />
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="relative w-64 h-64 md:w-80 md:h-80 shadow-2xl shrink-0">
          <Image
            src={track.album.cover_big}
            alt={track.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#00C2CB] font-bold tracking-widest text-sm">
            SONG
          </p>
          <h1 className="text-4xl md:text-6xl font-black">{track.title}</h1>

          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-white font-bold">{track.artist.name}</span>
            <span>•</span>
            <span>{track.album.title}</span>
            <span>•</span>
            <span>
              {Math.floor(track.duration / 60)}:
              {(track.duration % 60).toString().padStart(2, "0")}
            </span>
          </div>

          <div className="mt-4">
            <PlayButton track={track} playlist={[track]} />
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <h3 className="text-xl font-bold mb-4">About the Album</h3>
        <p className="text-gray-400">
          {track.album.title} - Released by {track.artist.name}
        </p>
      </div>
    </div>
  );
};

export default TrackDetails;
