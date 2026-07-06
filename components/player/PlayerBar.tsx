import { Play, SkipBack, SkipForward } from 'lucide-react';
import Image from 'next/image';

const PlayerBar = () => {
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-112.5 h-20 bg-black/80 backdrop-blur-xl border-t border-white/10 px-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative rounded bg-gray-800">
          <div className="w-full h-full bg-cyan-500/20 rounded flex items-center justify-center text-[10px]">
            Cover
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-sm font-bold truncate max-w-37.5">
            I Just Might
          </p>
          <p className="text-gray-400 text-xs">Bruno Mars</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white cursor-pointer">
          <SkipBack />
        </button>
        <button className="w-10 h-10 bg-cyan-400 text-white rounded-full flex items-center justify-center font-bold">
          <Play />
        </button>
        <button className="text-white cursor-pointer ">
          <SkipForward />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div className="h-full bg-cyan-500 w-1/3"></div>
      </div>
    </div>
  );
};
export default PlayerBar;
