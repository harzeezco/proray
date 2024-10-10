const ShowcaseSection = () => {
  return (
    <section className="w-full h-[50vh] bg-center bg-cover bg-no-repeat bg-banner-img">
      <div>
        <h1>Leading the Way in Healthcare Safety and Efficiency</h1>
        <div className="grid grid-cols-3 items-center justify-center border-2 rounded-lg px-8 py-4">
          <div>
            <h1>100+</h1>
            <p>
              Hospitals equipped with advanced radiation protection solutions.
            </p>
          </div>

          <div>
            <h1>50+</h1>
            <p>
              Average reduction in staff radiation exposure with our products.
            </p>
          </div>

          <div>
            <h1>500+</h1>
            <p>
              Healthcare facilities supported with diagnostic equipment and
              consumables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowcaseSection;
