import AnimatedLink from "@/components/animated-text";
import Button from "@/components/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const ProjectSection = () => {
  return (
    <section className=" pt-28">
      <div className="grid container max-sm:grid-cols-1 grid-cols-2 gap-10  items-start justify-center">
        <h1 className="text-gray-200 text-3xl font-bold">Our Projects</h1>
        <div>
          <p className="text-gray-200 text-xl pb-4">
            Our team brings decades of renewable wind, solar energy, asset
            management and construction.
          </p>
          <Button className="mb-16" href="/contact">
            <AnimatedLink letters="Lets Discuss your Project" />
            <FaArrowRight className="inline-block ml-2 -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-in-out size-5" />
          </Button>
        </div>
      </div>
      <section className="grid grid-cols-2 max-md:grid-cols-1 items-center justify-center container gap-10 ">
        <ul className="bg-banner-img2 max-md:order-2 text-gray-200 bg-cover bg-center bg-no-repeat p-6 lg:p-10 rounded-lg shadow-md w-full h-full flex flex-col gap-3">
          <li>
            <p className="text-gray-100">Project</p>
            <p>Radiation Safety Upgrade for Major Hospital</p>
          </li>
          <li>
            <p className="text-gray-100">Client</p>
            <p>Lagos General Hospital, Lagos</p>
          </li>
          <li>
            <p className="text-gray-100">Chanllenges</p>
            <p>
              Outdated radiation protection measures that didn’t meet current
              safety standards.
            </p>
          </li>
          <li>
            <p className="text-gray-100">Solution</p>
            <p>
              Provided comprehensive shielding upgrades and advanced radiation
              protection gear, ensuring compliance and improved safety for staff
            </p>
          </li>
          <li>
            <p className="text-gray-100">Impact</p>
            <p>
              Increased safety and staff confidence, with radiation exposure
              reduced by 60%.
            </p>
          </li>
        </ul>

        <div className="h-full w-full max-md:order-1">
          <Image
            src={"/image/xray-box.png"}
            alt="xray box"
            width={1000}
            height={400}
            className="bg-contain h-full w-full bg-center"
          />
        </div>

        {/* Second Project  Row */}

        <div className="w-full h-full max-md:order-3 ">
          <Image
            src={"/image/medical-tool1.png"}
            alt="medical metre"
            width={1000}
            height={4000}
            className="bg-cover h-full w-full  bg-center"
          />
        </div>

        <ul className="bg-banner-img2 text-gray-200 bg-cover bg-center bg-no-repeat p-6 lg:p-10 rounded-lg shadow-md w-full h-full flex flex-col gap-3  max-md:order-4">
          <li>
            <p className="text-gray-100">Project</p>
            <p>Advanced Diagnostic Solutions for Rural Clinics</p>
          </li>
          <li>
            <p className="text-gray-100">Client</p>
            <p>Olanrewaju Medical Center, Kwara State</p>
          </li>
          <li>
            <p className="text-gray-100">Chanllenges</p>
            <p>
              Lack of reliable diagnostic equipment, leading to delays in
              patient care
            </p>
          </li>
          <li>
            <p className="text-gray-100">Solution</p>
            <p>
              Lack of reliable diagnostic equipment, leading to delays in
              patient care
            </p>
          </li>
          <li>
            <p className="text-gray-100">Impact</p>
            <p>
              40% increase in diagnostic accuracy and faster patient treatment
            </p>
          </li>
        </ul>
        {/* Third Project  Row */}

        <ul className="bg-banner-img2 text-gray-200 bg-cover bg-center bg-no-repeat p-6 lg:p-10 rounded-lg shadow-md w-full h-full flex flex-col gap-3 max-md:order-6">
          <li>
            <p className="text-gray-100">Project</p>
            <p>Custom Shielding for Mobile Radiology Units</p>
          </li>
          <li>
            <p className="text-gray-100">Client</p>
            <p>Zenith Specialist Hospital, Abuja</p>
          </li>
          <li>
            <p className="text-gray-100">Chanllenges</p>
            <p>
              Designed and installed custom shielding solutions for mobile
              units, along with portable radiation protection gear
            </p>
          </li>
          <li>
            <p className="text-gray-100">Solution</p>
            <p>
              Expanded access to safe diagnostic services in remote communities,
              serving over 500 additional patients monthly
            </p>
          </li>
          <li>
            <p className="text-gray-100">Impact</p>
            <p>
              Increased safety and staff confidence, with radiation exposure
              reduced by 60%.
            </p>
          </li>
        </ul>

        <div className="w-full h-full max-md:order-5">
          <Image
            src={"/image/medical-tool2.png"}
            alt="medical metre"
            width={1000}
            height={4000}
            className="bg-cover h-full w-full  bg-center"
          />
        </div>
      </section>
    </section>
  );
};

export default ProjectSection;
