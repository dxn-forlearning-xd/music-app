import Header from "@/components/features/Header";
import BasedOnRecent from "@/components/home/BasedOnRecent";
import ContinueListening from "@/components/home/ContinueListening";
import Discover from "@/components/home/Discover";
import { HeroSection } from "@/components/home/HeroSection";

import TopPicks from "@/components/home/TopPicks";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0E0E0E]">
      <div
        className="fixed top-[-40vh] w-112.5 h-screen z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #06A0B5 0%, #102B2D 46%, #0e0e0e 100%)",
        }}
      />
      <div className="z-10 relative">
        <div className="p-9.25">
          <Header />
          <HeroSection />
          <Discover />
          <TopPicks />
        </div>
      </div>
    </div>
  );
};

export default page;
