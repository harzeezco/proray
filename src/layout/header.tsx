'use client';

import AnimatedLink from '@/components/animated-text';
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
  const [windowScreen, setWindowScreen] = useState<number>(0); // Initialize as 0
  const [active, setActive] = useState<string>('home');
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    // Run this effect only on the client side
    if (typeof globalThis !== 'undefined') {
      setWindowScreen(window.innerWidth); // Set window width when client-side
    }
  }, []);

  const handleActiveLink = (title: string) => {
    setActive(title);
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

  // large screen check
  const isLarge = windowScreen <= 968;

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

  return (
    <header
      className={`w-full ${pathname === '/' ? 'bg-blue-200' : 'bg-white'}`}
    >
      <div className='container relative z-[9999] flex items-center justify-between py-4'>
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

        <div className='overflow-hidden'>
          <ul
            ref={menuRef}
            className={`right-0  top-0 z-50 flex gap-10 rounded-t-3xl max-md:fixed max-md:h-screen max-md:w-full max-md:flex-col max-md:bg-white max-md:pl-10 max-md:pt-24 max-md:text-xl max-md:transition-transform max-md:duration-500 md:relative md:flex-row ${
              opened
                ? 'max-md:translate-y-28'
                : 'max-md:translate-y-[200vh]'
            }`}
          >
            {NAVLINKS.map(({ address, title }, i) => (
              <Link
                key={i}
                href={address}
                onClick={() => setActive(title)}
              >
                <motion.li
                  className='capitalize'
                  initial={{
                    translateY: isLarge ? -20 : 0,
                    opacity: 1,
                  }}
                  style={{
                    color:
                      active === title
                        ? '#0E90C2 ' // Active link color
                        : pathname === 'address'
                          ? '#0E90C2'
                          : '#89939E',
                  }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  onClick={() => handleActiveLink(title)}
                >
                  <AnimatedLink letters={title} />
                </motion.li>
              </Link>
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
              className='top-3 mr-10 flex items-center justify-center rounded-full bg-primary p-3 text-white md:hidden'
              type='button'
              onClick={() => setOpened(!opened)}
            >
              <p>Close</p>
            </button>
          </ul>
        </div>

        <Link href='/contact'>
          <AnimatedLink
            className={`menu-button rounded-lg border-2 px-8 py-3 transition-colors duration-300 hover:border-primary hover:bg-primary max-md:hidden ${
              pathname === '/'
                ? ' border-white'
                : 'border-primary text-primary hover:text-white'
            }`}
            letters='Get In Touch'
          />
        </Link>

        <motion.button
          className='menu-button right-5 top-2 z-50 flex size-10 flex-col items-center justify-center rounded-sm bg-blue-300 max-md:fixed md:hidden'
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
        className={`${
          opened && isLarge
            ? 'fixed inset-0 z-50 size-full bg-black'
            : 'pointer-events-none hidden'
        }`}
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </header>
  );
};

export default Header;
