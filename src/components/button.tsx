import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ href, children, className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex items-center  group bg-primary px-10 py-4 max-w-fit rounded-lg ",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
