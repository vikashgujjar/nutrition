import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { ShieldCheck, Target, Heart, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-hero">
        <style>{`
          .about-hero {
            background: #fafaf8;
            padding: 160px 0 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .about-hero::before {
            content: ''; position: absolute; inset: 0;
            background-image: radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 30px 30px;
          }
          .about-hero-container { position: relative; z-index: 10; max-width: 900px; margin: 0 auto; padding: 0 24px; }
          .about-hero-title { font-family: 'Montserrat', sans-serif; font-size: 64px; font-weight: 950; color: #111; letter-spacing: -2px; margin-bottom: 24px; }
          .about-hero-desc { font-size: 20px; color: #666; font-family: 'Inter', sans-serif; line-height: 1.6; }
        `}</style>
        <div className="about-hero-container">
          <h1 className="about-hero-title">Our Story<span style={{color:'#ff6400'}}>.</span></h1>
          <p className="about-hero-desc">We're on a mission to redefine performance nutrition through chef-crafted meals designed for elite athletes and fitness enthusiasts.</p>
        </div>
      </section>

      <AboutSection />

      {/* Values Section */}
      <section className="values-section">
        <style>{`
          .values-section { background: #fff; padding: 120px 0; font-family: 'Inter', sans-serif; }
          .values-container { max-width: 1300px; margin: 0 auto; padding: 0 40px; }
          .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
          @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 640px) { .values-grid { grid-template-columns: 1fr; } }
          
          .value-card { text-align: center; }
          .value-icon { width: 64px; height: 64px; border-radius: 20px; background: #fffcf8; border: 1.5px solid #eee; display: flex; align-items: center; justify-content: center; color: #ff6400; margin: 0 auto 24px; transition: all 0.3s ease; }
          .value-card:hover .value-icon { background: #ff6400; color: #fff; transform: translateY(-5px); border-color: #ff6400; }
          .value-title { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 800; color: #111; margin-bottom: 12px; }
          .value-desc { font-size: 15px; color: #777; line-height: 1.6; }
        `}</style>
        <div className="values-container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Target size={32} /></div>
              <h3 className="value-title">Precision</h3>
              <p className="value-desc">Every macro is counted, every calorie is accounted for. Elite performance requires exact nutrition.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><ShieldCheck size={32} /></div>
              <h3 className="value-title">Quality</h3>
              <p className="value-desc">We source only premium, organic ingredients from trusted local farms and suppliers.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Heart size={32} /></div>
              <h3 className="value-title">Passion</h3>
              <p className="value-desc">Our chefs pour their heart into every meal, ensuring healthy food never tastes boring.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Zap size={32} /></div>
              <h3 className="value-title">Performance</h3>
              <p className="value-desc">Designed to fuel your hardest training sessions and speed up your recovery time.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
