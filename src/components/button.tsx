import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Button = ({ children, className, href }: ButtonProps) => (
  <Link
    className={twMerge(
      'flex items-center  group bg-primary px-10 py-4 max-w-fit rounded-lg ',
      className,
    )}
    href={href}
  >
    {children}
  </Link>
);

export default Button;
