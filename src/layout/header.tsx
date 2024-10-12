"use client";

import { usePathname } from "next/navigation";
import AnimatedLink from "@/components/animated-text";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAVLINKS = [
  { title: "home", address: "/" },
  { title: "about", address: "/about" },
  { title: "our Products", address: "/products" },
];

const Header = () => {
  const pathname = usePathname();
  const [opened, setOpened] = useState<boolean>(false);

  const handleClickFunc = () => {
    setOpened(!opened);
  };

  return (
    <header className="bg-blue-200 w-full">
      <div className="container flex justify-between items-center py-4">
        <Image src={"/icon/logo.png"} alt="logo" width={126} height={24} />

        {/* Menu (for larger screens, displayed as flex) */}
        <ul
          className={`flex gap-10 md:relative md:flex-row max-md:fixed top-0 right-0 max-md:flex-col max-md:w-full max-md:h-screen max-md:bg-blue-200 z-50 max-md:justify-center max-md:pl-20 max-md:text-xl max-md:transition-transform max-md:duration-500 ${
            opened ? "max-md:translate-x-0" : "max-md:translate-x-full"
          }`}
        >
          {NAVLINKS.map(({ title, address }, i) => (
            <Link href={address} key={i}>
              <li
                onClick={() => setOpened(false)}
                className="capitalize"
                style={{
                  color: pathname === address ? "white" : "#89939E", // Change color based on current pathname
                }}
              >
                <AnimatedLink letters={title} />
              </li>
            </Link>
          ))}

          <AnimatedLink
            letters="Get In Touch"
            className=" border-white rounded-lg px-8 py-3 hover:bg-primary transition-colors duration-300 hover:border-primary md:hidden  bg-primary max-w-fit"
          />
        </ul>

        {/* Get in touch link (hidden on smaller screens) */}
        <AnimatedLink
          letters="Get In Touch"
          className="border-2 border-white rounded-lg px-8 py-3 hover:bg-primary transition-colors duration-300 hover:border-primary max-md:hidden"
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
