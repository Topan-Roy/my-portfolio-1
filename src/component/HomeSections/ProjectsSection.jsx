"use client";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    name: "Book Shop",
    duration: "12 days",
    image: "https://i.ibb.co.com/0RYjDT3h/Screenshot-2026-06-21-003226.png",
    description: "A full-stack bookstore app with authentication, book management, and category-based browsing.",
    problemSolved: "Helps readers easily discover, explore, and manage books through a centralized digital bookstore platform.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe", "Tailwind CSS"],
    live: "https://book-shope-app.web.app/",
    github: "https://github.com/Topan-Roy/Book-shope-app-client"
  },
  {
    id: 2,
    name: "Bhajon Food Ordering",
    duration: "20 days",
    image: "https://i.ibb.co.com/spG1398s/bhojon.png",
    description: "A modern food ordering platform with authentication, responsive menus, and order-focused UI.",
    problemSolved: "Provides a seamless and fast ordering experience with intuitive UI for restaurants.",
    tech: ["React", "Firebase", "Tailwind"],
    live: "https://bhajon-3d8a3.web.app/",
    github: "https://github.com/Topan-Roy/Bhojon-client",
  },
  {
    id: 3,
    name: "Dine Five (React Native App)",
    duration: "30 days",
    image: "https://i.ibb.co.com/bMYqWS6x/Screenshot-20260621-011755.jpg",
    description: "A cross-platform restaurant mobile application built with React Native featuring food browsing, ordering system, and user authentication.",
    problemSolved: "Enhances user experience by enabling seamless mobile food ordering and restaurant interaction.",
    tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
    live: "https://drive.google.com/file/d/1vDNw4jSPrkCN-bFidpQG6Tfzkx6b8_T7/view?usp=drive_link",
    github: "https://github.com/Topan-Roy/dine-five-update-2"
  },
  {
    id: 5,
    name: "Direct Reinigen App",
    duration: "25 days",
    image: "https://i.ibb.co.com/Wvzg1RGs/Screenshot-20260621-013633.jpg",
    description: "A React Native service app for cleaning and on-demand service booking with a simple user interface.",
    problemSolved: "Connects users with cleaning services and simplifies service booking process through mobile app.",
    tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
    live: "https://drive.google.com/file/d/1MhmpCGgrcWs2fjdTh4kNdnpvVsV85Ysy/view?usp=drive_link",
    github: "https://github.com/Topan-Roy/direct-reinigen-app"
  },
  {
    id: 3,
    name: "Tourism Management System",
    duration: "20 days",
    image: "https://i.ibb.co.com/XxjDxMYJ/tur.png",
    description: "A full stack tourism platform with bookings, payments, role-based dashboard, and package management.",
    problemSolved: "Streamlines booking processes and automates itinerary generation.",
    tech: ["React", "Node", "MongoDB", "Firebase"],
    live: "https://tourism-management-syste-e2926.web.app/",
    github: "https://github.com/Topan-Roy/tourism-management-client-git",
  },
  // {
  //   id: 4,
  //   name: "Online Group Study",
  //   duration: "15 days",
  //   image: "https://i.ibb.co.com/HfHnktZW/stu.png",
  //   description: "A collaborative study app with assignments, reviews, protected routes, and real-time updates.",
  //   problemSolved: "Solves remote study collaboration by providing a centralized assignment review system.",
  //   tech: ["React", "Express", "MongoDB"],
  //   live: "https://online-group-study-f26a8.web.app/",
  //   github: "https://github.com/Topan-Roy/online-group-study-client11",
  // },
  // {
  //   id: 5,
  //   name: "Plant Care Tracker",
  //   duration: "10 days",
  //   image: "https://i.ibb.co.com/DPnqjPGK/tree.png",
  //   description: "A plant tracking product for care schedules, health status, and personal plant collections.",
  //   problemSolved: "Helps busy plant owners keep track of watering and fertilizing schedules easily.",
  //   tech: ["React", "Firebase", "MongoDB"],
  //   live: "https://plant-care-tracker-3a085.web.app/",
  //   github: "https://github.com/Topan-Roy/plant-care-tracker-client-git",
  // },

  {
    id: 6,
    name: "Cholo Ride Sharing",
    duration: "36 days",
    image: "https://i.ibb.co.com/RkZZ1phL/cholo.png",
    description: "A team-built ride sharing platform with rider/driver flows, live requests, and role-based dashboards.",
    problemSolved: "Connects riders and drivers with real-time location matching and secure authentication.",
    tech: ["React", "Express", "Socket.io"],
    live: "https://cholo.netlify.app/",
    github: "https://github.com/Utso-Roy/cholo_ride_sharing_-team-",
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-kicker">Featured work</p>
          <h2 className="section-title">Open the portfolio book and explore my work.</h2>
        </div>

        <div className="book-shelf mt-14">
          {displayedProjects.map((project) => (
            <article className="project-book" key={project.id}>
              <div className="book-cover">
                <div className="book-ridge" />
                {/* <span className="book-number">0{project.id}</span> */}
                <img src={project.image} alt={`${project.name} screenshot`} />
                <div className="book-cover-title">
                  <h3>{project.name}</h3>
                  <span>{project.duration}</span>
                </div>
              </div>

              <div className="book-pages">
                <div className="book-page book-page-left">
                  <p className="book-label">Case study</p>
                  <h3>{project.name}</h3>
                  <div className="book-shot">
                    <img src={project.image} alt={`${project.name} preview`} />
                  </div>
                </div>

                <div className="book-page book-page-right overflow-y-auto pr-2 custom-scrollbar">
                  <p className="book-label">Project Details</p>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium mb-3">{project.description}</p>

                  <div className="mb-3">
                    <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider block mb-1">Problem Solved:</span>
                    <p className="text-xs text-slate-600 leading-tight">{project.problemSolved}</p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider block mb-2">Tech Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span className="tech-pill text-[10px] py-1 px-2 bg-slate-100 text-slate-700 rounded-full border border-slate-200" key={`${project.name}-${tech}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-slate-200">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-primary text-xs py-1.5 px-3 rounded-full flex items-center gap-1.5 bg-cyan-600 text-white hover:bg-cyan-700 transition">
                      Live Preview
                      <FaArrowUpRightFromSquare />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-secondary text-xs py-1.5 px-3 rounded-full flex items-center gap-1.5 bg-slate-800 text-white hover:bg-slate-900 transition">
                      GitHub Repo
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary cursor-pointer"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
