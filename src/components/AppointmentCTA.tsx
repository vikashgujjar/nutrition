import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, CheckCircle, Flame } from 'lucide-react';

const AppointmentCTA = () => {
     return (
          <>
               <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .appt-section {
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          background: #080808;
        }

        /* ── BG image with dark overlay ── */
        .appt-bg {
          position: absolute; inset: 0;
          background-image: url(images/background/bg2.png);
          background-size: cover;
          background-position: center;
          filter: brightness(0.15) saturate(0.6);
        }

        /* orange sweep from left */
        .appt-sweep {
          position: absolute; inset: 0;
          background: linear-gradient(105deg,
            rgba(var(--primary-rgb,255,100,0),0.18) 0%,
            transparent 55%
          );
          pointer-events: none;
        }

        /* bottom-up fade */
        .appt-fade-b {
          position: absolute; bottom: 0; left: 0; right: 0; height: 40%;
          background: linear-gradient(to top, rgba(8,8,8,0.9), transparent);
          pointer-events: none;
        }

        /* grain */
        .appt-grain {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 26px 26px;
          pointer-events: none;
        }

        /* top rule */
        .appt-rule {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb,255,100,0),0.5), transparent);
        }

        /* glow behind right content */
        .appt-glow {
          position: absolute; top: -120px; right: -80px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),0.12) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ── Layout ── */
        .appt-layout {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 5fr 7fr;
          min-height: 480px;
          max-width: 1280px; margin: 0 auto;
        }
        @media (max-width: 768px) {
          .appt-layout { grid-template-columns: 1fr; }
        }

        /* ── LEFT: image panel ── */
        .appt-img-col {
          position: relative;
          display: flex; align-items: flex-end;
          overflow: hidden;
        }
        @media (max-width: 768px) { .appt-img-col { display: none; } }

        .appt-img {
          width: 100%;
          object-fit: cover;
          display: block;
          filter: drop-shadow(0 -20px 40px rgba(0,0,0,0.5));
          position: relative; z-index: 1;
        }

        /* orange circle glow under image */
        .appt-img-col::before {
          content: '';
          position: absolute; bottom: -80px; left: 50%;
          transform: translateX(-50%);
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),0.2) 0%, transparent 70%);
        }

        /* ── RIGHT: content ── */
        .appt-content {
          display: flex; flex-direction: column; justify-content: center;
          padding: 80px 60px 80px 48px;
        }
        @media (max-width: 1024px) { .appt-content { padding: 60px 40px; } }
        @media (max-width: 640px)  { .appt-content { padding: 56px 24px; } }

        /* eyebrow */
        .appt-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(var(--primary-rgb,255,100,0),0.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),0.28);
          border-radius: 100px; padding: 6px 16px 6px 8px;
          margin-bottom: 20px; width: fit-content;
        }
        .appt-eyebrow-icon {
          width: 24px; height: 24px; border-radius: 50%;
          background: var(--primary,#ff6400);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .appt-eyebrow-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--primary,#ff6400);
        }

        /* heading */
        .appt-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(44px, 5.5vw, 76px);
          color: #fff; line-height: 0.95; letter-spacing: 1px;
          margin-bottom: 20px;
        }
        .appt-heading em {
          font-style: normal; color: var(--primary,#ff6400);
        }

        /* subtext */
        .appt-sub {
          font-size: 15px; color: rgba(255,255,255,0.45);
          font-weight: 300; line-height: 1.75;
          max-width: 420px; margin-bottom: 32px;
        }

        /* quick info pills */
        .appt-pills {
          display: flex; flex-wrap: wrap; gap: 10px;
          margin-bottom: 36px;
        }
        .appt-pill {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px; padding: 7px 16px;
          font-size: 12.5px; font-weight: 500;
          color: rgba(255,255,255,0.6);
          transition: border-color 0.2s, background 0.2s;
        }
        .appt-pill:hover {
          border-color: rgba(var(--primary-rgb,255,100,0),0.3);
          background: rgba(var(--primary-rgb,255,100,0),0.06);
        }
        .appt-pill-icon { color: var(--primary,#ff6400); }

        /* CTA row */
        .appt-cta-row {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }

        .appt-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--primary,#ff6400); color: #fff;
          font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
          padding: 15px 30px; border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(var(--primary-rgb,255,100,0),0.4);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .appt-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 44px rgba(var(--primary-rgb,255,100,0),0.55);
        }
        .appt-btn-icon {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: inline-flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .appt-btn-primary:hover .appt-btn-icon { background: rgba(255,255,255,0.35); }

        .appt-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.75);
          font-size: 14px; font-weight: 600;
          padding: 15px 24px; border-radius: 100px;
          text-decoration: none; backdrop-filter: blur(8px);
          transition: background 0.25s, color 0.25s;
        }
        .appt-btn-ghost:hover {
          background: rgba(255,255,255,0.11);
          color: #fff;
        }

        /* Guarantee badge */
        .appt-guarantee {
          display: flex; align-items: center; gap: 8px;
          margin-top: 24px;
          font-size: 12px; color: rgba(255,255,255,0.3);
          font-weight: 500;
        }
        .appt-guarantee-icon { color: #4ade80; }

        /* ── Floating food deco ── */
        .appt-deco {
          position: absolute; pointer-events: none; z-index: 2;
        }
        .appt-deco-1 {
          bottom: 10%; right: 20%;
          animation: appt-float 5s ease-in-out infinite;
        }
        .appt-deco-2 {
          top: 15%; left: 5%;
          animation: appt-float 6s ease-in-out 1.5s infinite;
        }
        .appt-deco-3 {
          top: 20%; right: 12%;
          animation: appt-float 4.5s ease-in-out 0.8s infinite;
        }
        @keyframes appt-float {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-12px) rotate(6deg); }
        }
      `}</style>

               <section className="appt-section">
                    {/* Layers */}
                    <div className="appt-bg" />
                    <div className="appt-sweep" />
                    <div className="appt-fade-b" />
                    <div className="appt-grain" />
                    <div className="appt-rule" />
                    <div className="appt-glow" />

                    {/* Decorative food items */}
                    <div className="appt-deco appt-deco-1">
                         <img src="images/banner/item1.png" alt="" style={{ width: 56, opacity: 0.7 }} />
                    </div>
                    <div className="appt-deco appt-deco-2">
                         <img src="images/banner/item2.png" alt="" style={{ width: 64, opacity: 0.6 }} />
                    </div>
                    <div className="appt-deco appt-deco-3">
                         <img src="images/banner/item3.png" alt="" style={{ width: 48, opacity: 0.65 }} />
                    </div>

                    <div className="appt-layout">
                         {/* ── LEFT: character image ── */}
                         <div className="appt-img-col">
                              <img src="images/background/img3.png" alt="Consultation" className="appt-img" />
                         </div>

                         {/* ── RIGHT: content ── */}
                         <div className="appt-content">
                              {/* Eyebrow */}
                              <div className="appt-eyebrow">
                                   <div className="appt-eyebrow-icon">
                                        <Calendar size={13} color="#fff" />
                                   </div>
                                   <span className="appt-eyebrow-text">Free Consultation</span>
                              </div>

                              {/* Heading */}
                              <h2 className="appt-heading">
                                   Ready to Start<br />
                                   Your <em>Fuel</em> Journey?
                              </h2>

                              {/* Sub */}
                              <p className="appt-sub">
                                   Schedule a free consultation with our nutrition experts. We'll build a meal plan tailored to your exact fitness goals.
                              </p>
                              {/* CTAs */}
                              <div className="appt-cta-row">
                                   <Link href="/appointment" className="appt-btn-primary">
                                        Book Appointment
                                        <span className="appt-btn-icon">
                                             <ArrowRight size={16} />
                                        </span>
                                   </Link>
                                   <Link href="/services" className="appt-btn-ghost">
                                        View Plans
                                   </Link>
                              </div>

                              {/* Guarantee */}
                              <div className="appt-guarantee">
                                   <CheckCircle size={14} className="appt-guarantee-icon" />
                                   No commitment · Cancel anytime · Free first consultation
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default AppointmentCTA;