import { FaBriefcase } from "react-icons/fa6";

const experiences = [
  {
    role: "React Native / App Developer",
    company: "BD Calling - SpackTech Agency",
    duration: "6 months",
    type: "Professional experience",
    points: [
      "Worked on mobile app interfaces and feature flows using React Native.",
      "Built reusable app components and connected screens with real product requirements.",
      "Collaborated in an agency environment with practical delivery expectations.",
    ],
    stack: ["React Native", "JavaScript", "Mobile UI", "API Integration"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Professional app development experience.</h2>
        </div>

        <div className="experience-board mt-12">
          {experiences.map((experience) => (
            <article className="experience-card" key={`${experience.company}-${experience.role}`}>
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-content">
                <div className="experience-meta">
                  <span>{experience.type}</span>
                  <span>{experience.duration}</span>
                </div>
                <h3>{experience.role}</h3>
                <p className="experience-company">{experience.company}</p>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="experience-stack">
                  {experience.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
