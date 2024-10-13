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
      <h1 className='mx-auto text-center font-satoshi text-4xl font-bold text-dark-600 md:max-w-[600px] md:text-5xl lg:max-w-[900px] lg:text-5xl'>
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

    <div className='mt-14 flex'>
      <Image
        alt='a patient standing'
        className='h-[550px] w-full'
        height={388}
        src='/image/product.png'
        width={1200}
      />
    </div>
  </section>
);

export default Hero;
