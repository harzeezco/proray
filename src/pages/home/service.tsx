import Image from 'next/image';

const ServiceSection = () => (
  <section
    aria-labelledby='services-heading'
    className='container pt-[120px]'
  >
    <h1
      className='mb-5 text-center text-3xl font-bold text-gray-200'
      id='services-heading'
    >
      Our Key Services
    </h1>

    <div className='grid max-w-5xl grid-cols-10 gap-6 p-6 max-[831px]:grid-cols-1'>
      {/* Service 1 */}
      <article
        aria-labelledby='hr-training'
        className='flex items-start justify-start gap-5 rounded-lg bg-blue-400 p-6 shadow-md max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-6 min-[831px]:justify-center'
      >
        <Image
          alt='Human Resources icon'
          height={30}
          src='/icon/radio-wave.svg'
          width={30}
        />
        <div>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='hr-training'
          >
            Human Resources and Training
          </h2>
          <p className='font-bold text-primary'>
            We offer comprehensive recruitment and training solutions
            across Nigeria, including:
          </p>
          <ul className='list-disc text-sm text-gray-100'>
            <li>Full recruitment outsourcing services</li>
            <li>
              Develop recruitment strategies for local and
              international candidates
            </li>
            <li>
              Training programs with UK-based radiographers (Brain
              Gain)
            </li>
            <li>Apprenticeship programs to support local talent</li>
            <li>Performance management frameworks</li>
          </ul>
        </div>
      </article>

      {/* Service 2 */}
      <article
        aria-labelledby='project-management'
        className='flex items-start justify-start gap-5 rounded-lg bg-blue-400 p-6 shadow-md max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-4 min-[831px]:justify-center'
      >
        <Image
          alt='Project Management icon'
          height={30}
          src='/icon/security.svg'
          width={30}
        />
        <div>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='project-management'
          >
            Project Management
          </h2>
          <p className='font-bold text-primary'>
            Our project management consultancy services include:
          </p>
          <ul className='list-disc text-sm text-gray-100'>
            <li>Project structuring and prioritization</li>
            <li>Project mapping and detailed documentation</li>
            <li>Project costing and reporting</li>
            <li>Dedicated project managers</li>
          </ul>
        </div>
      </article>

      {/* Service 3 */}
      <article
        aria-labelledby='clinical-governance'
        className='flex items-start justify-start gap-5 rounded-lg bg-blue-400 p-6 shadow-md max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-5 min-[831px]:justify-center'
      >
        <Image
          alt='Clinical Governance icon'
          height={30}
          src='/icon/meter-wave.svg'
          width={30}
        />
        <div>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='clinical-governance'
          >
            Clinical Governance and Infection Prevention Control
          </h2>
          <p className='font-bold text-primary'>
            We support high-quality patient care with:
          </p>
          <ul className='list-disc text-sm text-gray-100'>
            <li>Detailed clinical governance frameworks</li>
            <li>
              Implementation of infection prevention control standards
            </li>
            <li>Training strategies for healthcare compliance</li>
          </ul>
        </div>
      </article>

      {/* Service 4 */}
      <article
        aria-labelledby='equipment-servicing'
        className='   flex items-start justify-start gap-5 rounded-lg  bg-blue-400 p-6 shadow-md max-sm:gap-2 max-sm:p-4 min-[831px]:col-span-5
          min-[831px]:justify-center'
      >
        <Image
          alt='Equipment Servicing icon'
          height={30}
          src='/icon/heart.svg'
          width={30}
        />
        <div>
          <h2
            className='text-xl font-semibold text-gray-200'
            id='equipment-servicing'
          >
            Equipment Servicing and Management
          </h2>
          <p className='font-bold text-primary'>
            We offer tailored maintenance and support for your
            equipment:
          </p>
          <ul className='list-disc text-sm text-gray-100'>
            <li>Customized maintenance plans</li>
            <li>
              First-level support with expert biomedical engineers
            </li>
            <li>
              Regular preventative maintenance to reduce downtime
            </li>
            <li>
              Service contracts for optimal equipment performance
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
);

export default ServiceSection;
