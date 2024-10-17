import Image from 'next/image';

const Services = () => (
  <section className='container mt-24'>
    <div className='flex flex-col items-center'>
      <button
        className='flex gap-3 rounded-[46px] border
      border-[#3583D24D] bg-[#7CC5FE26] px-6 py-2 text-primary'
        type='button'
      >
        <Image
          alt='star'
          height={16}
          src='/icon/star.svg'
          width={16}
        />
        Our Value
      </button>
      <h1 className='mx-auto mt-5 text-center font-satoshi  text-3xl font-medium text-dark-600 md:max-w-[600px] md:text-4xl lg:max-w-[900px] lg:text-5xl'>
        Empowering Healthcare Professionals—All in One Place
      </h1>
      <p className='mx-auto mt-3 max-w-[750px] text-center text-gray-250'>
        Pro-Ray Solutions Ltd believes in more than just providing
        equipment. Our mission is to empower healthcare professionals
        by offering solutions that enhance patient care and streamline
        healthcare operations. Everything we do is guided by our core
        values
      </p>
    </div>
    <div className='mt-5 grid max-w-6xl grid-cols-12 gap-6 p-6 text-gray-150 max-[831px]:grid-cols-1'>
      <article
        aria-labelledby='hr-training'
        className='space-y-5 rounded-lg bg-blue-400 p-5  max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-4 min-[831px]:justify-center'
      >
        <Image
          alt='Human Resources icon'
          height={30}
          src='/icon/radio-wave.svg'
          width={30}
        />
        <div className='space-y-3'>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='hr-training'
          >
            Commitment to Long-Term Success
          </h2>
          <p className='font-medium'>
            Our relationship with clients extends beyond providing
            equipment. We’re here to offer continuous support, expert
            advice, and innovative solutions that will help you grow
            and succeed over the long term.
          </p>
        </div>
      </article>

      {/* Service 2 */}
      <article
        aria-labelledby='project-management'
        className='space-y-5  rounded-lg bg-blue-400 p-5  max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-4 min-[831px]:justify-center'
      >
        <Image
          alt='Project Management icon'
          height={30}
          src='/icon/security.svg'
          width={30}
        />
        <div className='space-y-3'>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='project-management'
          >
            Excellence That Drives Healthcare Forward
          </h2>
          <p className='font-medium'>
            We set high standards for ourselves because we believe
            that healthcare deserves nothing less than the best. Our
            products and services reflect our dedication to making a
            real impact.
          </p>
        </div>
      </article>

      {/* Service 3 */}
      <article
        aria-labelledby='clinical-governance'
        className='space-y-5 rounded-lg bg-blue-400 p-5  max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-4 min-[831px]:justify-center'
      >
        <Image
          alt='Clinical Governance icon'
          height={30}
          src='/icon/meter-wave.svg'
          width={30}
        />
        <div className='space-y-3'>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='clinical-governance'
          >
            Impact Through Innovation
          </h2>
          <p className='font-medium'>
            Our goal is to make a tangible difference in the
            healthcare industry. Whether it’s through advanced
            technology or tailored support, we strive to elevate
            patient care with every solution.
          </p>
        </div>
      </article>

      {/* Service 4 */}
      <article
        aria-labelledby='equipment-servicing'
        className='space-y-5 rounded-lg bg-blue-400 p-5  max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-6
          min-[831px]:justify-center'
      >
        <Image
          alt='Equipment Servicing icon'
          height={30}
          src='/icon/heart.svg'
          width={30}
        />
        <div className='space-y-3'>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='equipment-servicing'
          >
            Tailored Solutions for Unique Needs
          </h2>
          <p className='font-medium'>
            We understand that every healthcare provider is different,
            which is why we provide customized solutions to meet the
            specific challenges and requirements of each facility.
          </p>
        </div>
      </article>

      <article
        aria-labelledby='project-management'
        className='space-y-5 rounded-lg bg-blue-400 p-5  max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-6 min-[831px]:justify-center'
      >
        <Image
          alt='Project Management icon'
          height={30}
          src='/icon/security.svg'
          width={30}
        />
        <div className='space-y-3'>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='project-management'
          >
            Integrity in Every Step
          </h2>
          <p className='font-medium'>
            We are committed to transparent practices and delivering
            on our promises, ensuring that our clients can trust in
            the quality and reliability of everything we offer.
          </p>
        </div>
      </article>
    </div>
  </section>
);

export default Services;
