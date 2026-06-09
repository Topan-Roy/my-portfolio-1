"use client";

import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { styles } from "./Style.js";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sectionNodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.05, 0.25, 0.5, 0.75],
      },
    );

    sectionNodes.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      setIsOpen(false);
      setActiveSection(id);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const renderLink = (item) => {
    const isActive = activeSection === item.id;

    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={(event) => handleNavClick(event, item.id)}
        className={`nav-link ${isActive ? "nav-link-active" : ""}`}
      >
        {item.label}
      </a>
    );
  };

  return (
    <nav className={`${styles.paddingX} fixed top-0 z-40 w-full py-4`}>
      <div className="nav-glass mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "home")}
          className="flex items-center gap-3"
          aria-label="Topan Roy portfolio home"
        >
          <img
            src="/image.png"
            alt="Topan Roy"
            className="h-10 w-10 rounded-2xl border border-cyan-300/40 object-cover"
          />
          <span className="min-w-0 leading-tight">
            <span className="block text-base font-medium text-white">Topan Roy</span>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-cyan-200 sm:tracking-[0.28em]">
              Full Stack Dev
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map(renderLink)}
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xl text-white lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur lg:hidden">
          {navItems.map(renderLink)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
