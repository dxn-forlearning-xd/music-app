export const getImageUrl = (md5: string, size: number = 300) => {
  if (!md5) return "/default-placeholder.jpg";
  return `https://e-cdns-images.dzcdn.net/images/cover/${md5}/${size}x${size}-000000-80-0-0.jpg`;
};
