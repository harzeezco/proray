'use client';

import AnimatedLink from '@/components/animated-text';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const SERVICES = [
  'Radiation',
  'Shielding',
  'X-Ray',
  'Diagnostics',
  'Consumables',
  'Medicals',
];

const Hero = () => (
  <section>
    <div className='container mt-14'>
      <motion.h1
        className='mx-auto text-center font-satoshi text-4xl font-bold text-dark-600 md:max-w-[600px] md:text-5xl lg:max-w-[900px] lg:text-6xl'
        initial={{ opacity: 0, translateY: -50 }} // Initial state
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Transition properties
        viewport={{ once: true }} // Animate only once when in view
        whileInView={{ opacity: 1, translateY: 0 }} // Animate to this state
      >
        Comprehensive Medical Equipment and Supplies
      </motion.h1>

      <motion.ul
        className='mx-auto mt-7 flex max-w-[500px] flex-wrap justify-center gap-2'
        initial={{ opacity: 0 }} // Initial state for the list
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          staggerChildren: 0.1,
        }} // Stagger children
        viewport={{ once: true }} // Animate only once when in view
        whileInView={{ opacity: 1 }} // Animate to this state
      >
        {SERVICES.map((service, i) => (
          <motion.li
            key={i}
            className='w-fit rounded-full border-2 border-primary bg-blue-300 px-8 py-3 text-primary max-sm:px-3'
            initial={{ opacity: 0, translateY: 20 }} // Initial state for each item
            transition={{ duration: 0.4, ease: 'easeInOut' }} // Transition properties
            whileInView={{ opacity: 1, translateY: 0 }} // Animate to this state
          >
            {service}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className='flex items-center justify-center'
        initial={{ opacity: 0, translateY: 20 }} // Initial state for button
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Transition properties
        viewport={{ once: true }} // Animate only once when in view
        whileInView={{ opacity: 1, translateY: 0 }} // Animate to this state
      >
        <Button className='mt-10' href='/contact'>
          <AnimatedLink letters='Book a Call Now' />
          <FaArrowRight className='ml-2 inline-block size-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0' />
        </Button>
      </motion.div>
    </div>

    <motion.div
      className='relative mt-[320px] h-[50vh] w-full bg-blue-200 max-sm:h-[30vh]'
      initial={{ opacity: 0 }} // Initial state for image container
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Transition properties
      viewport={{ once: true }} // Animate only once when in view
      whileInView={{ opacity: 1 }} // Animate to this state
    >
      <div className='absolute left-1/2 top-0 mx-auto w-full -translate-x-1/2 -translate-y-1/2'>
        <Image
          alt='medical accessories'
          className='mx-auto shrink-0 rounded-xl bg-cover bg-center max-lg:min-w-[800px] max-sm:translate-x-[-125px]'
          height={588}
          src='/image/products.webp'
          width={1200}
        />
        <div className='box3 absolute bottom-[115px] left-0 size-10 rounded-bl-xl bg-transparent max-xl:hidden max-[900px]:hidden' />
      </div>
    </motion.div>
  </section>
);

export default Hero;
