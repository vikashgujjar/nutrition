import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BmiCalculator from '@/components/BmiCalculator';
import ExpertiseSection from '@/components/ExpertiseSection';
import CompareSection from '@/components/CompareSection';
import PricingSection from '@/components/PricingSection';
import BlogSection from '@/components/BlogSection';
import TestimonialSection from '@/components/TestimonialSection';
import AppointmentCTA from '@/components/AppointmentCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BmiCalculator />
      <ExpertiseSection />
      <CompareSection />
      <PricingSection />
      <BlogSection />
      <TestimonialSection />
      <AppointmentCTA />
      <Footer />
    </main>
  );
}
