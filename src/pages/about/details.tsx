'use client';

import { motion } from 'framer-motion';

const Details = () => (
  <section className='bg-blue-400 px-10 py-14 text-xl font-medium text-blue-250 md:text-2xl lg:text-3xl'>
    <div className='container mx-auto max-w-[750px] text-center'>
      <motion.p
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, translateY: 0 }}
      >
        Pro-Ray Solutions Ltd is an independent supplier of innovative
        imaging equipment and associated healthcare products.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, translateY: 0 }}
      >
        We are also a major manufacturer and installer of high-quality
        radiation protection products. Our X-ray protection products
        are purpose-built by our professional craftsmen in the X-ray
        and radiation shielding industry.
      </motion.p>

      <motion.p
        className='mt-10'
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, translateY: 0 }}
      >
        We strive to provide service excellence and supply of
        technically advanced medical imaging equipment and
        consumables.
      </motion.p>
    </div>
  </section>
);

export default Details;
