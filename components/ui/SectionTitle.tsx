import React from 'react';
interface SectionTitleProps {
  title: string;
}
const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div>
      <h2 className="text-[20px] bolder mb-3 font-bold text-white">{title}</h2>
    </div>
  );
};

export default SectionTitle;
