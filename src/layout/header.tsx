'use client';

// Import usePathname
import AnimatedLink from '@/components/animated-text';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVLINKS = [
  { title: 'home', address: '/' },
  { title: 'about', address: '/about' }, // Assuming you will have a separate about page
  { title: 'our Products', address: '/products' }, // Assuming you will have a products page
  { title: 'Contact', address: '/contacts' },
];

const Header = () => {
  const pathname = usePathname(); // Get the current pathname

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
              </li>
            </Link>
          ))}
        </ul>

        <AnimatedLink
          className={cn(
            pathname === '/'
              ? 'border-white hover:bg-primary hover:border-primary'
              : 'hover:bg-primary hover:text-white border-primary hover:border-primary text-primary',
            'transition-colors duration-300 border-[1.5px] px-8 py-3 rounded-lg',
          )}
          letters='Get In Touch'
        />
      </div>
    </header>
  );
};

export default Header;
