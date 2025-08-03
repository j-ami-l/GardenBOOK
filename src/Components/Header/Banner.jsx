import React from 'react';
import g_1 from '../../assets/b_1.jpg';
import g_2 from '../../assets/b_2.jpg';
import g_3 from '../../assets/b_3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="my-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center w-full h-[380px] md:h-[550px] bg-green-200">
            <img
              src={g_1}
              alt="Garden Tips"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/60 text-white p-6 md:p-10 rounded max-w-xl text-center">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                Discover Beautiful Gardening Ideas 🌼
              </h1>
              <p className="text-sm md:text-lg leading-relaxed">
                Unlock design inspiration, seasonal care guides, and curated flower combinations to transform your space into a blooming retreat.
              </p>
              <Link to="/browsetips">
                <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded font-semibold shadow-md transition">
                  Browse Tips
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center w-full h-[380px] md:h-[550px] bg-lime-300">
            <img
              src={g_2}
              alt="Garden Blogs"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/60 text-white p-6 md:p-10 rounded max-w-xl text-center">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                Real Stories. Real Gardens. 🌿
              </h1>
              <p className="text-sm md:text-lg leading-relaxed">
                Explore inspiring journeys of gardeners who turned small patches into lush sanctuaries. Gain insights, ideas, and motivation.
              </p>
              <Link to="/blogs">
                <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded font-semibold shadow-md transition">
                  Read Blogs
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center w-full h-[380px] md:h-[550px] bg-emerald-300">
            <img
              src={g_3}
              alt="Start Your Garden"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/60 text-white p-6 md:p-10 rounded max-w-xl text-center">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                Start Your Garden Journey Today 🌱
              </h1>
              <p className="text-sm md:text-lg leading-relaxed">
                From choosing the right tools to learning what to plant each season, our beginner guides are designed to help you grow with confidence.
              </p>
              <Link to="/getstarted">
                <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded font-semibold shadow-md transition">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
