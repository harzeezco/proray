const ShowcaseSection = () => (
  <section className='mt-20 w-full   bg-banner-img bg-cover bg-center bg-no-repeat'>
    <div className=' showcase  py-20 lg:pt-40'>
      <div className=' container'>
        <h1 className='mx-auto max-w-[900px] pt-10 text-center text-4xl md:text-5xl lg:text-6xl'>
          Leading the Way in Healthcare Safety and Efficiency
        </h1>
        <div className='mt-10 grid grid-cols-3 items-center justify-center gap-5 text-balance rounded-lg border-2 border-white border-opacity-50 bg-blue-200 px-8  py-4 max-md:grid-cols-1'>
          <div className=' border-white border-opacity-25  max-md:border-b-2 md:border-r'>
            <h1 className='pb-2 text-3xl font-bold'>100+</h1>
            <p className='max-md:pb-4'>
              Hospitals equipped with advanced radiation protection
              solutions.
            </p>
          </div>

          <div className=' border-white border-opacity-25  max-md:border-b-2 md:border-r'>
            <h1 className='pb-2 text-3xl font-bold'>50+</h1>
            <p className='max-md:pb-4'>
              Average reduction in staff radiation exposure with our
              products.
            </p>
          </div>

          <div className=' '>
            <h1 className='pb-2 text-3xl font-bold'>500+</h1>
            <p>
              Healthcare facilities supported with diagnostic
              equipment and consumables
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
