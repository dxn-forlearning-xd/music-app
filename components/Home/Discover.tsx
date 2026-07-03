"use client";

import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { useDeezerData } from "@/src/hooks/useDeezer";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHelper";

const Discover = () => {
  const { data, isLoading, isError } = useDeezerData("chart");
  const playlists = data?.playlists.data;
  return (
    <div className="mt-8.75 text-white">
      <SectionTitle title="Discover" />

      <div className="flex gap-7.75 overflow-x-auto no-scrollbar">
        {playlists?.map((i) => {
          return (
            <>
              <div className="relative w-36 h-36 shrink-0">
                <Image
                  src={i.picture_medium}
                  alt={i.title}
                  fill
                  className="object-cover rounded"
                />
                <div className="absolute bottom-0 h-5 w-full flex items-center overflow-hidden"></div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
