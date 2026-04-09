"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, PhoneCall, ShoppingCart, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav2-wrapper {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          transition: all 0.4s ease;
          padding: 24px 0;
          font-family: 'Inter', sans-serif;
        }
        .nav2-wrapper.is-sticky {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .nav2-container {
          max-width: 1400px; margin: 0 auto; padding: 0 28px;
          display: flex; align-items: center; justify-content: space-between;
        }
        
        .nav2-logo {
          display: flex; align-items: center; gap: 10px; text-decoration: none;
        }
        .nav2-logo img { width: 94px; height: 94px; object-fit: contain;filter: drop-shadow(0px 0px 13px black); }
        .nav2-logo-text {
          font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 950;
          color: #111; letter-spacing: -1px; line-height: 1;
        }
        .nav2-logo-dot { color: #ff6400; }

        .nav2-links { display: flex; align-items: center; gap: 40px; }
        @media (max-width: 1024px) { .nav2-links { display: none; } }
        
        .nav2-link {
          font-size: 15px; font-weight: 600; color: #444;
          text-decoration: none; transition: color 0.3s;
          position: relative;
        }
        .nav2-link:hover { color: #ff6400; }
        .nav2-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
          background: #ff6400; transition: width 0.3s;
        }
        .nav2-link:hover::after { width: 100%; }

        .nav2-actions { display: flex; align-items: center; gap: 24px; }
        
        .nav2-phone {
          display: flex; align-items: center; gap: 10px; text-decoration: none;
        }
        @media (max-width: 1200px) { .nav2-phone { display: none; } }
        .nav2-phone-icon {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,100,0,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #ff6400;
        }
        .nav2-phone-val { font-size: 15px; font-weight: 700; color: #111; }

        .nav2-btn {
          background: #111; color: #fff;
          padding: 14px 28px; border-radius: 100px;
          font-weight: 700; font-size: 14px;
          display: inline-flex; align-items: center; gap: 8px;
          transition: transform 0.3s, background 0.3s;
          text-decoration: none;
        }
        .nav2-btn:hover { background: #ff6400; transform: translateY(-2px); }

        .nav2-toggle {
          display: none; background: none; border: none; color: #111; cursor: pointer;
        }
        @media (max-width: 1024px) { .nav2-toggle { display: block; } }

        /* Mobile Menu */
        .nav2-mobile {
          position: fixed; inset: 0; background: #fff; z-index: 1100;
          padding: 40px 28px; display: flex; flex-direction: column;
          gap: 32px; transform: translateX(100%); transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav2-mobile.is-open { transform: translateX(0); }
        .nav2-mob-head { display: flex; align-items: center; justify-content: space-between; }
        .nav2-mob-links { display: flex; flex-direction: column; gap: 24px; }
        .nav2-mob-link {
          font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: 900;
          color: #111; text-decoration: none;
        }
      `}</style>

      <nav className={`nav2-wrapper ${isSticky ? 'is-sticky' : ''}`}>
        <div className="nav2-container">
          <Link href="/" className="nav2-logo">
            <img src="/images/logo.png" alt="Fuel Plate" />
          </Link>

          <div className="nav2-links">
            <Link href="/" className="nav2-link">Home</Link>
            <Link href="/about" className="nav2-link">About</Link>
            <Link href="/services" className="nav2-link">Plans</Link>
            <Link href="/blog-grid" className="nav2-link">Journal</Link>
            <Link href="/contact-us" className="nav2-link">Contact</Link>
          </div>

          <div className="nav2-actions">
            <a href="tel:+11234567890" className="nav2-phone">
              <div className="nav2-phone-icon">
                <PhoneCall size={18} />
              </div>
              <div className="nav2-phone-val">+1 123 456 7890</div>
            </a>
            <Link href="/appointment" className="nav2-btn">
              Get Started <ArrowUpRight size={16} />
            </Link>
            <button className="nav2-toggle" onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`nav2-mobile ${isMenuOpen ? 'is-open' : ''}`}>
          <div className="nav2-mob-head">
            <Link href="/" className="nav2-logo" onClick={() => setIsMenuOpen(false)}>
              <img src="/images/logo.png" alt="Fuel Plate" />
              <span className="nav2-logo-text">Fuel Plate<span className="nav2-logo-dot">.</span></span>
            </Link>
            <button className="nav2-toggle" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>

          <div className="nav2-mob-links">
            <Link href="/" className="nav2-mob-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="nav2-mob-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/services" className="nav2-mob-link" onClick={() => setIsMenuOpen(false)}>Plans</Link>
            <Link href="/blog-grid" className="nav2-mob-link" onClick={() => setIsMenuOpen(false)}>Journal</Link>
            <Link href="/contact-us" className="nav2-mob-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>

          <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '32px' }}>
            <div style={{ fontSize: '14px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Support Center</div>
            <a href="tel:+11234567890" style={{ fontSize: '24px', fontWeight: '800', color: '#111', textDecoration: 'none' }}>+1 123 456 7890</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;