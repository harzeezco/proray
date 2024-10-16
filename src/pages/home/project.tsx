'use client';

import AnimatedLink from '@/components/animated-text';
import Button from '@/components/button';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const ProjectSection = () => {
  const listItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }, // Stagger with delay
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <section className='pt-28'>
      <div className='container grid grid-cols-2 items-start justify-center gap-10 max-sm:grid-cols-1'>
        <motion.h1
          className='text-3xl font-bold text-gray-200'
          initial='hidden'
          variants={titleVariants}
          viewport={{ once: true }}
          whileInView='visible'
        >
          Our Projects
        </motion.h1>
        <div>
          <motion.p
            className='pb-4 text-xl text-gray-200'
            initial='hidden'
            variants={textVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            Our team brings decades of renewable wind, solar energy,
            asset management, and construction.
          </motion.p>
          <Button className='mb-16' href='/contact'>
            <AnimatedLink letters='Let’s Discuss Your Project' />
            <FaArrowRight className='ml-2 inline-block size-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0' />
          </Button>
        </div>
      </div>

      <section className='container grid grid-cols-2 items-center justify-center gap-10 max-md:grid-cols-1'>
        {/* First Project Row */}
        <ul className='flex size-full flex-col gap-3 rounded-lg bg-banner-img2 bg-cover bg-center bg-no-repeat p-6 text-gray-200 shadow-md max-md:order-2 lg:p-10'>
          <motion.li
            custom={0}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Project</p>
            <p>Radiation Safety Upgrade for Major Hospital</p>
          </motion.li>
          <motion.li
            custom={1}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Client</p>
            <p>Lagos General Hospital, Lagos</p>
          </motion.li>
          <motion.li
            custom={2}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Challenges</p>
            <p>
              Outdated radiation protection measures that didn’t meet
              current safety standards.
            </p>
          </motion.li>
          <motion.li
            custom={3}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Solution</p>
            <p>
              Provided comprehensive shielding upgrades and advanced
              radiation protection gear, ensuring compliance and
              improved safety for staff.
            </p>
          </motion.li>
          <motion.li
            custom={4}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Impact</p>
            <p>
              Increased safety and staff confidence, with radiation
              exposure reduced by 60%.
            </p>
          </motion.li>
        </ul>

        <div className='size-full max-md:order-1'>
          <motion.div
            className='h-full overflow-hidden rounded-xl'
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <Image
              alt='x-ray box'
              className='size-full h-full object-cover'
              height={400}
              src='/image/xray-box.png'
              width={1000}
            />
          </motion.div>
        </div>

        {/* Second Project Row */}
        <div className='size-full max-md:order-3'>
          <motion.div
            className='h-full overflow-hidden rounded-xl'
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <Image
              alt='medical meter'
              className='size-full h-full object-cover'
              height={400}
              src='/image/medical-tool1.png'
              width={1000}
            />
          </motion.div>
        </div>

        <ul className='flex size-full flex-col gap-3 rounded-lg bg-banner-img2 bg-cover bg-center bg-no-repeat p-6 text-gray-200 shadow-md max-md:order-4 lg:p-10'>
          <motion.li
            custom={0}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Project</p>
            <p>Advanced Diagnostic Solutions for Rural Clinics</p>
          </motion.li>
          <motion.li
            custom={1}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Client</p>
            <p>Olanrewaju Medical Center, Kwara State</p>
          </motion.li>
          <motion.li
            custom={2}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Challenges</p>
            <p>
              Lack of reliable diagnostic equipment, leading to delays
              in patient care.
            </p>
          </motion.li>
          <motion.li
            custom={3}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Solution</p>
            <p>
              Provided reliable diagnostic equipment for faster
              patient care.
            </p>
          </motion.li>
          <motion.li
            custom={4}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Impact</p>
            <p>
              40% increase in diagnostic accuracy and faster patient
              treatment.
            </p>
          </motion.li>
        </ul>

        {/* Third Project Row */}
        <ul className='flex size-full flex-col gap-3 rounded-lg bg-banner-img2 bg-cover bg-center bg-no-repeat p-6 text-gray-200 shadow-md max-md:order-6 lg:p-10'>
          <motion.li
            custom={0}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Project</p>
            <p>Custom Shielding for Mobile Radiology Units</p>
          </motion.li>
          <motion.li
            custom={1}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Client</p>
            <p>Zenith Specialist Hospital, Abuja</p>
          </motion.li>
          <motion.li
            custom={2}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Challenges</p>
            <p>
              Designed and installed custom shielding solutions for
              mobile units, along with portable radiation protection
              gear.
            </p>
          </motion.li>
          <motion.li
            custom={3}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Solution</p>
            <p>
              Expanded access to safe diagnostic services in remote
              communities, serving over 500 additional patients
              monthly.
            </p>
          </motion.li>
          <motion.li
            custom={4}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Impact</p>
            <p>
              Increased safety and staff confidence, with radiation
              exposure reduced by 60%.
            </p>
          </motion.li>
        </ul>

        <div className='size-full max-md:order-5'>
          <motion.div
            className='h-full overflow-hidden rounded-xl '
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <Image
              alt='medical meter'
              className='size-full h-full object-cover'
              height={400}
              src='/image/medical-tool2.png'
              width={1000}
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default ProjectSection;
