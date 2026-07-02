import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const BasedOnRecent = () => {
  return (
    <div className="mt-11.25 text-white">
      <SectionTitle title="Based on your recent listening" />
      <div className="flex gap-9 overflow-y-auto no-scrollbar">
        {[{ name: '1' }, { name: '2' }].map((i) => (
          <div key={i.name} className="relative">
            <div className="w-45.5 h-45.5 bg-gray-700"></div>
            <p className="absolute left-6 top-2.25">{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasedOnRecent;
