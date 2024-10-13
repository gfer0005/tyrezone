import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About TyresZone</h1>
      <div className="max-w-3xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1581093458791-9f3c3250a8e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="TyresZone Workshop"
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
        />
        <p className="text-lg mb-6">
          TyresZone has been serving the community for over 20 years, providing top-quality tyre services and exceptional customer care. Our team of experienced professionals is dedicated to ensuring your vehicle's safety and performance on the road.
        </p>
        <p className="text-lg mb-6">
          We pride ourselves on using the latest technology and techniques in tyre maintenance and repair. From tyre replacement to wheel alignment, we offer a comprehensive range of services to keep your vehicle running smoothly.
        </p>
        <p className="text-lg">
          At TyresZone, we believe in building long-lasting relationships with our customers. That's why we always strive to provide honest advice, fair pricing, and reliable service. Your safety and satisfaction are our top priorities.
        </p>
      </div>
    </div>
  );
};

export default About;