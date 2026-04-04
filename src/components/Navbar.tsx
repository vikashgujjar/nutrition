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
              className="xmenu-toggler lg:hidden float-right my-2.5 lg:ml-7 ml-5 size-11 bg-white rounded-2lg relative cursor-pointer max-lg:order-1 max-sm:ms-auto"
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

            <div className={`flex lg:basis-auto lg:grow max-lg:flex-col lg:justify-start font-title max-lg:fixed max-lg:h-full max-lg:px-5 max-lg:top-0 max-lg:z-9999 max-lg:bg-white max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:-left-75'}`}>
              <div className="flex items-center relative z-9 py-6.25 lg:hidden w-33.75 h-15.25">
                <Link href="/" className="table-cell align-middle">
                  <img loading="lazy" src="/images/logo.png" alt="logo" width="400" height="120" className="object-contain duration-500" />
                </Link>
              </div>
              <ul className="lg:flex flex-wrap navbar-nav">
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
                  <Link className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary" href="/">
                    <span className="inline-block leading-7.5">Home</span>
                  </Link>
                </li>
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
                  <Link className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary" href="#">
                    <span className="inline-block leading-7.5">About Us</span>
                  </Link>
                </li>
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
                  <Link className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary" href="/services">
                    <span className="inline-block leading-7.5">Services</span>
                    <span className="lg:hidden float-end flex items-center justify-center size-7 rounded bg-white text-white">
                      <ChevronRight size={12} />
                    </span>
                  </Link>
                </li>
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
                  <Link className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary" href="/blog-grid">
                    <span className="inline-block leading-7.5">Blogs</span>
                    <span className="lg:hidden float-end flex items-center justify-center size-7 rounded bg-white text-white">
                      <ChevronRight size={12} />
                    </span>
                  </Link>
                </li>
                <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
                  <Link className="lg:py-6 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium lg:text-heading !text-white hover:text-primary" href="/contact-us">
                    <span className="inline-block leading-7.5">Contact Us</span>
                  </Link>
                </li>
              </ul>
              <div className="lg:hidden block max-lg:p-5 text-center">
                <ul className="flex justify-center gap-2">
                  <li className="inline-block mx-0.5">
                    <a className="size-10 flex items-center justify-center border border-black/10 text-white rounded-full hover:bg-primary hover:text-white duration-300" target="_blank" href="https://www.facebook.com/dexignzone">
                      <FaFacebookF size={18} />
                    </a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a className="size-10 flex items-center justify-center border border-black/10 text-white rounded-full hover:bg-primary hover:text-white duration-300" target="_blank" href="https://twitter.com/dexignzones">
                      <FaXTwitter size={18} />
                    </a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a className="size-10 flex items-center justify-center border border-black/10 text-white rounded-full hover:bg-primary hover:text-white duration-300" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/">
                      <FaLinkedinIn size={18} />
                    </a>
                  </li>
                  <li className="inline-block mx-0.5">
                    <a className="size-10 flex items-center justify-center border border-black/10 text-white rounded-full hover:bg-primary hover:text-white duration-300" target="_blank" href="https://www.instagram.com/dexignzone/">
                      <FaInstagram size={18} />
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