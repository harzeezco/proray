'use client';

import { motion } from 'framer-motion';

const Hero = () => (
  <section className='about flex items-center '>
    <div className='container'>
      <motion.h1
        className='font-satoshi text-4xl font-medium text-white md:max-w-[600px] md:text-5xl lg:max-w-[900px] lg:text-6xl'
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, translateY: 0 }}
      >
        Empowering Healthcare Professionals—All in One Place
      </motion.h1>
    </div>
  </section>
);

export default Hero;
