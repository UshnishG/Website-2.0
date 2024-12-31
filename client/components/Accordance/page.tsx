"use client";

import React, { useState } from "react";
import { styled } from "@mui/system";
import { FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  expandDefault: boolean;
  heading: string;
  content: string;
}

const AccordionWrapper = styled('div')({
  width: '100%',
  maxWidth: '700px',
  margin: '20px auto',
});

const AccordionHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded }) => ({
  borderRadius: '9999px',
  padding: '20px 40px',
  background: 'linear-gradient(135deg, #6a0dad, #000000)',
  color: '#fff',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.35)',
  },
  ...(isExpanded && {
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  }),
}));

const AccordionContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded }) => ({
  background: 'rgba(0, 0, 0, 0.15)',
  color: '#f5f5f5',
  padding: isExpanded ? '20px 40px' : '0 40px',
  maxHeight: isExpanded ? '1000px' : '0',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  borderBottomLeftRadius: '9999px',
  borderBottomRightRadius: '9999px',
  fontSize: '1rem',
  lineHeight: '1.6',
}));

const ExpandIcon = styled(FaChevronDown, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>(({ isExpanded }) => ({
  transition: 'transform 0.3s ease',
  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
}));

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
    <AccordionWrapper>
      <AccordionHeader isExpanded={isExpanded} onClick={toggleAccordion}>
        <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{heading}</h3>
        <ExpandIcon isExpanded={isExpanded} />
      </AccordionHeader>
      <AccordionContent isExpanded={isExpanded}>
        <p>{content}</p>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default CustomAccordion;

