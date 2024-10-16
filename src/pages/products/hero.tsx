import AnimatedLink from '@/components/animated-text';
import Button from '@/components/button';
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
      <h1 className='mx-auto text-center font-satoshi text-4xl font-bold text-dark-600 md:max-w-[600px] md:text-5xl lg:max-w-[900px] lg:text-6xl'>
        Comprehensive Medical Equipment and Supplies
      </h1>

      <ul className='mx-auto mt-7 flex max-w-[500px] flex-wrap justify-center  gap-2'>
        {SERVICES.map((service, i) => (
          <li
            key={i}
            className='w-fit rounded-full border-2 border-primary bg-blue-300 px-8 py-3 text-primary '
          >
            {service}
          </li>
        ))}
      </ul>

      <div className='flex items-center justify-center'>
        <Button className='mt-10' href='/contact'>
          <AnimatedLink letters='Book a Call Now' />
          <FaArrowRight className='ml-2 inline-block size-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0' />
        </Button>
      </div>
    </div>

    <div className='mt-[220px] bg-blue-200 '>
      <div className='relative mx-auto mt-14 flex w-fit  -translate-y-1/4 items-center  justify-center '>
        <Image
          alt='medical accessories'
          className='h-[420px] shrink-0 rounded-xl
           bg-cover  bg-center max-lg:min-w-[800px] max-[900px]:h-[300px] max-[475px]:-translate-x-32 '
          height={388}
          src='/image/product-hero.png'
          width={1200}
        />
        <div className='box3 absolute bottom-[75px] left-0 size-10 rounded-bl-xl bg-transparent max-[900px]:hidden' />
      </div>
    </div>
  </section>
);

export default Hero;
