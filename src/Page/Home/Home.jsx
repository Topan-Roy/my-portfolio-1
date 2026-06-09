import Banner from "../../component/Banner/Banner";
import AboutSection from "../../component/HomeSections/AboutSection";
import SkillsSection from "../../component/HomeSections/SkillsSection";
import ServicesSection from "../../component/HomeSections/ServicesSection";
import ExperienceSection from "../../component/HomeSections/ExperienceSection";
import ProjectsSection from "../../component/HomeSections/ProjectsSection";
import EducationSection from "../../component/HomeSections/EducationSection";

import GithubSection from "../../component/HomeSections/GithubSection";
import ContactSection from "../../component/HomeSections/ContactSection";

const Home = () => {
  return (
    <main className="overflow-hidden bg-[#071013] text-white">
      <Banner />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />

      <GithubSection />
      <ContactSection />
    </main>
  );
};

export default Home;
