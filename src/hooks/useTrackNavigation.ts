import { mutate } from "swr";
import { useRouter } from "next/navigation";
import { Track } from "./useDeezer";

export const useTrackNavigation = () => {
  const router = useRouter();

  const navigateToTrack = (track: Track) => {
    mutate(`/api/deezer/track/${track.id}`, track, false);
    router.push(`/track/${track.id}`);
  };

  return { navigateToTrack };
};
