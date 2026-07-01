import React from "react";

const YourTopMixes = () => {
  return (
    <div className="mt-8.75 text-white">
      <div>
        <h1 className="text-[20px] bolder mb-3">Your Top Mixes</h1>
      </div>
      <div className="flex gap-7.75 overflow-y-auto">
        <div className="relative">
          <div className="w-37.5 h-37.5 bg-gray-700"></div>
          <p className="absolute left-6 top-2.25">name</p>
        </div>
        <div className="relative">
          <div className="w-37.5 h-37.5 bg-gray-700"></div>
          <p className="absolute left-6 top-2.25">name</p>
        </div>
        <div className="relative">
          <div className="w-37.5 h-37.5 bg-gray-700"></div>
          <p className="absolute left-6 top-2.25">name</p>
        </div>
      </div>
    </div>
  );
};

export default YourTopMixes;
