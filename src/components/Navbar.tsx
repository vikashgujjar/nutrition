"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, PhoneCall, ShoppingCart } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header sticky-header-wrapper 2xxl:mt-7.5 lg:mt-5 mt-1.25 absolute top-0 left-0 z-999 w-full ${isSticky ? 'is-fixed' : ''}`}>
      <div className="sticky-header main-bar-wraper w-full">
        <div className="main-bar w-full max-lg:pt-3.75 max-sm:!pt-2.5 max-sm:!px-2.5">
          <div className="container flex items-center relative z-1 before:rounded-xxl before:bg-black before:absolute lg:before:w-[calc(100%_+_40px)] sm:before:w-[calc(100%_+_20px)] before:w-[calc(100%_+_10px)] before:h-full lg:before:-mx-7.5 before:-mx-5 before:shadow-[0_10px_20px_rgba(var(--white-rgb),0.1)] before:-z-1 max-sm:before:left-3.75 [.site-header.is-fixed_&]:before:shadow-none">

            {/* Website Logo */}
            <div className="flex items-center align-middle xl:w-55 w-45 sm:h-20 h-15.25 max-xl:me-2 border-r border-white/10 pr-3.75 mr-4.5 logo-dark">
              <Link href="/" className="flex items-center gap-2">
                <img loading="lazy" src="/images/logo.png" alt="Fuel Plate" className="size-[150px] object-contain" style={{ width: '80px' }} />
              </Link>
            </div>

            <button
              className="xmenu-toggler lg:hidden float-right my-2.5 lg:ml-7 ml-5 size-11 bg-primary rounded-2lg relative cursor-pointer max-lg:order-1 max-sm:ms-auto"
              aria-label="Toggle navigation menu"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-3.25 w-5.5 ${isMenuOpen ? 'rotate-45 !top-5.5' : ''}`}></span>
              <span className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 top-5.5 w-6.25 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-8 w-4 ${isMenuOpen ? '-rotate-45 !top-5.5 !w-5.5' : ''}`}></span>
            </button>

            <div
              className={`lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 ${isMenuOpen ? 'opacity-50 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'} menu-close fade-overlay`}
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* ════════════════════════════════════════
                MOBILE DARK DRAWER + DESKTOP NAV UNCHANGED
                Desktop: all original classes preserved
                Mobile:  dark drawer with premium styling
            ════════════════════════════════════════ */}

            {/* Mobile-only styles — zero impact on desktop */}
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

              /* ── Only apply below lg breakpoint ── */
              @media (max-width: 1023px) {

                /* Drawer panel */
                .header-nav {
                  background: #0d0d0d !important;
                  border-right: 1px solid rgba(255,255,255,0.07) !important;
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                  font-family: 'DM Sans', sans-serif !important;
                }

                /* ── Drawer logo strip ── */
                .mob-drawer-head {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 18px 20px;
                  border-bottom: 1px solid rgba(255,255,255,0.07);
                  flex-shrink: 0;
                }
                .mob-logo-wrap {
                  display: flex; align-items: center; gap: 9px;
                  text-decoration: none;
                }
                .mob-logo-wrap img { width: 36px; height: 36px; object-fit: contain; }
                .mob-logo-name {
                  font-family: 'Bebas Neue', sans-serif;
                  font-size: 18px; color: #fff; letter-spacing: 1px;
                  line-height: 1; display: block;
                }
                .mob-logo-tag {
                  font-size: 9px; font-weight: 600; letter-spacing: 2px;
                  text-transform: uppercase; color: var(--primary,#ff6400);
                  display: block; margin-top: 2px;
                }

                /* ── Nav links ── */
                .navbar-nav {
                  padding: 14px 14px !important;
                  gap: 0 !important;
                  display: flex !important;
                  flex-direction: column !important;
                }
                .navbar-nav li {
                  border-bottom: none !important;
                }
                /* Reset any existing link styles inside drawer */
                .navbar-nav li a {
                  display: flex !important;
                  align-items: center !important;
                  justify-content: space-between !important;
                  padding: 13px 14px !important;
                  border-radius: 12px !important;
                  font-size: 15px !important;
                  font-weight: 500 !important;
                  color: rgba(255,255,255,0.62) !important;
                  text-decoration: none !important;
                  transition: background 0.2s, color 0.2s !important;
                  background: transparent !important;
                  font-family: 'DM Sans', sans-serif !important;
                  margin-bottom: 3px;
                }
                .navbar-nav li a:hover {
                  background: rgba(255,255,255,0.05) !important;
                  color: #fff !important;
                }
                /* Active state — add .mob-active class via JS if needed */
                .navbar-nav li.active > a,
                .navbar-nav li a[aria-current="page"] {
                  background: rgba(var(--primary-rgb,255,100,0),0.1) !important;
                  color: var(--primary,#ff6400) !important;
                  border: 1px solid rgba(var(--primary-rgb,255,100,0),0.2) !important;
                }

                /* Hide original chevron badges (white-on-white) */
                .navbar-nav li a > span.rounded {
                  display: none !important;
                }

                /* Add dark chevron instead via CSS */
                .navbar-nav li a::after {
                  content: '›';
                  font-size: 18px; line-height: 1;
                  color: rgba(255,255,255,0.2);
                  flex-shrink: 0;
                  transition: color 0.2s, transform 0.2s;
                }
                .navbar-nav li a:hover::after {
                  color: rgba(var(--primary-rgb,255,100,0),0.7);
                  transform: translateX(3px);
                }
                /* Don't show chevron on links without sub-items (optional: remove for all) */
                .navbar-nav li:first-child a::after,
                .navbar-nav li:last-child a::after { content: '' !important; }

                /* ── Phone card ── */
                .mob-phone-card {
                  display: flex; align-items: center; gap: 10px;
                  padding: 12px 14px; border-radius: 12px;
                  background: rgba(255,255,255,0.04);
                  border: 1px solid rgba(255,255,255,0.07);
                  margin: 0 14px 12px;
                  text-decoration: none;
                }
                .mob-phone-icon {
                  width: 34px; height: 34px; border-radius: 9px; flex-shrink: 0;
                  background: rgba(var(--primary-rgb,255,100,0),0.12);
                  border: 1px solid rgba(var(--primary-rgb,255,100,0),0.2);
                  display: flex; align-items: center; justify-content: center;
                  color: var(--primary,#ff6400); font-size: 15px;
                }
                .mob-phone-label {
                  font-size: 10px; font-weight: 600; letter-spacing: 1px;
                  text-transform: uppercase; color: rgba(255,255,255,0.3);
                  display: block; font-family: 'DM Sans', sans-serif;
                }
                .mob-phone-num {
                  font-size: 14px; font-weight: 600; color: #fff;
                  font-family: 'DM Sans', sans-serif;
                }

                /* ── CTA button ── */
                .mob-cta {
                  display: flex; align-items: center; justify-content: center; gap: 8px;
                  background: var(--primary,#ff6400); color: #fff;
                  font-size: 14px; font-weight: 700; letter-spacing: 0.4px;
                  padding: 13px 20px; border-radius: 100px;
                  text-decoration: none;
                  box-shadow: 0 4px 20px rgba(var(--primary-rgb,255,100,0),0.35);
                  transition: box-shadow 0.25s, transform 0.2s;
                  font-family: 'DM Sans', sans-serif;
                  margin: 0 14px 16px;
                }
                .mob-cta:hover {
                  box-shadow: 0 8px 28px rgba(var(--primary-rgb,255,100,0),0.55);
                  transform: translateY(-1px);
                }

                /* ── Socials ── */
                .mob-social-wrap {
                  padding: 0 14px 24px !important;
                  display: flex !important;
                  justify-content: center !important;
                  gap: 10px !important;
                  text-align: unset !important;
                  background: transparent !important;
                }
                .mob-social-wrap li a {
                  width: 38px !important; height: 38px !important;
                  border-radius: 10px !important;
                  background: rgba(255,255,255,0.05) !important;
                  border: 1px solid rgba(255,255,255,0.09) !important;
                  color: rgba(255,255,255,0.45) !important;
                  display: flex !important; align-items: center !important; justify-content: center !important;
                  transition: background 0.2s, color 0.2s, border-color 0.2s !important;
                }
                .mob-social-wrap li a:hover {
                  background: var(--primary,#ff6400) !important;
                  border-color: var(--primary,#ff6400) !important;
                  color: #fff !important;
                }

                /* ── Divider rule above socials ── */
                .mob-footer-rule {
                  height: 1px;
                  background: rgba(255,255,255,0.07);
                  margin: 0 14px 16px;
                }
              }

              /* Desktop: ensure none of our new mobile classes show */
              @media (min-width: 1024px) {
                .mob-drawer-head,
                .mob-phone-card,
                .mob-cta,
                .mob-footer-rule { display: none !important; }
              }
            `}</style>

            <div className={`flex lg:basis-auto lg:grow max-lg:flex-col lg:justify-start font-title max-lg:fixed max-lg:h-full max-lg:top-0 max-lg:z-9999 max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:-left-75'}`}>

              {/* ── MOBILE ONLY: Drawer header (logo + close) ── */}
              <div className="mob-drawer-head lg:hidden">
                <Link href="/" className="mob-logo-wrap" onClick={() => setIsMenuOpen(false)}>
                  <img loading="lazy" src="/images/logo.png" alt="Fuel Plate" />
                  <div>
                    <span className="mob-logo-name">Fuel Plate</span>
                    <span className="mob-logo-tag">Performance on every plate</span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.55)', cursor: 'pointer', fontSize: 18,
                    lineHeight: 1, flexShrink: 0,
                  }}
                >✕</button>
              </div>

              {/* ── NAV LINKS — desktop classes UNCHANGED ── */}
              <ul className="lg:flex flex-wrap navbar-nav">
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
                  <Link
                    className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary"
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="inline-block leading-7.5">Home</span>
                  </Link>
                </li>
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
                  <Link
                    className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="inline-block leading-7.5">About Us</span>
                  </Link>
                </li>
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
                  <Link
                    className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary"
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="inline-block leading-7.5">Services</span>
                    <span className="lg:hidden float-end flex items-center justify-center size-7 rounded bg-white text-white">
                      <ChevronRight size={12} />
                    </span>
                  </Link>
                </li>
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
                  <Link
                    className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary"
                    href="/blog-grid"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="inline-block leading-7.5">Blogs</span>
                    <span className="lg:hidden float-end flex items-center justify-center size-7 rounded bg-white text-white">
                      <ChevronRight size={12} />
                    </span>
                  </Link>
                </li>
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
                  <Link
                    className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary"
                    href="/contact-us"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="inline-block leading-7.5">Contact Us</span>
                  </Link>
                </li>
              </ul>

              {/* ── MOBILE ONLY: Phone card ── */}
              <a href="tel:+11234567890" className="mob-phone-card lg:hidden">
                <div className="mob-phone-icon">📞</div>
                <div>
                  <span className="mob-phone-label">Call Us</span>
                  <div className="mob-phone-num">+1 123 456 7890</div>
                </div>
              </a>

              {/* ── MOBILE ONLY: Book CTA ── */}
              <Link
                href="/appointment"
                className="mob-cta lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                🔥 Book a Consultation
              </Link>

              {/* ── MOBILE ONLY: Footer rule ── */}
              <div className="mob-footer-rule lg:hidden" />

              {/* ── SOCIALS — styled dark on mobile only ── */}
              <div className="lg:hidden block mob-social-wrap">
                <ul className="flex justify-center gap-2">
                  <li className="inline-block mx-0.5">
                    <a target="_blank" href="https://www.facebook.com/dexignzone">
                      <FaFacebookF size={15} />
                    </a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a target="_blank" href="https://twitter.com/dexignzones">
                      <FaXTwitter size={15} />
                    </a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/">
                      <FaLinkedinIn size={15} />
                    </a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a target="_blank" href="https://www.instagram.com/dexignzone/">
                      <FaInstagram size={15} />
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            <div className="extra-nav flex items-center h-20 3xl:pl-7.5 ml-auto max-sm:w-full max-sm:bg-white max-sm:fixed max-sm:-bottom-20 max-sm:left-0 max-sm:px-5 max-sm:shadow-3 max-sm:h-15 max-sm:duration-500 [.extra-nav.active]:bottom-0">
              <div className="flex items-center w-full">
                <ul className="lg:ml-5 sm:ml-3.75 flex items-center gap-7.5 w-full justify-between">
                  <li className="2xxl:inline-flex items-center gap-3.75 hidden">
                    <div className="widget-media">
                      <PhoneCall className="dz-ring-effect text-white" size={32} />
                    </div>
                    <div className="widget-content">
                      <h6 className="text-primary text-sm font-normal mb-0">Contact us</h6>
                      <a href="tel:+11234567890" className="sm:text-lg text-base font-semibold text-white">+1 123 456 7890</a>
                    </div>
                  </li>
                  <li className="inline-block">
                    <Link href="/appointment" className="btn btn-primary btn-hover1 max-md:!text-sm max-md:!py-2.5 max-md:!px-4.5 max-md:!rounded-2lg">
                      Book a Consultation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;