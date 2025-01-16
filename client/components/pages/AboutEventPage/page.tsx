"use client";
import React from "react";
import Image from "next/image";
import AccordionExpand from "@/components/Accordance/page";
import aboutData from "@/data/Event.json"; // Adjust the path as necessary
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const About = () => {
  return (
    <div className="w-full flex flex-col py-12">
      {/* About Event Section */}
      <div className="lg:flex max-lg:flex-col max-lg:gap-8 h-auto justify-center items-center px-6 lg:px-12" id="aboutus">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start items-center text-center lg:text-left px-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            {aboutData.eventName}
          </h1>
          <p className="text-xl text-lg leading-relaxed text-white-700">
            {aboutData.eventSummary}
          </p>
        </div>

        {/* Image Carousel Section */}
        <div className="lg:w-1/2 w-full flex justify-center items-center px-4 mt-8 lg:mt-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full max-w-[500px]"
          >
            <SwiperSlide>
  <div className="w-full h-auto p-4 lg:p-6 rounded-lg shadow-lg bg-blue-100">
    <Image
      src="/assets/Poster1.jpg"
      alt="About Ultron 8.0"
      width={500}
      height={300}
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="w-full h-auto p-4 lg:p-6 rounded-lg shadow-lg bg-red-100">
    <Image
      src="/assets/hack.jpg"
      alt="About Ultron 8.0"
      width={500}
      height={300}
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>
</SwiperSlide>

          </Swiper>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-12 pt-8" id="faq">
        {aboutData.accordionItems.map((item, index) => (
          <div className="rounded-lg p-4 shadow-md" key={index}>
            <AccordionExpand
              expandDefault={false}
              heading={item.heading}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
