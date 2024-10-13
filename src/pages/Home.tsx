import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="TyresZone Presentation"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
      
      <h2 className="text-3xl font-bold mb-8 text-center">Our Principal Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Tyre Replacement', 'Wheel Alignment', 'Tyre Pressure Check'].map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{service}</h3>
            <p className="text-gray-600 mb-4">
              Professional {service.toLowerCase()} service to keep your vehicle running smoothly and safely.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link
          to="/services"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Show More Services
        </Link>
      </div>
    </div>
  );
};

export default Home;