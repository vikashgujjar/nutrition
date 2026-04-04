'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CompareSection = () => {
  return (
    <section className="2xxl:py-25 xl:17.5 md:py-12.5 sm:py-10 py-7.5 p-0 bg-light overflow-hidden">
      <div className="container">
        <div className="section-head style-9 mb-7.5 text-center">
          <span className="text-primary font-semibold leading-5 uppercase text-lg inline-flex gap-1.25 items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_271_265)">
                <path d="M10.2201 4.75678L7.26892 6.20938C5.43504 7.11203 3.34137 6.35712 2.43872 4.52319L2.28418 4.20923L5.11059 2.75663C6.94448 1.85398 9.1629 2.60889 10.0655 4.44282L10.2201 4.75678Z" stroke="var(--primary)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M10.2202 4.75609V3.63537C10.2202 2.22374 11.152 0.981554 12.5072 0.586426" stroke="var(--primary)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <circle cx="13.2289" cy="14.7057" r="0.586417" fill="var(--primary)"></circle>
                <circle cx="11.3483" cy="15.9028" r="0.586417" fill="var(--primary)"></circle>
                <path d="M4.55515 6.4092C3.23681 7.78575 2.38721 9.69267 2.38721 11.7492C2.38721 15.9821 5.81865 19.4136 10.0515 19.4136C14.2969 19.4136 17.7159 15.9946 17.7159 11.7492C17.7159 7.58238 14.3907 4.19219 10.249 4.08741C10.1265 4.08433 10.0039 4.09273 9.88307 4.11263" stroke="var(--primary)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
              <defs>
                <clipPath id="clip0_271_2655">
                  <rect width="20" height="20" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>Our Services
          </span>
          <h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0">
            Real Transformations
          </h2>
          <p className="text-primary font-medium mt-2">See how Fuel Plate by MMC changes lives.</p>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
          el: ".compare-pagination-swiper",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1480: { slidesPerView: 3.5 }
        }}
        className="compare-swiper-2 compare-swiper-wrapper mb-3.75"
      >
        {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((imgNum, index) => (
          <SwiperSlide key={index} className="wow fadeInUp" data-wow-delay={`${(index % 3 + 1) * 0.1}s`}>
            <div className="relative overflow-hidden sm:rounded-3xl rounded-xxl shadow-lg">
              <img src={`/images/compare/img${imgNum}.webp`} alt={`Transformation ${index + 1}`} className="w-full object-cover aspect-[4/5]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CompareSection;
