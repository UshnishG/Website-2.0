"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Tracks = () => {
  const tracks = [
    {
      title: "Internet Of Things",
      image: "/assets/10.png",
    },
    {
      title: "EdTech Innovations",
      image: "/assets/11.png",
    },
    {
      title: "Ai/ML & Data Science",
      image: "/assets/12.png",
    },
    {
      title: "FinTech Innovations",
      image: "/assets/13.png",
    },
    {
      title: "GameTech Innovations",
      image: "/assets/14.png",
    },
    {
      title: "Open Innovations",
      image: "/assets/15.png",
    },
  ];

  return (
    <div className="w-full relative bg-transparent">
      <div className="w-full flex flex-col justify-center items-center px-4 sm:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">
          Explore Our Tracks
        </h1>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl"
        >
          {tracks.map((track, index) => (
            <SwiperSlide key={index} className="group">
              <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <Image
                  src={track.image}
                  alt={track.title}
                  layout="responsive"
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white text-center px-2">
                    {track.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
