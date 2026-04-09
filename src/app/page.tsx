import React from 'react';
import Navbar from '@/components/Navbar';
import {
  Hero,
  ExpertiseSection,
  ServicesSection,
  TestimonialSection,
  AppointmentCTA,
  BlogSection
} from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import BmiCalculator from '@/components/BmiCalculator';
import CompareSection from '@/components/CompareSection';
import PricingSection from '@/components/PricingSection';
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
      {/* <AppointmentCTA /> */}
      <Footer />
    </main>
  );
}
