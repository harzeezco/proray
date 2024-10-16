'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

const LeniScroll = () => {
  useEffect(() => {
    // Initialize Lenis with valid options
    const lenis = new Lenis({
      duration: 1.2, // The duration of the smooth scroll animation
      easing: (t: number): number => t * (2 - t), // Type the easing function
    });

    // Request animation frame loop for Lenis scrolling
    const raf = (time: DOMHighResTimeStamp): void => {
      lenis.raf(time); // Execute Lenis scroll handling
      requestAnimationFrame(raf); // Continue the loop
    };

    requestAnimationFrame(raf); // Start the RAF loop

    return () => {
      lenis.destroy(); // Cleanup when component unmounts
    };
  }, []);

  return null; // This component does not render anything
};

export default LeniScroll;
