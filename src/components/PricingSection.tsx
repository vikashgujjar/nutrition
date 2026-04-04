'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Check, X, Plus, Zap, Flame, Dumbbell, Beef, Salad, Drumstick, UtensilsCrossed } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

/* ── Macro icon pill ─────────────────────────────────────── */
const MacroPill = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="macro-pill">
        <div className="macro-pill-icon">{icon}</div>
        <div>
            <div className="macro-pill-value">{value}</div>
            <div className="macro-pill-label">{label}</div>
        </div>
    </div>
);

const PricingSection = () => {
    const [vegMode, setVegMode] = useState<Record<number, 'veg' | 'nonveg'>>({});

    const toggle = (i: number) =>
        setVegMode(prev => ({ ...prev, [i]: prev[i] === 'nonveg' ? 'veg' : 'nonveg' }));

    const isNonVeg = (i: number) => vegMode[i] === 'nonveg';

    /* ── Plan data ── */
    const plans = [
        {
            id: 0,
            emoji: '💚',
            title: 'VEG TIFFIN',
            tag: 'Home Style',
            desc: 'Mon – Fri · 20 Meals / Month',
            vegPrice: '$250',
            nonvegPrice: null,
            features: ['2 Veg Sabzi', '8 Rotis', 'Simple home-style meals'],
            noItems: [],
            isFuel: false,
            highlight: false,
            image: '/images/services/img1.webp',
        },
        {
            id: 1,
            emoji: '🍗',
            title: 'NON-VEG TIFFIN',
            tag: 'Classic',
            desc: 'Mon – Fri · 20 Meals / Month',
            vegPrice: null,
            nonvegPrice: '$280',
            features: ['1 Veg Sabzi', '1 Chicken Sabzi', '8 Rotis'],
            noItems: [],
            isFuel: false,
            highlight: false,
            image: '/images/services/img2.webp',
        },
        {
            id: 2,
            emoji: '🍚',
            title: 'RICE & ROTI COMBO',
            tag: 'Combo',
            desc: '1 Meal Per Day',
            vegPrice: '$330',
            nonvegPrice: '$350',
            features: ['1 Rice Bowl (Veg or Chicken)', '1 Veg Sabzi', '4 Rotis'],
            noItems: [],
            isFuel: false,
            highlight: false,
            image: '/images/services/img3.webp',
        },
        {
            id: 3,
            emoji: '⚡',
            title: 'FUEL START',
            tag: 'Balanced',
            desc: 'Balanced Nutrition · 2 Meals / Day',
            vegPrice: '$309',
            nonvegPrice: '$319',
            macros: { protein: '110g', carbs: '180g', fat: '45g', cal: '1,550' },
            features: ['Rice or Quinoa bowls', 'Eggs (whole + whites)', 'Fresh salad', 'Yogurt & seasonal fruit'],
            noItems: [],
            isFuel: true,
            highlight: false,
            image: '/images/services/img4.webp',
        },
        {
            id: 4,
            emoji: '🔥',
            title: 'FUEL LEAN',
            tag: 'Fat Loss',
            desc: 'Fat Loss · 3 Meals / Day',
            vegPrice: '$349',
            nonvegPrice: '$359',
            macros: { protein: '140g', carbs: '120g', fat: '40g', cal: '1,400' },
            features: ['Lean protein bowls', 'High-protein salads', 'Yogurt bowl', 'Nuts on select days', 'Controlled carbs'],
            noItems: [],
            isFuel: true,
            highlight: false,
            image: '/images/services/img1.webp',
        },
        {
            id: 5,
            emoji: '💪',
            title: 'FUEL MAX',
            tag: 'Most Popular',
            desc: 'Muscle Gain · 3 Meals + Protein Boost',
            vegPrice: '$389',
            nonvegPrice: '$399',
            macros: { protein: '180g', carbs: '220g', fat: '55g', cal: '2,100' },
            features: ['High-protein bowls', 'Fish on select days', 'Daily egg-white boost', 'Protein salads', 'Yogurt & nuts (select days)'],
            noItems: [],
            isFuel: true,
            highlight: true,   // ← FUEL MAX highlighted
            image: '/images/services/img2.webp',
        },
        {
            id: 6,
            emoji: '🥩',
            title: 'FUEL ZERO',
            tag: 'Zero Carb Elite',
            desc: 'Zero-Carb · 3 Meals / Day',
            vegPrice: '$519',
            nonvegPrice: '$549',
            macros: { protein: '200g', carbs: '0g', fat: '70g', cal: '1,800' },
            features: ['Paneer / Chicken thigh plates', 'Fish on select days', '3 whole eggs + whites daily', 'Leafy salads & healthy fats'],
            noItems: ['No Rice', 'No Roti', 'No Fruit', 'No Sugar', 'No Nuts'],
            isFuel: true,
            highlight: true,   // ← FUEL ZERO highlighted
            image: '/images/services/img3.webp',
        },
    ];

    const addons = [
        { emoji: '🐟', label: 'Fish Upgrade', detail: 'Start +$30 · Lean +$40 · Max +$50 · Zero +$50' },
        { emoji: '🥤', label: 'Whey Protein', detail: '$3 / serving · $55 / month' },
        { emoji: '🥚', label: 'Extra Egg Whites', detail: '+$20 / month' },
        { emoji: '🧀', label: 'Extra Paneer / Protein', detail: '+$25 / month' },
    ];

    const whyPoints = [
        'Fresh · Chef-made meals',
        'Veg & Non-Veg options',
        'Gym-approved plans',
        'Easy upgrades as you progress',
    ];

    return (
        <>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Section shell ── */
        .prc-section {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
          padding: 100px 0 80px;
          font-family: 'DM Sans', sans-serif;
        }
        .prc-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb,255,100,0),.45), transparent);
        }
        .prc-glow-tl {
          position: absolute; top: -180px; left: -100px;
          width: 600px; height: 500px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),.09) 0%, transparent 70%);
          pointer-events: none;
        }
        .prc-glow-br {
          position: absolute; bottom: -200px; right: -120px;
          width: 550px; height: 450px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .prc-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; opacity: .5;
        }
        .prc-container {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto; padding: 0 24px;
        }

        /* ── Header ── */
        .prc-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: end;
          margin-bottom: 60px;
        }
        @media (max-width: 768px) { .prc-header { grid-template-columns: 1fr; gap: 24px; } }

        .prc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(var(--primary-rgb,255,100,0),.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),.25);
          border-radius: 100px; padding: 6px 18px 6px 10px; margin-bottom: 20px;
        }
        .prc-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--primary,#ff6400);
          animation: prc-pulse 2s ease-in-out infinite;
        }
        @keyframes prc-pulse {
          0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}
        }
        .prc-eyebrow-text {
          font-size: 12px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--primary,#ff6400);
        }
        .prc-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 5vw, 68px);
          color: #fff; line-height: .95; letter-spacing: 1px; margin: 0;
        }
        .prc-heading em { font-style: normal; color: var(--primary,#ff6400); }

        .prc-header-right {
          display: flex; flex-direction: column; gap: 20px; align-items: flex-start;
        }
        .prc-subtext {
          font-size: 15px; color: rgba(255,255,255,.4);
          font-weight: 300; line-height: 1.75; margin: 0;
        }
        .prc-why {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .prc-why-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 100px; padding: 6px 14px;
          font-size: 12px; font-weight: 500;
          color: rgba(255,255,255,.6);
        }
        .prc-why-check {
          width: 16px; height: 16px; border-radius: 50%;
          background: rgba(var(--primary-rgb,255,100,0),.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--primary,#ff6400); flex-shrink: 0;
        }

        /* ── Swiper wrapper ── */
        .prc-swiper-wrap { position: relative; }
        .prc-swiper .swiper-slide { height: auto; }

        /* ── Card ── */
        .prc-card {
          position: relative;
          background: #141414;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 20px;
          overflow: hidden;
          display: flex; flex-direction: column;
          height: 100%;
          transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
        }
        .prc-card:hover {
          transform: translateY(-5px);
          border-color: rgba(var(--primary-rgb,255,100,0),.3);
          box-shadow: 0 24px 60px rgba(0,0,0,.45);
        }
        /* FUEL MAX / FUEL ZERO glow */
        .prc-card.is-highlight {
          border-color: rgba(var(--primary-rgb,255,100,0),.4);
          box-shadow: 0 0 0 1px rgba(var(--primary-rgb,255,100,0),.18),
                      0 20px 60px rgba(0,0,0,.5);
        }

        /* food image strip */
        .prc-card-img {
          position: relative; height: 140px; overflow: hidden; flex-shrink: 0;
        }
        .prc-card-img img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(.55) saturate(1.2);
          transition: transform .5s ease;
        }
        .prc-card:hover .prc-card-img img { transform: scale(1.06); }
        /* gradient fade */
        .prc-card-img::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 80%;
          background: linear-gradient(to top, #141414, transparent);
        }
        /* highlight image extra brightness */
        .prc-card.is-highlight .prc-card-img img {
          filter: brightness(.65) saturate(1.4);
        }

        /* top badge */
        .prc-card-badge {
          position: absolute; top: 12px; left: 12px; z-index: 2;
          background: var(--primary,#ff6400);
          color: #fff; font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 4px 12px; border-radius: 100px;
        }
        .prc-card-tag {
          position: absolute; top: 12px; right: 12px; z-index: 2;
          background: rgba(0,0,0,.5); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.7); font-size: 10px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 4px 10px; border-radius: 100px;
        }

        /* card body */
        .prc-card-body {
          padding: 22px 22px 24px; display: flex; flex-direction: column; flex: 1;
        }

        /* emoji + title row */
        .prc-card-title-row {
          display: flex; align-items: flex-start; gap: 10px; margin-bottom: 4px;
        }
        .prc-card-emoji {
          font-size: 22px; margin-top: 2px; flex-shrink: 0;
        }
        .prc-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px; letter-spacing: .5px;
          color: #fff; line-height: 1.1;
        }
        .prc-card.is-highlight .prc-card-title { color: var(--primary,#ff6400); }

        .prc-card-desc {
          font-size: 11.5px; color: rgba(255,255,255,.35);
          font-weight: 500; letter-spacing: .3px;
          text-transform: uppercase; margin-bottom: 16px;
        }

        /* price */
        .prc-price-row {
          display: flex; align-items: baseline; gap: 6px; margin-bottom: 6px;
        }
        .prc-price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px; color: #fff; line-height: 1; letter-spacing: 1px;
        }
        .prc-card.is-highlight .prc-price { color: var(--primary,#ff6400); }
        .prc-price-per {
          font-size: 12px; color: rgba(255,255,255,.35);
          font-weight: 500; letter-spacing: .5px;
        }

        /* veg toggle */
        .prc-toggle {
          display: inline-flex;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 8px; padding: 3px; gap: 2px;
          margin-bottom: 16px;
          width:fit-content;
        }
        .prc-toggle-btn {
          padding: 5px 14px; border-radius: 6px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          border: none; cursor: pointer;
          background: transparent;
          color: rgba(255,255,255,.3);
          font-family: 'DM Sans', sans-serif;
          transition: background .2s, color .2s;
        }
        .prc-toggle-btn.active {
          background: var(--primary,#ff6400); color: #fff;
        }

        /* divider */
        .prc-card-divider {
          height: 1px; margin: 12px 0 14px;
          background: linear-gradient(90deg, rgba(var(--primary-rgb,255,100,0),.25), transparent);
        }

        /* macro pills — FUEL plans only */
        .prc-macros {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 6px;
          margin-bottom: 16px;
        }
        .macro-pill {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 10px; padding: 8px 6px;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          text-align: center;
        }
        .macro-pill-icon {
          color: var(--primary,#ff6400);
          display: flex; align-items: center; justify-content: center;
        }
        .macro-pill-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 15px; color: #fff; letter-spacing: .5px; line-height: 1;
        }
        .macro-pill-label {
          font-size: 9px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          color: rgba(255,255,255,.3);
        }

        /* features list */
        .prc-features { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; flex: 1; }
        .prc-feature {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; color: rgba(255,255,255,.6); font-weight: 400;
        }
        .prc-feature-check {
          width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
          background: rgba(var(--primary-rgb,255,100,0),.15);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),.3);
          display: flex; align-items: center; justify-content: center;
          color: var(--primary,#ff6400); margin-top: 1px;
        }
        .prc-feature-x {
          width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
          background: rgba(255,100,100,.1);
          border: 1px solid rgba(255,100,100,.25);
          display: flex; align-items: center; justify-content: center;
          color: #f87171; margin-top: 1px;
        }
        .prc-no-item { color: rgba(255,100,100,.7); }

        /* CTA */
        .prc-cta {
          display: flex; align-items: center; justify-content: center;
          gap: 8px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 12px; padding: 13px 20px;
          color: rgba(255,255,255,.7);
          font-size: 13px; font-weight: 600; letter-spacing: .5px;
          text-decoration: none;
          transition: background .25s, border-color .25s, color .25s, transform .25s;
          margin-top: auto;
        }
        .prc-cta:hover, .prc-card.is-highlight .prc-cta {
          background: var(--primary,#ff6400);
          border-color: var(--primary,#ff6400);
          color: #fff;
          transform: translateY(-1px);
        }

        /* ── Pagination ── */
        .prc-pagination { display: flex; justify-content: center; margin-top: 32px; }
        .prc-pagination .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: var(--primary,#ff6400); opacity: .25;
          border-radius: 100px; transition: all .3s;
        }
        .prc-pagination .swiper-pagination-bullet-active {
          opacity: 1; width: 24px;
        }

        /* ── Add-ons ── */
        .prc-addons {
          margin-top: 64px;
          background: #111;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 20px;
          padding: 40px 40px;
        }
        @media (max-width: 640px) { .prc-addons { padding: 28px 20px; } }

        .prc-addons-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 28px;
        }
        .prc-addons-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(var(--primary-rgb,255,100,0),.12);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--primary,#ff6400);
        }
        .prc-addons-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px; letter-spacing: .5px; color: #fff;
        }

        .prc-addons-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 16px;
        }
        @media (max-width: 900px) { .prc-addons-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) { .prc-addons-grid { grid-template-columns: 1fr; } }

        .prc-addon-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 14px; padding: 18px 16px;
          transition: border-color .25s, background .25s;
        }
        .prc-addon-card:hover {
          border-color: rgba(var(--primary-rgb,255,100,0),.25);
          background: rgba(var(--primary-rgb,255,100,0),.04);
        }
        .prc-addon-emoji { font-size: 24px; margin-bottom: 10px; }
        .prc-addon-label {
          font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 4px;
        }
        .prc-addon-detail {
          font-size: 11.5px; color: rgba(255,255,255,.35); line-height: 1.6; font-weight: 300;
        }
      `}</style>

            <section className="prc-section">
                <div className="prc-glow-tl" />
                <div className="prc-glow-br" />
                <div className="prc-grain" />

                <div className="prc-container">

                    {/* ── Header ── */}
                    <div className="prc-header">
                        <div>
                            <div className="prc-eyebrow">
                                <div className="prc-eyebrow-dot" />
                                <span className="prc-eyebrow-text">🔥 Fuel Plate by MMC</span>
                            </div>
                            <h2 className="prc-heading">
                                Choose Your<br /><em>Perfect Plan</em>
                            </h2>
                        </div>

                        <div className="prc-header-right">
                            <p className="prc-subtext">
                                Performance meal plans — freshly prepared by chefs, designed by nutrition experts. Mon – Fri · 20 meals / month.
                            </p>
                            <div className="prc-why">
                                {whyPoints.map((p, i) => (
                                    <div key={i} className="prc-why-pill">
                                        <div className="prc-why-check"><Check size={9} strokeWidth={3} /></div>
                                        {p}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Swiper ── */}
                    <div className="prc-swiper-wrap">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            loop
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 4500, disableOnInteraction: false }}
                            pagination={{ clickable: true, el: '.prc-pagination' }}
                            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                            className="prc-swiper"
                            style={{ paddingBottom: '8px' }}
                        >
                            {plans.map((plan, i) => {
                                const nonveg = isNonVeg(i);
                                const hasDual = plan.vegPrice && plan.nonvegPrice;
                                const price = nonveg && plan.nonvegPrice
                                    ? plan.nonvegPrice
                                    : plan.vegPrice ?? plan.nonvegPrice;

                                return (
                                    <SwiperSlide key={i}>
                                        <div className={`prc-card${plan.highlight ? ' is-highlight' : ''}`}>

                                            {/* food image */}
                                            <div className="prc-card-img">
                                                <img src={plan.image} alt={plan.title} />
                                                {plan.highlight && (
                                                    <div className="prc-card-badge">
                                                        {plan.title === 'FUEL MAX' ? '⭐ Most Popular' : '🥩 Elite'}
                                                    </div>
                                                )}
                                                <div className="prc-card-tag">{plan.tag}</div>
                                            </div>

                                            <div className="prc-card-body">
                                                {/* title */}
                                                <div className="prc-card-title-row">
                                                    <span className="prc-card-emoji">{plan.emoji}</span>
                                                    <div>
                                                        <div className="prc-card-title">{plan.title}</div>
                                                        <div className="prc-card-desc">{plan.desc}</div>
                                                    </div>
                                                </div>

                                                {/* price */}
                                                <div className="prc-price-row">
                                                    <span className="prc-price">{price}</span>
                                                    <span className="prc-price-per">/ month</span>
                                                </div>

                                                {/* veg/non-veg toggle — only for dual-price plans */}
                                                {hasDual && (
                                                    <div className="prc-toggle">
                                                        <button
                                                            className={`prc-toggle-btn${!nonveg ? ' active' : ''}`}
                                                            onClick={() => setVegMode(prev => ({ ...prev, [i]: 'veg' }))}
                                                        >🌱 Veg</button>
                                                        <button
                                                            className={`prc-toggle-btn${nonveg ? ' active' : ''}`}
                                                            onClick={() => setVegMode(prev => ({ ...prev, [i]: 'nonveg' }))}
                                                        >🍗 Non-Veg</button>
                                                    </div>
                                                )}

                                                <div className="prc-card-divider" />

                                                {/* macro icons — FUEL plans only */}
                                                {plan.isFuel && plan.macros && (
                                                    <div className="prc-macros">
                                                        <MacroPill icon={<Beef size={12} />} label="Protein" value={plan.macros.protein} />
                                                        <MacroPill icon={<Zap size={12} />} label="Carbs" value={plan.macros.carbs} />
                                                        <MacroPill icon={<Flame size={12} />} label="Fat" value={plan.macros.fat} />
                                                        <MacroPill icon={<Dumbbell size={12} />} label="kcal" value={plan.macros.cal} />
                                                    </div>
                                                )}

                                                {/* features */}
                                                <div className="prc-features">
                                                    {plan.features.map((f, fi) => (
                                                        <div key={fi} className="prc-feature">
                                                            <div className="prc-feature-check"><Check size={8} strokeWidth={3} /></div>
                                                            {f}
                                                        </div>
                                                    ))}
                                                    {plan.noItems.map((n, ni) => (
                                                        <div key={ni} className="prc-feature prc-no-item">
                                                            <div className="prc-feature-x"><X size={8} strokeWidth={3} /></div>
                                                            {n}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA */}
                                                <Link href="/appointment" className="prc-cta">
                                                    Choose Plan
                                                    <Plus size={14} />
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <div className="prc-pagination" />
                    </div>

                    {/* ── Add-ons ── */}
                    <div className="prc-addons">
                        <div className="prc-addons-header">
                            <div className="prc-addons-icon"><Plus size={18} /></div>
                            <div className="prc-addons-title">Optional Add-Ons</div>
                        </div>
                        <div className="prc-addons-grid">
                            {addons.map((a, i) => (
                                <div key={i} className="prc-addon-card">
                                    <div className="prc-addon-emoji">{a.emoji}</div>
                                    <div className="prc-addon-label">{a.label}</div>
                                    <div className="prc-addon-detail">{a.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default PricingSection;