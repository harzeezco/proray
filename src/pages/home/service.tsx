import Image from "next/image";

const ServiceSection = () => {
  return (
    <section
      className="pt-[120px] container"
      aria-labelledby="services-heading"
    >
      <h1
        id="services-heading"
        className="text-3xl text-gray-200 text-center font-bold mb-5"
      >
        Our Key Services
      </h1>

      <div className="grid grid-cols-10 max-[831px]:grid-cols-1 gap-6 max-w-5xl p-6">
        {/* Service 1 */}
        <article
          className="min-[831px]:col-span-6 bg-blue-400 p-6 max-sm:p-4 gap-5 rounded-lg shadow-md flex items-start justify-start max-sm:gap-2 min-[831px]:justify-center"
          aria-labelledby="hr-training"
        >
          <Image
            src={"/icon/radio-wave.svg"}
            alt="Human Resources icon"
            width={30}
            height={30}
          />
          <div>
            <h2
              id="hr-training"
              className="text-xl text-gray-200 font-semibold"
            >
              Human Resources and Training
            </h2>
            <p className="text-primary font-bold">
              We offer comprehensive recruitment and training solutions across
              Nigeria, including:
            </p>
            <ul className="list-disc text-sm text-gray-100">
              <li>Full recruitment outsourcing services</li>
              <li>
                Develop recruitment strategies for local and international
                candidates
              </li>
              <li>
                Training programs with UK-based radiographers (Brain Gain)
              </li>
              <li>Apprenticeship programs to support local talent</li>
              <li>Performance management frameworks</li>
            </ul>
          </div>
        </article>

        {/* Service 2 */}
        <article
          className="min-[831px]:col-span-4 bg-blue-400 p-6 max-sm:p-4 gap-5 rounded-lg shadow-md flex items-start justify-start max-sm:gap-2 min-[831px]:justify-center"
          aria-labelledby="project-management"
        >
          <Image
            src={"/icon/security.svg"}
            alt="Project Management icon"
            width={30}
            height={30}
          />
          <div>
            <h2
              id="project-management"
              className="text-xl text-gray-200 font-semibold"
            >
              Project Management
            </h2>
            <p className="text-primary font-bold">
              Our project management consultancy services include:
            </p>
            <ul className="list-disc text-sm text-gray-100">
              <li>Project structuring and prioritization</li>
              <li>Project mapping and detailed documentation</li>
              <li>Project costing and reporting</li>
              <li>Dedicated project managers</li>
            </ul>
          </div>
        </article>

        {/* Service 3 */}
        <article
          className="min-[831px]:col-span-5 bg-blue-400 p-6 max-sm:p-4 gap-5 rounded-lg shadow-md flex items-start justify-start max-sm:gap-2 min-[831px]:justify-center"
          aria-labelledby="clinical-governance"
        >
          <Image
            src={"/icon/meter-wave.svg"}
            alt="Clinical Governance icon"
            width={30}
            height={30}
          />
          <div>
            <h2
              id="clinical-governance"
              className="text-xl text-gray-200 font-semibold"
            >
              Clinical Governance and Infection Prevention Control
            </h2>
            <p className="text-primary font-bold">
              We support high-quality patient care with:
            </p>
            <ul className="list-disc text-sm text-gray-100">
              <li>Detailed clinical governance frameworks</li>
              <li>Implementation of infection prevention control standards</li>
              <li>Training strategies for healthcare compliance</li>
            </ul>
          </div>
        </article>

        {/* Service 4 */}
        <article
          className="   min-[831px]:col-span-5 bg-blue-400 p-6 max-sm:p-4 gap-5  rounded-lg shadow-md flex items-start justify-start max-sm:gap-2 
          min-[831px]:justify-center"
          aria-labelledby="equipment-servicing"
        >
          <Image
            src={"/icon/heart.svg"}
            alt="Equipment Servicing icon"
            width={30}
            height={30}
          />
          <div>
            <h2
              id="equipment-servicing"
              className="text-xl text-gray-200 font-semibold"
            >
              Equipment Servicing and Management
            </h2>
            <p className="text-primary font-bold">
              We offer tailored maintenance and support for your equipment:
            </p>
            <ul className="list-disc text-sm text-gray-100">
              <li>Customized maintenance plans</li>
              <li>First-level support with expert biomedical engineers</li>
              <li>Regular preventative maintenance to reduce downtime</li>
              <li>Service contracts for optimal equipment performance</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ServiceSection;
