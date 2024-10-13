import React from 'react';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", alt: "Tyre Workshop" },
    { src: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", alt: "Tyre Stack" },
    { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", alt: "Car on Lift" },
    { src: "https://images.unsplash.com/photo-1582641547274-a47d98d60253?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", alt: "Wheel Alignment" },
    { src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", alt: "Tyre Pressure Check" },
    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", alt: "Car Service" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;