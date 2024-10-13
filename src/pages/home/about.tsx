// About Us.
// Radaition
// Shielding
// X-Ray
// Diagnostics
// Consumables
// Medicals

import AnimatedLink from "@/components/animated-text";
import Button from "@/components/button";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const SERVICES = [
  "radiation",
  "shielding",
  "x-ray",
  "diagnostics",
  "consumables",
  "medicals",
];

const AboutSection = () => {
  return (
    <section className="container  max-md:py-[20px]">
      <div className=" bg-white">
        <div className="container">
          <p className="text-gray-100 text-xl text-center">
            Trusted by top medical companies and startups around the world
          </p>
          <Image
            src={"/image/trustee.png"}
            alt="logo"
            width={1000}
            height={20}
          />
        </div>
      </div>
      <div className="flex  gap-x-5 gap-y-20 items-start justify-between pt-[120px] max-sm:flex-col">
        <div>
          <h1 className="text-gray-200 font-bold text-3xl mb-5">About US .</h1>
          <ul className="flex items-center justify-start gap-2  flex-wrap">
            {SERVICES.map((service, i) => (
              <li
                key={i}
                className="px-8 py-3 rounded-full bg-blue-300 text-primary border-2 border-primary "
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-[600px]">
          <h1 className="text-gray-200 font-bold text-3xl mb-5">
            Proray Solutions.
          </h1>
          <p className=" text-gray-100 text-lg text-balance">
            Pro-Ray Solutions Ltd is an independent supplier of innovative
            imaging equipment and associated healthcare products. We are also a
            major manufacturer and installer of high-quality radiation
            protection products. Our X-ray protection products are purpose-built
            by our professional craftsmen in the X-ray and radiation shielding
            industry.
          </p>
          <p className="mt-5 text-gray-100 text-lg text-balance">
            We strive to provide service excellence and supply of technically
            advanced medical imaging equipment and consumables. At
            Proraysolutions Ltd we strive for world-class customer service and
            we are committed to providing quality and value to healthcare in
            Nigeria and Africa.
          </p>

          <Button className="mt-10" href="/contact">
            <AnimatedLink letters="Learn More About Us" />
            <FaArrowRight className="inline-block ml-2 -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
