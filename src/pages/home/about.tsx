'use client';

import AnimatedLink from '@/components/animated-text';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

const SERVICES = [
  'radiation',
  'shielding',
  'diagnostics',
  'consumables',
  'medicals',
];

const AboutSection = () => (
  <section className='container  bg-white pt-10 max-md:py-[20px]'>
    <motion.div
      className='flex items-start   justify-between gap-x-5 gap-y-20 pt-[120px] max-sm:flex-col '
      exit={{ opacity: 0, filter: 'blur(5px)' }} // Exit animation
      initial={{ opacity: 0, filter: 'blur(5px)' }} // Initial state
      transition={{ duration: 0.5 }} // Duration for the whole transition
      viewport={{ once: true }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }} // Animate to this state
    >
      <div>
        <h1 className='mb-5 text-[40px] font-bold text-gray-200'>
          About US.
        </h1>
        <ul className='flex flex-wrap items-center justify-start gap-2'>
          {SERVICES.map((service, i) => (
            <motion.li
              key={i}
              className='rounded-full border-2 border-primary bg-blue-300 px-8 py-3 capitalize text-primary max-sm:px-6'
              initial={{ opacity: 0, y: -10 }} // Initial state for child
              transition={{ delay: i * 0.2, duration: 0.3 }} // Staggered delay
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} // Animate to this state
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className='max-w-[600px]'>
        <h1 className='mb-5 text-[40px] font-bold text-gray-200'>
          Proray Solutions<span className='text-primary'>.</span>
        </h1>
        <p className='text-balance text-lg text-gray-100'>
          Pro-Ray Solutions Ltd is an independent supplier of
          innovative imaging equipment and associated healthcare
          products. We are also a major manufacturer and installer of
          high-quality radiation protection products. Our X-ray
          protection products are purpose-built by our professional
          craftsmen in the X-ray and radiation shielding industry.
        </p>
        <p className='mt-5 text-balance text-lg text-gray-100'>
          We strive to provide service excellence and supply of
          technically advanced medical imaging equipment and
          consumables. At Proray solutions Ltd we strive for
          world-class customer service and we are committed to
          providing quality and value to healthcare in Nigeria and
          Africa.
        </p>

        <Button className='mt-10' href='/about'>
          <AnimatedLink letters='Learn More About Us' />
          <FaArrowRight className='ml-2 inline-block size-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0' />
        </Button>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
