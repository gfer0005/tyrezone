import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">TyresZone</h3>
            <p className="text-sm">Your one-stop shop for all tyre needs.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/services" className="hover:text-blue-300">Services</a></li>
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">123 Tyre Street, Wheelville</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@tyreszone.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300"><Facebook /></a>
              <a href="#" className="text-white hover:text-blue-300"><Twitter /></a>
              <a href="#" className="text-white hover:text-blue-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          © 2024 TyresZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;