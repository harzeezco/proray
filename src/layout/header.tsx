"use client";

import { usePathname } from "next/navigation"; // Import usePathname
import AnimatedLink from "@/components/animated-text";
import Image from "next/image";
import Link from "next/link";

const NAVLINKS = [
  { title: "home", address: "/" },
  { title: "about", address: "/about" }, // Assuming you will have a separate about page
  { title: "our Products", address: "/products" }, // Assuming you will have a products page
];

const Header = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <header className="bg-blue-200 w-full">
      <div className="container flex justify-between items-center py-4">
        <Image src={"/icon/logo.png"} alt="logo" width={126} height={24} />
        <ul className="flex gap-10">
          {NAVLINKS.map(({ title, address }, i) => (
            <Link href={address} key={i}>
              <li
                className="capitalize"
                style={{
                  color: pathname === address ? "white" : "#89939E", // Change color based on current pathname
                }}
              >
                <AnimatedLink letters={title} />
              </li>
            </Link>
          ))}
        </ul>

        <AnimatedLink
          letters="Get In Touch"
          className="border-2 border-white rounded-lg px-8 py-3 hover:bg-primary transition-colors duration-300 hover:border-primary"
        />
      </div>
    </header>
  );
};

export default Header;
