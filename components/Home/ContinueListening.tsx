import Image from "next/image";
import React from "react";
import SectionTitle from "../ui/SectionTitle";

const ContinueListening = () => {
  return (
    <div className="mt-8.5 text-white">
      <SectionTitle title="Continue Listening" />

      <div className="grid grid-cols-2 gap-3">
        {[{ name: "1" }, { name: "2" }].map((i) => (
          <div
            key={i.name}
            className="w-45.75 h-13.75 rounded-lg overflow-hidden bg-[#436369]/20 flex items-center"
          >
            {/* <Image/> */}
            <div className="w-13 h-13.5 mr-3.5 bg-gray-700"></div>
            <p>{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueListening;
