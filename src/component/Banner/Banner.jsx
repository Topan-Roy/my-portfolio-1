"use client";

import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaArrowDown, FaLinkedinIn } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const previewProjects = [
  {
    label: "Live projects",
    value: "20+",
  },
  {
    label: "Main stack",
    value: "Full Stack",
  },
  {
    label: "Mobile apps",
    value: "React Native",
  },
];

const Banner = () => {
  return (
    <section
      id="home"
      className="portfolio-section relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 text-white sm:px-8 lg:px-16"
    >
      <div className="hero-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-900/20 px-5 py-2 text-sm text-cyan-50 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulse" />
            <span className="min-w-0 font-medium tracking-wide">Available for Full-Stack Web & React Native Development </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Topan Roy
            <span className="mt-4 block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300 sm:text-3xl lg:text-4xl">
              Building Scalable Web Platforms & Mobile Apps.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 font-medium"
          >
            I am a{" "}
            <span className="font-bold text-cyan-300">
              <Typewriter
                words={[
                  "Full-Stack MERN Developer",
                  "React Native Developer",
                  "Frontend React Developer",
                  "JavaScript & TypeScript Developer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1400}
              />
            </span>
            ,  passionate about building responsive web applications, scalable backend
            systems, REST APIs, and user-friendly cross-platform mobile applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap items-center"
          >
            <a href="#projects" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-bold text-white shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(6,182,212,0.6)]">
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></span>
              View Projects
              <FaArrowDown className="transition-transform group-hover:translate-y-1" />
            </a>
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-600 bg-transparent px-8 py-3.5 font-bold text-slate-300 transition-all hover:border-cyan-400 hover:text-white hover:bg-cyan-900/20">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=15zwjE0RYL0BKijHpo3hZx7OurZKMSNa_"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-800/50 px-8 py-4 font-bold text-emerald-400 backdrop-blur-md transition-all hover:bg-slate-800 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]"
            >
              <FaArrowDown className="transition-transform group-hover:translate-y-1" /> Download CV
            </a>
          </motion.div>

          <div className="mt-9 flex items-center gap-4">
            <a
              href="https://github.com/Topan-Roy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/topanroy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://web.facebook.com/TopanRoy41105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link"
            >
              <CiFacebook />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hero-visual mx-auto w-full max-w-[620px]"
        >
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="robot-stage" aria-label="Animated portfolio robot">
            <div className="robot-antenna" />
            <div className="robot-head">
              <span className="robot-eye robot-eye-left" />
              <span className="robot-eye robot-eye-right" />
              <span className="robot-mouth" />
            </div>
            <div className="robot-neck" />
            <div className="robot-body">
              <div className="robot-screen">
                <span />
                <strong>TOPAN.DEV</strong>
              </div>
              <div className="robot-core" />
            </div>
            <div className="robot-arm robot-arm-left">
              <span />
            </div>
            <div className="robot-arm robot-arm-right">
              <span />
            </div>
            <div className="robot-base" />
          </div>

          {previewProjects.map((project, index) => (
            <div
              className={`hologram-card hologram-card-${index + 1}`}
              key={project.label}
            >
              <strong>{project.value}</strong>
              <span>{project.label}</span>
            </div>
          ))}

          <div className="profile-chip">
            <Image
              src="/image.png"
              alt="Topan Roy"
              width={54}
              height={54}
              className="rounded-2xl object-cover object-top"
            />
            <div>
              <strong>Topan Roy</strong>
              <span>Full stack & app developer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
