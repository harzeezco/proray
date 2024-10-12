const ShowcaseSection = () => {
  return (
    <section className="w-full mt-20   bg-center bg-cover bg-no-repeat bg-banner-img">
      <div className="container pt-40 pb-20">
        <div className="showcase p-10 shadow-2xl">
          <h1 className="text-center text-balance text-3xl md:text-4xl lg:text-5xl pt-10">
            Leading the Way in Healthcare Safety and Efficiency
          </h1>
          <div className="grid grid-cols-3 max-md:grid-cols-1 items-center justify-center border-2 border-white border-opacity-50 rounded-lg px-8 py-4 mt-10 text-balance  gap-5 bg-blue-200">
            <div className=" md:border-r-[1px] max-md:border-b-2  border-white border-opacity-25">
              <h1 className="text-3xl font-bold pb-2">100+</h1>
              <p className="max-md:pb-4">
                Hospitals equipped with advanced radiation protection solutions.
              </p>
            </div>

            <div className=" md:border-r-[1px] max-md:border-b-2  border-white border-opacity-25">
              <h1 className="text-3xl font-bold pb-2">50+</h1>
              <p className="max-md:pb-4">
                Average reduction in staff radiation exposure with our products.
              </p>
            </div>

            <div className=" ">
              <h1 className="text-3xl font-bold pb-2">500+</h1>
              <p>
                Healthcare facilities supported with diagnostic equipment and
                consumables
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowcaseSection;
