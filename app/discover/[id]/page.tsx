'use client';
import { useParams } from 'next/navigation';
import { usePlaylistDetails } from '@/src/hooks/useDeezer';

export default function PlaylistPage() {
  const { id } = useParams(); // 获取 URL 中的 ID
  const { data: playlist, isLoading } = usePlaylistDetails(id as string);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 text-white">
      {/* 渲染歌单头部 */}
      <div className="flex gap-6">
        <img src={playlist.picture_big} className="w-64 h-64 rounded-xl" />
        <div>
          <h1 className="text-4xl font-black">{playlist.title}</h1>
          <p>{playlist.tracks.data.length} songs</p>
        </div>
      </div>

      {/* 渲染歌曲列表 */}
      <div className="mt-8">
        {playlist.tracks.data.map((track: any) => (
          <div key={track.id} className="p-4 hover:bg-white/10 rounded">
            {track.title} - {track.artist.name}
          </div>
        ))}
      </div>
    </div>
  );
}
