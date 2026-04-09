// ════════════════════════════════════════════════════════════
// FUEL PLATE by MMC — Light Theme Redesign
// Font: Montserrat (headings) + Inter (body)
// All sections redesigned for light/warm cream background
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// SHARED CSS TOKENS (add to globals.css or layout)
// ─────────────────────────────────────────────
export const SHARED_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    --primary: #ff6400;
    --primary-rgb: 255, 100, 0;
    --bg: #fafaf8;
    --bg-card: #ffffff;
    --bg-soft: #f5f3f0;
    --text-1: #111111;
    --text-2: #555555;
    --text-3: #999999;
    --border: rgba(0,0,0,0.07);
    --border-strong: rgba(0,0,0,0.12);
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
    --shadow-md: 0 8px 32px rgba(0,0,0,0.08);
    --shadow-lg: 0 20px 64px rgba(0,0,0,0.1);
    --font-display: 'Montserrat', sans-serif;
    --font-body: 'Inter', sans-serif;
  }

  /* Shared dot background pattern */
  .lt-dots {
    background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 28px 28px;
  }

  /* Shared eyebrow pill */
  .lt-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,100,0,0.08);
    border: 1.5px solid rgba(255,100,0,0.18);
    border-radius: 100px; padding: 6px 18px 6px 10px;
    margin-bottom: 20px;
  }
  .lt-eyebrow-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--primary, #ff6400);
    animation: lt-pulse 2s ease-in-out infinite;
  }
  @keyframes lt-pulse {
    0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)}
  }
  .lt-eyebrow-text {
    font-size: 11px; font-weight: 700;
    letter-spacing: 2.5px; text-transform: uppercase;
    color: var(--primary, #ff6400);
    font-family: var(--font-body, 'Inter', sans-serif);
  }
  .lt-heading {
    font-family: var(--font-display, 'Montserrat', sans-serif);
    font-weight: 900;
    color: #111; line-height: 1.05; letter-spacing: -1px;
  }
  .lt-heading em {
    font-style: normal; color: var(--primary, #ff6400);
  }
`;


// ─────────────────────────────────────────────
// Hero — Light Theme Redesign
// ─────────────────────────────────────────────
export const Hero = () => {
  return (
    <>
      <style>{`
        .hero2-section {
          position: relative; 
          background: #fafaf8;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          padding-top: 170px;
        }
        .hero2-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        .hero2-glow {
          position: absolute; top: -10%; left: -5%;
          width: 60%; height: 80%;
          background: radial-gradient(circle, rgba(255,100,0,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero2-container {
          position: relative; z-index: 10;
          max-width: 1300px; margin: 0 auto; padding: 0 28px;
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .hero2-container { grid-template-columns: 1fr; text-align: center; padding-top: 40px; }
        }
        .hero2-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,100,0,0.08);
          border: 1.5px solid rgba(255,100,0,0.18);
          border-radius: 100px; padding: 6px 18px 6px 10px;
          margin-bottom: 24px;
        }
        .hero2-eyebrow-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #ff6400;
        }
        .hero2-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(40px, 6vw, 84px);
          font-weight: 950; color: #111;
          line-height: 0.95; letter-spacing: -3px;
          margin-bottom: 24px;
        }
        .hero2-title em {
          font-style: normal; color: #ff6400;
          position: relative; display: inline-block;
        }
        .hero2-title em::after {
          content: ''; position: absolute; bottom: 10px; left: 0; right: 0;
          height: 8px; background: rgba(255,100,0,0.15); z-index: -1;
        }
        .hero2-desc {
          font-size: 18px; color: #555; line-height: 1.6;
          max-width: 540px; margin-bottom: 40px;
        }
        @media (max-width: 1024px) { .hero2-desc { margin-left: auto; margin-right: auto; } }
        
        .hero2-btns { display: flex; align-items: center; gap: 20px; }
        @media (max-width: 1024px) { .hero2-btns { justify-content: center; } }
        
        .hero2-btn-p {
          background: #ff6400; color: #fff;
          padding: 18px 36px; border-radius: 100px;
          font-weight: 700; font-size: 15px;
          display: inline-flex; align-items: center; gap: 10px;
          box-shadow: 0 10px 30px rgba(255,100,0,0.3);
          transition: transform 0.3s, box-shadow 0.3s;
          text-decoration: none;
        }
        .hero2-btn-p:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(255,100,0,0.4); }
        
        .hero2-btn-s {
          color: #111; font-weight: 700; font-size: 15px;
          display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none; border-bottom: 2px solid transparent;
          transition: border-color 0.3s;
        }
        .hero2-btn-s:hover { border-color: #ff6400; }

        .hero2-features {
          margin-top: 60px; display: flex; gap: 32px;
        }
        @media (max-width: 1024px) { .hero2-features { justify-content: center; flex-wrap: wrap; } }
        .hero2-feat { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 600; color: #777; }
        .hero2-feat-icon { color: #ff6400; }

        .hero2-img-wrap { position: relative; }
        @media (max-width: 1024px) { .hero2-img-wrap { display: none; } }
        .hero2-main-img {
          width: 100%; height: auto; border-radius: 40px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
          position: relative; z-index: 2;
        }
        .hero2-floating-card {
          position: absolute; background: #fff;
          border-radius: 20px; padding: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          display: flex; align-items: center; gap: 12px;
          z-index: 3; animation: hero2-float 4s ease-in-out infinite;
        }
        @keyframes hero2-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hero2-fc-1 { top: 10%; left: -10%; }
        .hero2-fc-2 { bottom: 15%; right: -5%; animation-delay: 2s; }
      `}</style>

      <section className="hero2-section">
        <div className="hero2-dots" />
        <div className="hero2-glow" />

        <div className="hero2-container">
          <div className="hero2-content">
            <div className="hero2-eyebrow">
              <span className="hero2-eyebrow-text">Trusted by 10,000+ Athletes</span>
            </div>
            <h1 className="hero2-title">
              Fuel Your<br /><em>Performance</em>
            </h1>
            <p className="hero2-desc">
              Experience the next level of nutrition with chef-prepared,
              athlete-designed meal plans delivered straight to your door.
            </p>

            <div className="hero2-btns">
              <Link href="/services" className="hero2-btn-p">
                Get Started Now <ArrowUpRight size={18} />
              </Link>
              <Link href="/appointment" className="hero2-btn-s">
                Free Consultation
              </Link>
            </div>

            <div className="hero2-features">
              <div className="hero2-feat">
                <CheckCircle className="hero2-feat-icon" size={18} />
                <span>Chef Prepared</span>
              </div>
              <div className="hero2-feat">
                <CheckCircle className="hero2-feat-icon" size={18} />
                <span>Gym Approved</span>
              </div>
              <div className="hero2-feat">
                <CheckCircle className="hero2-feat-icon" size={18} />
                <span>Daily Delivery</span>
              </div>
            </div>
          </div>

          <div className="hero2-img-wrap">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=100&w=1400" alt="Healthy Meal" className="hero2-main-img" />

            <div className="hero2-floating-card hero2-fc-1">
              <div style={{ background: 'rgba(255,100,0,0.1)', padding: 10, borderRadius: 12 }}>🔥</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800 }}>High Protein</div>
                <div style={{ fontSize: 11, color: '#999' }}>Optimized for Muscle</div>
              </div>
            </div>

            <div className="hero2-floating-card hero2-fc-2">
              <div style={{ background: 'rgba(34,197,94,0.1)', padding: 10, borderRadius: 12 }}>🥗</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800 }}>Fresh Ingredients</div>
                <div style={{ fontSize: 11, color: '#999' }}>100% Organic</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────
// ExpertiseSection — Light Theme
// ─────────────────────────────────────────────
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const ExpertiseSection = () => {
  const items = [
    { title: "Weight Gain", desc: "Strategically designed high-calorie meal plans to help you build lean muscle mass effectively.", badge: "Gym Approved", emoji: "🏋️", number: "01" },
    { title: "Fat Loss", desc: "Calorie-controlled, high-protein meals designed to keep you satiated while losing body fat.", badge: "Chef Made", emoji: "🔥", number: "02", active: true },
    { title: "Personal Coaching", desc: "1-on-1 nutrition guidance to optimize your performance and lifestyle through better eating.", badge: "Expert Led", emoji: "🎯", number: "03" },
    { title: "Performance", desc: "Elite nutrition for athletes focusing on recovery, stamina, and peak physical condition.", badge: "Premium Quality", emoji: "⚡", number: "04" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

        .exp2-section {
          background: #fafaf8;
          position: relative; overflow: hidden;
          padding: 100px 0;
          font-family: 'Inter', sans-serif;
        }
        .exp2-section::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,100,0,0.3), transparent);
        }
        .exp2-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 28px 28px; pointer-events: none; z-index: 0;
        }
        .exp2-glow {
          position: absolute; bottom: -150px; right: -150px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,100,0,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .exp2-container {
          position: relative; z-index: 1;
          max-width: 1300px; margin: 0 auto; padding: 0 28px;
        }
        .exp2-header { text-align: center; margin-bottom: 64px; }

        .exp2-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,100,0,0.08);
          border: 1.5px solid rgba(255,100,0,0.2);
          border-radius: 100px; padding: 6px 18px 6px 10px; margin-bottom: 20px;
        }
        .exp2-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #ff6400; animation: exp2-pulse 2s ease-in-out infinite;
        }
        @keyframes exp2-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        .exp2-eyebrow-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase; color: #ff6400;
        }
        .exp2-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(36px, 5vw, 60px); font-weight: 900;
          color: #111; line-height: 1.05; letter-spacing: -1px; margin: 0;
        }
        .exp2-heading em { font-style: normal; color: #ff6400; }
        .exp2-subtext {
          font-size: 15px; color: #777; font-weight: 400;
          margin-top: 16px; max-width: 460px;
          margin-left: auto; margin-right: auto; line-height: 1.75;
        }

        .exp2-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 20px;
        }
        @media (max-width: 1024px) { .exp2-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 580px) { .exp2-grid { grid-template-columns: 1fr; } }

        .exp2-card {
          position: relative;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.07);
          border-radius: 24px; padding: 32px 26px 26px;
          display: flex; flex-direction: column;
          transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
          overflow: hidden; cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .exp2-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,100,0,0.06) 0%, transparent 60%);
          opacity: 0; transition: opacity .35s; border-radius: 24px;
        }
        .exp2-card:hover::before, .exp2-card.is-active::before { opacity: 1; }
        .exp2-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,100,0,0.3);
          box-shadow: 0 20px 56px rgba(0,0,0,0.09), 0 0 0 1px rgba(255,100,0,0.1);
        }
        .exp2-card.is-active {
          border-color: #ff6400;
          box-shadow: 0 16px 48px rgba(255,100,0,0.15), 0 0 0 1px rgba(255,100,0,0.2);
        }

        /* orange top stripe on active */
        .exp2-card.is-active::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: #ff6400;
        }

        .exp2-card-num {
          position: absolute; top: 20px; right: 22px;
          font-family: 'Montserrat', sans-serif;
          font-size: 52px; font-weight: 900; line-height: 1;
          color: rgba(0,0,0,0.04);
          letter-spacing: -2px; pointer-events: none;
          transition: color .35s;
        }
        .exp2-card:hover .exp2-card-num,
        .exp2-card.is-active .exp2-card-num { color: rgba(255,100,0,0.07); }

        .exp2-card-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(255,100,0,0.08);
          border: 1.5px solid rgba(255,100,0,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin-bottom: 20px;
          position: relative; z-index: 1;
          transition: background .3s, transform .3s;
        }
        .exp2-card:hover .exp2-card-icon,
        .exp2-card.is-active .exp2-card-icon {
          background: rgba(255,100,0,0.15); transform: scale(1.08);
        }

        .exp2-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 20px; font-weight: 800;
          color: #111; margin-bottom: 10px; line-height: 1.1;
          position: relative; z-index: 1; letter-spacing: -.3px;
        }
        .exp2-card.is-active .exp2-card-title { color: #ff6400; }
        .exp2-card.is-active .exp2-card-title::after,
        .exp2-card:hover .exp2-card-title::after {
          content: ''; display: block;
          width: 32px; height: 2.5px;
          background: #ff6400; border-radius: 2px; margin-top: 6px;
        }

        .exp2-card-desc {
          font-size: 13.5px; line-height: 1.75;
          color: #777; font-weight: 400;
          flex: 1; margin-bottom: 24px;
          position: relative; z-index: 1;
        }

        .exp2-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          position: relative; z-index: 1;
          padding-top: 18px;
          border-top: 1px solid rgba(0,0,0,0.07);
        }
        .exp2-card.is-active .exp2-card-footer,
        .exp2-card:hover .exp2-card-footer {
          border-top-color: rgba(255,100,0,0.15);
        }

        .exp2-card-badge {
          display: flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 600;
          letter-spacing: .5px; color: #aaa; text-transform: uppercase;
        }
        .exp2-card-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #ff6400; opacity: .4;
        }
        .exp2-card:hover .exp2-card-badge-dot,
        .exp2-card.is-active .exp2-card-badge-dot { opacity: 1; }

        .exp2-card-arrow {
          width: 36px; height: 36px; border-radius: 50%;
          background: #f5f3f0;
          border: 1.5px solid rgba(0,0,0,0.1);
          display: inline-flex; align-items: center; justify-content: center;
          color: #888; text-decoration: none;
          transition: background .25s, color .25s, border-color .25s, transform .25s;
          flex-shrink: 0;
        }
        .exp2-card:hover .exp2-card-arrow,
        .exp2-card.is-active .exp2-card-arrow {
          background: #ff6400; border-color: #ff6400;
          color: #fff; transform: rotate(45deg);
        }

        .exp2-active-chip {
          position: absolute; top: 20px; left: 26px;
          background: #ff6400; color: #fff;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px; z-index: 2;
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <section className="exp2-section">
        <div className="exp2-glow" />
        <div className="exp2-dots" />
        <div className="exp2-container">
          <div className="exp2-header">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="exp2-eyebrow">
                <div className="exp2-eyebrow-dot" />
                <span className="exp2-eyebrow-text">Our Expertise</span>
              </div>
            </div>
            <h2 className="exp2-heading">
              Professional <em>Performance</em><br />Nutrition
            </h2>
            <p className="exp2-subtext">
              Precision-crafted programs for every fitness goal — built by experts, delivered fresh.
            </p>
          </div>

          <div className="exp2-grid">
            {items.map((item, index) => (
              <div key={index} className={`exp2-card${item.active ? ' is-active' : ''}`}>
                {item.active && <div className="exp2-active-chip">Most Popular</div>}
                <div className="exp2-card-num">{item.number}</div>
                <div className="exp2-card-icon" style={{ marginTop: item.active ? '28px' : '0' }}>
                  {item.emoji}
                </div>
                <h3 className="exp2-card-title">{item.title}</h3>
                <p className="exp2-card-desc">{item.desc}</p>
                <div className="exp2-card-footer">
                  <div className="exp2-card-badge">
                    <div className="exp2-card-badge-dot" />{item.badge}
                  </div>
                  <Link href="/services" className="exp2-card-arrow">
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────
// ServicesSection — Light Theme
// ─────────────────────────────────────────────
import { ArrowRight } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    { title: "Customized Meal Plans", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=100&w=1000", description: "Tailored nutrition strategies designed to meet your specific fitness and performance goals.", emoji: "🥗", tag: "Nutrition" },
    { title: "Performance Coaching", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=100&w=1000", description: "Expert guidance for athletes and gym enthusiasts to optimize body composition and energy.", emoji: "💪", tag: "Coaching", active: true },
    { title: "Daily Tiffin Service", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=100&w=1000", description: "Fresh, chef-made meals delivered daily with both Veg and Non-Veg options available.", emoji: "🍱", tag: "Delivery" },
    { title: "Specialized Diet Programs", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=100&w=1000", description: "High-protein, zero-carb, and balanced nutrition programs approved by top fitness experts.", emoji: "⚡", tag: "Programs" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

        .srv2-section {
          background: #f5f3f0;
          position: relative; overflow: hidden;
          padding: 100px 0;
          font-family: 'Inter', sans-serif;
        }
        .srv2-section::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,100,0,0.35), transparent);
        }
        .srv2-glow {
          position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(255,100,0,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .srv2-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 28px 28px; pointer-events: none;
        }
        .srv2-container {
          position: relative; z-index: 1;
          max-width: 1300px; margin: 0 auto; padding: 0 28px;
        }
        .srv2-header { text-align: center; margin-bottom: 64px; }
        .srv2-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,100,0,0.08);
          border: 1.5px solid rgba(255,100,0,0.2);
          border-radius: 100px; padding: 6px 18px 6px 10px; margin-bottom: 20px;
        }
        .srv2-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #ff6400; animation: srv2-pulse 2s ease-in-out infinite;
        }
        @keyframes srv2-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
        .srv2-eyebrow-text {
          font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #ff6400;
        }
        .srv2-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(36px, 5vw, 60px); font-weight: 900;
          color: #111; line-height: 1.05; letter-spacing: -1px; margin: 0;
        }
        .srv2-heading em { font-style: normal; color: #ff6400; }
        .srv2-subtext {
          font-size: 15px; color: #777; font-weight: 400;
          margin-top: 16px; max-width: 480px;
          margin-left: auto; margin-right: auto; line-height: 1.75;
        }

        .srv2-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 20px;
        }
        @media (max-width: 1024px) { .srv2-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 580px) { .srv2-grid { grid-template-columns: 1fr; } }

        .srv2-card {
          position: relative; border-radius: 24px; overflow: hidden;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.07);
          display: flex; flex-direction: column;
          transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .srv2-card:hover {
          transform: translateY(0px);
          border-color: rgba(255,100,0,0.3);
          box-shadow: 0 20px 56px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,100,0,0.1);
        }
        .srv2-card.is-active {
          border-color: #ff6400;
          box-shadow: 0 12px 40px rgba(255,100,0,0.15), 0 0 0 1px rgba(255,100,0,0.15);
        }
        .srv2-card.is-active::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: #ff6400; z-index: 3;
        }

        .srv2-card-img-wrap {
          position: relative; overflow: hidden; height: 200px; flex-shrink: 0;
        }
        .srv2-card-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .5s ease;
        }
        .srv2-card:hover .srv2-card-img-wrap img { transform: scale(1); }
        .srv2-card-img-wrap::after {
          content: ''; position: absolute; bottom: -10px; left: 0; right: 0; height: 70%;
          background: linear-gradient(to top, #fff, transparent);
        }
        .srv2-card.is-active .srv2-card-img-wrap::after {
          background: linear-gradient(to top, #fff8f4, transparent);
        }

        .srv2-card-tag {
          position: absolute; top: 14px; left: 14px; z-index: 2;
          background: rgba(255,255,255,0.9); backdrop-filter: blur(8px);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 100px; padding: 4px 12px;
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #555;
          font-family: 'Inter', sans-serif;
        }
        .srv2-card-active-badge {
          position: absolute; top: 14px; right: 14px; z-index: 2;
          background: #ff6400; border-radius: 100px; padding: 4px 12px;
          font-size: 10px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: #fff;
          font-family: 'Inter', sans-serif;
        }

        .srv2-card-body {
          padding: 20px 22px 26px; display: flex; flex-direction: column; flex: 1;
        }
        .srv2-card-emoji {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(255,100,0,0.08);
          border: 1.5px solid rgba(255,100,0,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; margin-bottom: 14px;
          margin-top: -38px; position: relative; z-index: 3;
          transition: background .3s; box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .srv2-card:hover .srv2-card-emoji { background: rgba(255,100,0,0.15); }

        .srv2-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px; font-weight: 800;
          color: #111; margin-bottom: 8px; line-height: 1.1; letter-spacing: -.3px;
        }
        .srv2-card-rule {
          height: 1px; margin-bottom: 12px;
          background: linear-gradient(90deg, rgba(255,100,0,0.2), transparent);
        }
        .srv2-card-desc {
          font-size: 13.5px; line-height: 1.75;
          color: #777; font-weight: 400; flex: 1; margin-bottom: 20px;
        }
        .srv2-card-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; color: #ff6400;
          text-decoration: none; letter-spacing: .3px;
          transition: gap .25s; font-family: 'Inter', sans-serif;
        }
        .srv2-card-link:hover { gap: 12px; }
        .srv2-card-link-icon {
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(255,100,0,0.1);
          display: inline-flex; align-items: center; justify-content: center;
          transition: background .25s, color .25s;
        }
        .srv2-card-link:hover .srv2-card-link-icon {
          background: #ff6400; color: #fff;
        }
      `}</style>

      <section className="srv2-section">
        <div className="srv2-glow" />
        <div className="srv2-dots" />
        <div className="srv2-container">
          <div className="srv2-header">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="srv2-eyebrow">
                <div className="srv2-eyebrow-dot" />
                <span className="srv2-eyebrow-text">Our Services</span>
              </div>
            </div>
            <h2 className="srv2-heading">
              The Best Quality <em>Service</em><br />You Can Get
            </h2>
            <p className="srv2-subtext">
              From gym-approved meal plans to daily chef-made tiffin — everything your performance demands.
            </p>
          </div>

          <div className="srv2-grid">
            {services.map((service, index) => (
              <div key={index} className={`srv2-card${service.active ? ' is-active' : ''}`}>
                <div className="srv2-card-img-wrap">
                  <img src={service.image} alt={service.title} />
                  <div className="srv2-card-tag">{service.tag}</div>
                  {service.active && <div className="srv2-card-active-badge">Popular</div>}
                </div>
                <div className="srv2-card-body">
                  <div className="srv2-card-emoji">{service.emoji}</div>
                  <h3 className="srv2-card-title">{service.title}</h3>
                  <div className="srv2-card-rule" />
                  <p className="srv2-card-desc">{service.description}</p>
                  <Link href="/service-detail" className="srv2-card-link">
                    View Details
                    <span className="srv2-card-link-icon"><ArrowRight size={13} /></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────
// TestimonialSection — Light Theme
// ─────────────────────────────────────────────
import { Play, Quote } from 'lucide-react';

const testimonials = [
  { video: 'images/testimonial/large/img2.webp', avatar: 'images/testimonial/small/img1.webp', name: 'Kenneth Fong', role: 'Postgraduate Student', src: 'https://www.youtube.com/embed/o8OgzQdA70c' },
  { video: 'images/testimonial/large/img3.webp', avatar: 'images/testimonial/small/img2.webp', name: 'Sarah Mitchell', role: 'Fitness Enthusiast', src: 'https://www.youtube.com/embed/o8OgzQdA70c' },
  { video: 'images/testimonial/large/img4.webp', avatar: 'images/testimonial/small/img3.webp', name: 'Raj Patel', role: 'Amateur Athlete', src: 'https://www.youtube.com/embed/o8OgzQdA70c' },
];

export const TestimonialSection = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap');
      .tst2-section {
        background: #fafaf8; position: relative; overflow: hidden;
        padding: 100px 0; font-family: 'Inter', sans-serif;
      }
      .tst2-section::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,100,0,0.3), transparent);
      }
      .tst2-dots {
        position: absolute; inset: 0;
        background-image: radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);
        background-size: 28px 28px; pointer-events: none;
      }
      /* decorative circles */
      .tst2-circ-1 {
        position: absolute; top: -80px; right: -80px;
        width: 360px; height: 360px; border-radius: 50%;
        border: 1px solid rgba(255,100,0,0.07);
        pointer-events: none;
      }
      .tst2-circ-2 {
        position: absolute; bottom: -60px; left: -60px;
        width: 280px; height: 280px; border-radius: 50%;
        border: 1px solid rgba(255,100,0,0.05);
        pointer-events: none;
      }
      .tst2-container {
        position: relative; z-index: 1;
        max-width: 1300px; margin: 0 auto; padding: 0 28px;
      }
      .tst2-header { text-align: center; margin-bottom: 60px; }
      .tst2-eyebrow {
        display: inline-flex; align-items: center; gap: 8px;
        background: rgba(255,100,0,0.08); border: 1.5px solid rgba(255,100,0,0.2);
        border-radius: 100px; padding: 6px 18px 6px 10px; margin-bottom: 20px;
      }
      .tst2-eyebrow-dot { width:8px;height:8px;border-radius:50%;background:#ff6400;animation:tst2-p 2s ease-in-out infinite; }
      @keyframes tst2-p{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
      .tst2-eyebrow-text{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#ff6400;}
      .tst2-heading{font-family:'Montserrat',sans-serif;font-size:clamp(36px,5vw,58px);font-weight:900;color:#111;line-height:1.05;letter-spacing:-1px;margin:0;}
      .tst2-heading em{font-style:normal;color:#ff6400;}
      .tst2-subtext{font-size:15px;color:#777;font-weight:400;margin-top:16px;line-height:1.75;}

      .tst2-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      @media(max-width:1024px){.tst2-grid{grid-template-columns:repeat(2,1fr);}}
      @media(max-width:600px){.tst2-grid{grid-template-columns:1fr;}}

      .tst2-card{
        background:#fff;border:1.5px solid rgba(0,0,0,0.07);border-radius:24px;
        overflow:hidden;display:flex;flex-direction:column;
        transition:transform .35s,border-color .35s,box-shadow .35s;
        box-shadow:0 2px 10px rgba(0,0,0,0.04);
      }
      .tst2-card:hover{transform:translateY(-6px);border-color:rgba(255,100,0,0.25);box-shadow:0 20px 56px rgba(0,0,0,0.09);}

      .tst2-thumb{position:relative;height:220px;overflow:hidden;flex-shrink:0;}
      .tst2-thumb img{width:100%;height:100%;object-fit:cover;filter:brightness(.7) saturate(1.1);transition:transform .5s,filter .4s;display:block;}
      .tst2-card:hover .tst2-thumb img{transform:scale(1.05);filter:brightness(.75) saturate(1.3);}
      // .tst2-thumb::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(255,255,255,.92) 0%,rgba(0,0,0,.1) 50%,transparent 100%);pointer-events:none;}

      .tst2-play{
        position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
        width:64px;height:64px;border-radius:50%;
        background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);
        border:2px solid rgba(255,100,0,0.3);
        display:flex;align-items:center;justify-content:center;
        color:#ff6400;z-index:2;cursor:pointer;
        transition:background .3s,transform .3s,border-color .3s;
        box-shadow:0 8px 24px rgba(0,0,0,0.12);
      }
      .tst2-play::before{
        content:'';position:absolute;width:88px;height:88px;border-radius:50%;
        border:1px solid rgba(255,100,0,0.2);animation:tst2-ring 2.2s ease-out infinite;
      }
      @keyframes tst2-ring{0%{transform:scale(.85);opacity:.9}100%{transform:scale(1.35);opacity:0}}
      .tst2-card:hover .tst2-play,.tst2-play:hover{background:#ff6400;border-color:#ff6400;color:#fff;transform:translate(-50%,-50%) scale(1.1);}

      .tst2-duration{
        position:absolute;bottom:14px;right:14px;z-index:3;
        background:rgba(255,255,255,0.9);backdrop-filter:blur(8px);
        border:1px solid rgba(0,0,0,0.08);border-radius:100px;padding:4px 10px;
        font-size:11px;font-weight:600;color:#555;letter-spacing:.5px;
        font-family:'Inter',sans-serif;
      }

      .tst2-card-body{padding:20px 22px 22px;position:relative;}
      .tst2-quote-mark{position:absolute;top:12px;right:16px;color:#ff6400;opacity:.06;pointer-events:none;}
      .tst2-author{display:flex;align-items:center;gap:12px;}
      .tst2-avatar{width:46px;height:46px;border-radius:50%;flex-shrink:0;object-fit:cover;border:2.5px solid rgba(255,100,0,0.25);transition:border-color .3s;}
      .tst2-card:hover .tst2-avatar{border-color:#ff6400;}
      .tst2-author-name{font-size:14px;font-weight:700;color:#111;margin-bottom:2px;font-family:'Montserrat',sans-serif;}
      .tst2-author-role{font-size:11.5px;color:#aaa;font-weight:400;letter-spacing:.3px;}
      .tst2-stars{display:flex;gap:3px;margin-left:auto;}
      .tst2-card-divider{height:1px;margin:14px 0;background:linear-gradient(90deg,rgba(255,100,0,0.15),transparent);}
      .tst2-watch-label{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#bbb;font-family:'Inter',sans-serif;}
      .tst2-watch-dot{width:6px;height:6px;border-radius:50%;background:#ff6400;opacity:.5;}

      .tst2-stats{
        margin-top:60px;display:grid;grid-template-columns:repeat(3,1fr);
        gap:1px;background:rgba(0,0,0,0.06);border-radius:20px;overflow:hidden;
        border:1.5px solid rgba(0,0,0,0.07);
        box-shadow:0 4px 20px rgba(0,0,0,0.05);
      }
      @media(max-width:600px){.tst2-stats{grid-template-columns:1fr;}}
      .tst2-stat{background:#fff;padding:28px 32px;display:flex;align-items:center;gap:16px;}
      .tst2-stat-icon{width:44px;height:44px;border-radius:12px;flex-shrink:0;background:rgba(255,100,0,0.08);border:1.5px solid rgba(255,100,0,0.15);display:flex;align-items:center;justify-content:center;font-size:20px;}
      .tst2-stat-value{font-family:'Montserrat',sans-serif;font-size:34px;font-weight:900;color:#111;line-height:1;letter-spacing:-1px;}
      .tst2-stat-label{font-size:12px;color:#aaa;font-weight:500;letter-spacing:.3px;margin-top:2px;font-family:'Inter',sans-serif;}
    `}</style>

    <section className="tst2-section">
      <div className="tst2-dots" />
      <div className="tst2-circ-1" />
      <div className="tst2-circ-2" />
      <div className="tst2-container">
        <div className="tst2-header">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="tst2-eyebrow">
              <div className="tst2-eyebrow-dot" />
              <span className="tst2-eyebrow-text">Testimonials</span>
            </div>
          </div>
          <h2 className="tst2-heading">Real Results.<br /><em>Real Stories.</em></h2>
          <p className="tst2-subtext">Hear directly from our members — gym-goers, athletes, and everyday people transforming through food.</p>
        </div>

        <div className="tst2-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="tst2-card">
              <div className="tst2-thumb">
                <img src={t.video} alt={t.name} />
                <button className="tst2-play" data-type="youtube" data-src={t.src}>
                  <Play fill="currentColor" size={20} />
                </button>
                <div className="tst2-duration">▶ Watch Story</div>
              </div>
              <div className="tst2-card-body">
                <Quote className="tst2-quote-mark" size={56} />
                <div className="tst2-card-divider" />
                <div className="tst2-author">
                  <img src={t.avatar} alt={t.name} className="tst2-avatar" />
                  <div>
                    <div className="tst2-author-name">{t.name}</div>
                    <div className="tst2-author-role">{t.role}</div>
                  </div>
                  <div className="tst2-stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} style={{ fontSize: 12 }}>⭐</span>
                    ))}
                  </div>
                </div>
                <div className="tst2-card-divider" />
                <div className="tst2-watch-label">
                  <div className="tst2-watch-dot" /> Video Testimonial
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tst2-stats">
          {[
            { icon: '🎥', value: '500+', label: 'Success Stories' },
            { icon: '⭐', value: '4.9', label: 'Average Rating' },
            { icon: '💪', value: '98%', label: 'Client Satisfaction' },
          ].map((s, i) => (
            <div key={i} className="tst2-stat">
              <div className="tst2-stat-icon">{s.icon}</div>
              <div>
                <div className="tst2-stat-value">{s.value}</div>
                <div className="tst2-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

// ─────────────────────────────────────────────
// AppointmentCTA — Light Theme
// ─────────────────────────────────────────────
import { ArrowRight as Arrow, Calendar, CheckCircle } from 'lucide-react';

export const AppointmentCTA = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
      .appt2-section{
        position:relative;overflow:hidden;
        font-family:'Inter',sans-serif;
        background:#f5f3f0;
      }
      .appt2-bg{position:absolute;inset:0;background-image:url(images/background/bg2.png);background-size:cover;background-position:center;filter:brightness(.2) saturate(.4);}
      /* warm orange sweep from left */
      .appt2-sweep{position:absolute;inset:0;background:linear-gradient(105deg,rgba(255,100,0,.22) 0%,transparent 55%);pointer-events:none;}
      /* top fade to white */
      .appt2-fade-t{position:absolute;top:0;left:0;right:0;height:40%;background:linear-gradient(to bottom,rgba(250,250,248,.95),transparent);pointer-events:none;}
      .appt2-fade-b{position:absolute;bottom:0;left:0;right:0;height:40%;background:linear-gradient(to top,rgba(250,250,248,.9),transparent);pointer-events:none;}
      .appt2-dots{position:absolute;inset:0;background-image:radial-gradient(circle,rgba(0,0,0,.025) 1px,transparent 1px);background-size:26px 26px;pointer-events:none;}
      .appt2-rule{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(255,100,0,.5),transparent);}
      .appt2-glow{position:absolute;top:-120px;right:-80px;width:500px;height:500px;background:radial-gradient(circle,rgba(255,100,0,.08) 0%,transparent 65%);pointer-events:none;}

      .appt2-layout{
        position:relative;z-index:2;display:grid;grid-template-columns:5fr 7fr;
        min-height:480px;max-width:1300px;margin:0 auto;
      }
      @media(max-width:768px){.appt2-layout{grid-template-columns:1fr;}}

      .appt2-img-col{position:relative;display:flex;align-items:flex-end;overflow:hidden;}
      @media(max-width:768px){.appt2-img-col{display:none;}}
      .appt2-img{width:100%;object-fit:cover;display:block;filter:drop-shadow(0 -20px 40px rgba(0,0,0,.1));position:relative;z-index:1;}
      .appt2-img-col::before{content:'';position:absolute;bottom:-80px;left:50%;transform:translateX(-50%);width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(255,100,0,.12) 0%,transparent 70%);}

      .appt2-content{display:flex;flex-direction:column;justify-content:center;padding:80px 60px 80px 48px;}
      @media(max-width:1024px){.appt2-content{padding:60px 40px;}}
      @media(max-width:640px){.appt2-content{padding:56px 24px;}}

      .appt2-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(255,100,0,.1);border:1.5px solid rgba(255,100,0,.25);border-radius:100px;padding:6px 16px 6px 8px;margin-bottom:20px;width:fit-content;}
      .appt2-eyebrow-icon{width:24px;height:24px;border-radius:50%;background:#ff6400;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
      .appt2-eyebrow-text{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#ff6400;}

      .appt2-heading{font-family:'Montserrat',sans-serif;font-size:clamp(38px,5vw,64px);font-weight:900;color:#111;line-height:1.0;letter-spacing:-1.5px;margin-bottom:20px;}
      .appt2-heading em{font-style:normal;color:#ff6400;}

      .appt2-sub{font-size:15px;color:#666;font-weight:400;line-height:1.75;max-width:420px;margin-bottom:32px;}

      .appt2-cta-row{display:flex;align-items:center;gap:20px;flex-wrap:wrap;}
      .appt2-btn-primary{
        display:inline-flex;align-items:center;gap:10px;
        background:#ff6400;color:#fff;
        font-size:14px;font-weight:700;letter-spacing:.3px;
        padding:15px 30px;border-radius:100px;text-decoration:none;
        box-shadow:0 8px 28px rgba(255,100,0,.35);
        transition:transform .25s,box-shadow .25s;
        font-family:'Inter',sans-serif;
      }
      .appt2-btn-primary:hover{transform:translateY(-3px);box-shadow:0 16px 44px rgba(255,100,0,.45);}
      .appt2-btn-icon{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.2);display:inline-flex;align-items:center;justify-content:center;}
      .appt2-btn-ghost{
        display:inline-flex;align-items:center;gap:8px;
        background:rgba(0,0,0,.05);border:1.5px solid rgba(0,0,0,.12);
        color:#555;font-size:14px;font-weight:600;
        padding:15px 24px;border-radius:100px;text-decoration:none;
        transition:background .25s,color .25s;font-family:'Inter',sans-serif;
      }
      .appt2-btn-ghost:hover{background:rgba(0,0,0,.09);color:#111;}

      .appt2-guarantee{display:flex;align-items:center;gap:8px;margin-top:24px;font-size:12px;color:#aaa;font-weight:500;font-family:'Inter',sans-serif;}
      .appt2-guarantee-icon{color:#22c55e;}
    `}</style>

    <section className="appt2-section">
      <div className="appt2-bg" />
      <div className="appt2-sweep" />
      <div className="appt2-fade-t" />
      <div className="appt2-fade-b" />
      <div className="appt2-dots" />
      <div className="appt2-rule" />
      <div className="appt2-glow" />

      <div className="appt2-layout">
        <div className="appt2-img-col">
          <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=100&w=1200" alt="Consultation" className="appt2-img" />
        </div>
        <div className="appt2-content">
          <div className="appt2-eyebrow">
            <div className="appt2-eyebrow-icon"><Calendar size={13} color="#fff" /></div>
            <span className="appt2-eyebrow-text">Free Consultation</span>
          </div>
          <h2 className="appt2-heading">
            Ready to Start<br />Your <em>Fuel</em> Journey?
          </h2>
          <p className="appt2-sub">
            Schedule a free consultation with our nutrition experts. We'll build a meal plan tailored to your exact fitness goals.
          </p>
          <div className="appt2-cta-row">
            <Link href="/appointment" className="appt2-btn-primary">
              Book Appointment
              <span className="appt2-btn-icon"><Arrow size={16} /></span>
            </Link>
            <Link href="/services" className="appt2-btn-ghost">View Plans</Link>
          </div>
          <div className="appt2-guarantee">
            <CheckCircle size={14} className="appt2-guarantee-icon" />
            No commitment · Cancel anytime · Free first consultation
          </div>
        </div>
      </div>
    </section>
  </>
);

// ─────────────────────────────────────────────
// BlogSection — Light Theme
// ─────────────────────────────────────────────
import { ArrowRight as Arr, ArrowUpRight as ArrUR } from 'lucide-react';

export const BlogSection = () => {
  const blogs = [
    { title: "Healthy Eating Habits for a Better Life", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=100&w=1000", date: "17 May 2025", author: "Nashid Martines" },
    { title: "Discover the Power of Balanced Daily Nutrition", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=100&w=1000", date: "17 May 2025", author: "Nashid Martines" },
    { title: "Eat Well, Live Strong, Stay Energized Always", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=100&w=1000", date: "17 May 2025", author: "Nashid Martines" },
  ];
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap');
        .blog2-section{background:#f5f3f0;position:relative;overflow:hidden;padding:100px 0;font-family:'Inter',sans-serif;}
        .blog2-section::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,100,0,.3),transparent);}
        .blog2-dots{position:absolute;inset:0;background-image:radial-gradient(circle,rgba(0,0,0,.04) 1px,transparent 1px);background-size:28px 28px;pointer-events:none;}
        .blog2-container{position:relative;z-index:1;max-width:1300px;margin:0 auto;padding:0 28px;}
        .blog2-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:56px;flex-wrap:wrap;gap:20px;}
        .blog2-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(255,100,0,.08);border:1.5px solid rgba(255,100,0,.2);border-radius:100px;padding:6px 18px 6px 10px;margin-bottom:16px;}
        .blog2-eyebrow-dot{width:8px;height:8px;border-radius:50%;background:#ff6400;animation:blog2-p 2s ease-in-out infinite;}
        @keyframes blog2-p{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
        .blog2-eyebrow-text{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#ff6400;}
        .blog2-heading{font-family:'Montserrat',sans-serif;font-size:clamp(28px,3.5vw,46px);font-weight:900;color:#111;line-height:1.05;letter-spacing:-1px;margin:0;}
        .blog2-heading em{font-style:normal;color:#ff6400;}
        .blog2-view-all{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#ff6400;text-decoration:none;font-family:'Inter',sans-serif;transition:gap .2s;}
        .blog2-view-all:hover{gap:10px;}

        .blog2-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        @media(max-width:1024px){.blog2-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:640px){.blog2-grid{grid-template-columns:1fr;}}

        .blog2-card{
          background:#fff;border:1.5px solid rgba(0,0,0,.07);border-radius:24px;overflow:hidden;
          transition:transform .35s,box-shadow .35s,border-color .35s;
          box-shadow:0 2px 10px rgba(0,0,0,.04);position:relative;
        }
        .blog2-card:hover{transform:translateY(-6px);border-color:rgba(255,100,0,.25);box-shadow:0 20px 56px rgba(0,0,0,.09);}
        .blog2-img-wrap{height:220px;overflow:hidden;position:relative;}
        .blog2-img-wrap img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s;}
        .blog2-card:hover .blog2-img-wrap img{transform:scale(1.05);}
        /* shine effect on hover */
        .blog2-img-wrap::before{content:'';position:absolute;top:0;left:-75%;width:50%;height:100%;background:linear-gradient(to right,transparent,rgba(255,255,255,.18),transparent);transform:skewX(-25deg);z-index:1;transition:left .6s ease;pointer-events:none;}
        .blog2-card:hover .blog2-img-wrap::before{left:125%;}

        .blog2-card-body{padding:22px 22px 56px;}
        .blog2-card-title{font-family:'Montserrat',sans-serif;font-size:17px;font-weight:800;color:#111;margin-bottom:10px;line-height:1.25;letter-spacing:-.3px;text-decoration:none;display:block;}
        .blog2-card-title:hover{color:#ff6400;}
        .blog2-card-excerpt{font-size:13.5px;color:#888;line-height:1.7;margin-bottom:16px;}
        .blog2-card-meta{display:flex;gap:8px;flex-wrap:wrap;}
        .blog2-meta-pill{
          background:rgba(255,100,0,.08);color:#ff6400;
          font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;
          padding:5px 12px;border-radius:100px;font-family:'Inter',sans-serif;
          border:1px solid rgba(255,100,0,.15);
        }

        .blog2-card-arrow{
          position:absolute;right:18px;bottom:18px;
          width:44px;height:44px;border-radius:50%;
          background:#ff6400;color:#fff;
          display:flex;align-items:center;justify-content:center;
          text-decoration:none;transition:transform .25s,box-shadow .25s;
          box-shadow:0 4px 14px rgba(255,100,0,.3);
        }
        .blog2-card:hover .blog2-card-arrow{transform:rotate(45deg);box-shadow:0 8px 20px rgba(255,100,0,.4);}
      `}</style>
      <section className="blog2-section">
        <div className="blog2-dots" />
        <div className="blog2-container">
          <div className="blog2-header">
            <div>
              <div className="blog2-eyebrow">
                <div className="blog2-eyebrow-dot" />
                <span className="blog2-eyebrow-text">Our Blog</span>
              </div>
              <h2 className="blog2-heading">News & <em>Updates</em></h2>
            </div>
            <Link href="/blog-grid" className="blog2-view-all">
              View All Posts <Arr size={16} />
            </Link>
          </div>
          <div className="blog2-grid">
            {blogs.map((b, i) => (
              <div key={i} className="blog2-card">
                <div className="blog2-img-wrap">
                  <img src={b.image} alt={b.title} />
                </div>
                <div className="blog2-card-body">
                  <Link href="/blog-details" className="blog2-card-title">{b.title}</Link>
                  <p className="blog2-card-excerpt">It is a long established fact that a reader will be distracted by the readable content.</p>
                  <div className="blog2-card-meta">
                    <span className="blog2-meta-pill">{b.date}</span>
                    <span className="blog2-meta-pill">By {b.author}</span>
                  </div>
                </div>
                <Link href="/blog-details" className="blog2-card-arrow">
                  <ArrUR size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default Hero;

