"use client";
import React, { useEffect } from "react";

const Devfolio: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;

    // Error handling for script loading
    script.onerror = () => {
      console.error("Failed to load the Devfolio SDK script.");
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="apply-button "
      data-hackathon-slug="ultron-8" // Replace with the actual slug
      data-button-theme="dark"
      style={{ height: "44px", width: "312px" }} // Inline styles for button size
    ></div>
  );
};

export default Devfolio;
