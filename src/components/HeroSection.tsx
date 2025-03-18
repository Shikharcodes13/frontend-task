import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

      {/* Hero text with fade-in animation */}
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center relative z-10 animate-fadeIn">
        Welcome to Our Service
      </h1>
    </div>
  );
};

export default HeroSection;