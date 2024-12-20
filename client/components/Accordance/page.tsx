"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaArrowDown } from "react-icons/fa";

interface AccordionProps {
  expandDefault: boolean;
  heading: string;
  content: string;
  key: number;
}

const StyledAccordion = styled(Accordion)({
  borderRadius: "16px",
  overflow: "hidden",
});

const StyledAccordionSummary = styled(AccordionSummary)({
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
});

const StyledAccordionDetails = styled(AccordionDetails)({
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
});

// Correctly define the component type
const CustomAccordion: React.FC<AccordionProps> = ({
  expandDefault,
  heading,
  content,
  key,
}) => {
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden" }} className="w-3/4 m-auto">
      <StyledAccordion defaultExpanded={expandDefault} key={key}>
        <StyledAccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{heading}</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>{content}</Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default CustomAccordion;
