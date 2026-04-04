import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ExpertiseSection = () => {
  const items = [
    {
      title: "Weight Gain",
      desc: "Strategically designed high-calorie meal plans to help you build lean muscle mass effectively.",
      badge: "Gym Approved",
      emoji: "🏋️",
      number: "01",
      delay: "0.1s"
    },
    {
      title: "Fat Loss",
      desc: "Calorie-controlled, high-protein meals designed to keep you satiated while losing body fat.",
      badge: "Chef Made",
      emoji: "🔥",
      number: "02",
      delay: "0.2s",
      active: true
    },
    {
      title: "Personal Coaching",
      desc: "1-on-1 nutrition guidance to optimize your performance and lifestyle through better eating.",
      badge: "Expert Led",
      emoji: "🎯",
      number: "03",
      delay: "0.3s"
    },
    {
      title: "Performance",
      desc: "Elite nutrition for athletes focusing on recovery, stamina, and peak physical condition.",
      badge: "Premium Quality",
      emoji: "⚡",
      number: "04",
      delay: "0.4s"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .exp-section {
          background: #0d0d0d;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
        }

        .exp-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb,255,100,0),0.45), transparent);
        }

        .exp-glow {
          position: absolute;
          bottom: -150px; right: -150px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; opacity: 0.5;
        }

        .exp-container {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto; padding: 0 24px;
        }

        /* ── Header ── */
        .exp-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .exp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(var(--primary-rgb,255,100,0),0.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),0.25);
          border-radius: 100px;
          padding: 6px 18px 6px 10px;
          margin-bottom: 20px;
        }
        .exp-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--primary, #ff6400);
          animation: exp-pulse 2s ease-in-out infinite;
        }
        @keyframes exp-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        .exp-eyebrow-text {
          font-size: 12px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--primary, #ff6400);
        }

        .exp-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 5.5vw, 72px);
          color: #fff; line-height: 0.95; letter-spacing: 1px; margin: 0;
        }
        .exp-heading em { font-style: normal; color: var(--primary, #ff6400); }

        .exp-subtext {
          font-size: 15px; color: rgba(255,255,255,0.38); font-weight: 300;
          margin-top: 16px; max-width: 440px;
          margin-left: auto; margin-right: auto; line-height: 1.7;
        }

        /* ── Grid ── */
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) { .exp-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 580px)  { .exp-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .exp-card {
          position: relative;
          background: #141414;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px 28px 28px;
          display: flex; flex-direction: column;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden;
          cursor: pointer;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(var(--primary-rgb,255,100,0),0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s;
          border-radius: 20px;
        }
        .exp-card:hover::before,
        .exp-card.is-active::before { opacity: 1; }

        .exp-card:hover {
          transform: translateY(-6px);
          border-color: rgba(var(--primary-rgb,255,100,0),0.35);
          box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(var(--primary-rgb,255,100,0),0.12);
        }
        .exp-card.is-active {
          border-color: rgba(var(--primary-rgb,255,100,0),0.4);
          box-shadow: 0 20px 56px rgba(0,0,0,0.4), 0 0 0 1px rgba(var(--primary-rgb,255,100,0),0.18);
        }

        /* number watermark */
        .exp-card-num {
          position: absolute;
          top: 20px; right: 22px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px; line-height: 1;
          color: rgba(255,255,255,0.04);
          letter-spacing: 1px;
          pointer-events: none;
          transition: color 0.35s;
        }
        .exp-card:hover .exp-card-num,
        .exp-card.is-active .exp-card-num {
          color: rgba(var(--primary-rgb,255,100,0),0.08);
        }

        /* emoji icon */
        .exp-card-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(var(--primary-rgb,255,100,0),0.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
          position: relative; z-index: 1;
          transition: background 0.3s, transform 0.3s;
        }
        .exp-card:hover .exp-card-icon,
        .exp-card.is-active .exp-card-icon {
          background: rgba(var(--primary-rgb,255,100,0),0.2);
          transform: scale(1.08);
        }

        .exp-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px; letter-spacing: 0.5px;
          color: #fff; margin-bottom: 10px;
          line-height: 1.1;
          position: relative; z-index: 1;
        }

        /* orange underline on active */
        .exp-card.is-active .exp-card-title::after,
        .exp-card:hover .exp-card-title::after {
          content: '';
          display: block;
          width: 32px; height: 2px;
          background: var(--primary, #ff6400);
          border-radius: 2px;
          margin-top: 6px;
        }

        .exp-card-desc {
          font-size: 13.5px; line-height: 1.75;
          color: rgba(255,255,255,0.42); font-weight: 300;
          flex: 1; margin-bottom: 24px;
          position: relative; z-index: 1;
        }

        /* Footer row */
        .exp-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          position: relative; z-index: 1;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .exp-card.is-active .exp-card-footer,
        .exp-card:hover .exp-card-footer {
          border-top-color: rgba(var(--primary-rgb,255,100,0),0.2);
        }

        .exp-card-badge {
          display: flex; align-items: center; gap: 7px;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
        }
        .exp-card-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--primary, #ff6400);
          opacity: 0.5;
        }
        .exp-card:hover .exp-card-badge-dot,
        .exp-card.is-active .exp-card-badge-dot { opacity: 1; }

        .exp-card-arrow {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: inline-flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.25s;
          flex-shrink: 0;
        }
        .exp-card:hover .exp-card-arrow,
        .exp-card.is-active .exp-card-arrow {
          background: var(--primary, #ff6400);
          border-color: var(--primary, #ff6400);
          color: #fff;
          transform: rotate(45deg);
        }

        /* active label chip */
        .exp-active-chip {
          position: absolute;
          top: 20px; left: 28px;
          background: var(--primary, #ff6400);
          color: #fff;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px;
          z-index: 2;
        }
      `}</style>

      <section className="exp-section">
        <div className="exp-glow" />
        <div className="exp-grain" />

        <div className="exp-container">
          {/* Header */}
          <div className="exp-header">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="exp-eyebrow">
                <div className="exp-eyebrow-dot" />
                <span className="exp-eyebrow-text">Our Expertise</span>
              </div>
            </div>
            <h2 className="exp-heading">
              Professional <em>Performance</em><br />Nutrition
            </h2>
            <p className="exp-subtext">
              Precision-crafted programs for every fitness goal — built by experts, delivered fresh.
            </p>
          </div>

          {/* Cards */}
          <div className="exp-grid">
            {items.map((item, index) => (
              <div key={index} className={`exp-card${item.active ? ' is-active' : ''}`}>
                {item.active && <div className="exp-active-chip">Most Popular</div>}
                <div className="exp-card-num">{item.number}</div>

                <div className="exp-card-icon" style={{ marginTop: item.active ? '28px' : '0' }}>
                  {item.emoji}
                </div>

                <h3 className="exp-card-title">{item.title}</h3>
                <p className="exp-card-desc">{item.desc}</p>

                <div className="exp-card-footer">
                  <div className="exp-card-badge">
                    <div className="exp-card-badge-dot" />
                    {item.badge}
                  </div>
                  <Link href="/services" className="exp-card-arrow">
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

export default ExpertiseSection;