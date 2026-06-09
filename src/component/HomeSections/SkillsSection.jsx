import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaMobileScreenButton,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-cyan-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React Native", icon: FaMobileScreenButton, color: "text-emerald-300" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-300" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-300" },
  { name: "Express", icon: SiExpress, color: "text-slate-200" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-300" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-300" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
];

const skillGroups = [
  {
    title: "Interface",
    command: "build:ui",
    items: skills.filter((skill) =>
      ["React", "Next.js", "React Native", "Tailwind", "HTML5", "CSS3"].includes(skill.name),
    ),
  },
  {
    title: "Backend",
    command: "ship:api",
    items: skills.filter((skill) =>
      ["Node.js", "Express", "MongoDB", "Firebase"].includes(skill.name),
    ),
  },
  {
    title: "Workflow",
    command: "deploy:ready",
    items: skills.filter((skill) => ["JavaScript", "TypeScript", "GitHub"].includes(skill.name)),
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-kicker">Tech stack</p>
          <h2 className="section-title">Tools I use to build web and mobile products.</h2>
        </div>

        <div className="skill-workbench mt-12">
          <div className="skill-terminal">
            <div className="terminal-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-lines">
              <p><span>$</span> init topan-portfolio</p>
              <p><span>&gt;</span> stack: full-stack + mobile</p>
              <p><span>&gt;</span> ui: react + tailwind</p>
              <p><span>&gt;</span> api: node + express</p>
              <p><span>&gt;</span> data: mongodb + firebase</p>
              <p><span>&gt;</span> mobile: react-native</p>
            </div>
            <div className="terminal-status">
              <span />
              Production ready skills
            </div>
          </div>

          <div className="skill-pipeline">
            {skillGroups.map((group) => (
              <div className="skill-lane" key={group.title}>
                <div className="lane-heading">
                  <span>{group.command}</span>
                  <strong>{group.title}</strong>
                </div>
                <div className="lane-track">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div className="lane-skill" key={`${group.title}-${skill.name}`}>
                        <Icon className={skill.color} />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
