import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Customized Meal Plans",
      image: "/images/services/img1.webp",
      description: "Tailored nutrition strategies designed to meet your specific fitness and performance goals.",
      emoji: "🥗",
      tag: "Nutrition",
      delay: "0.2s"
    },
    {
      title: "Performance Coaching",
      image: "/images/services/img2.webp",
      description: "Expert guidance for athletes and gym enthusiasts to optimize body composition and energy.",
      emoji: "💪",
      tag: "Coaching",
      delay: "0.4s",
      active: true
    },
    {
      title: "Daily Tiffin Service",
      image: "/images/services/img3.webp",
      description: "Fresh, chef-made meals delivered daily with both Veg and Non-Veg options available.",
      emoji: "🍱",
      tag: "Delivery",
      delay: "0.6s"
    },
    {
      title: "Specialized Diet Programs",
      image: "/images/services/img4.webp",
      description: "High-protein, zero-carb, and balanced nutrition programs approved by top fitness experts.",
      emoji: "⚡",
      tag: "Programs",
      delay: "0.8s"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .srv-section {
          background: #0d0d0d;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
        }

        /* top border accent */
        .srv-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb,255,100,0),0.5), transparent);
        }

        /* ambient glow */
        .srv-glow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(var(--primary-rgb,255,100,0),0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* grain */
        .srv-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }

        .srv-container {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Header ── */
        .srv-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .srv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(var(--primary-rgb,255,100,0),0.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),0.25);
          border-radius: 100px;
          padding: 6px 18px 6px 10px;
          margin-bottom: 20px;
        }

        .srv-eyebrow-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--primary, #ff6400);
          animation: pulse-srv 2s ease-in-out infinite;
        }
        @keyframes pulse-srv {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(0.7); }
        }

        .srv-eyebrow-text {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--primary, #ff6400);
        }

        .srv-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 5.5vw, 72px);
          color: #fff;
          line-height: 0.95;
          letter-spacing: 1px;
          margin: 0;
        }

        .srv-heading em {
          font-style: normal;
          color: var(--primary, #ff6400);
        }

        .srv-subtext {
          font-size: 15px;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          margin-top: 16px;
          max-width: 460px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        /* ── Grid ── */
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) { .srv-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px)  { .srv-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .srv-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #151515;
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }
        .srv-card:hover {
          transform: translateY(-6px);
          border-color: rgba(var(--primary-rgb,255,100,0),0.35);
          box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(var(--primary-rgb,255,100,0),0.15);
        }

        /* active card */
        .srv-card.is-active {
          border-color: rgba(var(--primary-rgb,255,100,0),0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(var(--primary-rgb,255,100,0),0.2);
        }
        .srv-card.is-active .srv-card-inner::after {
          opacity: 1;
        }

        /* inner gradient overlay on image */
        .srv-card-img-wrap {
          position: relative;
          overflow: hidden;
          height: 200px;
          flex-shrink: 0;
        }
        .srv-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .srv-card:hover .srv-card-img-wrap img {
          transform: scale(1.06);
        }

        /* gradient fade image → card bg */
        .srv-card-img-wrap::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 70%;
          background: linear-gradient(to top, #151515, transparent);
        }

        /* tag on image */
        .srv-card-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
        }

        /* active badge */
        .srv-card-active-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          background: var(--primary, #ff6400);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #fff;
        }

        /* body */
        .srv-card-body {
          padding: 22px 22px 26px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .srv-card-emoji {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(var(--primary-rgb,255,100,0),0.12);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          margin-bottom: 14px;
          margin-top: -38px;        /* lifts out of image area */
          position: relative;
          z-index: 3;
          transition: background 0.3s;
        }
        .srv-card:hover .srv-card-emoji {
          background: rgba(var(--primary-rgb,255,100,0),0.22);
        }

        .srv-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.5px;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.1;
        }

        .srv-card-desc {
          font-size: 13.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          font-weight: 300;
          flex: 1;
          margin-bottom: 20px;
        }

        .srv-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary, #ff6400);
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: gap 0.25s;
        }
        .srv-card-link:hover { gap: 12px; }

        .srv-card-link-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: rgba(var(--primary-rgb,255,100,0),0.15);
          display: inline-flex; align-items: center; justify-content: center;
          transition: background 0.25s;
        }
        .srv-card-link:hover .srv-card-link-icon {
          background: var(--primary, #ff6400);
          color: #fff;
        }

        /* bottom divider rule */
        .srv-card-rule {
          height: 1px;
          background: linear-gradient(90deg, rgba(var(--primary-rgb,255,100,0),0.4), transparent);
          margin-bottom: 20px;
        }
      `}</style>

      <section className="srv-section">
        <div className="srv-glow" />
        <div className="srv-grain" />

        <div className="srv-container">
          {/* Header */}
          <div className="srv-header">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="srv-eyebrow">
                <div className="srv-eyebrow-dot" />
                <span className="srv-eyebrow-text">Our Services</span>
              </div>
            </div>
            <h2 className="srv-heading">
              The Best Quality <em>Service</em><br />You Can Get
            </h2>
            <p className="srv-subtext">
              From gym-approved meal plans to daily chef-made tiffin — everything your performance demands.
            </p>
          </div>

          {/* Cards grid */}
          <div className="srv-grid">
            {services.map((service, index) => (
              <div key={index} className={`srv-card${service.active ? ' is-active' : ''}`}>
                {/* Image */}
                <div className="srv-card-img-wrap">
                  <img src={service.image} alt={service.title} />
                  <div className="srv-card-tag">{service.tag}</div>
                  {service.active && (
                    <div className="srv-card-active-badge">Popular</div>
                  )}
                </div>

                {/* Body */}
                <div className="srv-card-body">
                  <div className="srv-card-emoji">{service.emoji}</div>
                  <h3 className="srv-card-title">{service.title}</h3>
                  <div className="srv-card-rule" />
                  <p className="srv-card-desc">{service.description}</p>
                  <Link href="/service-detail" className="srv-card-link">
                    View Details
                    <span className="srv-card-link-icon">
                      <ArrowRight size={13} />
                    </span>
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

export default ServicesSection;