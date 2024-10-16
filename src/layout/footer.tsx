import AnimatedLink from '@/components/animated-text';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

const Footer = () => (
  <footer className='relative isolate mt-10 bg-gray-200 max-md:mt-40  '>
    <Image
      alt='line stroke'
      className=' absolute  inset-y-0  -z-50 size-full'
      height={100}
      src='/image/stroke.webp'
      width={1000}
    />

    <div className='container relative pt-28'>
      <h1 className='max-w-[800px] pb-5 text-3xl text-white max-md:text-balance md:text-4xl lg:text-5xl'>
        Sign up for updates on new products, projects, and industry{' '}
        <span className='text-primary'>insights</span>
      </h1>
      <Image
        alt='logo'
        height={40}
        src='/icon/logo.png'
        width={120}
      />

      <div className='flex justify-between  gap-y-10 pt-5 max-sm:flex-col sm:items-end'>
        <div className='text-zinc-500'>
          <p>65b Opebi Road, Salvation Bus-stop,</p>
          <p>Ikeja, Lagos. Nigeria.</p>
          <p>0802 610 0080,</p>
        </div>
        <ul className='flex items-center justify-center gap-4 text-zinc-500 max-md:flex-col max-md:items-start'>
          <li className='transition-all duration-300 ease-in-out hover:text-white'>
            <Link href='/'>
              <AnimatedLink letters='HOME' />
            </Link>
          </li>
          <li className='transition-all duration-300 ease-in-out hover:text-white'>
            <Link href='/about'>
              <AnimatedLink letters='ABOUT US' />
            </Link>
          </li>
          <li className='transition-all duration-300 ease-in-out hover:text-white'>
            <Link href='/products'>
              <AnimatedLink letters='OUR PRODUCTS' />
            </Link>
          </li>
          <li className='transition-all duration-300 ease-in-out hover:text-white'>
            <Link href='/contact'>
              <AnimatedLink letters='CONTACT US' />
            </Link>
          </li>
        </ul>
      </div>

      <form
        action=''
        className='absolute right-0 top-0 grid -translate-y-1/2 grid-cols-1 items-center justify-center rounded-2xl border-4 border-gray-200  bg-white p-5'
      >
        <label aria-label='email' htmlFor='email' />
        <input
          className='h-12 w-60 rounded-md  border-none bg-zinc-100 px-4 text-gray-200 outline-none'
          id='email'
          placeholder='Your Email'
          type='email'
        />
        <button
          className='group mt-4 flex w-full items-center justify-center rounded-md bg-primary py-3 text-white'
          type='button'
        >
          <AnimatedLink letters='SIGN UP' />
          <FaArrowRight className='size-6 -rotate-45 transition-all duration-500 ease-in-out group-hover:translate-x-5 group-hover:rotate-0' />
        </button>

        <div className='box2 absolute right-0  top-10 size-9 translate-x-[111%] rounded-bl-3xl bg-white' />
        <div className='box1 absolute left-0  top-10  size-9 -translate-x-[111%] rounded-br-3xl bg-white' />
      </form>

      <div className='mt-20 flex items-center justify-between rounded-t-3xl border-t-2   border-white px-10  py-3  max-[550px]:flex-col max-[550px]:items-start'>
        <p className='opacity-15 max-[550px]:order-2 max-[550px]:mx-auto max-[550px]:pt-5'>
          All rights reserved. Copyrights © 2024 Ltd.
        </p>
        <div className='grid grid-cols-3 items-center    justify-center gap-4'>
          <FaTwitterSquare className='size-6 ' />
          <FaInstagramSquare className='size-6 ' />
          <FaFacebookSquare className='size-6 ' />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
