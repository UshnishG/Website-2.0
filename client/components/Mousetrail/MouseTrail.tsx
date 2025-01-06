"use client";
import React, { useEffect } from "react";
import "../../app/globals.css";

const MouseTrail: React.FC = () => {
  useEffect(() => {
    // Function to create a trail element
    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "mouse-trail";
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;

      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 1000); // Remove trail after 1 second
    };

    // Add event listener for mouse movement
    document.addEventListener("mousemove", createTrail);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", createTrail);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default MouseTrail;
