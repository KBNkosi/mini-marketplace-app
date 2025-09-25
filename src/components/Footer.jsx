import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 inline-block">About Us</h3>
            <p className="text-gray-300">
              Your one-stop marketplace for quality products at unbeatable prices. We're committed to providing the best shopping experience with fast delivery and excellent customer service.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Special Offers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-blue-400" />
                <span className="text-gray-300">123 Market Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href="mailto:info@marketplace.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">info@marketplace.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">+1 (234) 567-890</a>
              </li>
            </ul>
            <div className="pt-2">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MarketPlace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
