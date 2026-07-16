"use client";
import { useParams, useRouter } from "next/navigation";
import { Track, usePlaylistDetails } from "@/src/hooks/useDeezer";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { mutate } from "swr";
import TrackItem from "@/components/ui/TrackItem";
import BackButton from "@/components/ui/BackButton";
import { useTrackNavigation } from "@/src/hooks/useTrackNavigation";

export default function PlaylistPage() {
  const { navigateToTrack } = useTrackNavigation();

  const { id } = useParams();
  const { data: playlist, isLoading } = usePlaylistDetails(id as string);
  const tracks = playlist?.tracks.data;

  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="p-6 text-white min-h-screen">
      <BackButton />
      <div className="flex gap-6 items-end pb-5">
        <div className="relative w-48 h-48 shrink-0 shadow-2xl">
          <Image
            src={playlist.picture_big}
            alt={playlist.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-4xl font-black">{playlist.title}</h1>
          <p className="text-gray-400 mt-2">
            {playlist.tracks.data.length} songs
          </p>
        </div>
      </div>

      <TrackItem tracks={tracks} onTrackClick={navigateToTrack} />
    </div>
  );
}
