import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCards from '../components/ServiceCards';
import PricingTable from '../components/PricingTable';
import ContactForm from '../components/ContactForm';
import UserList from '../components/UserList';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <ServiceCards />
      <PricingTable />
      <UserList />
      <ContactForm />
    </div>
  );
};

export default LandingPage;