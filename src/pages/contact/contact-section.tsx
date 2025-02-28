'use client';

import AnimatedLink from '@/components/animated-text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import ContactForm from './contact-form';

const ContactSection = () => (
  <section className='relative py-16'>
    <div className='container'>
      {/* Heading */}
      <motion.div
        className='mb-12 text-center'
        initial={{ opacity: 0, translateY: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, translateY: 0 }}
      >
        <h2 className='max-w-[400px] text-start text-4xl font-bold text-gray-200 md:max-w-[500px] md:text-5xl lg:max-w-[650px] lg:text-6xl'>
          Contact our team to find out more
        </h2>
      </motion.div>

      <div className='flex justify-between max-md:flex-col md:items-center'>
        <motion.div
          className='relative'
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          {/* Map Image */}
          <Image
            alt='World Map'
            className='max-w-[800px] rounded-md'
            height={500}
            layout='responsive'
            src='/image/Location.webp'
            width={700}
          />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className='flex max-w-[232px] flex-col justify-center'
          initial={{ opacity: 0, translateY: 20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, translateY: 0 }}
        >
          {/* Support */}
          <div>
            <motion.h3
              className='mb-1 text-xl font-bold text-gray-200 lg:text-2xl'
              initial={{ opacity: 0, translateX: 25 }}
              transition={{ ease: 'easeOut', duration: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              Support
            </motion.h3>
            <motion.p
              className='max-w-[170px] text-gray-100'
              initial={{ opacity: 0, translateX: 25 }}
              transition={{
                ease: 'easeOut',
                duration: 0.5,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              Our friendly team is here to help.
            </motion.p>

            <Link
              className='text-gray-200 underline hover:text-primary'
              href='mailto:support@proraysolutions.com'
            >
              <motion.p
                initial={{ opacity: 0, translateX: 25 }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.5,
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, translateX: 0 }}
              >
                <Link href='mailto:info@proraysolutionsltd.com'>
                  info@proraysolutionsltd.com
                </Link>
              </motion.p>
            </Link>
          </div>

          {/* Sales */}
          <div>
            <motion.h3
              className='mb-1 mt-5 text-xl font-bold text-gray-200 lg:text-2xl'
              initial={{ opacity: 0, translateX: 25 }}
              transition={{
                ease: 'easeOut',
                duration: 0.5,
                delay: 0.6,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              Sales
            </motion.h3>
            <motion.p
              className='max-w-[170px] text-gray-100'
              initial={{ opacity: 0, translateX: 25 }}
              transition={{
                ease: 'easeOut',
                duration: 0.5,
                delay: 0.8,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              Questions or queries? Get in touch!
            </motion.p>
            <div className='mt-2 flex items-center'>
              <Link
                className='text-gray-200 underline hover:text-primary'
                href='mailto:sales@proraysolutions.com'
              >
                <motion.p
                  initial={{ opacity: 0, translateX: 25 }}
                  transition={{
                    ease: 'easeOut',
                    duration: 0.5,
                    delay: 1,
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                >
                  <Link href='mailto:info@proraysolutionsltd.com'>
                    info@proraysolutionsltd.com
                  </Link>
                </motion.p>
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div>
            <motion.h3
              className='mb-1 mt-5 text-xl font-bold text-gray-200 lg:text-2xl'
              initial={{ opacity: 0, translateX: 25 }}
              transition={{
                ease: 'easeOut',
                duration: 0.5,
                delay: 1.2,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              Phone
            </motion.h3>
            <motion.p
              className='max-w-[170px] text-gray-100'
              initial={{ opacity: 0, translateX: 25 }}
              transition={{
                ease: 'easeOut',
                duration: 0.5,
                delay: 1.4,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              Mon-Fri from 8am to 5pm.
            </motion.p>
            <div className='mt-2 flex w-fit flex-col gap-y-2 '>
              <Link
                className='border-b pb-1 text-gray-200 hover:text-primary'
                href='https://wa.me/2348039565299'
              >
                <AnimatedLink
                  className='underline'
                  letters='+234 (080) 3 956 5299'
                />
              </Link>
              <Link
                className='border-b pb-1 text-gray-200 hover:text-primary'
                href='https://wa.me/2348134245743'
              >
                <AnimatedLink
                  className='underline'
                  letters='+234 (081) 3 424 5743'
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        className='mt-20 flex items-center justify-between max-md:flex-col max-md:items-start'
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, translateY: 0 }}
      >
        <div>
          <h3 className='pb-3 text-3xl font-bold text-gray-200'>
            50+
          </h3>
          <p className='max-w-[300px] text-lg text-gray-100 max-md:mb-5'>
            Some big hospitals that we work with, and trust us very
            much
          </p>
        </div>
        <div className='max-md:-ml-5'>
          <Image
            alt='google amazon airbnb logos'
            height={200}
            src='/image/logo.png'
            width={700}
          />
        </div>
      </motion.div> */}

      {/* Contacts Tab */}
      <motion.div
        className='mb-20 mt-[120px] grid items-center lg:mb-40 lg:grid-cols-2 lg:justify-between'
        initial={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, translateY: 0 }}
      >
        <div className='h-full border-y border-l border-zinc-300 px-12 py-14  max-lg:border max-[500px]:border-none max-[500px]:px-1'>
          <h3 className='max-w-[500px] text-3xl font-bold text-gray-200 max-sm:text-2xl'>
            Let’s Level Up Your Healthcare Solutions
          </h3>
          <p className='pt-2 text-gray-100'>
            You can reach us anytime{' '}
            <a
              className='text-primary hover:underline'
              href='mailto:hello@proraysolutions.com'
            >
              info@proraysolutionsltd.com
            </a>
          </p>

          {/* form */}
          <ContactForm />
        </div>
        <div className='h-full max-lg:hidden'>
          <Image
            alt='medical worker'
            className='size-full bg-contain'
            height={200}
            src='/image/proray.webp'
            width={400}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
