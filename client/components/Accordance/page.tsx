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
    <div className="w-full max-w-[700px] mx-auto my-5 relative tile-animation">
      <div
        className={`
          rounded-full p-5 bg-gradient-to-br from-purple-800 to-black text-white font-bold
          flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out
          shadow-md hover:scale-[1.03] hover:shadow-lg
          ${isExpanded ? 'rounded-b-none' : ''}
        `}
        onClick={toggleAccordion}
      >
        <h3 className="text-xl m-0">{heading}</h3>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`
          bg-black bg-opacity-15 text-gray-100 overflow-hidden transition-all duration-300 ease-in-out
          rounded-b-full text-base leading-relaxed
          ${isExpanded ? 'max-h-[1000px] p-5' : 'max-h-0 p-0'}
        `}
      >
        <p>{content}</p>
      </div>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`
            absolute w-1 h-1 rounded-full bg-white opacity-0
            animate-spark
          `}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CustomAccordion;

