import React from 'react';
import CategoryCard from '../features/CategoryCard';
import SectionTitle from '../ui/SectionTitle';

const BrowseAll = () => {
  const browseAll = [
    { title: 'Made for You', image: '' },
    { title: 'Made for You', image: '' },
  ];
  return (
    <div>
      <section className="mt-15">
        <SectionTitle title="Browse All" />
        <div className="grid grid-cols-2 gap-4">
          {browseAll.map((i) => (
            <CategoryCard key={i.title} title={i.title} image={i.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrowseAll;
