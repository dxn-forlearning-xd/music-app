import React from 'react';
import CategoryCard from '../features/CategoryCard';
import SectionTitle from '../ui/SectionTitle';

const YourTopGenres = () => {
  const topGenres = [{ title: 'Kpop' }];
  return (
    <div>
      <section className="mt-10">
        <SectionTitle title="Your Top Genres" />
        <div className="grid grid-cols-2 gap-4">
          {topGenres.map((item) => (
            <CategoryCard key={item.title} title={item.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default YourTopGenres;
