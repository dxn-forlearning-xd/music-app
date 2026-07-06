// import {
//   ChevronDown,
//   MoreVertical,
//   Share2,
//   Heart,
//   Shuffle,
//   SkipBack,
//   Play,
//   SkipForward,
//   ListMusic,
//   Plus,
//   Download,
// } from "lucide-react";
// import Image from "next/image";

// export const FullScreenPlayer = ({ onClose }: { onClose: () => void }) => {
//   return (
//     <div className="fixed inset-0 z-100 flex justify-center bg-[#121212]">
//       <div className="w-full max-w-112.5 h-full bg-[#121212] p-6 flex flex-col text-white">
//         <div className="flex justify-between items-center mb-8">
//           <button onClick={onClose}>
//             <ChevronDown className="w-8 h-8" />
//           </button>
//           <div className="text-center">
//             <p className="text-[10px] uppercase tracking-widest text-gray-400">
//               Playing from playlist
//             </p>
//             <p className="text-sm font-bold">Lofi Loft</p>
//           </div>
//           <button>
//             <MoreVertical />
//           </button>
//         </div>

//         <div className="relative w-full aspect-square mb-8 shadow-2xl">
//           <Image
//             src="/placeholder.jpg"
//             alt="Cover"
//             fill
//             className="rounded-md object-cover"
//           />
//         </div>

//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h1 className="text-3xl font-bold">grainy days</h1>
//             <p className="text-cyan-400 text-lg">moody.</p>
//           </div>
//           <div className="flex gap-5">
//             <Share2 className="text-gray-400" />
//             <Heart className="text-gray-400" />
//           </div>
//         </div>

//         <div className="w-full h-1 bg-gray-600 rounded-full mb-1">
//           <div className="w-[30%] h-full bg-white rounded-full relative">
//             <div className="absolute right-0 -top-1 w-3 h-3 bg-white rounded-full" />
//           </div>
//         </div>
//         <div className="flex justify-between text-xs text-gray-400 mb-6">
//           <span>0:00</span>
//           <span>2:43</span>
//         </div>

//         <div className="flex justify-between items-center mb-8 px-2">
//           <Shuffle className="text-cyan-400 w-6 h-6" />
//           <SkipBack className="w-8 h-8 fill-white" />
//           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
//             <Play className="text-black w-8 h-8 fill-black translate-x-0.5" />
//           </div>
//           <SkipForward className="w-8 h-8 fill-white" />
//           <ListMusic className="text-gray-400 w-6 h-6" />
//         </div>

//         <div className="flex justify-center mb-10">
//           <Download className="text-gray-400" />
//         </div>

//         <div className="mt-auto bg-gradient-to-b from-cyan-600 to-cyan-900 rounded-xl p-6 h-40">
//           <p className="text-xl font-bold leading-tight">
//             You never look at the sky
//             <br />
//             Cause you think it's too high
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
