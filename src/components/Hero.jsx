import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)'
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl px-8 mx-auto text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Amazing Deals on Quality Products
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Shop the latest trends in fashion, electronics, home goods, and more. 
            Enjoy fast shipping and easy returns on all orders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md border-2 border-blue-500 
                        hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 transform hover:scale-105
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Shop Now
            </button>
            <button 
              className="px-8 py-3 bg-transparent text-white font-semibold rounded-md border-2 border-white 
                        hover:bg-white hover:text-black hover:border-white hover:bg-opacity-10 transition-all duration-200 transform hover:scale-105
                        focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
