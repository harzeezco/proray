import AboutSection from '@/pages/home/about';
import ClientStories from '@/pages/home/client-stories';
import Hero from '@/pages/home/hero';
import ProjectSection from '@/pages/home/project';
import ServiceSection from '@/pages/home/service';
import ShowcaseSection from '@/pages/home/showcase';

const Home = () => (
  <div>
    <Hero />
    <AboutSection />
    <ServiceSection />
    <ShowcaseSection />
    <ProjectSection />
    <ClientStories />
  </div>
);

export default Home;
