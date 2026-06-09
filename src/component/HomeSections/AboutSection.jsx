import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

const resumeViewUrl =
  "https://drive.google.com/drive/u/0/folders/1TqbtMwg_lI7zJSQXsT42QENUjNxt9qfb";

const stats = [
  ["20+", "Live projects"],
  ["Full Stack", "Web + API"],
  ["React Native", "Mobile apps"],
  ["2025", "Web development training"],
];

const AboutSection = () => {
  return (
    <section id="about" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div className="about-frame">
            <img src="/image.png" alt="Topan Roy portrait" />
          </div>
          <div className="about-badge">
            <span>Full Stack</span>
            <strong>+ Apps</strong>
          </div>
        </div>

        <div>
          <p className="section-kicker">About me</p>
          <h2 className="section-title">
            I turn ideas into full stack web products and mobile app experiences.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300">
            I am Topan Roy, a full stack developer from Dinajpur, Bangladesh. I
            build practical products with React, React Native, Tailwind,
            Firebase, Node.js, Express, and MongoDB. My focus is simple: make
            web and mobile experiences that feel clear, fast, and easy to use.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([value, label]) => (
              <div className="mini-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={resumeViewUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Resume
              <FaArrowUpRightFromSquare />
            </a>
            <a href="#contact" className="btn-secondary">
              Hire Me
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
