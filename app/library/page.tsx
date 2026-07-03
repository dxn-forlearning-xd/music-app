import LibraryHeader from "@/components/library/LibraryHeader";
import LibraryTabs from "@/components/library/LibraryTabs";
import LikedSongs from "@/components/library/LikedSongs";
import RencentLists from "@/components/library/RencentLists";
import React from "react";

const page = () => {
  // const data = await getLibraryData();
  return (
    <main className="flex flex-col gap-6 p-6 bg-[#1E1E1E] min-h-screen text-white">
      <LibraryHeader />
      <LibraryTabs />
      <div className="flex flex-col gap-4">
        <LikedSongs />
        <RencentLists />
      </div>
    </main>
  );
};

export default page;
