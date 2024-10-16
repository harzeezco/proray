'use client';

import AnimatedLink from '@/components/animated-text';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAVLINKS = [
  { title: 'home', address: '/' },
  { title: 'about', address: '/about' },
  { title: 'our Products', address: '/products' },
  { title: 'contacts', address: '/contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [opened, setOpened] = useState<boolean>(false);

  const handleClickFunc = () => {
    setOpened(!opened);
  };

  return (
    <header
      className={cn('w-full', pathname === '/' ? 'bg-blue-200' : '')}
    >
      <div className='container flex items-center justify-between py-4'>
        <Link href='/'>
          <Image
            alt='logo'
            height={24}
            src={cn(
              pathname === '/'
                ? '/icon/logo.png'
                : '/icon/logo-2.svg',
            )}
            width={126}
          />
        </Link>
        <motion.ul className='flex gap-10'>
          {NAVLINKS.map(({ address, title }, i) => (
            <Link key={i} href={address}>
              <motion.li
                className='capitalize'
                style={{
                  color:
                    pathname === address && pathname === '/'
                      ? 'white'
                      : '#89939E', // Change color based on current pathname
                }}
              >
                <AnimatedLink letters={title} />
              </motion.li>
            </Link>
          ))}

          <AnimatedLink
            className=' max-w-fit rounded-md border-white bg-primary px-8 py-4 transition-colors duration-300 hover:border-primary  hover:bg-primary md:hidden'
            letters='Get In Touch'
          />
        </motion.ul>

        {/* Get in touch link (hidden on smaller screens) */}
        <AnimatedLink
          className={cn(
            pathname === '/'
              ? 'border-white hover:bg-primary hover:border-primary'
              : 'hover:bg-primary hover:text-white border-primary hover:border-primary text-primary',
            'transition-colors duration-300 border-[1.5px] px-8 py-3 rounded-lg',
          )}
          letters='Get In Touch'
        />

        {/* Animated Hamburger Menu Button */}
        <button
          className='right-5 top-2 z-50 flex size-12 flex-col items-center justify-center rounded-full bg-primary p-3 max-md:fixed md:hidden'
          type='button'
          onClick={handleClickFunc}
        >
          {/* Top Bar (rotate when opened) */}
          <span
            className={`h-[2px]  w-6 rounded bg-white transition-transform duration-300 ${
              opened ? 'translate-y-1 rotate-45' : ''
            }`}
          />

          <span
            className={`my-1 h-[2px] w-6 rounded bg-white transition-all duration-300 ${
              opened ? 'opacity-0' : 'opacity-100'
            }`}
          />

          <span
            className={`h-[2px]  w-6 rounded bg-white transition-transform duration-300 ${
              opened ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
