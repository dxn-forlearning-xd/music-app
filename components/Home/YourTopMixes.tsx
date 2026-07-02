import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const YourTopMixes = () => {
  return (
    <div className="mt-8.75 text-white">
      <SectionTitle title="Your Top Mixes" />

      <div className="flex gap-7.75 overflow-y-auto no-scrollbar">
        {[{ name: '1' }, { name: '2' }, { name: '3' }].map((i) => (
          <>
            <div className="relative">
              <div key={i.name} className="w-37.5 h-37.5 bg-gray-700"></div>
              <p className="absolute left-6 top-2.25">{i.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default YourTopMixes;
