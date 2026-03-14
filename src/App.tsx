/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import ServicesList from './components/ServicesList';
import ServiceCards from './components/ServiceCards';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-cyan-400 selection:text-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Navbar />
        <Hero />
        <ClientLogos />
        <ServicesList />
        <ServiceCards />
        <Portfolio />
        <Testimonial />
        <CTA />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}

