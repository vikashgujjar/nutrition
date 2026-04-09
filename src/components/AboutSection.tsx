import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Play, User, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <>
      <style>{`
        .about2-section {
          background: #fafaf8;
          position: relative;
          overflow: hidden;
          padding: 120px 0;
          font-family: 'Inter', sans-serif;
        }
        .about2-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.035) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .about2-glow {
          position: absolute; bottom: -10%; right: -5%;
          width: 50%; height: 60%;
          background: radial-gradient(circle, rgba(255,100,0,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .about2-container {
          position: relative; z-index: 2;
          max-width: 1300px; margin: 0 auto; padding: 0 28px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .about2-container { grid-template-columns: 1fr; gap: 60px; }
        }

        /* Image Side */
        .about2-img-stack {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .about2-img-main-wrap {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 4/5;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .about2-img-main {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .about2-img-main-wrap:hover .about2-img-main { transform: scale(1.05); }

        .about2-img-sub {
          position: absolute;
          bottom: -40px; right: -20px;
          width: 240px; height: 160px;
          background: #fff;
          border-radius: 24px;
          padding: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          border: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
          z-index: 3;
        }
        .about2-img-sub img {
          width: 100%; height: 100%; object-fit: cover; border-radius: 16px;
        }
        @media (max-width: 640px) {
          .about2-img-sub { width: 180px; height: 120px; right: 0; bottom: -20px; }
        }

        .about2-badge {
          position: absolute;
          top: 40px; left: -30px;
          background: #fff;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
          z-index: 4;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
        }
        .about2-badge-title { font-size: 28px; fontWeight: 900; color: #ff6400; font-family: 'Montserrat', sans-serif; line-height: 1; }
        .about2-badge-text { font-size: 11px; fontWeight: 700; color: #999; text-transform: uppercase; letter-spacing: 1px; }

        /* Content Side */
        .about2-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,100,0,0.08);
          border: 1.5px solid rgba(255,100,0,0.18);
          border-radius: 100px; padding: 6px 18px 6px 10px;
          margin-bottom: 24px;
        }
        .about2-eyebrow-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #ff6400;
        }
        .about2-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 900; color: #111;
          line-height: 1.1; letter-spacing: -1.5px;
          margin-bottom: 24px;
        }
        .about2-title em { font-style: normal; color: #ff6400; }
        .about2-desc {
          font-size: 16px; color: #555; line-height: 1.8;
          margin-bottom: 40px;
        }
        
        .about2-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 48px;
        }
        @media (max-width: 480px) { .about2-grid { grid-template-columns: 1fr; } }
        
        .about2-feat {
          display: flex; align-items: flex-start; gap: 14px;
        }
        .about2-feat-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(255,100,0,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #ff6400; flex-shrink: 0;
        }
        .about2-feat-title { font-weight: 700; color: #111; margin-bottom: 4px; font-size: 14px; }
        .about2-feat-desc { font-size: 12px; color: #777; line-height: 1.5; }

        .about2-cta-wrap {
          display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
        }
        .about2-btn {
          background: #ff6400; color: #fff;
          padding: 16px 32px; border-radius: 100px;
          font-weight: 700; font-size: 15px;
          display: inline-flex; align-items: center; gap: 10px;
          box-shadow: 0 10px 30px rgba(255,100,0,0.25);
          transition: transform 0.3s, box-shadow 0.3s;
          text-decoration: none;
        }
        .about2-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(255,100,0,0.35); }
        
        .about2-stats { display: flex; gap: 40px; }
        .about2-stat-item { display: flex; flex-direction: column; }
        .about2-stat-val { font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: 900; color: #111; line-height: 1; }
        .about2-stat-lbl { font-size: 11px; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
      `}</style>

      <section className="about2-section">
        <div className="about2-dots" />
        <div className="about2-glow" />

        <div className="about2-container">
          <div className="about2-img-stack">
            <div className="about2-badge">
              <div className="about2-badge-title">12+</div>
              <div className="about2-badge-text">Years Exp.</div>
            </div>

            <div className="about2-img-main-wrap">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=100&w=1000" alt="Professional Chef" className="about2-img-main" />
            </div>

            <div className="about2-img-sub">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=100&w=800" alt="Healthy Ingredients" />
            </div>
          </div>

          <div className="about2-content">
            <div className="about2-eyebrow">
              <span className="about2-eyebrow-text">About Fuel Plate by MMC</span>
            </div>
            <h2 className="about2-title">
              Crafting Excellence in <em>Performance</em> Nutrition
            </h2>
            <p className="about2-desc">
              Founded with a mission to bridge the gap between hard work in the gym and results on the scale.
              We believe that elite nutrition shouldn't be a chore — it should be a fresh, chef-prepared
              experience that fuels your best self, every single day.
            </p>

            <div className="about2-grid">
              <div className="about2-feat">
                <div className="about2-feat-icon"><Award size={18} /></div>
                <div>
                  <div className="about2-feat-title">Certified Expertise</div>
                  <div className="about2-feat-desc">Menus designed by senior nutritionists and sports dietitians.</div>
                </div>
              </div>
              <div className="about2-feat">
                <div className="about2-feat-icon"><Check size={18} /></div>
                <div>
                  <div className="about2-feat-title">Premium Sourcing</div>
                  <div className="about2-feat-desc">We only use the highest quality protein and farm-fresh produce.</div>
                </div>
              </div>
            </div>

            <div className="about2-cta-wrap">
              <Link href="/appointment" className="about2-btn">
                Read Our Story <ArrowRight size={18} />
              </Link>

              <div className="about2-stats">
                <div className="about2-stat-item">
                  <div className="about2-stat-val">5K+</div>
                  <div className="about2-stat-lbl">Happy Clients</div>
                </div>
                <div className="about2-stat-item">
                  <div className="about2-stat-val">98%</div>
                  <div className="about2-stat-lbl">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;