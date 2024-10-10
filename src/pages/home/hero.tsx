import AnimatedLink from "@/components/animated-text";
import Button from "@/components/button";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="bg-blue-200 pt-[70px] ">
      <div className="container">
        <div className="bg-[#3d5f81] max-w-fit mb-1 px-8 py-1 rounded-lg text-white">
          100% Guaranty
        </div>
        <div className="flex  max-[773px]:items-start items-center justify-between pb-[100px] max-[773px]:flex-col gap-x-5 max-sm:items-start max-sm:gap-5">
          <h1 className="lg:text-6xl lg:max-w-[700px] md:max-w-[600px]  text-white md:text-5xl text-4xl  inline  font-satoshi">
            Leading in{" "}
            <span className="bg-[#004e7f] inline px-2 rounded-lg border-[1px]  border-dashed border-primary text-primary ">
              Radiation
            </span>{" "}
            protection and precision healthcare solutions.
          </h1>
          <div className="justify-self-end mt-5 ">
            <p className="max-w-[330px] max-[773px]:max-w-[580px] text-lg text-gray-100 pb-4">
              Empowering healthcare providers with industry-leading radiation
              protection solutions and a full range of high-quality medical
              equipment.
            </p>

            <Button className="max-[773px]:mt-10" href="/contact">
              <AnimatedLink letters="Book a Call Now" />
              <FaArrowRight className="inline-block ml-2 -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out size-5" />
            </Button>
          </div>
        </div>
      </div>
      {/* Banner image section */}

      <div className="w-screen mt-20 flex items-center relative bg-white justify-center max-[500px]:h-[30vh] h-[50vh] lg:h-[90vh] md:h-[80vh]">
        <div className="mx-auto absolute top-0 -translate-y-[20%]   max-md:container  max-md:shadow-2xl ">
          <Image
            src={"/image/banner-image.png"}
            alt="medical tool"
            width={1000}
            height={1000}
            className=" relative  border-4 border-white rounded-lg"
          />
          <div className="absolute max-md:hidden w-screen rounded-tr-full h-10 bg-white top-20 left-0 -translate-x-full"></div>
          <div className="absolute w-screen max-md:hidden rounded-tl-full h-10 bg-white top-20 right-0 translate-x-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
