import React from "react";
import Image from "next/image";
import AccordionExpand from "@/components/Accordance/page";
import aboutData from "@/data/Event.json"; // Adjust the path as necessary

export const About = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex h-[60vh] justify-center items-center">
        <div className="w-1/2 flex flex-col justify-start items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {aboutData.eventName}
          </h1>
          <p className="">{aboutData.eventSummary}</p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/path/to/image.jpg"
            alt="About"
            width={500}
            height={500}
            className="bg-slate-400 rounded-full w-40 h-40"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 pb-8">
        {aboutData.accordionItems.map((item, index) => (
          <div className="rounded-full">
            <AccordionExpand
              key={index}
              expandDefault={index === 0} // Expand the first accordion by default
              heading={item.heading}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
