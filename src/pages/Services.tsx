import React from 'react';

const Services = () => {
  const services = [
    { name: 'Tyre Replacement', description: 'Professional tyre replacement service for all vehicle types.' },
    { name: 'Wheel Alignment', description: 'Precise wheel alignment to improve handling and reduce tyre wear.' },
    { name: 'Tyre Pressure Check', description: 'Regular tyre pressure checks to ensure optimal performance and safety.' },
    { name: 'Tyre Rotation', description: 'Periodic tyre rotation to ensure even wear and extend tyre life.' },
    { name: 'Puncture Repair', description: 'Quick and reliable puncture repair service to get you back on the road.' },
    { name: 'Balancing', description: 'Wheel balancing service to reduce vibration and improve ride comfort.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;