"use client";

import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { PhoneCall, Mail, MapPin, User, Phone, Calendar, Clock, ArrowRight, Flame, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer2-root {
          background: #fafaf8;
          font-family: 'Inter', sans-serif;
          position: relative; overflow: hidden;
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 100px;
        }
        .footer2-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 30px 30px; pointer-events: none;
        }
        .footer2-container {
          max-width: 1400px; margin: 0 auto; padding: 0 40px;
          position: relative; z-index: 2;
        }
        @media (max-width: 768px) { .footer2-container { padding: 0 24px; } }

        .footer2-grid {
          display: grid; grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr; gap: 60px;
          margin-bottom: 80px;
        }
        @media (max-width: 1024px) { .footer2-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .footer2-grid { grid-template-columns: 1fr; } }

        .footer2-brand-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; text-decoration: none; }
        .footer2-brand-logo img { width: 48px; height: 48px; object-fit: contain; }
        .footer2-brand-text { font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 950; color: #111; letter-spacing: -1px; }
        .footer2-desc { font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 32px; max-width: 320px; }

        .footer2-socials { display: flex; gap: 12px; }
        .footer2-social-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: #fff; border: 1px solid rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          color: #444; transition: all 0.3s ease; text-decoration: none;
        }
        .footer2-social-btn:hover { background: #ff6400; color: #fff; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255,100,0,0.2); }

        .footer2-title { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 800; color: #111; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 32px; }
        .footer2-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px; }
        .footer2-link { color: #666; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.3s; }
        .footer2-link:hover { color: #ff6400; }

        .footer2-contact { display: flex; flex-direction: column; gap: 20px; }
        .footer2-contact-item { display: flex; align-items: flex-start; gap: 14px; text-decoration: none; color: #666; font-size: 14px; line-height: 1.5; }
        .footer2-contact-icon { color: #ff6400; flex-shrink: 0; margin-top: 3px; }

        .footer2-appointment {
          background: #fff; border-radius: 32px; padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.03);
          margin-bottom: 80px;
          display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px;
          align-items: center;
        }
        @media (max-width: 1024px) { .footer2-appointment { grid-template-columns: 1fr; } }
        
        .footer2-appt-text h3 {
          font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: #111; line-height: 1.1; margin-bottom: 16px;
        }
        .footer2-appt-text p { color: #666; font-size: 16px; line-height: 1.6; }

        .footer2-form { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .footer2-form { grid-template-columns: 1fr; } }
        .footer2-input {
          width: 100%; height: 50px; background: #fafaf8; border: 1.5px solid #eee;
          border-radius: 12px; padding: 0 20px; font-size: 14px; outline: none; transition: border-color 0.3s;
        }
        .footer2-input:focus { border-color: #ff6400; }
        .footer2-btn {
          grid-column: span 2; height: 50px; background: #ff6400; color: #fff;
          border: none; border-radius: 12px; font-weight: 700; font-size: 15px;
          cursor: pointer; transition: all 0.3s; box-shadow: 0 10px 25px rgba(255,100,0,0.2);
        }
        @media (max-width: 640px) { .footer2-btn { grid-column: span 1; } }
        .footer2-btn:hover { background: #e55a00; transform: translateY(-2px); box-shadow: 0 15px 35px rgba(255,100,0,0.3); }

        .footer2-bottom {
          padding: 40px 0; border-top: 1px solid rgba(0,0,0,0.05);
          display: flex; align-items: center; justify-content: space-between;
          font-size: 13px; color: #999;
        }
        @media (max-width: 640px) { .footer2-bottom { flex-direction: column; gap: 16px; text-align: center; } }
        .footer2-bot-links { display: flex; gap: 24px; }
      `}</style>

      <footer className="footer2-root">
        <div className="footer2-dots" />

        <div className="footer2-container">
          <div className="footer2-appointment">
            <div className="footer2-appt-text">
              <h3>Start Your<br />Journey Today</h3>
              <p>Book a free consultation with our senior nutritionists and get a custom meal roadmap.</p>
            </div>
            <form className="footer2-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="footer2-input" />
              <input type="email" placeholder="Email Address" className="footer2-input" />
              <input type="text" placeholder="Phone Number" className="footer2-input" />
              <input type="text" placeholder="Preferred Plan" className="footer2-input" />
              <button type="submit" className="footer2-btn">Book My Consultation</button>
            </form>
          </div>

          <div className="footer2-grid">
            <div className="footer2-brand">
              <Link href="/" className="footer2-brand-logo">
                <img src="/images/logo.png" alt="Fuel Plate" />
                <span className="footer2-brand-text">Fuel Plate.</span>
              </Link>
              <p className="footer2-desc">
                The ultimate performance nutrition partner for professional athletes and fitness enthusiasts. Chef-made, dietitian-approved.
              </p>
              <div className="footer2-socials">
                <a href="#" className="footer2-social-btn"><FaFacebookF /></a>
                <a href="#" className="footer2-social-btn"><FaInstagram /></a>
                <a href="#" className="footer2-social-btn"><FaXTwitter /></a>
                <a href="#" className="footer2-social-btn"><FaLinkedinIn /></a>
              </div>
            </div>

            <div className="footer2-nav">
              <h4 className="footer2-title">Navigation</h4>
              <ul className="footer2-list">
                <li><Link href="/" className="footer2-link">Home</Link></li>
                <li><Link href="/about" className="footer2-link">About Us</Link></li>
                <li><Link href="/services" className="footer2-link">Our Plans</Link></li>
                <li><Link href="/blog-grid" className="footer2-link">Success Stories</Link></li>
              </ul>
            </div>

            <div className="footer2-nav">
              <h4 className="footer2-title">Categories</h4>
              <ul className="footer2-list">
                <li><Link href="#" className="footer2-link">Fuel Lean</Link></li>
                <li><Link href="#" className="footer2-link">Fuel Max</Link></li>
                <li><Link href="#" className="footer2-link">Fuel Zero</Link></li>
                <li><Link href="#" className="footer2-link">Bulk Prep</Link></li>
              </ul>
            </div>

            <div className="footer2-contact">
              <h4 className="footer2-title">Contact Us</h4>
              <div className="footer2-contact">
                <a href="tel:+11234567890" className="footer2-contact-item">
                  <Phone size={18} className="footer2-contact-icon" />
                  +1 123 456 7890
                </a>
                <a href="mailto:hello@fuelplate.com" className="footer2-contact-item">
                  <Mail size={18} className="footer2-contact-icon" />
                  hello@fuelplate.com
                </a>
                <div className="footer2-contact-item">
                  <MapPin size={18} className="footer2-contact-icon" />
                  794 Mcallister St, San Francisco 94102
                </div>
              </div>
            </div>
          </div>

          <div className="footer2-bottom">
            <div>© 2026 Fuel Plate by <span className="uppercase">Future IT Touch Pvt. Ltd.</span> All rights reserved.</div>
            <div className="footer2-bot-links">
              <Link href="#" className="footer2-link">Privacy</Link>
              <Link href="#" className="footer2-link">Terms</Link>
              <Link href="#" className="footer2-link">Refunds</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;