import React from 'react';
import b_2 from '../../assets/b_2.jpg'
import b_1 from '../../assets/b_1.jpg'
import b_3 from '../../assets/b_3.jpg'
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
          <div className="relative flex flex-col items-center justify-center bg-blue-300 w-full 
              h-[350px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src={b_1}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="relative z-10 text-white p-6 bg-black/70 rounded">
              <h1 className="text-xl md:text-3xl font-bold">Effortless Invoice Payments Online</h1>
              <p className="text-sm md:text-lg">Make bill payments fast, easy, and secure from your desktop.</p>
              <button
                className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold shadow transition"
              >
                <Link to={'/bills'}>Pay Bill</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center bg-green-300 w-full 
              h-[350px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src={b_2}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="relative z-10 text-white p-6 bg-black/70 rounded">
              <h1 className="text-xl md:text-3xl font-bold">Instant Payment Confirmation</h1>
              <p className="text-sm md:text-lg">Receive a "Money Received" notification, every time you pay your bill.</p>
              <button
                className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold shadow transition"
              >
                <Link to={'/bills'}>Pay Bill</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center bg-green-300 w-full 
              h-[350px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src={b_3}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="relative z-10 text-white p-6 bg-black/70 rounded">
              <h1 className="text-xl md:text-3xl font-bold">Pay With Card, Track Your Expenses</h1>
              <p className="text-sm md:text-lg">Convenient card payments and detailed billing at your fingertips.</p>
              <button
                className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold shadow transition"
              >
                <Link to={'/bills'}>Pay Bill</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
