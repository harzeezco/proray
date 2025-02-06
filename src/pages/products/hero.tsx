'use client';

import AnimatedLink from '@/components/animated-text';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const SERVICES_LISTS = [
  { name: 'Radiation', bottom: 10 },
  { name: 'Shielding', bottom: 20 },
  { name: 'X-Ray', bottom: 30 },
  { name: 'Diagnostics', bottom: 40 },
  { name: 'Consumables', bottom: 50 },
  { name: 'Medicals', bottom: 60 },
];

const scrollHandler = (service: { bottom: number }) => {
  const scrollLength =
    (service.bottom / 100) * document.body.scrollHeight;

  window.scrollTo({ top: scrollLength, behavior: 'smooth' });
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

const Hero = () => (
  <section className='w-screen overflow-x-hidden'>
    <div className='mx-auto mt-14 max-w-screen-lg'>
      {/* Heading */}
      <motion.h1
        animate={{ opacity: 1, translateY: 0 }}
        className='mx-auto text-center font-satoshi text-4xl font-bold text-dark-600 md:max-w-[600px] md:text-5xl lg:max-w-[900px] lg:text-6xl'
        initial={{ opacity: 0, translateY: -50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        Comprehensive Medical Equipment and Supplies
      </motion.h1>

      {/* Services List */}
      <motion.ul
        animate='visible'
        className='mx-auto mt-7 flex max-w-[700px] flex-wrap justify-center gap-2'
        initial='hidden'
        variants={listVariants}
      >
        {SERVICES_LISTS.map((service) => (
          <motion.li
            key={service.name}
            className='w-fit cursor-pointer rounded-full border-2 border-primary bg-blue-300 px-8 py-3 text-primary max-sm:px-3'
            variants={itemVariants}
            onClick={() => scrollHandler(service)}
          >
            {service.name}
          </motion.li>
        ))}
      </motion.ul>

      {/* Call to Action Button */}
      <motion.div
        animate={{ opacity: 1, translateY: 0 }}
        className='flex items-center justify-center'
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Button className='group mt-10' href='/contact'>
          <AnimatedLink letters='Book a Call Now' />
          <FaArrowRight className='ml-2 inline-block size-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0' />
        </Button>
      </motion.div>
    </div>

    {/* Image Section */}
    <div className='flex h-[90vh] items-center justify-center max-2xl:mt-20 max-2xl:items-end max-sm:mt-0 max-sm:h-[70vh] 2xl:h-[70vh]'>
      <motion.div className='relative w-full bg-blue-200 max-2xl:h-[50vh] max-sm:h-[35vh] 2xl:mt-[150px] 2xl:h-[30vh]'>
        <div className='absolute -top-60 flex items-center justify-center gap-x-5 max-2xl:animate-loop-scroll'>
          {[...Array.from({ length: 5 })].map((_, index) => (
            <div key={index} className='shrink-0'>
              <Image
                alt='medical accessories'
                className='mx-auto shrink-0 rounded-xl bg-cover bg-center'
                height={588}
                src='/image/products.webp'
                width={900}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
