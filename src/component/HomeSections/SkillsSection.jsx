import {
  FaGithub,
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
  SiDaisyui,
  SiExpo,
  SiRedux,
  SiJsonwebtokens,
  SiStripe,
  SiGit,
  SiPostman,
  SiFigma,
  SiAndroidstudio,
  SiAxios,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Frontend & UI
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "DaisyUI", icon: SiDaisyui, color: "text-emerald-400" },

  // Backend & Cloud
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-slate-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-400" },

  // Mobile Development
  { name: "React Native", icon: FaMobileScreenButton, color: "text-sky-300" },
  { name: "Expo", icon: SiExpo, color: "text-slate-100" },
  { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },

  // Tools & Platforms
  { name: "Stripe", icon: SiStripe, color: "text-indigo-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "Axios", icon: SiAxios, color: "text-indigo-500" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-400" },
  { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-400" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Netlify", icon: SiNetlify, color: "text-cyan-400" },
];

const skillGroups = [
  {
    title: "Frontend & UI",
    command: "build:ui",
    items: skills.filter((skill) =>
      ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "DaisyUI"].includes(skill.name),
    ),
  },
  {
    title: "Backend & Database",
    command: "ship:api",
    items: skills.filter((skill) =>
      ["Node.js", "Express.js", "MongoDB", "Firebase", "JWT"].includes(skill.name),
    ),
  },
  {
    title: "Mobile Development",
    command: "deploy:native",
    items: skills.filter((skill) =>
      ["React Native", "Expo", "Redux Toolkit"].includes(skill.name),
    ),
  },
  {
    title: "Tools & Integrations",
    command: "devops:tools",
    items: skills.filter((skill) =>
      ["Stripe", "Git", "GitHub", "Postman", "Axios", "Android Studio", "VS Code", "Figma", "Vercel", "Netlify"].includes(skill.name),
    ),
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
              <p><span>&gt;</span> frontend: react + next.js + tailwind</p>
              <p><span>&gt;</span> backend: node + express + mongodb</p>
              <p><span>&gt;</span> mobile: react-native + expo</p>
              <p><span>&gt;</span> integrations: stripe + firebase auth</p>
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
