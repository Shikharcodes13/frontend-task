import React from 'react';

const services = [
  { title: 'Web Development', description: 'We build responsive websites.' },
  { title: 'Mobile Apps', description: 'We develop cross-platform apps.' },
  { title: 'SEO Optimization', description: 'We optimize your site for search engines.' },
];

const ServiceCards: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-xl font-bold mb-2">{service.title}</h2>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;