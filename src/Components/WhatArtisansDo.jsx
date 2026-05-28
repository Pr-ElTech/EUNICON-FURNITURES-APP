import React from 'react';
import '../Style/WhatArtisansDo.css';

const WhatArtisansDo = () => {
  const artisansData = [
    { id: 1, title: 'Painting', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=500' },
    { id: 2, title: 'Plumbing', imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500' },
    { id: 3, title: 'Carpentry', imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500' },
    { id: 4, title: 'Tailoring', imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=500' },
    { id: 5, title: 'Electrical Service', imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500' },
    { id: 6, title: 'Tiling', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500' },
  ];

  return (
    <section className="artisans-container">
      <h2 className="artisans-title">What Our Artisans Do</h2>
      
      <div className="artisans-grid">
        {artisansData.map((artisan) => (
          <div key={artisan.id} className="artisan-card">
            <div className="image-wrapper">
              <img 
                src={artisan.imageUrl} 
                alt={artisan.title} 
                className="artisan-image" 
              />
            </div>
            <div className="artisan-info">
              <h3>{artisan.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatArtisansDo;