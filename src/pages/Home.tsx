import React from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import ServicesList from '../components/ServicesList';
import ServiceCards from '../components/ServiceCards';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesList />
      <ServiceCards />
      <Portfolio />
      <Testimonial />
      <CTA />
    </>
  );
}
