import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const AboutSection = () => {
     return (
          <>
               <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .about-section {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
        }

        /* Ambient glow blobs */
        .about-section::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -120px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(var(--primary-rgb, 255, 100, 0), 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .about-section::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -80px;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(var(--primary-rgb, 255, 100, 0), 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .about-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }
        }

        /* ── LEFT: image column ── */
        .about-image-col {
          position: relative;
        }

        .about-image-frame {
          position: relative;
          display: inline-block;
          width: 100%;
          max-width: 520px;
        }

        /* Diagonal accent stripe behind image */
        .about-image-frame::before {
          content: '';
          position: absolute;
          inset: -16px -16px -16px -16px;
          background: linear-gradient(135deg, rgba(var(--primary-rgb, 255, 100, 0), 0.18) 0%, transparent 60%);
          border-radius: 24px;
          z-index: 0;
        }

        .about-image-main {
          position: relative;
          z-index: 1;
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          border: 1px solid rgba(255,255,255,0.07);
        }

        /* Floating badge – "Est. 2020" style */
        .about-badge {
          position: absolute;
          bottom: 32px;
          left: -28px;
          z-index: 3;
          background: #141414;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 18px 22px;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 190px;
        }
        @media (max-width: 768px) {
          .about-badge { left: 12px; bottom: 20px; }
        }

        .about-badge-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--primary, #ff6400), rgba(var(--primary-rgb, 255,100,0),0.6));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .about-badge-text strong {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: #fff;
          line-height: 1;
          letter-spacing: 0.5px;
        }
        .about-badge-text span {
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Small accent image – overlapping top-right */
        .about-accent-img {
          position: absolute;
          top: -24px;
          right: -24px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #0a0a0a;
          z-index: 2;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        @media (max-width: 640px) {
          .about-accent-img { width: 90px; height: 90px; top: -12px; right: -12px; }
        }

        /* Vertical label strip */
        .about-vert-label {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          left: -70px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.15);
          white-space: nowrap;
          text-transform: uppercase;
        }
        @media (max-width: 1024px) { .about-vert-label { display: none; } }

        /* ── RIGHT: content column ── */
        .about-content-col {}

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(var(--primary-rgb, 255,100,0), 0.1);
          border: 1px solid rgba(var(--primary-rgb, 255,100,0), 0.25);
          border-radius: 100px;
          padding: 6px 16px 6px 10px;
          margin-bottom: 20px;
        }

        .about-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary, #ff6400);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .about-eyebrow-text {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--primary, #ff6400);
        }

        .about-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 80px);
          color: #fff;
          line-height: 0.95;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .about-heading em {
          font-style: normal;
          color: var(--primary, #ff6400);
        }

        .about-body {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* Divider */
        .about-divider {
          width: 48px;
          height: 2px;
          background: var(--primary, #ff6400);
          border-radius: 2px;
          margin-bottom: 32px;
          opacity: 0.6;
        }

        /* Feature pills */
        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }
        @media (max-width: 480px) {
          .about-features { grid-template-columns: 1fr; }
        }

        .about-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 14px 18px;
          transition: background 0.25s, border-color 0.25s;
        }
        .about-feature-item:hover {
          background: rgba(var(--primary-rgb, 255,100,0), 0.08);
          border-color: rgba(var(--primary-rgb, 255,100,0), 0.2);
        }

        .about-feature-check {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(var(--primary-rgb, 255,100,0), 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--primary, #ff6400);
        }

        .about-feature-label {
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.2px;
        }

        /* CTA row */
        .about-cta-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .about-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary, #ff6400);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 32px rgba(var(--primary-rgb, 255,100,0), 0.35);
        }
        .about-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(var(--primary-rgb, 255,100,0), 0.5);
        }

        .about-btn-icon {
          width: 32px;
          height: 32px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .about-btn-primary:hover .about-btn-icon {
          background: rgba(255,255,255,0.35);
        }

        .about-stat {
          display: flex;
          flex-direction: column;
        }
        .about-stat strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          color: #fff;
          line-height: 1;
          letter-spacing: 0.5px;
        }
        .about-stat span {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 2px;
        }

        .about-stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          align-self: center;
        }

        /* Noise grain overlay */
        .about-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        /* Horizontal rule accent at top of section */
        .about-top-rule {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb,255,100,0),0.4), transparent);
        }
      `}</style>

               <section className="about-section">
                    <div className="about-top-rule" />
                    <div className="about-grain" />

                    <div className="about-inner">
                         {/* ── LEFT: Image ── */}
                         <div className="about-image-col">
                              <div className="about-vert-label">Fuel Plate by MMC — Performance Nutrition</div>

                              <div className="about-image-frame">
                                   {/* Main portrait/food image */}
                                   <img
                                        src="/images/about/img1.webp"
                                        alt="Fresh performance meals by Fuel Plate"
                                        className="about-image-main"
                                   />

                                   {/* Floating accent image – circular food close-up */}
                                   <img
                                        src="/images/about/img1.webp"
                                        alt=""
                                        className="about-accent-img"
                                   />

                                   {/* Bottom-left floating badge */}
                                   <div className="about-badge">
                                        <div className="about-badge-icon">🥗</div>
                                        <div className="about-badge-text">
                                             <strong>500+</strong>
                                             <span>Plans Delivered</span>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* ── RIGHT: Content ── */}
                         <div className="about-content-col">
                              {/* Eyebrow */}
                              <div className="about-eyebrow">
                                   <div className="about-eyebrow-dot" />
                                   <span className="about-eyebrow-text">About Us</span>
                              </div>

                              {/* Heading */}
                              <h2 className="about-heading">
                                   Transforming Lives<br />
                                   Through <em>Nutrition</em>
                              </h2>

                              <div className="about-divider" />

                              {/* Body */}
                              <p className="about-body">
                                   Fuel Plate by MMC provides professional, gym-approved performance meal plans.
                                   Freshly prepared by chefs and designed by nutrition experts to help you achieve
                                   your fitness goals — one plate at a time.
                              </p>

                              {/* Feature grid */}
                              <div className="about-features">
                                   {[
                                        { icon: <Check size={14} />, label: 'Gym-approved plans' },
                                        { icon: <Check size={14} />, label: 'Chef-made meals' },
                                        { icon: <Check size={14} />, label: 'Fresh ingredients' },
                                        { icon: <Check size={14} />, label: 'Performance focused' },
                                   ].map((item, i) => (
                                        <div className="about-feature-item" key={i}>
                                             <div className="about-feature-check">{item.icon}</div>
                                             <span className="about-feature-label">{item.label}</span>
                                        </div>
                                   ))}
                              </div>

                              {/* CTA + stats */}
                              <div className="about-cta-row">
                                   <Link href="/appointment" className="about-btn-primary">
                                        Read More
                                        <span className="about-btn-icon">
                                             <ArrowRight size={16} />
                                        </span>
                                   </Link>

                                   <div className="about-stat-divider" />

                                   <div className="about-stat">
                                        <strong>100%</strong>
                                        <span>Fresh Daily</span>
                                   </div>

                                   <div className="about-stat-divider" />

                                   <div className="about-stat">
                                        <strong>5★</strong>
                                        <span>Rated Plans</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default AboutSection;