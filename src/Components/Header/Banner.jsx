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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center bg-green-200 w-full 
              h-[350px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src={g_1}
              alt="Garden Tips"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="relative z-10 text-white p-6 bg-black/70 rounded">
              <h1 className="text-xl md:text-3xl font-bold">Discover Beautiful Gardening Ideas</h1>
              <p className="text-sm md:text-lg">Explore seasonal tips, flower arrangements, and layout inspiration.</p>
              <button
                className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold shadow transition"
              >
                <Link to={'/browsetips'}>Browse Tips</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center bg-lime-300 w-full 
              h-[350px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src={g_2}
              alt="Garden Blogs"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="relative z-10 text-white p-6 bg-black/70 rounded">
              <h1 className="text-xl md:text-3xl font-bold">Read Inspiring Garden Stories</h1>
              <p className="text-sm md:text-lg">Learn from hobbyists and pros who transformed their backyards into beauty.</p>
              <button
                className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold shadow transition"
              >
                <Link to={'#'}>Read Blogs</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center bg-emerald-300 w-full 
              h-[350px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src={g_3}
              alt="Start Your Garden"
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="relative z-10 text-white p-6 bg-black/70 rounded">
              <h1 className="text-xl md:text-3xl font-bold">Start Your Dream Garden Today</h1>
              <p className="text-sm md:text-lg">Beginner-friendly tips and tools to help your plants thrive.</p>
              <button
                className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold shadow transition"
              >
                <Link to={'#'}>Get Started</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
