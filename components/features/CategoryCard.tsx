import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image?: string;
  onClick?: () => void;
}

const CategoryCard = ({ title, image, onClick }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-25 rounded-lg relative p-3 text-left`}
    >
      <h3 className="absolute text-white font-bold text-[16px] w-20 p-2">
        {title}
      </h3>
      {/* <Image src={image} width={167} height={98} alt="" /> */}
      <div className="w-41.75 h-24.5 bg-gray-600"></div>
    </button>
  );
};

export default CategoryCard;
