import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">TyresZone</span>
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;