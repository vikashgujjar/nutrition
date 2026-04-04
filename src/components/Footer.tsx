import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { PhoneCall, Mail, MapPin, User, Phone, Calendar, Clock, ArrowRight, Flame } from 'lucide-react';

const Footer = () => {
     const navLinks = {
          Support: ['Getting Started', 'Help Center', 'Server Status', 'Report a Bug', 'Chat Support'],
          Company: ['About', 'Contact Us', 'Careers', 'Culture', 'Blog'],
     };

     const plans = ['FUEL START', 'FUEL LEAN', 'FUEL MAX', 'FUEL ZERO', 'Tiffin Plans'];

     const socials = [
          { icon: <FaLinkedinIn size={16} />, href: 'https://www.linkedin.com', label: 'LinkedIn' },
          { icon: <FaInstagram size={16} />, href: 'https://www.instagram.com', label: 'Instagram' },
          { icon: <FaFacebookF size={16} />, href: 'https://www.facebook.com', label: 'Facebook' },
          { icon: <FaXTwitter size={16} />, href: 'https://twitter.com', label: 'Twitter' },
          { icon: <FaYoutube size={16} />, href: 'https://www.youtube.com', label: 'YouTube' },
     ];

     const services = [
          { label: 'Meal Planning', icon: '🥗' },
          { label: 'Performance Coaching', icon: '💪' },
          { label: 'Daily Tiffin', icon: '🍱' },
          { label: 'Diet Programs', icon: '⚡' },
     ];

     return (
          <>
               <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .ftr-root {
          background: #080808;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ── Top accent rule ── */
        .ftr-root::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb,255,100,0),.5), transparent);
        }

        .ftr-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; opacity: .5;
        }

        /* ambient glow */
        .ftr-glow {
          position: absolute; top: -200px; left: -100px;
          width: 600px; height: 500px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ────────────────────────────────────────
           LAYOUT: left 2/3 (info) + right 1/3 (form)
        ──────────────────────────────────────── */
        .ftr-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          position: relative; z-index: 1;
        }
        @media (max-width: 1024px) { .ftr-layout { grid-template-columns: 1fr; } }

        /* ── LEFT PANEL ── */
        .ftr-left {
          border-right: 1px solid rgba(255,255,255,.06);
          display: flex; flex-direction: column;
        }
        @media (max-width: 1024px) { .ftr-left { border-right: none; } }

        /* ── Newsletter strip ── */
        .ftr-newsletter {
          background: linear-gradient(135deg, rgba(var(--primary-rgb,255,100,0),.12), rgba(var(--primary-rgb,255,100,0),.04));
          border-bottom: 1px solid rgba(var(--primary-rgb,255,100,0),.15);
          padding: 32px 48px;
          display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
        }
        @media (max-width: 768px) { .ftr-newsletter { padding: 28px 24px; } }

        .ftr-nl-text strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px; color: #fff; letter-spacing: .5px; display: block;
        }
        .ftr-nl-text span {
          font-size: 12.5px; color: rgba(255,255,255,.4); font-weight: 300;
        }
        .ftr-nl-form {
          display: flex; gap: 8px; flex: 1; min-width: 260px;
        }
        .ftr-nl-input {
          flex: 1;
          height: 44px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 10px;
          padding: 0 16px;
          color: #fff; font-size: 13.5px; font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color .25s;
        }
        .ftr-nl-input::placeholder { color: rgba(255,255,255,.25); }
        .ftr-nl-input:focus { border-color: rgba(var(--primary-rgb,255,100,0),.5); }
        .ftr-nl-btn {
          height: 44px; padding: 0 20px;
          background: var(--primary,#ff6400);
          border: none; border-radius: 10px;
          color: #fff; font-size: 13px; font-weight: 600;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: box-shadow .25s, transform .2s;
          white-space: nowrap;
        }
        .ftr-nl-btn:hover {
          box-shadow: 0 8px 24px rgba(var(--primary-rgb,255,100,0),.4);
          transform: translateY(-1px);
        }

        /* ── Main footer cols ── */
        .ftr-cols {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 0;
          padding: 52px 48px 40px;
          flex: 1;
        }
        @media (max-width: 900px) { .ftr-cols { grid-template-columns: 1fr 1fr; gap: 32px; padding: 40px 24px 32px; } }
        @media (max-width: 480px) { .ftr-cols { grid-template-columns: 1fr; } }

        /* brand col */
        .ftr-brand-logo {
          display: flex; align-items: center; gap: 10px; margin-bottom: 18px; text-decoration: none;
        }
        .ftr-brand-logo img { width: 40px; height: 40px; object-fit: contain; }
        .ftr-brand-name {
          display: flex; flex-direction: column;
        }
        .ftr-brand-name strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px; color: #fff; letter-spacing: 1px; line-height: 1;
        }
        .ftr-brand-name span {
          font-size: 9px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: var(--primary,#ff6400); margin-top: 2px;
        }

        .ftr-brand-desc {
          font-size: 13.5px; color: rgba(255,255,255,.38);
          font-weight: 300; line-height: 1.75; margin-bottom: 24px;
          max-width: 240px;
        }

        /* service pills */
        .ftr-services {
          display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 24px;
        }
        .ftr-service-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 100px; padding: 5px 12px;
          font-size: 11px; color: rgba(255,255,255,.5); font-weight: 500;
        }

        /* socials */
        .ftr-socials { display: flex; gap: 10px; }
        .ftr-social-btn {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.09);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.45); text-decoration: none;
          transition: background .25s, color .25s, border-color .25s, transform .2s;
        }
        .ftr-social-btn:hover {
          background: var(--primary,#ff6400);
          border-color: var(--primary,#ff6400);
          color: #fff; transform: translateY(-2px);
        }

        /* nav cols */
        .ftr-col-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px; letter-spacing: 1px; color: #fff; margin-bottom: 20px;
        }
        .ftr-col-title::after {
          content: '';
          display: block; width: 24px; height: 2px;
          background: var(--primary,#ff6400);
          border-radius: 2px; margin-top: 6px;
        }

        .ftr-nav-list { display: flex; flex-direction: column; gap: 2px; }
        .ftr-nav-item {
          display: flex; align-items: center; gap: 0;
          font-size: 13px; color: rgba(255,255,255,.4);
          font-weight: 400; text-decoration: none; padding: 6px 0;
          transition: color .2s, gap .2s;
        }
        .ftr-nav-item:hover { color: var(--primary,#ff6400); gap: 6px; }
        .ftr-nav-item::before {
          content: '–';
          color: rgba(var(--primary-rgb,255,100,0),.35);
          font-size: 12px; margin-right: 8px; flex-shrink: 0;
        }

        /* contact col */
        .ftr-contact-list { display: flex; flex-direction: column; gap: 14px; }
        .ftr-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 13px; color: rgba(255,255,255,.4);
          text-decoration: none; line-height: 1.5;
          transition: color .2s;
        }
        .ftr-contact-item:hover { color: rgba(255,255,255,.75); }
        .ftr-contact-icon {
          width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
          background: rgba(var(--primary-rgb,255,100,0),.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),.18);
          display: flex; align-items: center; justify-content: center;
          color: var(--primary,#ff6400);
        }

        /* ── Map strip ── */
        .ftr-map {
          height: 200px; overflow: hidden;
          border-top: 1px solid rgba(255,255,255,.05);
          filter: grayscale(1) brightness(.4) contrast(1.1);
          transition: filter .4s;
        }
        .ftr-map:hover { filter: grayscale(.6) brightness(.5); }
        .ftr-map iframe { width: 100%; height: 100%; border: 0; display: block; }

        /* ── Bottom bar ── */
        .ftr-bottom {
          border-top: 1px solid rgba(255,255,255,.06);
          padding: 20px 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        @media (max-width: 768px) { .ftr-bottom { padding: 18px 24px; justify-content: center; text-align: center; } }

        .ftr-bottom-copy {
          font-size: 12.5px; color: rgba(255,255,255,.28); font-weight: 400;
        }
        .ftr-bottom-copy a { color: var(--primary,#ff6400); text-decoration: none; }
        .ftr-bottom-copy a:hover { text-decoration: underline; }
        .ftr-bottom-links {
          display: flex; gap: 20px; flex-wrap: wrap;
        }
        .ftr-bottom-link {
          font-size: 12px; color: rgba(255,255,255,.28);
          text-decoration: none; font-weight: 400;
          transition: color .2s;
        }
        .ftr-bottom-link:hover { color: var(--primary,#ff6400); }

        /* ── RIGHT PANEL: Appointment form ── */
        .ftr-right {
          background: #0f0f0f;
          border-left: 1px solid rgba(255,255,255,.06);
          padding: 48px 36px;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
        }
        @media (max-width: 1024px) { .ftr-right { border-left: none; border-top: 1px solid rgba(255,255,255,.06); padding: 40px 24px; } }

        /* form ambient glow */
        .ftr-right::before {
          content: '';
          position: absolute; top: -100px; right: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(var(--primary-rgb,255,100,0),.09) 0%, transparent 70%);
          pointer-events: none;
        }

        .ftr-form-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(var(--primary-rgb,255,100,0),.1);
          border: 1px solid rgba(var(--primary-rgb,255,100,0),.25);
          border-radius: 100px; padding: 5px 14px 5px 8px; margin-bottom: 16px;
          width: fit-content;
        }
        .ftr-form-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--primary,#ff6400);
          animation: ftr-pulse 2s ease-in-out infinite;
        }
        @keyframes ftr-pulse {
          0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}
        }
        .ftr-form-eyebrow-text {
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--primary,#ff6400);
        }

        .ftr-form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(30px, 3vw, 42px);
          color: #fff; line-height: .95; letter-spacing: 1px; margin-bottom: 28px;
        }
        .ftr-form-title em { font-style: normal; color: var(--primary,#ff6400); }

        /* form fields */
        .ftr-field {
          position: relative; margin-bottom: 14px;
        }
        .ftr-field-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          color: var(--primary,#ff6400); z-index: 1;
          display: flex; align-items: center;
        }
        .ftr-input {
          width: 100%; height: 50px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 12px;
          padding: 0 16px 0 44px;
          color: #fff; font-size: 13.5px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color .25s, background .25s;
          box-sizing: border-box;
        }
        .ftr-input::placeholder { color: rgba(255,255,255,.22); }
        .ftr-input:focus {
          border-color: rgba(var(--primary-rgb,255,100,0),.45);
          background: rgba(var(--primary-rgb,255,100,0),.04);
        }

        .ftr-date-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;
        }

        /* plan checkboxes */
        .ftr-checks-title {
          font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,.3); margin-bottom: 12px; margin-top: 4px;
        }
        .ftr-checks {
          display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 20px;
        }
        .ftr-check-label {
          display: flex; align-items: center; gap: 8px; cursor: pointer;
        }
        .ftr-check-input {
          width: 16px; height: 16px; flex-shrink: 0;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,.2);
          border-radius: 4px;
          appearance: none; -webkit-appearance: none;
          cursor: pointer;
          transition: background .2s, border-color .2s;
          position: relative;
        }
        .ftr-check-input:checked {
          background: var(--primary,#ff6400);
          border-color: var(--primary,#ff6400);
        }
        .ftr-check-input:checked::after {
          content: '✓';
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          color: #fff; font-size: 10px; font-weight: 700;
        }
        .ftr-check-text {
          font-size: 12.5px; color: rgba(255,255,255,.45); font-weight: 400;
        }

        /* submit */
        .ftr-submit {
          width: 100%; height: 52px;
          background: var(--primary,#ff6400);
          border: none; border-radius: 12px;
          color: #fff; font-size: 14px; font-weight: 600;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: box-shadow .25s, transform .2s;
          box-shadow: 0 8px 28px rgba(var(--primary-rgb,255,100,0),.3);
          letter-spacing: .3px;
        }
        .ftr-submit:hover {
          box-shadow: 0 14px 36px rgba(var(--primary-rgb,255,100,0),.45);
          transform: translateY(-2px);
        }
      `}</style>

               <footer className="ftr-root">
                    <div className="ftr-glow" />
                    <div className="ftr-grain" />

                    <div className="ftr-layout">
                         {/* ══════════════════════════════════
              LEFT PANEL
          ══════════════════════════════════ */}
                         <div className="ftr-left">

                              {/* Newsletter strip */}
                              <div className="ftr-newsletter">
                                   <div className="ftr-nl-text">
                                        <strong>Stay Fueled. Stay Ahead.</strong>
                                        <span>Get weekly meal tips & plan updates in your inbox.</span>
                                   </div>
                                   <div className="ftr-nl-form">
                                        <input className="ftr-nl-input" type="email" placeholder="Your email address" />
                                        <button className="ftr-nl-btn">
                                             Subscribe <ArrowRight size={14} />
                                        </button>
                                   </div>
                              </div>

                              {/* Main columns */}
                              <div className="ftr-cols">

                                   {/* Brand */}
                                   <div>
                                        <Link href="/" className="ftr-brand-logo">
                                             <img src="/images/logo.png" alt="Fuel Plate" />
                                             <div className="ftr-brand-name">
                                                  <strong>Fuel Plate</strong>
                                                  <span>Performance on every plate</span>
                                             </div>
                                        </Link>
                                        <p className="ftr-brand-desc">
                                             Performance meal plans by MMC — freshly chef-made, nutrition expert designed. For every fitness goal.
                                        </p>
                                        <div className="ftr-services">
                                             {services.map((s, i) => (
                                                  <div key={i} className="ftr-service-pill">
                                                       {s.icon} {s.label}
                                                  </div>
                                             ))}
                                        </div>
                                        <div className="ftr-socials">
                                             {socials.map((s, i) => (
                                                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                                                       aria-label={s.label} className="ftr-social-btn">
                                                       {s.icon}
                                                  </a>
                                             ))}
                                        </div>
                                   </div>

                                   {/* Support */}
                                   <div>
                                        <div className="ftr-col-title">Support</div>
                                        <nav className="ftr-nav-list">
                                             {navLinks.Support.map((l, i) => (
                                                  <Link key={i} href="/#" className="ftr-nav-item">{l}</Link>
                                             ))}
                                        </nav>
                                   </div>

                                   {/* Company */}
                                   <div>
                                        <div className="ftr-col-title">Company</div>
                                        <nav className="ftr-nav-list">
                                             {navLinks.Company.map((l, i) => (
                                                  <Link key={i} href="/#" className="ftr-nav-item">{l}</Link>
                                             ))}
                                        </nav>
                                   </div>

                                   {/* Contact */}
                                   <div>
                                        <div className="ftr-col-title">Contact</div>
                                        <div className="ftr-contact-list">
                                             <a href="tel:+11234567890" className="ftr-contact-item">
                                                  <div className="ftr-contact-icon"><PhoneCall size={14} /></div>
                                                  +1 123 456 7890
                                             </a>
                                             <a href="mailto:info@example.com" className="ftr-contact-item">
                                                  <div className="ftr-contact-icon"><Mail size={14} /></div>
                                                  info@example.com
                                             </a>
                                             <a href="#" className="ftr-contact-item">
                                                  <div className="ftr-contact-icon"><MapPin size={14} /></div>
                                                  794 Mcallister St, San Francisco 94102
                                             </a>
                                        </div>
                                   </div>
                              </div>

                              {/* Map */}
                              <div className="ftr-map">
                                   <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin"
                                        allowFullScreen loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                   />
                              </div>

                              {/* Bottom bar */}
                              <div className="ftr-bottom">
                                   <p className="ftr-bottom-copy !m-0">
                                        © 2026 <a href="/#">FUEL PLATE</a>. All Rights Reserved.
                                   </p>
                                   <div className="ftr-bottom-links">
                                        <Link href="/#" className="ftr-bottom-link">Terms & Conditions</Link>
                                        <Link href="/#" className="ftr-bottom-link">Privacy Policy</Link>
                                        <Link href="/#" className="ftr-bottom-link">Refund Policy</Link>
                                   </div>
                              </div>
                         </div>

                         {/* ══════════════════════════════════
              RIGHT PANEL: Appointment Form
          ══════════════════════════════════ */}
                         <div className="ftr-right">
                              <div className="ftr-form-eyebrow">
                                   <div className="ftr-form-eyebrow-dot" />
                                   <span className="ftr-form-eyebrow-text">Get Started</span>
                              </div>

                              <h2 className="ftr-form-title">
                                   Book Your<br /><em>Appointment</em>
                              </h2>

                              <form action="" method="POST">
                                   {/* Name */}
                                   <div className="ftr-field">
                                        <span className="ftr-field-icon"><User size={16} /></span>
                                        <input name="dzName" type="text" className="ftr-input" placeholder="Your Name" />
                                   </div>

                                   {/* Email */}
                                   <div className="ftr-field">
                                        <span className="ftr-field-icon"><Mail size={16} /></span>
                                        <input name="dzEmail" type="email" className="ftr-input" placeholder="Your Email" />
                                   </div>

                                   {/* Phone */}
                                   <div className="ftr-field">
                                        <span className="ftr-field-icon"><Phone size={16} /></span>
                                        <input name="dzPhoneNumber" type="text" className="ftr-input" placeholder="Phone Number" />
                                   </div>

                                   {/* Date + Time */}
                                   <div className="ftr-date-row">
                                        <div className="ftr-field" style={{ marginBottom: 0 }}>
                                             <span className="ftr-field-icon"><Calendar size={16} /></span>
                                             <input name="dzDate" type="text" className="ftr-input" id="datePickerOnly" placeholder="Date" />
                                        </div>
                                        <div className="ftr-field" style={{ marginBottom: 0 }}>
                                             <span className="ftr-field-icon"><Clock size={16} /></span>
                                             <input name="dzTime" type="text" className="ftr-input" id="timePickerOnly" placeholder="Time" />
                                        </div>
                                   </div>

                                   {/* Plan selection */}
                                   <div className="ftr-checks-title">Select a Plan</div>
                                   <div className="ftr-checks">
                                        {plans.map((plan, i) => (
                                             <label key={i} className="ftr-check-label">
                                                  <input type="checkbox" className="ftr-check-input" value={plan} />
                                                  <span className="ftr-check-text">{plan}</span>
                                             </label>
                                        ))}
                                   </div>

                                   {/* Submit */}
                                   <button type="submit" className="ftr-submit">
                                        <Flame size={16} />
                                        Book Appointment
                                   </button>
                              </form>
                         </div>
                    </div>
               </footer>
          </>
     );
};

export default Footer;