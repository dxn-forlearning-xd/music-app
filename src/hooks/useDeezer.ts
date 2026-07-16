import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export interface Artist {
  id: number;
  name: string;
  picture_medium: string;
  picture: string;
}

export interface Track {
  id: number;
  title: string;
  md5_image: string;
  artist: Artist;
  preview: string;
  duration: number;
  album: Album;
}

export interface Album {
  id: number;
  title: string;
  cover_big: string;
  cover_medium: string;
  artist: {
    name: string;
  };
}

export interface Playlist {
  id: number;
  title: string;
  picture_medium: string;
}

export const useDeezerData = (category: string) => {
  const { data, error, isLoading } = useSWR(`/api/deezer/${category}`, fetcher);

  return {
    data: data,
    isLoading,
    isError: error,
  };
};

export const usePlaylistDetails = (id: string) => {
  return useDeezerData(`playlist/${id}`);
};

export const useAlbumDetails = (id: string) => {
  return useDeezerData(`album/${id}`);
};

export const useSearch = (q: string | null) => {
  return useDeezerData(`search?q=${q}`);
};

export const useSearchArtists = (q: string | null) => {
  return useDeezerData(`search/artist?q=${q}`);
};
export const useTrackDetails = (id: string) => {
  return useDeezerData(`track/${id}`);
};
