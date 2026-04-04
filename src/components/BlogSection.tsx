import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
    const blogs = [
        {
            title: "Exploring the Wonders of the Great Outdoors",
            image: "/images/blog/img1.webp",
            date: "17 May 2024",
            author: "John Doe",
            delay: "0.2s"
        },
        {
            title: "Simple Pleasures: Finding Joy in Everyday Moments",
            image: "/images/blog/img2.webp",
            date: "18 May 2024",
            author: "Jane Smith",
            delay: "0.4s"
        }
    ];

    return (
        <section className="2xxl:py-25 xl:17.5 md:py-12.5 sm:py-10 py-7.5 bg-light overlay-primary-light">
            <div className="container">
                <div className="mb-7.5 row items-end">
                    <div className="xl:w-7/12 md:w-3/4 w-full wow fadeInUp" data-wow-delay="0.2s"
                        data-wow-duration="0.8s">
                        <span
                            className="text-primary font-semibold leading-5 uppercase text-lg inline-flex gap-1.25 items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_271_265)">
                                    <path d="M10.2201 4.75678L7.26892 6.20938C5.43504 7.11203 3.34137 6.35712 2.43872 4.52319L2.28418 4.20923L5.11059 2.75663C6.94448 1.85398 9.1629 2.60889 10.0655 4.44282L10.2201 4.75678Z"
                                        stroke="var(--color-primary)" stroke-width="1.5"
                                        stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M10.2202 4.75609V3.63537C10.2202 2.22374 11.152 0.981554 12.5072 0.586426"
                                        stroke="var(--color-primary)" stroke-width="1.5"
                                        stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <circle cx="13.2289" cy="14.7057" r="0.586417"
                                        fill="var(--color-primary)"></circle>
                                    <circle cx="11.3483" cy="15.9028" r="0.586417"
                                        fill="var(--color-primary)"></circle>
                                    <path d="M4.55515 6.4092C3.23681 7.78575 2.38721 9.69267 2.38721 11.7492C2.38721 15.9821 5.81865 19.4136 10.0515 19.4136C14.2969 19.4136 17.7159 15.9946 17.7159 11.7492C17.7159 7.58238 14.3907 4.19219 10.249 4.08741C10.1265 4.08433 10.0039 4.09273 9.88307 4.11263"
                                        stroke="var(--color-primary)" stroke-width="1.5"
                                        stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_271_2652">
                                        <rect width="20" height="20" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>Our Services
                        </span>
                        <h2
                            className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl capitalize mb-0">
                            News And Update</h2>
                    </div>
                    <div className="xl:w-5/12 md:w-1/4 w-full lg:text-end max-md:hidden wow fadeInUp"
                        data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <Link href="/blog-grid" className="font-medium underline text-primary flex items-center justify-end gap-1">View
                            All Post <ArrowRight size={18} /></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="xl:w-1/3 md:w-1/2 mb-7.5 wow fadeInUp" data-wow-delay="0.6s"
                        data-wow-duration="0.8s">
                        <div
                            className="relative z-1 p-5 filter drop-shadow-[0_0_12.5px_rgba(var(--secondary-rgb),0.07)] h-full duration-200 after:bg-white after:absolute after:size-full after:top-0 after:left-0 after:-z-1 after:mask-[url(../images/bg02.svg)] after:mask-position-[right_bottom] after:rounded-3xl after:rounded-ee-none hover:-translate-y-2 group">
                            <div
                                className="rounded-xxl h-62.5 mb-3.75 overflow-hidden relative before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                                <img src="images/blog/grid/pic1.webp" alt=""
                                    className="size-full object-cover" />
                            </div>
                            <div className="p-2.5">
                                <h3 className="xl:text-2xl text-xl font-semibold mb-2"><Link
                                    href="/blog-details">Healthy Eating Habits for a
                                    Better Life</Link></h3>
                                <p className="text-2sm">It is a long established fact that a reader
                                    will be distracted by the readable content.</p>
                                <div className="mb-0 mt-6.25 mr-8.75">
                                    <ul className="flex items-center flex-wrap gap-1.25">
                                        <li
                                            className="bg-primary text-white rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-white after:left-2.5">
                                            17 May 2025</li>
                                        <li
                                            className="bg-primary text-white rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-white after:left-2.5">
                                            By <Link href="#">Nashid
                                                Martines</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/blog-details"
                                className="btn btn-square btn-secondary !rounded-full !size-12 min-w-12 !absolute right-0 bottom-0 flex items-center justify-center">
                                <ArrowUpRight size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 mb-7.5 wow fadeInUp" data-wow-delay="0.8s"
                        data-wow-duration="0.8s">
                        <div
                            className="relative z-1 p-5 filter drop-shadow-[0_0_12.5px_rgba(var(--secondary-rgb),0.07)] h-full duration-200 after:bg-white after:absolute after:size-full after:top-0 after:left-0 after:-z-1 after:mask-[url(../images/bg02.svg)] after:mask-position-[right_bottom] after:rounded-3xl after:rounded-ee-none hover:-translate-y-2 group">
                            <div
                                className="rounded-xxl h-62.5 mb-3.75 overflow-hidden relative before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                                <img src="images/blog/grid/pic2.webp" alt=""
                                    className="size-full object-cover" />
                            </div>
                            <div className="dz-info">
                                <h3 className="xl:text-2xl text-xl font-semibold mb-2"><Link
                                    href="/blog-details">Discover the Power of Balanced
                                    Daily Nutrition</Link></h3>
                                <p className="text-2sm">It is a long established fact that a reader
                                    will be distracted by the readable content.</p>
                                <div className="mb-0 mt-6.25 mr-8.75">
                                    <ul className="flex items-center flex-wrap gap-1.25">
                                        <li
                                            className="bg-primary text-white rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-white after:left-2.5">
                                            17 May 2025</li>
                                        <li
                                            className="bg-primary text-white rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-white after:left-2.5">
                                            By <Link href="#">Nashid
                                                Martines</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/blog-details"
                                className="btn btn-square btn-secondary !rounded-full !size-12 min-w-12 !absolute right-0 bottom-0 flex items-center justify-center">
                                <ArrowUpRight size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 mb-7.5 wow fadeInUp" data-wow-delay="1.0s"
                        data-wow-duration="0.8s">
                        <div
                            className="relative z-1 p-5 filter drop-shadow-[0_0_12.5px_rgba(var(--secondary-rgb),0.07)] h-full duration-200 after:bg-white after:absolute after:size-full after:top-0 after:left-0 after:-z-1 after:mask-[url(../images/bg02.svg)] after:mask-position-[right_bottom] after:rounded-3xl after:rounded-ee-none hover:-translate-y-2 group">
                            <div
                                className="rounded-xxl h-62.5 mb-3.75 overflow-hidden relative before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                                <img src="images/blog/grid/pic3.webp" alt=""
                                    className="size-full object-cover" />
                            </div>
                            <div className="dz-info">
                                <h3 className="xl:text-2xl text-xl font-semibold mb-2"><Link
                                    href="/blog-details">Eat Well, Live Strong, Stay
                                    Energized Always</Link></h3>
                                <p className="text-2sm">It is a long established fact that a reader
                                    will be distracted by the readable content.</p>
                                <div className="mb-0 mt-6.25 mr-8.75">
                                    <ul className="flex items-center flex-wrap gap-1.25">
                                        <li
                                            className="bg-primary text-white rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-white after:left-2.5">
                                            17 May 2025</li>
                                        <li
                                            className="bg-primary text-white rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-white after:left-2.5">
                                            By <Link href="#">Nashid
                                                Martines</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/blog-details"
                                className="btn btn-square btn-secondary !rounded-full !size-12 min-w-12 !absolute right-0 bottom-0 flex items-center justify-center">
                                <ArrowUpRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
