import AboutSection from "@/pages/home/about";
import Hero from "@/pages/home/hero";
import ServiceSection from "@/pages/home/service";
import ShowcaseSection from "@/pages/home/showcase";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <ShowcaseSection />
    </div>
  );
};

export default Home;
