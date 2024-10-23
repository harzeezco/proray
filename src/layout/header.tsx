'use client';

import AnimatedLink from '@/components/animated-text';
import { TransitionLink } from '@/components/layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

interface LinksType {
  address: string;
  title: string;
}
const NAVLINKS: LinksType[] = [
  { title: 'home', address: '/' },
  { title: 'about', address: '/about' },
  { title: 'our Products', address: '/products' },
  { title: 'contact us', address: '/contact' },
];

const Header: React.FC = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const [windowScreen, setWindowScreen] = useState<number>(0);
  const [clicked, setClicked] = useState(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [isLoading, setIsLoaing] = useState(true);

  // handling window first loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoaing(false);
    }, 2000);
  }, []);

  // handling active links

  const handleActiveLink = () => {
    setOpened(!opened);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest('.menu-button')
    ) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Checking window Resize

  useEffect(() => {
    // Run this effect only on the client side
    if (typeof globalThis !== 'undefined') {
      setWindowScreen(window.innerWidth);
      console.log(windowScreen);
    }
  }, [windowScreen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // large screen check
  const isLarge = windowScreen <= 770;

  function handleWindowResize() {
    if (typeof globalThis !== 'undefined') {
      setWindowScreen(window.innerWidth); // Update window width
    }
  }
  useEffect(() => {
    // Attach resize event listener
    if (typeof globalThis !== 'undefined') {
      window.addEventListener('resize', handleWindowResize);
    }

    return () => {
      if (typeof globalThis !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  // handle overlay function

  const handleShowOverlay = () => {
    setClicked(true);

    // Reset the clicked state after 2 seconds
    setTimeout(() => {
      setClicked(false);
    }, 700); // Adjust the duration as needed
  };

  useEffect(() => {
    console.log(clicked);
  }, [clicked]); // Dependency array

  return (
    <header
      className={` relative w-full ${pathname === '/' ? 'bg-blue-200' : 'bg-white'}`}
    >
      <div className='container relative z-[9999] flex items-center justify-between py-4'>
        <Link href='/'>
          <motion.div
            initial={{ translateY: -20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
          >
            {pathname === '/' ? (
              <Image
                alt='logo'
                height={24}
                src='/icon/logo.png'
                width={126}
              />
            ) : (
              <Image
                alt='logo'
                height={24}
                src='/icon/logo2.webp'
                width={126}
              />
            )}
          </motion.div>
        </Link>

        {/* Menu (for larger screens, displayed as flex) */}
        <div className='overflow-hidden '>
          <ul
            ref={menuRef}
            className={`right-0  top-0 z-50 flex gap-5 rounded-t-3xl max-md:fixed max-md:h-screen max-md:w-full max-md:flex-col max-md:bg-white max-md:pl-10 max-md:pt-24 max-md:text-xl max-md:transition-transform max-md:duration-500 md:relative md:flex-row ${
              opened
                ? 'max-md:translate-y-28'
                : 'max-md:translate-y-[200vh]'
            }`}
          >
            {NAVLINKS.map(({ address, title }, i) => (
              <TransitionLink key={i} href={address}>
                <motion.li
                  className='w-fit p-4  capitalize  transition-all '
                  style={{
                    color:
                      pathname === address ? '#0E90C2' : '#89939E',
                  }}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleActiveLink()}
                >
                  <AnimatedLink letters={title} />
                </motion.li>
              </TransitionLink>
            ))}

            <div className='mt-5 flex gap-2 md:hidden'>
              <Link
                className='rounded-lg border-2 border-zinc-200 p-4 text-primary transition-all duration-300 ease-in-out hover:border-transparent hover:bg-primary hover:text-zinc-50'
                href='/'
              >
                <FaTwitterSquare />
              </Link>
              <Link
                className='rounded-lg border-2 border-zinc-200 p-4 text-primary transition-all duration-300 ease-in-out hover:border-transparent hover:bg-primary hover:text-zinc-50'
                href='/'
              >
                <FaInstagramSquare />
              </Link>
              <Link
                className='rounded-lg border-2 border-zinc-200 p-4 text-primary transition-all duration-300 ease-in-out hover:border-transparent hover:bg-primary hover:text-zinc-50'
                href='/'
              >
                <FaFacebookSquare />
              </Link>
              <Link
                className='rounded-lg border-2 border-zinc-200 p-4 text-primary transition-all duration-300 ease-in-out hover:border-transparent hover:bg-primary hover:text-zinc-50'
                href='/'
              >
                <FaLinkedin />
              </Link>
            </div>

            <button
              className='mr-10  mt-24 flex items-center justify-center rounded-full bg-primary p-3 text-white md:hidden'
              type='button'
              onClick={() => setOpened(false)}
            >
              <p>Close</p>
            </button>
          </ul>
        </div>

        {/* Get in touch link (hidden on smaller screens) */}
        <Link href='/contact'>
          <AnimatedLink
            className={`menu-button rounded-lg border-2 px-8 py-3 transition-colors duration-300 hover:border-primary hover:bg-primary max-md:hidden ${pathname === '/' ? ' border-white' : 'border-primary text-primary hover:text-white'}`}
            letters='Get In Touch'
          />
        </Link>

        {/* Hamburger Menu Button */}
        <motion.button
          className={` menu-button right-5 top-2 z-50  flex size-10 flex-col items-center justify-center rounded-sm    max-md:fixed md:hidden ${pathname === '/' ? ' bg-[#033D74]' : 'bg-blue-300'}`}
          initial={{ translateY: -20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          type='button'
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpened(!opened)}
        >
          <Image
            alt='menu icon'
            height={24}
            src='/icon/menu.svg'
            width={24}
          />
        </motion.button>
      </div>
      <motion.div
        animate={{
          opacity: opened ? 0.5 : 0,
          backdropFilter: opened ? 'blur(5px)' : 'blur(0px)',
        }}
        className={` ${opened && isLarge ? 'fixed inset-0 z-50 size-full bg-black' : 'pointer-events-none hidden'}`}
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      <motion.div
        animate={{
          height: isLoading ? '100%' : 0,
          scale: isLoading ? 1 : 0.8,
        }}
        className='fixed inset-0 z-[98999999] flex size-full items-center justify-center overflow-hidden  bg-blue-200'
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.div
          className='flex flex-col items-center gap-4'
          initial={{ filter: 'blur(5px)', translateY: 20 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
            delay: 0.2,
          }}
          whileInView={{ filter: 'blur(0px)', translateY: 0 }}
        >
          {' '}
          <motion.img
            alt='logo'
            animate={{ filter: 'blur(0px)', translateY: 0 }}
            height={26}
            initial={{ filter: 'blur(5px)', translateY: 20 }}
            src='/icon/logo.png'
            transition={{
              duration: 0.05,
              ease: 'easeInOut',
            }}
            width={126}
          />
          <div className='relative  h-1 w-20 overflow-hidden rounded-full  bg-white'>
            <div className='absolute left-0 top-0 h-full w-2 animate-loader bg-blue-500' />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
