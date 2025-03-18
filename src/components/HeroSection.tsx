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
      <h1 className="text-4xl font-bold text-white">Welcome to Our Service</h1>
    </div>
  );
};

export default HeroSection;