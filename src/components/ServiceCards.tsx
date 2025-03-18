import React from 'react';

const services = [
  { title: 'Web Development', description: 'We build responsive websites.' },
  { title: 'Mobile Apps', description: 'We develop cross-platform apps.' },
  { title: 'SEO Optimization', description: 'We optimize your site for search engines.' },
];

const ServiceCards: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{service.title}</h2>
          <p className="mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;