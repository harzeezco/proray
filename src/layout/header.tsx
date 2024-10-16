'use client';

import AnimatedLink from '@/components/animated-text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
  const pathname = usePathname();
  const [active, setActive] = useState<string>('home');
  const [opened, setOpened] = useState<boolean>(false);

  const handleActiveLink = (title: string) => {
    setActive(title);
    setOpened(!opened);
  };

  return (
    <header
      className={` w-full ${pathname === '/' ? 'bg-blue-200' : 'bg-white'}`}
    >
      <div className='container flex items-center justify-between py-4'>
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

        {/* Menu (for larger screens, displayed as flex) */}
        <ul
          className={`right-0 top-0 z-50 flex gap-10 max-md:fixed max-md:h-screen max-md:w-full max-md:flex-col max-md:justify-center max-md:bg-blue-250 max-md:pl-10 max-md:text-xl max-md:transition-transform max-md:duration-500 md:relative md:flex-row ${
            opened
              ? 'max-md:translate-y-0'
              : 'max-md:translate-y-full'
          }`}
        >
          {NAVLINKS.map(({ address, title }, i) => (
            <Link key={i} href={address}>
              <motion.li
                className='capitalize'
                initial={{ translateY: -20, opacity: 0 }}
                style={{
                  color:
                    active === title
                      ? '#0E90C2 ' // Active link color
                      : pathname === '/' // For inactive links
                        ? '#fff'
                        : '#0E90C2',
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

          <AnimatedLink
            className=' max-w-fit rounded-sm border-white bg-blue-300 px-8 py-3 text-primary transition-colors duration-300  hover:border-primary md:hidden'
            letters='Get In Touch'
          />
        </ul>

        {/* Get in touch link (hidden on smaller screens) */}
        <AnimatedLink
          className={`rounded-lg border-2 px-8 py-3 transition-colors duration-300 hover:border-primary hover:bg-primary max-md:hidden ${pathname === '/' ? ' border-white' : 'border-primary text-primary hover:text-white'}`}
          letters='Get In Touch'
        />

        {/* Animated Hamburger Menu Button */}
        <motion.button
          className='right-5 top-2 z-50  flex size-10 flex-col items-center justify-center rounded-sm   bg-blue-300 max-md:fixed md:hidden'
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
    </header>
  );
};

export default Header;
