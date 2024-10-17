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
    src: '/image/syringe.png',
    title: 'CT Injector Syringes',
    caption:
      'High-quality syringes compatible with CT injectors for precise and safe contrast media delivery.',
  },
  {
    src: '/image/syringe.png',
    title: 'CT Injector Syringes',
    caption:
      'High-quality syringes compatible with CT injectors for precise and safe contrast media delivery.',
  },
];

const ThirdFeature: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const captionsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (captionsRef.current) {
      const { scrollTop } = captionsRef.current;
      const { scrollHeight } = captionsRef.current;
      const { clientHeight } = captionsRef.current;
      const totalScrollableHeight = scrollHeight - clientHeight;

      // Calculate the scroll position ratio (0 - 1)
      const scrollRatio = scrollTop / totalScrollableHeight;

      // Ensure the index is within the array bounds
      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollRatio * images.length)),
        images.length - 1,
      );

      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const captionsElement = captionsRef.current;

    if (captionsElement) {
      captionsElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (captionsElement) {
        captionsElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className='container mt-[64px] max-[500px]:hidden'>
      <h1 className='mb-10 max-w-[400px] text-3xl font-bold text-blue-200 max-sm:mb-5 md:max-w-[500px] md:text-4xl lg:max-w-[600px] lg:text-5xl'>
        Consumables
      </h1>
      <div className='flex items-center  justify-between gap-x-5'>
        {/* Image Section */}
        {images.length > 0 && (
          <div className='h-full'>
            {images[currentIndex] ? (
              <motion.div
                className='w-fit'
                initial={{ opacity: 0, filter: 'blur(10px)' }} // Set initial blur
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileInView={{
                  opacity: 1,
                  filter: 'blur(0px)', // Remove blur when in view
                }}
              >
                <Image
                  alt={`Slide ${currentIndex}`}
                  className='object-cover'
                  height={500}
                  src={images[currentIndex].src}
                  width={400}
                />
              </motion.div>
            ) : null}
          </div>
        )}

        {/* Caption Section with scrollable area */}
        <div
          ref={captionsRef}
          className='custom-scrollbar relative flex h-40 snap-y snap-mandatory flex-col overflow-y-scroll text-gray-200'
        >
          {images.map((item, index) => (
            <div
              key={index}
              className={`mt-5 h-40 flex-none snap-start pr-3 transition-opacity duration-300 ${
                currentIndex === index ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className='size-fit overflow-hidden'>
                <motion.h1
                  animate={{
                    translateY: currentIndex === index ? 0 : 25,
                  }}
                  className='text-xl font-bold leading-[0.9] text-gray-200'
                  initial={{ translateY: 25 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {item.title}
                </motion.h1>
              </div>
              <motion.p
                animate={{
                  translateY: currentIndex === index ? 0 : 25,
                  opacity: currentIndex === index ? 1 : 0,
                }}
                className='mt-2 max-w-[350px] text-left text-lg text-zinc-700'
                initial={{ translateY: 25, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                  delay: 0.2,
                }}
              >
                {item.caption}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdFeature;
