"use client";
import { useParams, useRouter } from "next/navigation";
import { Track, useAlbumDetails } from "@/src/hooks/useDeezer";
import Image from "next/image";
import { ArrowLeft, Play } from "lucide-react";
import PlayButton from "@/components/ui/PlayButton";

export default function AlbumPage() {
  const { id } = useParams();
  const { data: album, isLoading } = useAlbumDetails(id as string);
  const tracks = album?.tracks.data;

  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="p-6 mb-20 text-white min-h-screen">
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition cursor-pointer"
      >
        <ArrowLeft /> <span className="font-bold">Back</span>
      </button>

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

      <div className="my-8">
        {album.tracks.data.map((i: Track) => (
          <div
            key={i.id}
            className="group flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition"
          >
            <div className="flex flex-col">
              <p className="text-white font-bold">{i.title}</p>
              <p className="text-gray-400 text-sm">{i.artist.name}</p>
            </div>
            <PlayButton track={i} playlist={tracks} />
          </div>
        ))}
      </div>
    </div>
  );
}
