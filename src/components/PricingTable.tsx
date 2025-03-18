import React from 'react';

const pricingPlans = [
  { name: 'Basic', price: '$10', features: ['1 Website', '1GB Storage', '24/7 Support'] },
  { name: 'Pro', price: '$20', features: ['5 Websites', '10GB Storage', 'Priority Support'] },
  { name: 'Premium', price: '$50', features: ['Unlimited Websites', '50GB Storage', 'VIP Support'] },
];

const PricingTable: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
          <p className="text-2xl font-bold mb-4">{plan.price}</p>
          <ul className="space-y-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;