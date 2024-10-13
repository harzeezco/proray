'use client';

import { usePathname } from "next/navigation";
import AnimatedLink from "@/components/animated-text";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from '@/utils/cn';
import { motion } from "framer-motion";

const NAVLINKS = [
  { title: "home", address: "/" },
  { title: "about", address: "/about" },
  { title: "our Products", address: "/products" },
  { title: "contacts", address: "/contact" },


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
        <ul className='flex gap-10'>
          {NAVLINKS.map(({ address, title }, i) => (
            <Link key={i} href={address}>
              <li
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
            letters="Get In Touch"
            className=" border-white rounded-md px-8 py-4 hover:bg-primary transition-colors duration-300 hover:border-primary md:hidden  bg-primary max-w-fit"
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
          type="button"
          onClick={handleClickFunc}
          className="rounded-full z-50 size-12 p-3 flex items-center justify-center flex-col md:hidden bg-primary max-md:fixed top-2 right-5"
        >
          {/* Top Bar (rotate when opened) */}
          <span
            className={`h-[2px]  w-6 bg-white rounded transition-transform duration-300 ${
              opened ? "rotate-45 translate-y-1" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-white rounded my-1 transition-all duration-300 ${
              opened ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`h-[2px]  w-6 bg-white rounded transition-transform duration-300 ${
              opened ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
