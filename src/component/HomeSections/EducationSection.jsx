import { FaGraduationCap, FaCalendarDays, FaLocationDot, FaLaptopCode, FaBuildingColumns } from "react-icons/fa6";

const education = [
  {
    id: 1,
    title: "Complete Web Development Course",
    place: "Programming Hero",
    date: "Jan 2025 - Jul 2025",
    description: "Mastered full-stack development using React, Node.js, Express, and MongoDB. Built real-world projects and polished problem-solving skills.",
    icon: <FaLaptopCode />,
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 2,
    title: "Diploma in Computer Science Engineering",
    place: "Aptouch Polytechnic Institute, Dinajpur",
    date: "2020 - 2025",
    description: "Gained strong foundational knowledge in computer architecture, networking, data structures, and software engineering principles.",
    icon: <FaGraduationCap />,
    color: "from-emerald-400 to-teal-400"
  },
  {
    id: 3,
    title: "Higher Secondary Certificate",
    place: "Birganj Govt College, Dinajpur",
    date: "2019 - 2021",
    description: "Completed higher secondary education with a science background, building a strong base in mathematics and logic.",
    icon: <FaBuildingColumns />,
    color: "from-purple-400 to-pink-400"
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-32 h-max">
          <p className="section-kicker">Education & Training</p>
          <h2 className="section-title">My academic journey & professional learning.</h2>
          <p className="mt-6 text-slate-300 leading-relaxed text-sm md:text-base max-w-lg">
            Continuous learning has been a fundamental part of my journey. Here is a timeline of my academic qualifications and the specialized training I've completed to hone my skills as a software developer.
          </p>
        </div>
        
        <div className="relative mt-8 lg:mt-0 pl-2 sm:pl-4 md:pl-8">
          {/* Vertical connecting line */}
          <div className="absolute left-[26px] sm:left-[34px] md:left-[54px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500/50 via-emerald-500/50 to-transparent"></div>

          <div className="flex flex-col gap-10">
            {education.map((item) => (
              <div className="relative flex items-start gap-4 sm:gap-6 group" key={item.id}>
                
                {/* Node Icon */}
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#071013] border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${item.color}`}></div>
                  <div className="text-xl sm:text-2xl md:text-3xl text-cyan-400">
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 p-5 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.22)] hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-emerald-300 w-max">
                      <FaCalendarDays /> {item.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium mb-3">
                    <FaLocationDot /> {item.place}
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
