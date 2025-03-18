import React from 'react';
import LazyLoad from 'react-lazyload';
import heroImage from '../assets/hero-bg.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-96 flex items-center justify-center">
      <LazyLoad height={200} once>
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </LazyLoad>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
        <p className="mt-2">Discover amazing services today!</p>
      </div>
    </section>
  );
};

export default HeroSection;