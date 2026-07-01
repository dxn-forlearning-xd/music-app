import React from "react";

const BasedOnRecent = () => {
  return (
    <div className="mt-11.25 text-white">
      <div>
        <h1 className="text-[20px] bolder mb-3">
          Based on your recent listening
        </h1>
      </div>
      <div className="flex gap-9 overflow-y-auto">
        <div className="relative">
          <div className="w-45.5 h-45.5 bg-gray-700"></div>
          <p className="absolute left-6 top-2.25">name</p>
        </div>
        <div className="relative">
          <div className="w-45.5 h-45.5 bg-gray-700"></div>
          <p className="absolute left-6 top-2.25">name</p>
        </div>
      </div>
    </div>
  );
};

export default BasedOnRecent;
