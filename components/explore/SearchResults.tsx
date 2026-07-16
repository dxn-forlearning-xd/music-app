"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import { Artist, useSearch, useSearchArtists } from "@/src/hooks/useDeezer";
import TrackItem from "../ui/TrackItem";
import { useTrackNavigation } from "@/src/hooks/useTrackNavigation";

function SearchContent() {
  const { navigateToTrack } = useTrackNavigation();

  const params = useSearchParams();
  const q = params.get("q") || "";

  const [activeTab, setActiveTab] = useState<"songs" | "artists">("songs");

  const { data: songsData, isLoading: songsLoading } = useSearch(q);
  const { data: artistsData, isLoading: artistsLoading } = useSearchArtists(q);

  const isLoading = songsLoading || artistsLoading;

  if (isLoading) {
    return <div className="p-6 text-white">Loading results...</div>;
  }

  const tracks = songsData?.data || [];
  const artists = artistsData?.data || [];
  return (
    <>
      <div className="pb-30 text-white">
        <h2 className="text-xl font-bold my-6">
          Search Results for: <span className="text-[#00C2CB]">{q}</span>
        </h2>

        <div className="flex gap-4 border-b border-white/10 pb-3 mb-6">
          <button
            onClick={() => setActiveTab("songs")}
            className={`cursor-pointer pb-1 text-sm font-semibold transition-all relative ${
              activeTab === "songs"
                ? "text-[#00C2CB]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Songs
            {activeTab === "songs" && (
              <span className="absolute -bottom-3.25 left-0 right-0 h-0.5 bg-[#00C2CB]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("artists")}
            className={`cursor-pointer pb-1 text-sm font-semibold transition-all relative ${
              activeTab === "artists"
                ? "text-[#00C2CB]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Artists
            {activeTab === "artists" && (
              <span className="absolute -bottom-3.25 left-0 right-0 h-0.5 bg-[#00C2CB]" />
            )}
          </button>
        </div>

        {activeTab === "songs" ? (
          tracks.length === 0 ? (
            <p className="text-gray-400">No songs found.</p>
          ) : (
            <TrackItem tracks={tracks} onTrackClick={navigateToTrack} />
          )
        ) : artists.length === 0 ? (
          <p className="text-gray-400">No artists found.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {artists.map((artist: Artist) => (
              <div
                key={artist.id}
                className="flex items-center gap-4 p-3 hover:bg-[#2a2a2a] rounded-xl transition-all cursor-pointer"
              >
                {artist.picture_medium ? (
                  <Image
                    src={artist.picture_medium}
                    alt={artist.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12.5 h-12.5 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                    No Pic
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">
                    {artist.name}
                  </p>
                  <p className="text-xs text-[#00C2CB] mt-0.5">Artist</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const SearchResults = () => {
  return (
    <Suspense
      fallback={<div className="p-6 text-white">Loading search...</div>}
    >
      <SearchContent />
    </Suspense>
  );
};
export default SearchResults;
