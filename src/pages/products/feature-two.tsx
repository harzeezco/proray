'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

// Define the type for each image object
interface Image1 {
  caption: string;
  src: string;
  title: string;
}

// Image data
const images: Image1[] = [
  {
    src: '/image/door2.png',
    title: 'Lead Lined Doors',
    caption:
      'Secure and durable doors lined with lead to prevent radiation leakage from imaging rooms.',
  },
  {
    src: '/image/lead-window.png',
    title: 'Lead lined protective windows',
    caption:
      'Constructed to provide effective radiation shielding in medical facilities.',
  },
  {
    src: '/image/lead-board.png',
    title: 'Lead lined boards',
    caption:
      'Constructed for use in walls and ceilings to provide effective radiation shielding in medical facilities.',
  },
];

const SecondFeatures: React.FC = () => {
  const [windowIndex, setWindowIndex] = useState<number>(0);
  const [manualIndex, setManualIndex] = useState<number>(0);
  const [isWindowScrolling, setIsWindowScrolling] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [scrollDelta, setScrollDelta] = useState(0);
  const captionsRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Handle window scroll

  const windowScrollHandler = (e: WheelEvent) => {
    e.preventDefault(); // Prevent default scroll behavior
    const delta = e.deltaY;

    // Define a scroll threshold to change index (adjust this value for sensitivity)
    const scrollThreshold = 70;

    // Accumulate scroll delta until the threshold is met
    setScrollDelta((prevDelta) => {
      const newDelta = prevDelta + delta;

      // Once threshold is exceeded, update index and reset delta accumulator
      if (Math.abs(newDelta) >= scrollThreshold) {
        const scrollStep = newDelta > 0 ? 1 : -1; // Scroll up or down
        const newIndex = Math.min(
          Math.max(0, windowIndex + scrollStep), // Calculate new index based on direction
          images.length - 1, // Ensure index stays within bounds
        );

        setWindowIndex(newIndex); // Update windowIndex
        setScrollDelta(0); // Reset scroll delta after updating index
      }

      return newDelta; // Return updated delta for accumulation
    });

    setIsWindowScrolling(true); // Set flag to true during window scroll
  };
  // Handle manual scroll in captions area
  const handleManualScroll = () => {
    if (captionsRef.current) {
      const { clientHeight, scrollHeight, scrollTop } =
        captionsRef.current;
      const totalScrollableHeight = scrollHeight - clientHeight;
      const scrollRatio = scrollTop / totalScrollableHeight;

      // Update manualIndex based on scroll position
      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollRatio * images.length)),
        images.length - 1,
      );

      setManualIndex(newIndex);
    }
  };

  // Sync windowIndex and manualIndex when scrolling stops
  useEffect(() => {
    if (!isWindowScrolling) {
      setWindowIndex(manualIndex); // Sync manual scroll with window scroll after stop
    }
  }, [manualIndex, isWindowScrolling]);

  // Effect for detecting window scroll
  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.addEventListener('wheel', windowScrollHandler); // Enable scroll behavior
          } else {
            window.removeEventListener('wheel', windowScrollHandler); // Disable scroll behavior
          }
        }
      },
      { threshold: 1 },
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    // Cleanup
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }

      window.removeEventListener('wheel', windowScrollHandler); // Clean up event listener
    };
  }, [windowIndex]);

  // Handle manual scroll
  useEffect(() => {
    const captionsElement = captionsRef.current;

    if (captionsElement) {
      captionsElement.addEventListener('scroll', handleManualScroll);
    }

    return () => {
      if (captionsElement) {
        captionsElement.removeEventListener(
          'scroll',
          handleManualScroll,
        );
      }
    };
  }, []);

  // Synchronize captions scroll with current windowIndex
  useEffect(() => {
    if (captionsRef.current && !isWindowScrolling) {
      const targetScrollTop =
        manualIndex *
        (captionsRef.current.scrollHeight / images.length);

      captionsRef.current.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    }
  }, [manualIndex]);

  // Detect window scroll stop (reset the flag)
  useEffect(() => {
    let scrollTimeout: any;

    const handleScrollStop = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsWindowScrolling(false); // Set window scrolling flag to false
      }, 200); // Adjust delay as needed
    };

    window.addEventListener('scroll', handleScrollStop);

    return () => {
      window.removeEventListener('scroll', handleScrollStop);
      clearTimeout(scrollTimeout); // Clean up timeout
    };
  }, [isWindowScrolling]);
  useEffect(() => {
    if (captionsRef.current && isWindowScrolling) {
      const targetScrollTop =
        (windowIndex / (images.length - 1)) *
        (captionsRef.current.scrollHeight -
          captionsRef.current.clientHeight);

      captionsRef.current.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    }
  }, [windowIndex]);

  return (
    <section className='container   mt-16 h-screen max-[500px]:hidden '>
      <div ref={sectionRef} className='sticky top-5 '>
        <h1 className='mb-10 max-w-[400px] text-3xl font-bold text-blue-200 max-sm:mb-5 md:max-w-[500px] md:text-4xl lg:max-w-[600px] lg:text-5xl'>
          Radiation shielding products
        </h1>
        <div className='flex flex-row-reverse items-center justify-between gap-x-5'>
          {/* Image Section */}
          {images.length > 0 && (
            <div className='h-full'>
              <motion.div
                className='w-fit'
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileInView={{
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
              >
                <Image
                  alt={`Slide ${windowIndex}`}
                  className='object-cover'
                  height={500}
                  src={images[windowIndex].src}
                  width={400}
                />
              </motion.div>
            </div>
          )}

          {/* Caption Section with scrollable area */}
          <div
            ref={captionsRef}
            className='custom-scrollbar relative flex h-[220px] snap-y snap-mandatory flex-col items-center justify-evenly overflow-y-scroll text-gray-200'
          >
            {images.map((item, index) => (
              <div
                key={index}
                className={` h-40 flex-none snap-start pr-3 transition-opacity duration-300 ${
                  manualIndex === index ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div className='size-fit overflow-hidden'>
                  <h1 className='mb-2 text-xl font-bold leading-[0.9] text-gray-200'>
                    {item.title}
                  </h1>
                </div>
                <p className=' max-w-[350px] text-left text-lg text-zinc-700 '>
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondFeatures;
