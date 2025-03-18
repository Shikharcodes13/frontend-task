import React from 'react';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

const plans: Plan[] = [
  { name: 'Basic', price: '$10', features: ['1 User', 'Basic Support'] },
  { name: 'Pro', price: '$20', features: ['5 Users', 'Priority Support'] },
  { name: 'Enterprise', price: '$50', features: ['Unlimited Users', '24/7 Support'] },
];

const PricingTable: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-gray-200">
      <h2 className="text-2xl font-bold text-center mb-4">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="p-4 bg-white shadow rounded text-center">
            <h3 className="font-semibold text-lg">{plan.name}</h3>
            <p className="text-2xl font-bold my-2">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;