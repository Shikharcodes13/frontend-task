import React from 'react';

const pricingPlans = [
  { name: 'Basic', price: '$10', features: ['1 Website', '1GB Storage', '24/7 Support'] },
  { name: 'Pro', price: '$20', features: ['5 Websites', '10GB Storage', 'Priority Support'] },
  { name: 'Premium', price: '$50', features: ['Unlimited Websites', '50GB Storage', 'VIP Support'] },
];

const PricingTable: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{plan.name}</h2>
          <p className="mt-2 text-2xl font-bold">{plan.price}</p>
          <ul className="mt-4">
            {plan.features.map((feature, i) => (
              <li key={i} className="mt-2">{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;