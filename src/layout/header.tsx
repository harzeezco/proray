"use client";

import { usePathname } from "next/navigation";
import AnimatedLink from "@/components/animated-text";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const NAVLINKS = [
  { title: "home", address: "/" },
  { title: "about", address: "/about" },
  { title: "our Products", address: "/products" },
  { title: "contacts", address: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [opened, setOpened] = useState<boolean>(false);

  const handleClickFunc = () => {
    setOpened(!opened);
  };

  return (
    <header
      className={`w-full  relative ${pathname == "/contact" ? "bg-white" : "bg-blue-200"}`}
    >
      <Image
        src={"/image/stroke.webp"}
        width={1000}
        height={500}
        alt="line stroke"
        className="w-full absolute"
      />

      <div className="container flex justify-between  items-center py-4">
        {pathname == "/contact" ? (
          <Image src={"/icon/logo2.webp"} alt="logo" width={126} height={24} />
        ) : (
          <Image src={"/icon/logo.png"} alt="logo" width={126} height={24} />
        )}
        {/* Menu (for larger screens, displayed as flex) */}
        <motion.ul
          transition={{ staggerChildren: 0.2 }}
          className={`flex gap-10 md:relative md:flex-row max-md:fixed top-0 right-0 max-md:flex-col max-md:w-full max-md:h-full max-md:bg-blue-200 z-50 max-md:justify-center max-md:pl-10 max-md:text-xl max-md:transition-transform max-md:duration-500 ${
            opened ? "max-md:translate-x-0" : "max-md:translate-x-[120%]"
          }`}
        >
          {NAVLINKS.map(({ title, address }, i) => (
            <Link href={address} key={i}>
              <motion.li
                initial={{ translateX: 20, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                onClick={() => setOpened(false)}
                className="capitalize"
                style={{
                  color: pathname === address ? "#0E90C2" : "#89939E", // Change color based on current pathname
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
          letters="Get In Touch"
          className={` border-[1px] rounded-lg px-8 py-4 hover:bg-primary transition-colors duration-300 hover:border-primary max-md:hidden   max-w-fit  ${pathname == "/contact" ? "border-primary hover:text-white text-primary" : "border-white text-white "}`}
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
