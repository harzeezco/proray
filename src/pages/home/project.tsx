import AnimatedLink from '@/components/animated-text';
import Button from '@/components/button';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const ProjectSection = () => (
  <section className=' pt-28'>
    <div className='container grid grid-cols-2 items-start justify-center  gap-10 max-sm:grid-cols-1'>
      <h1 className='text-3xl font-bold text-gray-200'>
        Our Projects
      </h1>
      <div>
        <p className='pb-4 text-xl text-gray-200'>
          Our team brings decades of renewable wind, solar energy,
          asset management and construction.
        </p>
        <Button className='mb-16' href='/contact'>
          <AnimatedLink letters='Lets Discuss your Project' />
          <FaArrowRight className='ml-2 inline-block size-5 -rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0' />
        </Button>
      </div>
    </div>
    <section className='container grid grid-cols-2 items-center justify-center gap-10 max-md:grid-cols-1 '>
      <ul className='flex size-full flex-col gap-3 rounded-lg bg-banner-img2 bg-cover bg-center bg-no-repeat p-6 text-gray-200 shadow-md max-md:order-2 lg:p-10'>
        <li>
          <p className='text-gray-100'>Project</p>
          <p>Radiation Safety Upgrade for Major Hospital</p>
        </li>
        <li>
          <p className='text-gray-100'>Client</p>
          <p>Lagos General Hospital, Lagos</p>
        </li>
        <li>
          <p className='text-gray-100'>Chanllenges</p>
          <p>
            Outdated radiation protection measures that didn’t meet
            current safety standards.
          </p>
        </li>
        <li>
          <p className='text-gray-100'>Solution</p>
          <p>
            Provided comprehensive shielding upgrades and advanced
            radiation protection gear, ensuring compliance and
            improved safety for staff
          </p>
        </li>
        <li>
          <p className='text-gray-100'>Impact</p>
          <p>
            Increased safety and staff confidence, with radiation
            exposure reduced by 60%.
          </p>
        </li>
      </ul>

      <div className='size-full max-md:order-1'>
        <Image
          alt='xray box'
          className='size-full bg-contain bg-center'
          height={400}
          src='/image/xray-box.png'
          width={1000}
        />
      </div>

      {/* Second Project  Row */}

      <div className='size-full max-md:order-3 '>
        <Image
          alt='medical metre'
          className='size-full bg-cover bg-center'
          height={4000}
          src='/image/medical-tool1.png'
          width={1000}
        />
      </div>

      <ul className='flex size-full flex-col gap-3 rounded-lg bg-banner-img2 bg-cover bg-center bg-no-repeat p-6 text-gray-200 shadow-md max-md:order-4 lg:p-10'>
        <li>
          <p className='text-gray-100'>Project</p>
          <p>Advanced Diagnostic Solutions for Rural Clinics</p>
        </li>
        <li>
          <p className='text-gray-100'>Client</p>
          <p>Olanrewaju Medical Center, Kwara State</p>
        </li>
        <li>
          <p className='text-gray-100'>Chanllenges</p>
          <p>
            Lack of reliable diagnostic equipment, leading to delays
            in patient care
          </p>
        </li>
        <li>
          <p className='text-gray-100'>Solution</p>
          <p>
            Lack of reliable diagnostic equipment, leading to delays
            in patient care
          </p>
        </li>
        <li>
          <p className='text-gray-100'>Impact</p>
          <p>
            40% increase in diagnostic accuracy and faster patient
            treatment
          </p>
        </li>
      </ul>
      {/* Third Project  Row */}

      <ul className='flex size-full flex-col gap-3 rounded-lg bg-banner-img2 bg-cover bg-center bg-no-repeat p-6 text-gray-200 shadow-md max-md:order-6 lg:p-10'>
        <li>
          <p className='text-gray-100'>Project</p>
          <p>Custom Shielding for Mobile Radiology Units</p>
        </li>
        <li>
          <p className='text-gray-100'>Client</p>
          <p>Zenith Specialist Hospital, Abuja</p>
        </li>
        <li>
          <p className='text-gray-100'>Chanllenges</p>
          <p>
            Designed and installed custom shielding solutions for
            mobile units, along with portable radiation protection
            gear
          </p>
        </li>
        <li>
          <p className='text-gray-100'>Solution</p>
          <p>
            Expanded access to safe diagnostic services in remote
            communities, serving over 500 additional patients monthly
          </p>
        </li>
        <li>
          <p className='text-gray-100'>Impact</p>
          <p>
            Increased safety and staff confidence, with radiation
            exposure reduced by 60%.
          </p>
        </li>
      </ul>

      <div className='size-full max-md:order-5'>
        <Image
          alt='medical metre'
          className='size-full bg-cover bg-center'
          height={4000}
          src='/image/medical-tool2.png'
          width={1000}
        />
      </div>
    </section>
  </section>
);

export default ProjectSection;
