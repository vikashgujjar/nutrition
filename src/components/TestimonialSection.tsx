import React from 'react';
import { Play, Quote } from 'lucide-react';

const testimonials = [
    {
        video: 'images/testimonial/large/img2.webp',
        avatar: 'images/testimonial/small/img1.webp',
        name: 'Kenneth Fong',
        role: 'Postgraduate Student',
        src: 'https://www.youtube.com/embed/o8OgzQdA70c',
        delay: '0.2s',
    },
    {
        video: 'images/testimonial/large/img3.webp',
        avatar: 'images/testimonial/small/img2.webp',
        name: 'Sarah Mitchell',
        role: 'Fitness Enthusiast',
        src: 'https://www.youtube.com/embed/o8OgzQdA70c',
        delay: '0.4s',
    },
    {
        video: 'images/testimonial/large/img4.webp',
        avatar: 'images/testimonial/small/img3.webp',
        name: 'Raj Patel',
        role: 'Amateur Athlete',
        src: 'https://www.youtube.com/embed/o8OgzQdA70c',
        delay: '0.6s',
    },
];

const TestimonialSection = () => {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .tst-section {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
        }
        .tst-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb,255,100,0),.45), transparent);
        }

        .tst-glow-left {
          position: absolute; top: -100px; left: -150px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .tst-glow-right {
          position: absolute; bottom: -100px; right: -100px;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .tst-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; opacity: .5;
        }

        .tst-container {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto; padding: 0 24px;
        }

        /* ── Header ── */
        .tst-header {
          text-align: center; margin-bottom: 60px;
        }
        .tst-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(var(--primary-rgb,255,100,0),.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),.25);
          border-radius: 100px; padding: 6px 18px 6px 10px; margin-bottom: 20px;
        }
        .tst-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--primary,#ff6400);
          animation: tst-pulse 2s ease-in-out infinite;
        }
        @keyframes tst-pulse {
          0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}
        }
        .tst-eyebrow-text {
          font-size: 12px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--primary,#ff6400);
        }
        .tst-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 5.5vw, 72px);
          color: #fff; line-height: .95; letter-spacing: 1px; margin: 0;
        }
        .tst-heading em { font-style: normal; color: var(--primary,#ff6400); }
        .tst-subtext {
          font-size: 15px; color: rgba(255,255,255,.38); font-weight: 300;
          margin-top: 16px; line-height: 1.7;
        }

        /* ── Grid ── */
        .tst-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) { .tst-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px)  { .tst-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .tst-card {
          background: #141414;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 20px;
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
        }
        .tst-card:hover {
          transform: translateY(-6px);
          border-color: rgba(var(--primary-rgb,255,100,0),.3);
          box-shadow: 0 24px 60px rgba(0,0,0,.5);
        }

        /* thumbnail */
        .tst-thumb {
          position: relative;
          height: 220px; overflow: hidden; flex-shrink: 0;
        }
        .tst-thumb img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(.6) saturate(1.1);
          transition: transform .5s ease, filter .4s ease;
          display: block;
        }
        .tst-card:hover .tst-thumb img {
          transform: scale(1.05);
          filter: brightness(.7) saturate(1.3);
        }

        /* gradient overlay */
        .tst-thumb::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(20,20,20,.9) 0%, rgba(0,0,0,.2) 50%, transparent 100%);
          pointer-events: none;
        }

        /* play button */
        .tst-play {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(255,255,255,.12);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,.3);
          display: flex; align-items: center; justify-content: center;
          color: #fff; z-index: 2; cursor: pointer;
          transition: background .3s, transform .3s, border-color .3s;
        }
        .tst-play::before {
          content: '';
          position: absolute;
          width: 88px; height: 88px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.15);
          animation: tst-ring 2.2s ease-out infinite;
        }
        @keyframes tst-ring {
          0%   { transform: scale(.85); opacity: .9; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .tst-card:hover .tst-play,
        .tst-play:hover {
          background: var(--primary,#ff6400);
          border-color: var(--primary,#ff6400);
          transform: translate(-50%,-50%) scale(1.1);
        }

        /* duration badge */
        .tst-duration {
          position: absolute; bottom: 14px; right: 14px; z-index: 3;
          background: rgba(0,0,0,.55); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 100px; padding: 4px 10px;
          font-size: 11px; font-weight: 600; color: rgba(255,255,255,.7);
          letter-spacing: .5px;
        }

        /* card body */
        .tst-card-body {
          padding: 20px 22px 22px;
          position: relative;
        }

        /* big quote watermark */
        .tst-quote-mark {
          position: absolute;
          top: 12px; right: 16px;
          color: var(--primary,#ff6400);
          opacity: .08;
          pointer-events: none;
        }

        /* author row */
        .tst-author {
          display: flex; align-items: center; gap: 12px;
        }
        .tst-avatar {
          width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0;
          object-fit: cover;
          border: 2px solid rgba(var(--primary-rgb,255,100,0),.35);
          transition: border-color .3s;
        }
        .tst-card:hover .tst-avatar {
          border-color: var(--primary,#ff6400);
        }
        .tst-author-name {
          font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 2px;
        }
        .tst-author-role {
          font-size: 11.5px; color: rgba(255,255,255,.35);
          font-weight: 400; letter-spacing: .3px;
        }

        /* star row */
        .tst-stars {
          display: flex; gap: 3px; margin-left: auto;
        }
        .tst-star { font-size: 12px; }

        /* footer divider */
        .tst-card-divider {
          height: 1px; margin: 14px 0;
          background: linear-gradient(90deg, rgba(var(--primary-rgb,255,100,0),.2), transparent);
        }

        /* watch label */
        .tst-watch-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,.25);
        }
        .tst-watch-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--primary,#ff6400); opacity: .6;
        }

        /* ── Bottom stat strip ── */
        .tst-stats {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1px;
          background: rgba(255,255,255,.06);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.06);
        }
        @media (max-width: 600px) { .tst-stats { grid-template-columns: 1fr; } }

        .tst-stat {
          background: #111;
          padding: 28px 32px;
          display: flex; align-items: center; gap: 16px;
        }
        .tst-stat-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          background: rgba(var(--primary-rgb,255,100,0),.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }
        .tst-stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px; color: #fff; line-height: 1; letter-spacing: 1px;
        }
        .tst-stat-label {
          font-size: 12px; color: rgba(255,255,255,.35);
          font-weight: 500; letter-spacing: .3px; margin-top: 2px;
        }
      `}</style>

            <section className="tst-section">
                <div className="tst-glow-left" />
                <div className="tst-glow-right" />
                <div className="tst-grain" />

                <div className="tst-container">

                    {/* Header */}
                    <div className="tst-header">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="tst-eyebrow">
                                <div className="tst-eyebrow-dot" />
                                <span className="tst-eyebrow-text">Testimonials</span>
                            </div>
                        </div>
                        <h2 className="tst-heading">
                            Real Results.<br /><em>Real Stories.</em>
                        </h2>
                        <p className="tst-subtext">
                            Hear directly from our members — gym-goers, athletes, and everyday people transforming through food.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="tst-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="tst-card">
                                {/* Thumbnail */}
                                <div className="tst-thumb">
                                    <img src={t.video} alt={t.name} />
                                    <button
                                        className="tst-play popup-youtube"
                                        data-type="youtube"
                                        data-src={t.src}
                                    >
                                        <Play fill="currentColor" size={20} />
                                    </button>
                                    <div className="tst-duration">▶ Watch Story</div>
                                </div>

                                {/* Body */}
                                <div className="tst-card-body">
                                    <Quote className="tst-quote-mark" size={56} />

                                    <div className="tst-card-divider" />

                                    <div className="tst-author">
                                        <img src={t.avatar} alt={t.name} className="tst-avatar" />
                                        <div>
                                            <div className="tst-author-name">{t.name}</div>
                                            <div className="tst-author-role">{t.role}</div>
                                        </div>
                                        <div className="tst-stars">
                                            {Array.from({ length: 5 }).map((_, si) => (
                                                <span key={si} className="tst-star">⭐</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="tst-card-divider" />

                                    <div className="tst-watch-label">
                                        <div className="tst-watch-dot" />
                                        Video Testimonial
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stat strip */}
                    <div className="tst-stats">
                        {[
                            { icon: '🎥', value: '500+', label: 'Success Stories' },
                            { icon: '⭐', value: '4.9', label: 'Average Rating' },
                            { icon: '💪', value: '98%', label: 'Client Satisfaction' },
                        ].map((s, i) => (
                            <div key={i} className="tst-stat">
                                <div className="tst-stat-icon">{s.icon}</div>
                                <div>
                                    <div className="tst-stat-value">{s.value}</div>
                                    <div className="tst-stat-label">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default TestimonialSection;