import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export const useDeezerData = (category: string) => {
  const { data, error, isLoading } = useSWR(`/api/deezer/${category}`, fetcher);

  return {
    data: data,
    isLoading,
    isError: error,
  };
};
