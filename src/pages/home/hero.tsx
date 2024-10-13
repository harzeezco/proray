import AnimatedLink from '@/components/animated-text';
import Button from '@/components/button';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => (
  <section className='bg-blue-200 pt-[70px] '>
    <div className='container'>
      <div className='mb-1 max-w-fit rounded-lg bg-[#3d5f81] px-8 py-1 text-white'>
        100% Guaranty
      </div>
      <div className='flex  items-center justify-between gap-x-5 pb-[100px] max-[773px]:flex-col max-[773px]:items-start max-sm:items-start max-sm:gap-5'>
        <h1 className='inline font-satoshi text-4xl  text-white md:max-w-[600px] md:text-5xl  lg:max-w-[700px]  lg:text-6xl'>
          Leading in{' '}
          <span className='inline rounded-lg border border-dashed border-primary  bg-[#004e7f] px-2 text-primary '>
            Radiation
          </span>{' '}
          protection and precision healthcare solutions.
        </h1>
        <div className='mt-5 justify-self-end '>
          <p className='max-w-[330px] pb-4 text-lg text-gray-100 max-[773px]:max-w-[580px]'>
            Empowering healthcare providers with industry-leading
            radiation protection solutions and a full range of
            high-quality medical equipment.
          </p>

          <Button className='max-[773px]:mt-10' href='/contact'>
            <AnimatedLink letters='Book a Call Now' />
            <FaArrowRight className='ml-2 inline-block size-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0' />
          </Button>
        </div>
      </div>
    </div>
    {/* Banner image section */}

    <div className='relative mt-20 flex h-[50vh] w-screen items-center justify-center bg-white max-[500px]:h-[30vh] md:h-[80vh] lg:h-[90vh] xl:h-[60vh] 2xl:h-[50vh]'>
      <div className='absolute top-0 mx-auto -translate-y-[20%]   max-md:container  max-md:shadow-2xl '>
        <Image
          alt='medical tool'
          className=' relative  rounded-lg border-4 border-white'
          height={1000}
          src='/image/banner-image.png'
          width={1000}
        />
        <div className='absolute left-0 top-20 h-10 w-screen -translate-x-full rounded-tr-full bg-white max-md:hidden' />
        <div className='absolute right-0 top-20 h-10 w-screen translate-x-full rounded-tl-full bg-white max-md:hidden' />
      </div>
    </div>
  </section>
);

export default Hero;
