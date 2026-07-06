'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { Album, useDeezerData } from '@/src/hooks/useDeezer';

export const HeroSection = () => {
  const { data, isLoading, isError } = useDeezerData('chart');
  const albums = data?.albums.data;
  if (isLoading) {
    return (
      <div className="w-full h-64 mt-6 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400 text-lg">Loading albums...</span>
      </div>
    );
  }

  if (isError || !albums || albums.length === 0) {
    return (
      <div className="w-full h-64 mt-6 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 flex items-center justify-center">
        <span className="text-red-400 text-lg">
          Failed to load trending albums
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-64 mt-6 rounded-2xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {albums?.map((i: Album) => (
          <SwiperSlide key={i.id} className="relative w-full h-full">
            <Image
              src={i.cover_big}
              alt={i.title}
              fill
              sizes=""
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-10 left-6 z-10">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
                Trending Now
              </span>
              <h2 className="text-3xl font-black text-white mt-1">{i.title}</h2>
              <p className="text-gray-300 text-sm mt-1">
                {i.artist?.name || 'Various Artists'}
              </p>
              <button className="mt-4 px-6 py-2 bg-white text-black font-bold text-sm rounded-full hover:bg-cyan-400 transition cursor-pointer">
                Play Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
