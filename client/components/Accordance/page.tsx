"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaArrowDown } from "react-icons/fa";
import React from "react";

interface AccordionProps {
  expandDefault: boolean;
  heading: string;
  content: string;
}

const StyledAccordion = styled(Accordion)({
  borderRadius: "16px",
  margin: "15px 0",
  background: "linear-gradient(135deg, #6a0dad, #000000)", // Purple and black gradient
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Deeper shadow for depth
  overflow: "hidden",
  color: "#fff",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transitions
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.35)", // Enhanced shadow on hover
  },
  animation: "moveTile 10s infinite ease-in-out", // Add tile animation
});

const StyledAccordionSummary = styled(AccordionSummary)({
  padding: "15px 25px",
  background: "rgba(255, 255, 255, 0.15)", // Semi-transparent background
  color: "#fff",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#fff",
    transition: "transform 0.3s ease", // Rotate icon smoothly
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)", // Rotate down arrow when expanded
  },
  "&:hover": {
    background: "rgba(255, 255, 255, 0.25)", // Slightly darker hover effect
  },
});

const StyledAccordionDetails = styled(AccordionDetails)({
  padding: "20px 25px",
  background: "rgba(0, 0, 0, 0.15)", // Slightly darker for better contrast
  color: "#f5f5f5",
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
  fontSize: "1rem",
  lineHeight: "1.6",
});

const CustomAccordion: React.FC<AccordionProps> = ({
  expandDefault,
  heading,
  content,
}) => {
  return (
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        margin: "auto",
      }}
      className="w-full max-w-[700px] tile-animation" // Add animation class
    >
      <StyledAccordion defaultExpanded={expandDefault}>
        <StyledAccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            {heading}
          </Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>{content}</Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default CustomAccordion;
