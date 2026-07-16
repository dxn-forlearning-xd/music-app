"use client";
import { useParams, useRouter } from "next/navigation";
import { Track, useAlbumDetails } from "@/src/hooks/useDeezer";
import Image from "next/image";
import { ArrowLeft, Play } from "lucide-react";
import PlayButton from "@/components/ui/PlayButton";
import TrackItem from "@/components/ui/TrackItem";

import { mutate } from "swr";
import BackButton from "@/components/ui/BackButton";
import { useTrackNavigation } from "@/src/hooks/useTrackNavigation";
export default function AlbumPage() {
  const { navigateToTrack } = useTrackNavigation();

  const { id } = useParams();
  const { data: album, isLoading } = useAlbumDetails(id as string);
  const tracks = album?.tracks.data;

  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="p-6 mb-20 text-white min-h-screen">
      <BackButton />
      <div className="flex gap-6 flex-col">
        <div className="relative w-48 h-48 shrink-0 shadow-2xl">
          <Image
            src={album.cover_big}
            alt={album.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div>
          <h1 className="text-4xl font-black  min-w-0 flex-1">{album.title}</h1>
          <p className="text-gray-400 mt-2">{album.tracks.data.length} songs</p>
        </div>
      </div>

      <TrackItem tracks={tracks} onTrackClick={navigateToTrack} />
    </div>
  );
}
