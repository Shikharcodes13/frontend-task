import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCards from '../components/ServiceCards';
import PricingTable from '../components/PricingTable';
import ContactForm from '../components/ContactForm';
import UserList from '../components/UserList';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <ServiceCards />
      <PricingTable />
      <ContactForm />
      <UserList />
    </div>
  );
};

export default LandingPage;