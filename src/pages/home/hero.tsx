'use client';

import AnimatedLink from '@/components/animated-text';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => (
  <section className='bg-blue-200 pt-[70px]  '>
    <div className='container '>
      <div>
        {/* Guaranty Text */}
        <motion.div
          className='mb-1 max-w-fit rounded-lg bg-[#3d5f81] px-8 py-1 text-white'
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          100% Guaranty
        </motion.div>

        {/* Main Section with Title and Description */}
        <div className='flex items-center justify-between gap-x-5 pb-[50px] max-[773px]:flex-col  max-[773px]:items-start max-sm:items-start max-sm:gap-5 md:h-[55vh]  lg:pb-[124px]'>
          {/* Title with Animation */}
          <motion.h1
            className='inline font-satoshi text-4xl text-white md:max-w-[600px] md:text-5xl lg:max-w-[700px] lg:text-6xl'
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Leading in{' '}
            <span className='inline rounded-lg border border-dashed border-primary bg-[#004e7f] px-2 text-primary'>
              Radiation
            </span>{' '}
            protection and precision healthcare solutions.
          </motion.h1>

          {/* Description with Button */}
          <motion.div
            className='mt-5 justify-self-end'
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className='max-w-[330px] pb-4 text-lg text-gray-100 max-[773px]:max-w-[580px]'>
              Empowering healthcare providers with industry-leading
              radiation protection solutions and a full range of
              high-quality medical equipment.
            </p>

            <Button className='max-[773px]:mt-10' href='/contact'>
              <AnimatedLink letters='Book a Call Now' />
              <FaArrowRight className='ml-2 inline-block size-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0' />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
    {/* Banner image section */}

    <motion.div
      animate={{ translateY: 0, opacity: 1 }}
      className='relative mt-20 flex h-[50vh]   items-center justify-center overflow-x-clip overflow-y-visible bg-white   max-sm:bg-blue-200 max-[500px]:h-[20vh] md:h-[70vh] lg:h-[70vh]'
      initial={{ translateY: 20, opacity: 0 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <div className='absolute top-0 mx-auto -translate-y-[20%] max-md:-translate-y-[10%]    max-md:translate-x-5 '>
        <Image
          alt='medical tool'
          className=' relative rounded-lg border-4 border-white max-md:rounded-l-xl'
          height={1000}
          src='/image/banner-image.png'
          width={1000}
        />
        <div className='absolute left-0 top-20 h-10 w-screen -translate-x-full rounded-tr-full bg-white max-md:hidden' />
        <div className='absolute right-0 top-20 h-10 w-screen translate-x-full rounded-tl-full bg-white max-md:hidden' />
      </div>
    </motion.div>
  </section>
);

export default Hero;
