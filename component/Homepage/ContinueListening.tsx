import Image from "next/image";
import React from "react";

const ContinueListening = () => {
  return (
    <div className="mt-8.5 text-white">
      <div>
        <h1 className="text-[20px] bolder mb-3">Continue Listening</h1>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="w-45.75 h-13.75 rounded-lg overflow-hidden bg-[#436369]/20 flex items-center">
          {/* <Image/> */}
          <div className="w-13 h-13.5 mr-3.5 bg-gray-700"></div>
          <p>name</p>
        </div>
        <div className="w-45.75 h-13.75 rounded-lg overflow-hidden bg-[#436369]/20 flex items-center">
          {/* <Image/> */}
          <div className="w-13 h-13.5 mr-3.5 bg-gray-700"></div>
          <p>name</p>
        </div>
      </div>
    </div>
  );
};

export default ContinueListening;
