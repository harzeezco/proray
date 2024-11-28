import AnimatedLink from '@/components/animated-text';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FaArrowRight, FaLocationPin } from 'react-icons/fa6';

const Footer = () => {
  const MENU_ITEMS = [
    'HOME',
    'ABOUT US',
    'OUR PRODUCTS',
    'CONTACT US',
  ] as const;

  type MenuItem = (typeof MENU_ITEMS)[number]; // Create a union type of the menu items

  const routes: Record<MenuItem, string> = {
    HOME: '/',
    'ABOUT US': '/about',
    'OUR PRODUCTS': '/products',
    'CONTACT US': '/contact',
  };

  return (
    <footer className=' w-screen overflow-x-hidden  md:pt-40 '>
      <section className='relative isolate mt-10 bg-gray-200 max-md:mt-40'>
        <Image
          alt='line stroke'
          className='absolute inset-y-0 -z-50 size-full'
          height={100}
          src='/image/stroke.webp'
          width={1000}
        />

        <div className='container relative pt-28'>
          <h1 className='max-w-[800px] pb-5 text-3xl text-white max-md:text-balance md:text-4xl lg:text-5xl'>
            Sign up for updates on new products, projects, and
            industry <span className='text-primary'>insights</span>
          </h1>
          <Image
            alt='logo'
            height={40}
            src='/icon/logo.png'
            width={120}
          />

          <div className='flex justify-between gap-y-10 pt-5 max-sm:flex-col-reverse sm:items-end'>
            <div className='flex flex-col items-start justify-start gap-2 text-sm text-zinc-500 sm:hidden'>
              <p className='flex items-start justify-start gap-2'>
                <FaLocationPin className='size-6 text-white' />
                65b Opebi Road, Salvation Bus-stop, Ikeja, Lagos.
                Nigeria.
              </p>
              <p className='flex items-start justify-start gap-2'>
                <FaPhoneSquare className='size-6 text-white' />
                0802 610 0080,
              </p>
              <p className='flex items-start justify-start gap-2'>
                <FaTwitterSquare className='size-6 text-white' />
                Instagram
              </p>
            </div>
            <div className='text-zinc-500 max-sm:hidden'>
              <p>42, Airport Road, Ikeja</p>
              <p>Lagos. Nigeria.</p>
              <p>0803 956 5299,</p>
            </div>
            <ul className='flex items-center justify-center gap-4 text-zinc-500 max-md:items-start max-sm:mt-5 max-sm:justify-start max-sm:text-sm max-[390px]:flex-col'>
              {MENU_ITEMS.map((item) => (
                <li
                  key={item}
                  className='py-2 transition-all duration-300 ease-in-out hover:text-white'
                >
                  <Link href={routes[item]}>
                    <AnimatedLink letters={item} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <form
            action=''
            className='absolute right-0 top-[-2px] grid -translate-y-1/2 grid-cols-1 items-center justify-center rounded-2xl border-4 border-gray-200 bg-white p-5 max-sm:left-1/2 max-sm:w-[calc(100%-10vw)] max-sm:-translate-x-1/2'
          >
            <label aria-label='email' htmlFor='email' />
            <input
              className='h-12 rounded-md border-none bg-zinc-100 px-4 text-gray-200 outline-none sm:w-60'
              id='email'
              placeholder='Your Email'
              type='email'
            />
            <div className='group mt-4 flex w-full items-center justify-center rounded-md bg-primary py-3 text-white'>
              <AnimatedLink letters='SIGN UP' />
              <FaArrowRight className='size-5 -rotate-45 transition-all duration-500 ease-in-out group-hover:translate-x-5 group-hover:rotate-0' />
            </div>

            <div className='box2 absolute right-0 top-10 size-9 translate-x-[111%] rounded-bl-3xl bg-white' />
            <div className='box1 absolute left-0 top-10 size-9 -translate-x-[111%] rounded-br-3xl bg-white' />
          </form>

          <div className='mt-20 flex items-center justify-between rounded-t-3xl border-t-2 border-white px-5 py-3 max-[550px]:flex-col max-[550px]:items-start'>
            <p className='max- opacity-15 max-[550px]:order-2 max-[550px]:mx-auto'>
              All rights reserved. Copyrights © 2024 Ltd.
            </p>
            <div className='grid cursor-pointer grid-cols-3 items-center justify-center gap-4 max-sm:mx-auto max-sm:hidden'>
              <FaTwitterSquare className='size-6 transition duration-300 ease-in-out hover:scale-110' />
              <FaInstagramSquare className='size-6 transition duration-300 ease-in-out hover:scale-110' />
              <FaFacebookSquare className='size-6 transition duration-300 ease-in-out hover:scale-110' />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
