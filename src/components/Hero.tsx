import React from 'react';
import Link from 'next/link';
import { ArrowRight, Flame, Star, ChevronDown } from 'lucide-react';

const Hero = () => {
     return (
          <>
               <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ══════════════════════════════════════
           HERO SECTION — DARK PREMIUM
        ══════════════════════════════════════ */

        .hero-root {
          position: relative;
          min-height: 100vh;
          background: #060606;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          display: flex; flex-direction: column;
        }

        /* ── Background image with dark overlay ── */
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url(/images/hero-banner/banner-1.png);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(0.28) saturate(0.8);
          transform: scale(1.04);
          animation: hero-zoom 14s ease-in-out infinite alternate;
        }
        @keyframes hero-zoom {
          from { transform: scale(1.04); }
          to   { transform: scale(1.10); }
        }

        /* ── Layered overlays ── */
        /* bottom-up dark gradient so content is readable */
        .hero-overlay-bottom {
          position: absolute; inset: 0;
          background: linear-gradient(to top,
            rgba(6,6,6,1) 0%,
            rgba(6,6,6,0.6) 40%,
            rgba(6,6,6,0.15) 75%,
            transparent 100%
          );
          z-index: 1;
        }
        /* left-side orange glow behind text */
        .hero-overlay-glow {
          position: absolute;
          top: 10%; left: -10%;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),0.18) 0%, transparent 65%);
          z-index: 1; pointer-events: none;
        }
        /* right subtle glow */
        .hero-overlay-glow-r {
          position: absolute;
          bottom: -10%; right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),0.08) 0%, transparent 70%);
          z-index: 1; pointer-events: none;
        }

        /* dot-grid texture */
        .hero-grain {
          position: absolute; inset: 0; z-index: 1;
          background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* orange top accent line */
        .hero-top-rule {
          position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 10;
          background: linear-gradient(90deg, transparent, var(--primary,#ff6400) 40%, transparent);
        }

        /* ── Content layer ── */
        .hero-content {
          position: relative; z-index: 2;
          flex: 1;
          display: flex; align-items: center;
          max-width: 1280px; margin: 0 auto; width: 100%;
          padding: 140px 24px 80px;
          gap: 60px;
        }
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            padding: 120px 24px 60px;
            gap: 40px;
          }
        }

        /* ── LEFT: text column ── */
        .hero-left {
          flex: 1;
          max-width: 600px;
        }

        /* eyebrow */
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(var(--primary-rgb,255,100,0),0.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),0.28);
          border-radius: 100px;
          padding: 7px 18px 7px 10px;
          margin-bottom: 24px;
        }
        .hero-eyebrow-icon {
          width: 26px; height: 26px; border-radius: 50%;
          background: var(--primary,#ff6400);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hero-eyebrow-text {
          font-size: 12px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--primary,#ff6400);
        }

        /* script / brand name */
        .hero-script {
          font-family: 'Arizonia', cursive, Georgia, serif;
          font-size: clamp(28px, 4vw, 48px);
          color: var(--primary,#ff6400);
          line-height: 1;
          margin-bottom: 12px;
          display: block;
          opacity: 0.9;
        }

        /* main heading */
        .hero-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7.5vw, 108px);
          color: #fff;
          line-height: 0.92;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }
        .hero-heading em {
          font-style: normal;
          color: var(--primary,#ff6400);
          display: block;
        }

        /* body text */
        .hero-body {
          font-size: 16px; line-height: 1.75; font-weight: 300;
          color: rgba(255,255,255,0.55);
          max-width: 440px;
          margin-bottom: 36px;
        }
        .hero-body strong { color: rgba(255,255,255,0.8); font-weight: 600; }

        /* CTA row */
        .hero-cta-row {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--primary,#ff6400); color: #fff;
          font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
          padding: 14px 28px; border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(var(--primary-rgb,255,100,0),0.4);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 44px rgba(var(--primary-rgb,255,100,0),0.55);
        }
        .hero-btn-primary-icon {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: inline-flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .hero-btn-primary:hover .hero-btn-primary-icon {
          background: rgba(255,255,255,0.35);
        }

        .hero-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.8);
          font-size: 14px; font-weight: 600; letter-spacing: 0.3px;
          padding: 14px 24px; border-radius: 100px;
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          backdrop-filter: blur(8px);
        }
        .hero-btn-ghost:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }

        /* social proof strip */
        .hero-proof {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }
        .hero-proof-avatars {
          display: flex;
        }
        .hero-proof-avatar {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2px solid #060606;
          background: rgba(255,255,255,0.15);
          overflow: hidden; margin-right: -10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
        }
        .hero-proof-text {
          font-size: 13px; color: rgba(255,255,255,0.5);
          font-weight: 400; line-height: 1.4;
        }
        .hero-proof-text strong { color: #fff; font-weight: 700; }
        .hero-proof-stars {
          display: flex; gap: 2px; margin-bottom: 2px;
        }

        .hero-proof-divider {
          width: 1px; height: 28px;
          background: rgba(255,255,255,0.1);
        }

        .hero-proof-stat strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px; color: #fff; letter-spacing: 1px;
          display: block; line-height: 1;
        }
        .hero-proof-stat span {
          font-size: 10px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        /* ── RIGHT: hero image ── */
        .hero-right {
          flex: 0 0 auto;
          width: 480px;
          position: relative;
          display: flex; align-items: flex-end; justify-content: center;
        }
        @media (max-width: 1024px) { .hero-right { width: 380px; } }
        @media (max-width: 768px)  { .hero-right { width: 100%; max-width: 360px; } }

        /* circular glow behind hero image */
        .hero-right::before {
          content: '';
          position: absolute;
          bottom: 0; left: 50%; transform: translateX(-50%);
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-img {
          position: relative; z-index: 1;
          width: 100%; max-width: 460px;
          display: block;
          filter: drop-shadow(0 20px 60px rgba(0,0,0,0.6));
        }

        /* floating badge cards */
        .hero-float-card {
          position: absolute; z-index: 3;
          background: rgba(15,15,15,0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }

        /* top-left card: "Chef Made" */
        .hero-float-card-tl {
          top: 12%; left: -16px;
          display: flex; align-items: center; gap: 10px;
          animation: float-y 4s ease-in-out infinite;
        }
        @keyframes float-y {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .hero-float-icon {
          font-size: 22px; flex-shrink: 0;
        }
        .hero-float-label {
          font-size: 10px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .hero-float-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px; color: #fff; letter-spacing: 0.5px; line-height: 1;
        }

        /* bottom-right card: "Meals Delivered" */
        .hero-float-card-br {
          bottom: 18%; right: -16px;
          display: flex; align-items: center; gap: 10px;
          animation: float-y 4s ease-in-out 2s infinite;
        }

        /* orange dot badge on top of image */
        .hero-float-badge {
          position: absolute; top: 0; right: 24px; z-index: 3;
          background: var(--primary,#ff6400);
          border-radius: 100px; padding: 6px 16px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #fff;
          box-shadow: 0 4px 20px rgba(var(--primary-rgb,255,100,0),0.4);
        }

        /* ── Vertical social strip ── */
        .hero-socials {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 72px; z-index: 3;
          border-left: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0; padding: 24px 0;
        }
        @media (max-width: 1280px) { .hero-socials { display: none; } }

        .hero-social-list {
          display: flex; flex-direction: column;
          align-items: center; gap: 20px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          flex: 1; justify-content: center;
          list-style: none; margin: 0; padding: 0;
        }
        .hero-social-list a {
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .hero-social-list a:hover { color: var(--primary,#ff6400); }

        .hero-lets-talk {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          display: inline-flex; align-items: center; gap: 0;
          background: var(--primary,#ff6400);
          color: #fff;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 16px 10px; border-radius: 12px;
          text-decoration: none; margin-top: 20px;
          transition: background 0.2s;
        }
        .hero-lets-talk:hover { background: rgba(var(--primary-rgb,255,100,0),0.8); }

        /* ── Scroll indicator ── */
        .hero-scroll {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          z-index: 3;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .hero-scroll-text {
          font-size: 10px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .hero-scroll-icon {
          color: rgba(255,255,255,0.2);
          animation: scroll-bounce 2s ease-in-out infinite;
        }
        @keyframes scroll-bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }

        /* ── Floating food items (decorative) ── */
        .hero-deco {
          position: absolute; z-index: 2; pointer-events: none;
        }
        .hero-deco-1 {
          top: 22%; right: 38%;
          animation: float-deco 5s ease-in-out infinite;
        }
        .hero-deco-2 {
          bottom: 30%; left: 8%;
          animation: float-deco 6s ease-in-out 1.5s infinite;
        }
        .hero-deco-3 {
          bottom: 12%; left: 32%;
          animation: float-deco 4.5s ease-in-out 0.8s infinite;
        }
        @keyframes float-deco {
          0%,100% { transform: translateY(0) rotate(0deg); }
          33%      { transform: translateY(-12px) rotate(5deg); }
          66%      { transform: translateY(4px) rotate(-3deg); }
        }
      `}</style>

               <div className="hero-root">
                    {/* Layers */}
                    <div className="hero-bg" />
                    <div className="hero-overlay-bottom" />
                    <div className="hero-overlay-glow" />
                    <div className="hero-overlay-glow-r" />
                    <div className="hero-grain" />
                    <div className="hero-top-rule" />

                    {/* Floating food deco items */}
                    <div className="hero-deco hero-deco-1">
                         <img src="/images/hero-banner/item1.png" alt="" style={{ width: 60, opacity: 0.85 }} />
                    </div>
                    <div className="hero-deco hero-deco-2">
                         <img src="/images/hero-banner/item2.png" alt="" style={{ width: 70, opacity: 0.75 }} />
                    </div>
                    <div className="hero-deco hero-deco-3">
                         <img src="/images/hero-banner/item3.png" alt="" style={{ width: 55, opacity: 0.8 }} />
                    </div>

                    {/* ── Main content ── */}
                    <div className="hero-content">

                         {/* LEFT */}
                         <div className="hero-left">
                              {/* Eyebrow */}
                              <div className="hero-eyebrow">
                                   <div className="hero-eyebrow-icon">
                                        <Flame size={13} color="#fff" />
                                   </div>
                                   <span className="hero-eyebrow-text">Performance Meal Plans by MMC</span>
                              </div>

                              {/* Script brand name */}
                              <span className="hero-script">Fuel Plate</span>

                              {/* Main heading */}
                              <h1 className="hero-heading">
                                   Performance<br />
                                   <em>On Every</em>
                                   Plate
                              </h1>

                              {/* Body */}
                              <p className="hero-body">
                                   <strong>Fresh, chef-made meals</strong> designed to fuel your body and nourish your life. Gym-approved plans built for every fitness goal.
                              </p>

                              {/* CTAs */}
                              <div className="hero-cta-row">
                                   <Link href="/about-us" className="hero-btn-primary">
                                        Explore Plans
                                        <span className="hero-btn-primary-icon">
                                             <ArrowRight size={16} />
                                        </span>
                                   </Link>
                                   <Link href="/appointment" className="hero-btn-ghost">
                                        Book a Consultation
                                   </Link>
                              </div>

                              {/* Social proof */}
                              <div className="hero-proof">
                                   <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <div className="hero-proof-avatars">
                                             {['🧑', '👩', '🧔', '👨'].map((e, i) => (
                                                  <div key={i} className="hero-proof-avatar">{e}</div>
                                             ))}
                                             <div className="hero-proof-avatar" style={{ marginRight: 0 }} />
                                        </div>
                                        <div>
                                             <div className="hero-proof-stars">
                                                  {[...Array(5)].map((_, i) => (
                                                       <Star key={i} size={11} fill="#ff6400" color="#ff6400" />
                                                  ))}
                                             </div>
                                             <div className="hero-proof-text">
                                                  <strong>500+</strong> happy members
                                             </div>
                                        </div>
                                   </div>

                                   <div className="hero-proof-divider" />

                                   <div className="hero-proof-stat">
                                        <strong>100%</strong>
                                        <span>Fresh Daily</span>
                                   </div>

                                   <div className="hero-proof-divider" />

                                   <div className="hero-proof-stat">
                                        <strong>5★</strong>
                                        <span>Rated Plans</span>
                                   </div>
                              </div>
                         </div>

                         {/* RIGHT: hero image */}
                         <div className="hero-right">
                              {/* badge */}
                              <div className="hero-float-badge">⭐ Top Rated</div>

                              {/* floating card TL */}
                              <div className="hero-float-card hero-float-card-tl">
                                   <div className="hero-float-icon">👨‍🍳</div>
                                   <div>
                                        <div className="hero-float-label">Freshly Made By</div>
                                        <div className="hero-float-value">Expert Chefs</div>
                                   </div>
                              </div>

                              <img
                                   src="/images/hero-banner/1.png"
                                   alt="Performance meal plan"
                                   className="hero-img"
                              />

                              {/* floating card BR */}
                              <div className="hero-float-card hero-float-card-br">
                                   <div className="hero-float-icon">🥗</div>
                                   <div>
                                        <div className="hero-float-label">Delivered</div>
                                        <div className="hero-float-value">20 Meals / Mo</div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* ── Vertical social strip ── */}
                    <div className="hero-socials">
                         <ul className="hero-social-list">
                              <li><Link href="https://www.instagram.com/">Instagram</Link></li>
                              <li><Link href="https://www.facebook.com/">Facebook</Link></li>
                              <li><Link href="https://x.com/">Twitter</Link></li>
                         </ul>
                         <Link href="/contact-us" className="hero-lets-talk">Let's Talk</Link>
                    </div>

                    {/* ── Scroll indicator ── */}
                    <div className="hero-scroll">
                         <span className="hero-scroll-text">Scroll</span>
                         <ChevronDown size={18} className="hero-scroll-icon" />
                    </div>
               </div>
          </>
     );
};

export default Hero;