'use client';

import { motion } from 'framer-motion';

const ShowcaseSection = () => (
  <section className='mt-20 w-full bg-banner-img bg-cover bg-center bg-no-repeat'>
    <div className='showcase py-20 lg:pt-40'>
      <div className='container'>
        <motion.h1
          className='mx-auto max-w-[900px] pt-10 text-center text-4xl md:text-5xl lg:text-6xl'
          initial={{ opacity: 0, y: -20 }} // Start with hidden opacity and slightly upward position
          transition={{ duration: 0.5 }} // Animation duration
          viewport={{ once: true }} // Only animate once when in view
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
        >
          Leading the Way in Healthcare Safety and Efficiency
        </motion.h1>
        <div className='mt-10 grid grid-cols-3 items-center justify-center gap-5 text-balance rounded-lg border-2 border-white border-opacity-50 bg-blue-200 px-8 py-4 max-md:grid-cols-1'>
          <motion.div
            className='border-white border-opacity-25 max-md:border-b-2 md:border-r'
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className='pb-2 text-3xl font-bold'>100+</h1>
            <p className='max-md:pb-4'>
              Hospitals equipped with advanced radiation protection
              solutions.
            </p>
          </motion.div>

          <motion.div
            className='border-white border-opacity-25 max-md:border-b-2 md:border-r'
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Increase delay for stagger
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className='pb-2 text-3xl font-bold'>50+</h1>
            <p className='max-md:pb-4'>
              Average reduction in staff radiation exposure with our
              products.
            </p>
          </motion.div>

          <motion.div
            className=''
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }} // Increase delay for stagger
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className='pb-2 text-3xl font-bold'>500+</h1>
            <p>
              Healthcare facilities supported with diagnostic
              equipment and consumables.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
