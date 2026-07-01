import Image from "next/image";
import React from "react";
import ContinueListening from "./ContinueListening";
import Header from "../Header";
import YourTopMixes from "./YourTopMixes";
import BasedOnRecent from "./BasedOnRecent";
import NavBar from "../BottomBar";

const HomePage = () => {
  return (
    <div>
      <div
        className="absolute w-112.5 pointer-events-none z-0"
        style={{
          height: "200vh",
          top: "-100vh",
          background:
            "linear-gradient(to bottom, #06A0B5 0%, #102B2D 64%, transparent 100%)",
        }}
      />
      <div className="z-10 relative">
        <div className="p-9.25">
          <Header />
          <ContinueListening />
          <YourTopMixes />
          <BasedOnRecent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
