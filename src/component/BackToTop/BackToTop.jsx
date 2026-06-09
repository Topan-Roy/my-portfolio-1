"use client";
import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const BackToTop = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const showTop = scrollPos > 400;
  const atBottom = typeof window !== "undefined" && (window.innerHeight + scrollPos >= document.documentElement.scrollHeight - 50);

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col gap-3">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0a1519]/80 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-md transition-all duration-300 hover:bg-cyan-400 hover:text-[#071013] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] ${
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FaArrowUp className="text-sm" />
      </button>

      {/* Scroll to Bottom */}
      <button
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0a1519]/80 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.2)] backdrop-blur-md transition-all duration-300 hover:bg-emerald-400 hover:text-[#071013] hover:scale-110 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] ${
          !atBottom ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FaArrowDown className="text-sm" />
      </button>
    </div>
  );
};

export default BackToTop;
