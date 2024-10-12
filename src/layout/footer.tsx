import AnimatedLink from "@/components/animated-text";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-200 relative mt-10 max-md:mt-40  pb-10">
      <div className="container pt-28 relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white max-w-[800px] max-md:text-balance pb-5">
          Sign up for updates on new products, projects, and industry{" "}
          <span className="text-primary">insights</span>
        </h1>
        <Image src={"/icon/logo.png"} alt="logo" width={120} height={40} />

        <div className="flex sm:items-end  max-sm:flex-col justify-between pt-5 gap-y-10">
          <div className="text-zinc-500">
            <p>65b Opebi Road, Salvation Bus-stop,</p>
            <p>Ikeja, Lagos. Nigeria.</p>
            <p>0802 610 0080,</p>
          </div>
          <ul className="flex items-center gap-4 justify-center text-zinc-500 max-md:flex-col max-md:items-start">
            <li className="hover:text-white transition-all duration-300 ease-in-out">
              <Link href={"/"}>
                <AnimatedLink letters={"HOME"} />
              </Link>
            </li>
            <li className="hover:text-white transition-all duration-300 ease-in-out">
              <Link href={"/about"}>
                <AnimatedLink letters={"ABOUT US"} />
              </Link>
            </li>
            <li className="hover:text-white transition-all duration-300 ease-in-out">
              <Link href={"/products"}>
                <AnimatedLink letters={"OUR PRODUCTS"} />
              </Link>
            </li>
            <li className="hover:text-white transition-all duration-300 ease-in-out">
              <Link href={"/contact"}>
                <AnimatedLink letters={"CONTACT US"} />
              </Link>
            </li>
          </ul>
        </div>

        <form
          action=""
          className="absolute top-0 -translate-y-1/2 right-0 bg-white p-5 rounded-2xl grid grid-cols-1 justify-center items-center  border-4 border-gray-200"
        >
          <input
            type="email"
            placeholder="Your Email"
            className="  px-4 w-60 h-12  bg-zinc-100 rounded-md text-gray-200 border-none outline-none"
          />
          <button
            type="button"
            className="flex w-full items-center justify-center text-white group bg-primary mt-4 py-3 rounded-md"
          >
            <AnimatedLink letters="SIGN UP" />
            <FaArrowRight className="size-6 -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-in-out group-hover:translate-x-5" />
          </button>

          <div className="size-9 box2 bg-white  translate-x-[111%] absolute top-10 rounded-bl-3xl right-0" />
          <div className="size-9 box1 bg-white  -translate-x-[111%]  absolute top-10 rounded-br-3xl left-0" />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
