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
    <section className='pt-[120px] max-sm:pt-[48px]'>
      <div className='container grid grid-cols-2 items-start justify-center gap-[48px] max-sm:grid-cols-1 max-sm:gap-3'>
        <motion.h1
          className='text-[40px] font-bold text-gray-200'
          initial='hidden'
          variants={titleVariants}
          viewport={{ once: true }}
          whileInView='visible'
        >
          Our Projects
        </motion.h1>
        <div>
          <motion.p
            className='pb-6 text-xl text-[#012F41] lg:text-2xl'
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
        <ul className='flex size-full flex-col gap-3 rounded-lg bg-banner-img2 bg-cover bg-center bg-no-repeat p-3 text-gray-200  max-md:order-2 lg:p-10'>
          <motion.li
            custom={0}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Project</p>
            <p>X-ray Room Shielding for Healthcare Facility</p>
          </motion.li>
          <motion.li
            custom={1}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Client</p>
            <p>IOM Ikeja, Lagos</p>
          </motion.li>
          <motion.li
            custom={2}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Challenges</p>
            <p className='text-[#222]'>
              Inadequate shielding in the X-ray room, leading to
              radiation leakage and non-compliance with safety
              standards.
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
              Installed high-quality lead-lined walls, doors, and
              protective windows, alongside modern radiation shielding
              equipment, ensuring full compliance with safety
              regulations.
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
              Achieved a 70% reduction in radiation exposure,
              improving safety for both staff and patients, and
              enhancing the facility&apos;s compliance with
              international standards.
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
              alt='medical machine'
              className='size-full h-full object-cover'
              height={400}
              src='/xray-image.svg'
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
              src='/image/product1.webp'
              width={1000}
            />
          </motion.div>
        </div>

        <ul className='flex size-full flex-col gap-3 rounded-lg bg-banner-img2 bg-cover bg-center bg-no-repeat p-3 text-gray-200  max-md:order-4 lg:p-10'>
          <motion.li
            custom={0}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Project</p>
            <p>
              Walnut Finished Lead Lined Sliding Door Set for CT Room
            </p>
          </motion.li>
          <motion.li
            custom={1}
            initial='hidden'
            variants={listItemVariants}
            viewport={{ once: true }}
            whileInView='visible'
          >
            <p className='text-gray-100'>Client</p>
            <p>ABC Foundation, Ibadan</p>
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
              The existing door lacked proper radiation shielding,
              compromising safety and not meeting the necessary
              compliance standards for a CT room.
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
              Installed a custom walnut-finished lead-lined sliding
              door set, designed to enhance both the aesthetics and
              functionality of the CT room while providing optimal
              radiation protection.
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
              Ensured full compliance with radiation safety standards,
              improved room accessibility with a sliding door
              solution, and provided a visually appealing finish that
              complemented the medical environment.
            </p>
          </motion.li>
        </ul>
      </section>
    </section>
  );
};

export default ProjectSection;
