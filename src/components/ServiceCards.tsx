import React from 'react';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  { title: 'Web Design', description: 'Beautiful, responsive designs.' },
  { title: 'Development', description: 'Fast and scalable solutions.' },
  { title: 'Support', description: '24/7 customer assistance.' },
];

const ServiceCards: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;