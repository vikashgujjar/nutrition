"use client";

import React, { useState } from 'react';
import { Play, ArrowRight, Activity } from 'lucide-react';

const BmiCalculator = () => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weightLbs, setWeightLbs] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: 'Underweight', color: '#3b82f6' };
    if (bmi < 25) return { label: 'Normal', color: '#16a34a' };
    if (bmi < 30) return { label: 'Overweight', color: '#ea580c' };
    return { label: 'Obese', color: '#dc2626' };
  };

  const getBmiPercent = (bmi: number) => Math.min(Math.max(((bmi - 10) / 30) * 100, 0), 100);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    let bmi: number | null = null;
    if (unit === 'metric') {
      const h = parseFloat(heightCm) / 100;
      const w = parseFloat(weight);
      if (h > 0 && w > 0) bmi = w / (h * h);
    } else {
      const totalInches = parseFloat(heightFt) * 12 + parseFloat(heightIn || '0');
      const w = parseFloat(weightLbs);
      if (totalInches > 0 && w > 0) bmi = (w / (totalInches * totalInches)) * 703;
    }
    if (bmi) setResult(parseFloat(bmi.toFixed(1)));
  };

  const category = result ? getBmiCategory(result) : null;
  const pct = result ? getBmiPercent(result) : 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ══════════════════════════════════════
           LIGHT THEME BMI CALCULATOR
        ══════════════════════════════════════ */

        .bmi-section {
          background: #f5f3f0;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* top 3px orange accent rule */
        .bmi-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, var(--primary,#ff6400), transparent);
        }

        /* subtle dot-grid texture */
        .bmi-grain {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none; z-index: 0;
        }

        /* warm glow blobs */
        .bmi-glow-left {
          position: absolute; top: -120px; left: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),0.1) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .bmi-glow-right {
          position: absolute; bottom: -80px; right: -60px;
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .bmi-layout {
          display: grid;
          grid-template-columns: 7fr 5fr;
          min-height: 640px;
          position: relative; z-index: 1;
        }
        @media (max-width: 1024px) { .bmi-layout { grid-template-columns: 1fr; } }

        /* ── LEFT: video panel ── */
        .bmi-media {
          position: relative;
          overflow: hidden;
          min-height: 420px;
        }
        .bmi-media-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: brightness(0.72) saturate(1.1);
          transition: transform 0.6s ease;
        }
        .bmi-media:hover .bmi-media-img { transform: scale(1.03); }

        /* right-edge gradient bleeds into light form panel */
        // .bmi-media::after {
        //   content: '';
        //   position: absolute; top: 0; right: 0;
        //   width: 200px; height: 100%;
        //   background: linear-gradient(to right, transparent, #f5f3f0);
        //   pointer-events: none;
        // }
        // @media (max-width: 1024px) { .bmi-media::after { display: none; } }

        /* play button – white with orange icon */
        .bmi-play-btn {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80px; height: 80px; border-radius: 50%;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(255,255,255,1);
          display: flex; align-items: center; justify-content: center;
          color: var(--primary,#ff6400);
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          transition: background 0.3s, transform 0.3s, color 0.3s;
          z-index: 2;
        }
        .bmi-play-btn::before {
          content: '';
          position: absolute;
          width: 110px; height: 110px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.6);
          animation: play-ring-lt 2s ease-out infinite;
        }
        @keyframes play-ring-lt {
          0%   { transform: scale(0.9); opacity: 0.9; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .bmi-play-btn:hover {
          background: var(--primary,#ff6400);
          color: #fff;
          transform: translate(-50%,-50%) scale(1.1);
        }

        /* media label – white glass */
        .bmi-media-label {
          position: absolute; bottom: 28px; left: 28px; z-index: 2;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.95);
          border-radius: 12px; padding: 12px 18px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .bmi-media-label-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--primary,#ff6400);
          animation: bmi-pulse-lt 2s ease-in-out infinite;
        }
        @keyframes bmi-pulse-lt {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        .bmi-media-label-text {
          font-size: 12px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #333;
        }

        /* ── RIGHT: form panel – pure white ── */
        .bmi-form-panel {
          background: #ffffff;
          border-left: 1px solid rgba(0,0,0,0.07);
          padding: 60px 48px;
          display: flex; flex-direction: column; justify-content: center;
          box-shadow: -12px 0 48px rgba(0,0,0,0.04);
        }
        @media (max-width: 640px) { .bmi-form-panel { padding: 48px 24px; } }

        /* eyebrow */
        .bmi-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(var(--primary-rgb,255,100,0),0.08);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),0.2);
          border-radius: 100px;
          padding: 5px 14px 5px 8px;
          margin-bottom: 16px; width: fit-content;
        }
        .bmi-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--primary,#ff6400);
          animation: bmi-pulse-lt 2s ease-in-out infinite;
        }
        .bmi-eyebrow-text {
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--primary,#ff6400);
        }

        /* heading – dark on light */
        .bmi-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(38px, 4vw, 56px);
          color: #111;
          line-height: 0.95; letter-spacing: 1px;
          margin-bottom: 28px;
        }
        .bmi-title em { font-style: normal; color: var(--primary,#ff6400); }

        /* toggle */
        .bmi-toggle {
          display: inline-flex;
          background: #f0ede8;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 10px;
          padding: 4px; gap: 4px; width: fit-content;
          margin-bottom: 28px;
        }
        .bmi-toggle-btn {
          padding: 8px 22px; border-radius: 7px;
          font-size: 12px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: background 0.25s, color 0.25s, box-shadow 0.25s;
          background: transparent;
          color: rgba(0,0,0,0.35);
          font-family: 'DM Sans', sans-serif;
        }
        .bmi-toggle-btn.active {
          background: var(--primary,#ff6400);
          color: #fff;
          box-shadow: 0 4px 14px rgba(var(--primary-rgb,255,100,0),0.3);
        }

        /* inputs */
        .bmi-field {
          position: relative; margin-bottom: 16px;
        }
        .bmi-field-label {
          position: absolute; right: 18px; top: 50%;
          transform: translateY(-50%);
          font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(0,0,0,0.25);
          pointer-events: none; z-index: 1;
        }
        .bmi-input {
          width: 100%; height: 56px;
          background: #f8f6f2;
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 14px;
          padding: 0 56px 0 20px;
          color: #111; font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          box-sizing: border-box;
        }
        .bmi-input::placeholder { color: rgba(0,0,0,0.25); }
        .bmi-input:focus {
          border-color: var(--primary,#ff6400);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(var(--primary-rgb,255,100,0),0.1);
        }
        .bmi-input::-webkit-outer-spin-button,
        .bmi-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        .bmi-input[type=number] { -moz-appearance: textfield; }

        .bmi-dual-field {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 16px;
        }

        /* submit */
        .bmi-submit {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--primary,#ff6400);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600; font-size: 14px; letter-spacing: 0.5px;
          padding: 15px 28px; border-radius: 100px;
          border: none; cursor: pointer; width: 100%;
          justify-content: center; margin-top: 8px;
          transition: box-shadow 0.25s, transform 0.25s;
          box-shadow: 0 8px 28px rgba(var(--primary-rgb,255,100,0),0.35);
        }
        .bmi-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(var(--primary-rgb,255,100,0),0.5);
        }
        .bmi-submit-icon {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.25);
          display: inline-flex; align-items: center; justify-content: center;
        }

        /* result card – warm light surface */
        .bmi-result {
          margin-top: 20px;
          background: #f8f6f2;
          border: 1.5px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          padding: 20px 22px;
          animation: result-in-lt 0.4s ease;
        }
        @keyframes result-in-lt {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bmi-result-top {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 14px;
        }
        .bmi-result-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
          display: flex; align-items: center; gap: 6px;
        }
        .bmi-result-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 42px; line-height: 1;
          color: #111; letter-spacing: 1px;
        }
        .bmi-result-category {
          font-size: 12px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 5px 14px; border-radius: 100px;
        }
        .bmi-bar-bg {
          height: 6px; border-radius: 100px;
          background: rgba(0,0,0,0.08); overflow: hidden;
        }
        .bmi-bar-fill {
          height: 100%; border-radius: 100px;
          transition: width 0.6s cubic-bezier(0.34,1.56,0.64,1);
        }
      `}</style>

      <section className="bmi-section">
        <div className="bmi-glow-left" />
        <div className="bmi-glow-right" />
        <div className="bmi-grain" />

        <div className="bmi-layout">
          {/* ── LEFT: video/image ── */}
          <div className="bmi-media">
            <img src="images/background/img.png" alt="BMI visual" className="bmi-media-img" />

            <button
              className="bmi-play-btn"
              data-type="youtube"
              data-src="https://www.youtube.com/embed/o8OgzQdA70c"
            >
              <Play fill="currentColor" size={22} />
            </button>

            <div className="bmi-media-label">
              <div className="bmi-media-label-dot" />
              <span className="bmi-media-label-text">Watch How It Works</span>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="bmi-form-panel">
            <div className="bmi-eyebrow">
              <div className="bmi-eyebrow-dot" />
              <span className="bmi-eyebrow-text">BMI Calculator</span>
            </div>

            <h2 className="bmi-title">
              Calculate Your<br /><em>Body Mass</em><br />Index
            </h2>

            <div className="bmi-toggle">
              <button
                className={`bmi-toggle-btn${unit === 'metric' ? ' active' : ''}`}
                onClick={() => { setUnit('metric'); setResult(null); }}
                type="button"
              >Metric</button>
              <button
                className={`bmi-toggle-btn${unit === 'imperial' ? ' active' : ''}`}
                onClick={() => { setUnit('imperial'); setResult(null); }}
                type="button"
              >Imperial</button>
            </div>

            <form onSubmit={calculateBMI}>
              {unit === 'metric' ? (
                <>
                  <div className="bmi-field">
                    <span className="bmi-field-label">CM</span>
                    <input
                      type="number" placeholder="Height"
                      value={heightCm} onChange={e => setHeightCm(e.target.value)}
                      className="bmi-input" min="50" max="300" required
                    />
                  </div>
                  <div className="bmi-field">
                    <span className="bmi-field-label">KG</span>
                    <input
                      type="number" placeholder="Weight"
                      value={weight} onChange={e => setWeight(e.target.value)}
                      className="bmi-input" min="10" max="300" required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="bmi-dual-field">
                    <div className="bmi-field" style={{ marginBottom: 0 }}>
                      <span className="bmi-field-label">FT</span>
                      <input
                        type="number" placeholder="Feet"
                        value={heightFt} onChange={e => setHeightFt(e.target.value)}
                        className="bmi-input" min="1" max="9" required
                      />
                    </div>
                    <div className="bmi-field" style={{ marginBottom: 0 }}>
                      <span className="bmi-field-label">IN</span>
                      <input
                        type="number" placeholder="Inches"
                        value={heightIn} onChange={e => setHeightIn(e.target.value)}
                        className="bmi-input" min="0" max="11"
                      />
                    </div>
                  </div>
                  <div className="bmi-field" style={{ marginTop: 16 }}>
                    <span className="bmi-field-label">LBS</span>
                    <input
                      type="number" placeholder="Weight"
                      value={weightLbs} onChange={e => setWeightLbs(e.target.value)}
                      className="bmi-input" min="22" max="660" required
                    />
                  </div>
                </>
              )}

              <button type="submit" className="bmi-submit">
                Calculate BMI
                <span className="bmi-submit-icon">
                  <ArrowRight size={16} />
                </span>
              </button>
            </form>

            {result && category && (
              <div className="bmi-result">
                <div className="bmi-result-top">
                  <div>
                    <div className="bmi-result-label">
                      <Activity size={12} /> Your BMI Score
                    </div>
                    <div className="bmi-result-value">{result}</div>
                  </div>
                  <div
                    className="bmi-result-category"
                    style={{
                      background: `${category.color}15`,
                      color: category.color,
                      border: `1.5px solid ${category.color}30`,
                    }}
                  >
                    {category.label}
                  </div>
                </div>
                <div className="bmi-bar-bg">
                  <div
                    className="bmi-bar-fill"
                    style={{ width: `${pct}%`, background: category.color }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BmiCalculator;