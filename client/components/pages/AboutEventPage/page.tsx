"use client";
import React from "react";
import Image from "next/image";
import AccordionExpand from "@/components/Accordance/page";
import aboutData from "@/data/Event.json"; // Adjust the path as necessary

export const About = () => {
  return (
    <div className="w-full flex flex-col" id="aboutus">
      <div className="lg:flex max-lg:flex-col max-lg:gap-5 h-auto justify-center items-center">
        <div className="lg:w-1/2 w-full flex flex-col justify-start items-center px-4">
          <h1 className="text-3xl font-bold text-white-900 text-center">
            {aboutData.eventName}
          </h1>
          <p className="text-center">{aboutData.eventSummary}</p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center items-center px-4">
          <div className="w-full max-w-[500px] h-auto p-4 lg:p-6">
            <Image
              src="/assets/Recruiting24.png"
              alt="About"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg" // Ensures the image maintains its aspect ratio and scales responsively
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 pb-8">
        {aboutData.accordionItems.map((item, index) => (
          <div className="rounded" key={index}>
            <AccordionExpand
              expandDefault={false} // Expand the first accordion item
              heading={item.heading}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
