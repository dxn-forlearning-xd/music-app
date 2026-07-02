import React from 'react';

const LibraryTabs = () => {
  return (
    <div className="flex gap-2">
      {[
        { name: 'Playlists' },
        { name: 'Artists' },
        { name: 'Albums' },
        { name: 'Podcasts' },
      ].map((i) => (
        <button
          key={i.name}
          className="rounded-4xl bg-transparent border px-2 py-1 border-white text-[12px]"
        >
          {i.name}
        </button>
      ))}
    </div>
  );
};

export default LibraryTabs;
