"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  expandDefault: boolean;
  heading: string;
  content: string;
}

const CustomAccordion: React.FC<AccordionProps> = ({
  expandDefault,
  heading,
  content,
}) => {
  const [isExpanded, setIsExpanded] = useState(expandDefault);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto my-5 relative">
      <div
        className={`
          p-5 bg-gradient-to-br from-purple-800 to-black text-white font-bold
          flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out
          shadow-md hover:scale-[1.03] hover:shadow-lg
          ${isExpanded ? "rounded-t-lg" : "rounded-lg"}
        `}
        onClick={toggleAccordion}
      >
        <h3 className="text-xl m-0">{heading}</h3>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`
          bg-gray-900 text-gray-100 overflow-hidden transition-all duration-300 ease-in-out
          text-base leading-relaxed
          ${isExpanded ? "max-h-[1000px] p-5 rounded-b-lg" : "max-h-0 p-0"}
        `}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CustomAccordion;
