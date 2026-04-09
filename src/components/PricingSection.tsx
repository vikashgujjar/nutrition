'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Check, X, Plus, Zap, Flame, Dumbbell, Beef, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const MacroPill = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="mpill">
    <div className="mpill-icon">{icon}</div>
    <div className="mpill-value">{value}</div>
    <div className="mpill-label">{label}</div>
  </div>
);

const PricingSection = () => {
  const [vegMode, setVegMode] = useState<Record<number, 'veg' | 'nonveg'>>({});
  const toggle = (i: number, mode: 'veg' | 'nonveg') =>
    setVegMode(prev => ({ ...prev, [i]: mode }));
  const isNonVeg = (i: number) => vegMode[i] === 'nonveg';

  const plans = [
    {
      id: 0, emoji: '💚', title: 'VEG TIFFIN', tag: 'Home Style',
      desc: 'Mon – Fri · 20 Meals / Month', vegPrice: '$250', nonvegPrice: null,
      features: ['2 Veg Sabzi', '8 Rotis', 'Simple home-style meals'],
      noItems: [], isFuel: false, highlight: false, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=100&w=800',
    },
    {
      id: 1, emoji: '🍗', title: 'NON-VEG TIFFIN', tag: 'Classic',
      desc: 'Mon – Fri · 20 Meals / Month', vegPrice: null, nonvegPrice: '$280',
      features: ['1 Veg Sabzi', '1 Chicken Sabzi', '8 Rotis'],
      noItems: [], isFuel: false, highlight: false, image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=100&w=800',
    },
    {
      id: 2, emoji: '🍚', title: 'RICE & ROTI COMBO', tag: 'Combo',
      desc: '1 Meal Per Day', vegPrice: '$330', nonvegPrice: '$350',
      features: ['1 Rice Bowl (Veg or Chicken)', '1 Veg Sabzi', '4 Rotis'],
      noItems: [], isFuel: false, highlight: false, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=100&w=800',
    },
    {
      id: 3, emoji: '⚡', title: 'FUEL START', tag: 'Balanced',
      desc: 'Balanced Nutrition · 2 Meals / Day', vegPrice: '$309', nonvegPrice: '$319',
      macros: { protein: '110g', carbs: '180g', fat: '45g', cal: '1,550' },
      features: ['Rice or Quinoa bowls', 'Eggs (whole + whites)', 'Fresh salad', 'Yogurt & seasonal fruit'],
      noItems: [], isFuel: true, highlight: false, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=100&w=800',
    },
    {
      id: 4, emoji: '🔥', title: 'FUEL LEAN', tag: 'Fat Loss',
      desc: 'Fat Loss · 3 Meals / Day', vegPrice: '$349', nonvegPrice: '$359',
      macros: { protein: '140g', carbs: '120g', fat: '40g', cal: '1,400' },
      features: ['Lean protein bowls', 'High-protein salads', 'Yogurt bowl', 'Nuts on select days', 'Controlled carbs'],
      noItems: [], isFuel: true, highlight: false, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=100&w=800',
    },
    {
      id: 5, emoji: '💪', title: 'FUEL MAX', tag: 'Most Popular',
      desc: 'Muscle Gain · 3 Meals + Protein Boost', vegPrice: '$389', nonvegPrice: '$399',
      macros: { protein: '180g', carbs: '220g', fat: '55g', cal: '2,100' },
      features: ['High-protein bowls', 'Fish on select days', 'Daily egg-white boost', 'Protein salads', 'Yogurt & nuts (select days)'],
      noItems: [], isFuel: true, highlight: true, image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=100&w=800',
    },
    {
      id: 6, emoji: '🥩', title: 'FUEL ZERO', tag: 'Zero Carb Elite',
      desc: 'Zero-Carb · 3 Meals / Day', vegPrice: '$519', nonvegPrice: '$549',
      macros: { protein: '200g', carbs: '0g', fat: '70g', cal: '1,800' },
      features: ['Paneer / Chicken thigh plates', 'Fish on select days', '3 whole eggs + whites daily', 'Leafy salads & healthy fats'],
      noItems: ['No Rice', 'No Roti', 'No Fruit', 'No Sugar', 'No Nuts'],
      isFuel: true, highlight: true, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=100&w=800',
    },
  ];

  const addons = [
    { emoji: '🐟', label: 'Fish Upgrade', detail: 'Start +$30 · Lean +$40 · Max +$50 · Zero +$50' },
    { emoji: '🥤', label: 'Whey Protein', detail: '$3 / serving · $55 / month' },
    { emoji: '🥚', label: 'Extra Egg Whites', detail: '+$20 / month' },
    { emoji: '🧀', label: 'Extra Paneer / Protein', detail: '+$25 / month' },
  ];

  const whyPoints = [
    { icon: '✔', text: 'Fresh · Chef-made meals' },
    { icon: '✔', text: 'Veg & Non-Veg options' },
    { icon: '✔', text: 'Gym-approved plans' },
    { icon: '✔', text: 'Easy upgrades as you progress' },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ── Section ── */
        .prc2-section {
          background: #fafaf8;
          position: relative;
          overflow: hidden;
          padding: 100px 0 80px;
          font-family: 'Inter', sans-serif;
        }

        /* Geometric SVG bg */
        .prc2-bg-svg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        /* Warm glow blobs */
        .prc2-glow-tl {
          position: absolute; top: -200px; left: -120px;
          width: 560px; height: 480px;
          background: radial-gradient(ellipse, rgba(255,100,0,0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .prc2-glow-br {
          position: absolute; bottom: -180px; right: -100px;
          width: 480px; height: 420px;
          background: radial-gradient(ellipse, rgba(255,100,0,0.05) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        /* Fine dot texture */
        .prc2-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.045) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none; z-index: 0;
        }

        .prc2-container {
          position: relative; z-index: 1;
          max-width: 1300px; margin: 0 auto; padding: 0 28px;
        }

        /* ── Header ── */
        .prc2-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: end;
          margin-bottom: 64px;
        }
        @media (max-width: 768px) { .prc2-header { grid-template-columns: 1fr; gap: 24px; } }

        .prc2-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,100,0,0.08);
          border: 1.5px solid rgba(255,100,0,0.2);
          border-radius: 100px; padding: 6px 18px 6px 10px;
          margin-bottom: 20px;
        }
        .prc2-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #ff6400;
          animation: prc2-pulse 2s ease-in-out infinite;
        }
        @keyframes prc2-pulse {
          0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}
        }
        .prc2-eyebrow-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #ff6400; font-family: 'Inter', sans-serif;
        }

        .prc2-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 900;
          color: #111; line-height: 1.05; letter-spacing: -1px; margin: 0;
        }
        .prc2-heading em {
          font-style: normal; color: #ff6400;
          position: relative;
        }
        .prc2-heading em::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0; right: 0; height: 3px;
          background: #ff6400;
          border-radius: 2px;
          opacity: 0.35;
        }

        .prc2-header-right {
          display: flex; flex-direction: column; gap: 24px; align-items: flex-start;
        }
        .prc2-subtext {
          font-size: 15px; color: #666;
          font-weight: 400; line-height: 1.8; margin: 0;
        }
        .prc2-why-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%;
        }
        .prc2-why-item {
          display: flex; align-items: center; gap: 10px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 12px; padding: 10px 14px;
          font-size: 12.5px; font-weight: 500; color: #444;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .prc2-why-check {
          width: 18px; height: 18px; border-radius: 50%;
          background: rgba(255,100,0,0.1);
          border: 1.5px solid rgba(255,100,0,0.25);
          display: flex; align-items: center; justify-content: center;
          color: #ff6400; flex-shrink: 0;
          font-size: 9px; font-weight: 800;
        }

        /* ── Swiper ── */
        .prc2-swiper-wrap { position: relative; }
        .prc2-swiper .swiper-slide { height: auto; }

        /* ── Card ── */
        .prc2-card {
          position: relative;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.07);
          border-radius: 24px;
          overflow: hidden;
          display: flex; flex-direction: column;
          height: 100%;
          transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .prc2-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,100,0,0.25);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,100,0,0.1);
        }
        .prc2-card.is-highlight {
          border-color: #ff6400;
          box-shadow: 0 8px 40px rgba(255,100,0,0.18), 0 0 0 1px rgba(255,100,0,0.2);
        }
        .prc2-card.is-highlight:hover {
          box-shadow: 0 24px 64px rgba(255,100,0,0.25), 0 0 0 2px rgba(255,100,0,0.3);
        }

        /* Image strip */
        .prc2-card-img {
          position: relative; height: 270px; overflow: hidden; flex-shrink: 0;
        }
        .prc2-card-img img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform .5s ease;
        }
        .prc2-card:hover .prc2-card-img img { transform: scale(1.06); }
        // .prc2-card-img::after {
        //   content: '';
        //   position: absolute; bottom: 0; left: 0; right: 0;
        //   height: 70%;
        //   background: linear-gradient(to top, #fff, transparent);
        // }
        // .prc2-card.is-highlight .prc2-card-img::after {
        //   background: linear-gradient(to top, #fff1e8, transparent);
        // }

        /* badge */
        .prc2-card-badge {
          position: absolute; top: 14px; left: 14px; z-index: 2;
          background: #ff6400;
          color: #fff; font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 5px 12px; border-radius: 100px;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 4px 14px rgba(255,100,0,0.4);
        }
        .prc2-card-tag {
          position: absolute; top: 14px; right: 14px; z-index: 2;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
          border: 1px solid rgba(0,0,0,0.1);
          color: #555; font-size: 10px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 5px 10px; border-radius: 100px;
          font-family: 'Inter', sans-serif;
        }

        /* Highlight stripe at top */
        .prc2-card.is-highlight::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: #ff6400; z-index: 3;
        }

        /* body */
        .prc2-card-body {
          padding: 20px 22px 24px; display: flex; flex-direction: column; flex: 1;
        }

        .prc2-card-title-row {
          display: flex; align-items: flex-start; gap: 10px; margin-bottom: 4px;
        }
        .prc2-card-emoji { font-size: 20px; margin-top: 2px; flex-shrink: 0; }
        .prc2-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px; font-weight: 800;
          color: #111; line-height: 1.1; letter-spacing: -0.3px;
        }
        .prc2-card.is-highlight .prc2-card-title { color: #ff6400; }

        .prc2-card-desc {
          font-size: 11px; color: #999;
          font-weight: 600; letter-spacing: .5px;
          text-transform: uppercase; margin-bottom: 16px;
          font-family: 'Inter', sans-serif;
        }

        /* price */
        .prc2-price-row {
          display: flex; align-items: baseline; gap: 4px; margin-bottom: 6px;
        }
        .prc2-price {
          font-family: 'Montserrat', sans-serif;
          font-size: 42px; font-weight: 900; color: #111; line-height: 1; letter-spacing: -2px;
        }
        .prc2-card.is-highlight .prc2-price { color: #ff6400; }
        .prc2-price-per {
          font-size: 12px; color: #aaa;
          font-weight: 500; letter-spacing: .3px;
        }

        /* toggle */
        .prc2-toggle {
          display: inline-flex;
          background: #f5f3f0;
          border: 1.5px solid rgba(0,0,0,0.07);
          border-radius: 10px; padding: 3px; gap: 2px;
          margin-bottom: 16px; width: fit-content;
        }
        .prc2-toggle-btn {
          padding: 5px 14px; border-radius: 7px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          border: none; cursor: pointer;
          background: transparent;
          color: rgba(0,0,0,0.3);
          font-family: 'Inter', sans-serif;
          transition: background .2s, color .2s, box-shadow .2s;
        }
        .prc2-toggle-btn.active {
          background: #ff6400; color: #fff;
          box-shadow: 0 2px 8px rgba(255,100,0,0.3);
        }

        /* divider */
        .prc2-card-divider {
          height: 1px; margin: 12px 0 14px;
          background: linear-gradient(90deg, rgba(255,100,0,0.2), transparent);
        }

        /* macro pills */
        .prc2-macros {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 6px;
          margin-bottom: 16px;
        }
        .mpill {
          background: #f8f6f2;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 10px; padding: 8px 4px;
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          text-align: center;
        }
        .mpill-icon { color: #ff6400; display: flex; align-items: center; justify-content: center; }
        .mpill-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; font-weight: 800; color: #111; letter-spacing: -.3px; line-height: 1;
        }
        .mpill-label {
          font-size: 9px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          color: #aaa; font-family: 'Inter', sans-serif;
        }

        /* features */
        .prc2-features { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; flex: 1; }
        .prc2-feature {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; color: #555; font-weight: 400;
          font-family: 'Inter', sans-serif;
        }
        .prc2-feature-check {
          width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
          background: rgba(255,100,0,0.1);
          border: 1.5px solid rgba(255,100,0,0.25);
          display: flex; align-items: center; justify-content: center;
          color: #ff6400; margin-top: 1px;
        }
        .prc2-feature-x {
          width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
          background: rgba(220,38,38,0.08);
          border: 1.5px solid rgba(220,38,38,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #dc2626; margin-top: 1px;
        }
        .prc2-no-item { color: #dc2626; }

        /* CTA */
        .prc2-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: #f5f3f0;
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 14px; padding: 13px 20px;
          color: #555;
          font-size: 13px; font-weight: 600; letter-spacing: .3px;
          text-decoration: none;
          transition: background .25s, border-color .25s, color .25s, transform .2s;
          margin-top: auto;
          font-family: 'Inter', sans-serif;
        }
        .prc2-cta:hover {
          background: #ff6400;
          border-color: #ff6400;
          color: #fff;
          transform: translateY(-1px);
        }
        .prc2-card.is-highlight .prc2-cta {
          background: #ff6400;
          border-color: #ff6400;
          color: #fff;
          box-shadow: 0 6px 20px rgba(255,100,0,0.3);
        }
        .prc2-card.is-highlight .prc2-cta:hover {
          background: #e65a00;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255,100,0,0.4);
        }

        /* Pagination */
        .prc2-pagination {
          display: flex; justify-content: center; margin-top: 36px;
        }
        .prc2-pagination .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: #ff6400; opacity: .2;
          border-radius: 100px; transition: all .3s;
        }
        .prc2-pagination .swiper-pagination-bullet-active {
          opacity: 1; width: 28px;
        }

        /* ── Add-ons ── */
        .prc2-addons {
          margin-top: 72px;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.07);
          border-radius: 24px;
          padding: 44px 44px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
          position: relative; overflow: hidden;
        }
        @media (max-width: 640px) { .prc2-addons { padding: 32px 20px; } }

        /* Decorative top-left corner accent */
        .prc2-addons::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 200px; height: 200px;
          background: radial-gradient(circle at top left, rgba(255,100,0,0.06), transparent 70%);
          pointer-events: none;
        }

        .prc2-addons-header {
          display: flex; align-items: center; gap: 14px; margin-bottom: 32px;
        }
        .prc2-addons-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(255,100,0,0.1);
          border: 1.5px solid rgba(255,100,0,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #ff6400;
        }
        .prc2-addons-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px; font-weight: 800; letter-spacing: -.5px; color: #111;
        }
        .prc2-addons-sub {
          font-size: 13px; color: #999; font-weight: 400;
          font-family: 'Inter', sans-serif; margin-top: 2px;
        }

        .prc2-addons-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 16px;
        }
        @media (max-width: 900px) { .prc2-addons-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) { .prc2-addons-grid { grid-template-columns: 1fr; } }

        .prc2-addon-card {
          background: #fafaf8;
          border: 1.5px solid rgba(0,0,0,0.07);
          border-radius: 16px; padding: 20px 18px;
          transition: border-color .25s, background .25s, transform .25s, box-shadow .25s;
          cursor: default;
        }
        .prc2-addon-card:hover {
          border-color: rgba(255,100,0,0.3);
          background: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255,100,0,0.1);
        }
        .prc2-addon-emoji {
          font-size: 28px; margin-bottom: 12px; display: block;
        }
        .prc2-addon-label {
          font-size: 14px; font-weight: 700; color: #111; margin-bottom: 5px;
          font-family: 'Montserrat', sans-serif; letter-spacing: -.2px;
        }
        .prc2-addon-detail {
          font-size: 12px; color: #888; line-height: 1.6; font-weight: 400;
          font-family: 'Inter', sans-serif;
        }

        /* ── Section bottom CTA strip ── */
        .prc2-cta-strip {
          margin-top: 56px;
          background: linear-gradient(135deg, #ff6400, #ff8c42);
          border-radius: 24px;
          padding: 44px 48px;
          display: flex; align-items: center; justify-content: space-between; gap: 32px;
          flex-wrap: wrap;
          position: relative; overflow: hidden;
        }
        .prc2-cta-strip::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .prc2-cta-strip::after {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 250px; height: 250px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
        }
        .prc2-strip-left { position: relative; z-index: 1; }
        .prc2-strip-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 900; letter-spacing: -1px;
          color: #fff; margin: 0 0 8px;
        }
        .prc2-strip-sub {
          font-size: 14px; color: rgba(255,255,255,0.8);
          font-weight: 400; margin: 0;
          font-family: 'Inter', sans-serif;
        }
        .prc2-strip-btn {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 10px;
          background: #fff; color: #ff6400;
          font-size: 14px; font-weight: 700; letter-spacing: .3px;
          padding: 15px 30px; border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          transition: transform .2s, box-shadow .2s;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
        }
        .prc2-strip-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.2);
        }
        .prc2-strip-btn-icon {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,100,0,0.12);
          display: inline-flex; align-items: center; justify-content: center;
        }
      `}</style>

      <section className="prc2-section">
        <div className="prc2-glow-tl" />
        <div className="prc2-glow-br" />
        <div className="prc2-dots" />

        {/* Decorative SVG circles in bg */}
        <svg className="prc2-bg-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <circle cx="1380" cy="80" r="180" stroke="rgba(255,100,0,0.06)" strokeWidth="1.5" fill="none" />
          <circle cx="1380" cy="80" r="120" stroke="rgba(255,100,0,0.04)" strokeWidth="1" fill="none" />
          <circle cx="60" cy="820" r="150" stroke="rgba(255,100,0,0.05)" strokeWidth="1.5" fill="none" />
          <path d="M 0 200 Q 200 100 400 250 T 800 200" stroke="rgba(255,100,0,0.04)" strokeWidth="1.5" fill="none" />
          <path d="M 800 700 Q 1000 600 1200 750 T 1440 700" stroke="rgba(255,100,0,0.04)" strokeWidth="1.5" fill="none" />
        </svg>

        <div className="prc2-container">

          {/* ── Header ── */}
          <div className="prc2-header">
            <div>
              <div className="prc2-eyebrow">
                <div className="prc2-eyebrow-dot" />
                <span className="prc2-eyebrow-text">🔥 Fuel Plate by MMC</span>
              </div>
              <h2 className="prc2-heading">
                Choose Your<br />
                <em>Perfect Plan</em>
              </h2>
            </div>

            <div className="prc2-header-right">
              <p className="prc2-subtext">
                Performance meal plans — freshly prepared by chefs, designed by nutrition experts.
                Mon – Fri · 20 meals / month.
              </p>
              <div className="prc2-why-grid">
                {whyPoints.map((p, i) => (
                  <div key={i} className="prc2-why-item">
                    <div className="prc2-why-check">✓</div>
                    {p.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Swiper ── */}
          <div className="prc2-swiper-wrap">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.prc2-pagination' }}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="prc2-swiper"
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
                    <div className={`prc2-card${plan.highlight ? ' is-highlight' : ''}`}>
                      {/* Image */}
                      <div className="prc2-card-img">
                        <img src={plan.image} alt={plan.title} />
                        {plan.highlight && (
                          <div className="prc2-card-badge">
                            {plan.title === 'FUEL MAX' ? '⭐ Most Popular' : '🥩 Elite'}
                          </div>
                        )}
                        <div className="prc2-card-tag">{plan.tag}</div>
                      </div>

                      <div className="prc2-card-body">
                        {/* Title */}
                        <div className="prc2-card-title-row">
                          <span className="prc2-card-emoji">{plan.emoji}</span>
                          <div>
                            <div className="prc2-card-title">{plan.title}</div>
                            <div className="prc2-card-desc">{plan.desc}</div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="prc2-price-row">
                          <span className="prc2-price">{price}</span>
                          <span className="prc2-price-per">/ month</span>
                        </div>

                        {/* Toggle */}
                        {hasDual && (
                          <div className="prc2-toggle">
                            <button
                              className={`prc2-toggle-btn${!nonveg ? ' active' : ''}`}
                              onClick={() => toggle(i, 'veg')}
                            >🌱 Veg</button>
                            <button
                              className={`prc2-toggle-btn${nonveg ? ' active' : ''}`}
                              onClick={() => toggle(i, 'nonveg')}
                            >🍗 Non-Veg</button>
                          </div>
                        )}

                        <div className="prc2-card-divider" />

                        {/* Macros */}
                        {plan.isFuel && plan.macros && (
                          <div className="prc2-macros">
                            <MacroPill icon={<Beef size={11} />} label="Protein" value={(plan.macros as any).protein} />
                            <MacroPill icon={<Zap size={11} />} label="Carbs" value={(plan.macros as any).carbs} />
                            <MacroPill icon={<Flame size={11} />} label="Fat" value={(plan.macros as any).fat} />
                            <MacroPill icon={<Dumbbell size={11} />} label="kcal" value={(plan.macros as any).cal} />
                          </div>
                        )}

                        {/* Features */}
                        <div className="prc2-features">
                          {plan.features.map((f, fi) => (
                            <div key={fi} className="prc2-feature">
                              <div className="prc2-feature-check"><Check size={8} strokeWidth={3} /></div>
                              {f}
                            </div>
                          ))}
                          {plan.noItems.map((n, ni) => (
                            <div key={ni} className="prc2-feature prc2-no-item">
                              <div className="prc2-feature-x"><X size={8} strokeWidth={3} /></div>
                              {n}
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Link href="/appointment" className="prc2-cta">
                          Choose Plan
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="prc2-pagination" />
          </div>

          {/* ── Add-ons ── */}
          <div className="prc2-addons">
            <div className="prc2-addons-header">
              <div className="prc2-addons-icon"><Plus size={20} /></div>
              <div>
                <div className="prc2-addons-title">Optional Add-Ons</div>
                <div className="prc2-addons-sub">Customize your plan with premium upgrades</div>
              </div>
            </div>
            <div className="prc2-addons-grid">
              {addons.map((a, i) => (
                <div key={i} className="prc2-addon-card">
                  <span className="prc2-addon-emoji">{a.emoji}</span>
                  <div className="prc2-addon-label">{a.label}</div>
                  <div className="prc2-addon-detail">{a.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Strip ── */}
          <div className="prc2-cta-strip">
            <div className="prc2-strip-left">
              <h3 className="prc2-strip-heading">Ready to Start Your Fuel Journey?</h3>
              <p className="prc2-strip-sub">Book a free consultation — we'll build the perfect plan for your goals.</p>
            </div>
            <Link href="/appointment" className="prc2-strip-btn">
              Book Free Consultation
              <span className="prc2-strip-btn-icon">
                <ChevronRight size={16} />
              </span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PricingSection;
