/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-cyan-400 selection:text-zinc-950 relative"
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 0.95 : 1,
          filter: isLoading ? "blur(10px)" : "blur(0px)"
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: isLoading ? 0 : 0.4 }}
      >
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
      </motion.div>
    </>
  );
}

