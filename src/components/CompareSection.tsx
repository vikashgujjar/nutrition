"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CompareSection = () => {
  return (
    <section className="compare2-root">
      <style>{`
        .compare2-root {
          background: #fff;
          padding: 120px 0;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .compare2-container {
          max-width: 1400px; margin: 0 auto; padding: 0 40px;
        }
        @media (max-width: 768px) { .compare2-container { padding: 0 24px; } }

        .compare2-head {
          text-align: center; max-width: 700px; margin: 0 auto 80px;
        }
        .compare2-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,100,0,0.08); border: 1px solid rgba(255,100,0,0.2);
          border-radius: 100px; padding: 6px 16px; margin-bottom: 24px;
        }
        .compare2-eyebrow span {
          font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #ff6400;
        }

        .compare2-title {
          font-family: 'Montserrat', sans-serif; font-size: clamp(32px, 5vw, 48px);
          font-weight: 950; color: #111; letter-spacing: -2px; line-height: 1.1; margin-bottom: 20px;
        }
        .compare2-subtitle { font-size: 18px; color: #666; font-weight: 500; }

        .compare2-slider-wrap { position: relative; padding: 0 100px; }
        @media (max-width: 1024px) { .compare2-slider-wrap { padding: 0; } }

        .compare2-card {
          border-radius: 32px; overflow: hidden; position: relative;
          transition: transform 0.5s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          background: #eee;
        }
        .compare2-card img { width: 100%; aspect-ratio: 4/5; object-fit: cover; display: block; }
        
        .compare2-badge {
          position: absolute; top: 20px; left: 20px;
          background: rgba(255,255,255,0.9); backdrop-filter: blur(10px);
          padding: 8px 16px; border-radius: 100px;
          font-size: 12px; font-weight: 700; color: #111;
          display: flex; align-items: center; gap: 6px;
        }

        .compare2-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 60px; height: 60px; border-radius: 50%;
          background: #fff; border: 1px solid #eee;
          display: flex; align-items: center; justify-content: center;
          color: #111; cursor: pointer; transition: all 0.3s; z-index: 10;
        }
        .compare2-nav:hover { background: #ff6400; border-color: #ff6400; color: #fff; transform: translateY(-50%) scale(1.1); }
        .compare2-prev { left: 0; }
        .compare2-next { right: 0; }
        @media (max-width: 1024px) { .compare2-nav { display: none; } }

        .compare2-pagination { margin-top: 60px; display: flex; justify-content: center; gap: 8px; }
        .swiper-pagination-bullet { width: 40px; height: 4px; border-radius: 2px; background: #eee; opacity: 1; margin: 0 !important; }
        .swiper-pagination-bullet-active { background: #ff6400; width: 60px; }
      `}</style>

      <div className="compare2-container">
        <div className="compare2-head">
          <div className="compare2-eyebrow">
            <Sparkles size={14} color="#ff6400" />
            <span>Success Stories</span>
          </div>
          <h2 className="compare2-title">Real People.<br />Real Results.</h2>
          <p className="compare2-subtitle">Witness the power of performance nutrition through our clients’ journeys.</p>
        </div>

        <div className="compare2-slider-wrap">
          <div className="compare2-nav compare2-prev"><ArrowLeft size={20} /></div>
          <div className="compare2-nav compare2-next"><ArrowRight size={20} /></div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            navigation={{ nextEl: '.compare2-next', prevEl: '.compare2-prev' }}
            pagination={{ clickable: true, el: '.compare2-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=100&w=800',
              'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=100&w=800',
              'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=100&w=800'
            ].map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <div className="compare2-card">
                  <div className="compare2-badge">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                    Fuel Plate Result
                  </div>
                  <img src={imgUrl} alt={`Transformation ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="compare2-pagination" />
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
