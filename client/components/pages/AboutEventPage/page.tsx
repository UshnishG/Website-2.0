"use client";
import React from "react";
import Image from "next/image";
import AccordionExpand from "@/components/Accordance/page";
import aboutData from "@/data/Event.json"; // Adjust the path as necessary

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

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center items-center px-4 mt-8 lg:mt-0">
          <div className="w-full max-w-[500px] h-auto p-4 lg:p-6 rounded-lg shadow-lg">
            <Image
              src="/assets/Poster1.jpg"
              alt="About Ultron 8.0"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Posters Section
      <div className="w-full flex flex-col items-center justify-center px-4 lg:px-12 pt-12 pb-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          {[0, 1].map((index) => (
            <div
              className="w-full max-w-[500px] h-auto p-4 rounded-lg shadow-lg bg-white"
              key={index}
            >
              <Image
                src={`/assets/Poster${index + 1}.jpg`}
                alt={`Poster ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div> */}

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
