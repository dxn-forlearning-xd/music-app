import { getImageUrl } from "@/utils/imageHelper";
import Image from "next/image";
import PlayButton from "./PlayButton";
import { Track } from "@/src/hooks/useDeezer";

const TrackItem = ({
  tracks,
  onTrackClick,
}: {
  tracks: Track[];
  onTrackClick: (track: Track) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 mb-30">
      {tracks?.map((track: Track) => (
        <div
          onClick={() => onTrackClick(track)}
          key={track.id}
          className="flex items-center gap-4 p-3  hover:bg-[#2a2a2a] rounded-xl transition-all cursor-pointer"
        >
          <div className="relative w-12.5 h-12.5 shrink-0">
            <Image
              src={getImageUrl(track.md5_image, 100)}
              alt={track.title}
              fill
              sizes="50px"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-white truncate">
              {track.title}
            </p>
            <p className="text-xs text-gray-400 truncate mt-0.5">
              {track.artist?.name}{" "}
              {track.album?.title ? `• ${track.album.title}` : ""}
            </p>
          </div>

          {track.duration && (
            <div className="text-xs text-gray-400">
              {Math.floor(track.duration / 60)}:
              {String(track.duration % 60).padStart(2, "0")}
            </div>
          )}

          <PlayButton track={track} playlist={tracks} />
        </div>
      ))}
    </div>
  );
};

export default TrackItem;
