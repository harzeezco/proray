'use client';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface LayoutProps extends LinkProps {
  children: ReactNode;
  href: string;
}

// Sleep function defined to return Promise<void>
const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const TransitionLink: React.FC<LayoutProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();

    const body = document.querySelector('body');

    body?.classList.add('page-transition');
    await sleep(300); // Wait for 500 ms before navigating
    await router.push(href); // Navigate to the new route
    await sleep(300); // Wait for 500 ms after navigating
    body?.classList.remove('page-transition'); // Remove the transition class
  };

  return (
    <Link href={href} onClick={handleTransition} {...props}>
      {children}
    </Link>
  );
};
