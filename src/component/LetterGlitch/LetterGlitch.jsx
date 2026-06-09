"use client";

import { useEffect, useMemo, useRef } from "react";

const LetterGlitch = ({
  glitchColors,
  colors,
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  showCenterVignette,
  showOuterVignette,
  smooth = true,
  className = "",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());
  const resizeTimeout = useRef(null);

  const palette = useMemo(
    () => glitchColors || colors || ["#2b4539", "#61dca3", "#61b3dc"],
    [colors, glitchColors],
  );
  const useCenterVignette = showCenterVignette ?? centerVignette;
  const useOuterVignette = showOuterVignette ?? outerVignette;
  const lettersAndSymbols = Array.from(characters);

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  useEffect(() => {
    const getRandomChar = () =>
      lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];

    const getRandomColor = () =>
      palette[Math.floor(Math.random() * palette.length)];

    const hexToRgb = (hex) => {
      const normalizedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_match, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalizedHex);

      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const interpolateColor = (start, end, factor) => {
      const result = {
        r: Math.round(start.r + (end.r - start.r) * factor),
        g: Math.round(start.g + (end.g - start.g) * factor),
        b: Math.round(start.b + (end.b - start.b) * factor),
      };

      return `rgb(${result.r}, ${result.g}, ${result.b})`;
    };

    const calculateGrid = (width, height) => ({
      columns: Math.ceil(width / charWidth),
      rows: Math.ceil(height / charHeight),
    });

    const initializeLetters = (columns, rows) => {
      grid.current = { columns, rows };
      const totalLetters = columns * rows;
      letters.current = Array.from({ length: totalLetters }, () => ({
        char: getRandomChar(),
        color: getRandomColor(),
        targetColor: getRandomColor(),
        colorProgress: 1,
      }));
    };

    const drawLetters = () => {
      if (!context.current || letters.current.length === 0 || !canvasRef.current) {
        return;
      }

      const ctx = context.current;
      const { width, height } = canvasRef.current.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";

      letters.current.forEach((letter, index) => {
        const x = (index % grid.current.columns) * charWidth;
        const y = Math.floor(index / grid.current.columns) * charHeight;
        ctx.fillStyle = letter.color;
        ctx.fillText(letter.char, x, y);
      });
    };

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const parent = canvas?.parentElement;

      if (!canvas || !parent) {
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      if (context.current) {
        context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      const { columns, rows } = calculateGrid(rect.width, rect.height);
      initializeLetters(columns, rows);
      drawLetters();
    };

    const updateLetters = () => {
      if (!letters.current.length) {
        return;
      }

      const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));

      for (let i = 0; i < updateCount; i += 1) {
        const index = Math.floor(Math.random() * letters.current.length);
        const letter = letters.current[index];

        if (!letter) {
          continue;
        }

        letter.char = getRandomChar();
        letter.targetColor = getRandomColor();

        if (!smooth) {
          letter.color = letter.targetColor;
          letter.colorProgress = 1;
        } else {
          letter.colorProgress = 0;
        }
      }
    };

    const handleSmoothTransitions = () => {
      let needsRedraw = false;

      letters.current.forEach((letter) => {
        if (letter.colorProgress < 1) {
          letter.colorProgress += 0.05;

          if (letter.colorProgress > 1) {
            letter.colorProgress = 1;
          }

          const startRgb = hexToRgb(letter.color);
          const endRgb = hexToRgb(letter.targetColor);

          if (startRgb && endRgb) {
            letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
            needsRedraw = true;
          }
        }
      });

      if (needsRedraw) {
        drawLetters();
      }
    };

    const animate = () => {
      const now = Date.now();

      if (now - lastGlitchTime.current >= glitchSpeed) {
        updateLetters();
        drawLetters();
        lastGlitchTime.current = now;
      }

      if (smooth) {
        handleSmoothTransitions();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    context.current = canvas.getContext("2d");
    resizeCanvas();
    animate();

    const handleResize = () => {
      window.clearTimeout(resizeTimeout.current);
      resizeTimeout.current = window.setTimeout(() => {
        cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        animate();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(resizeTimeout.current);
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [characters, glitchSpeed, lettersAndSymbols, palette, smooth]);

  return (
    <div className={`relative h-full w-full overflow-hidden bg-black ${className}`}>
      <canvas ref={canvasRef} className="block h-full w-full" />
      {useOuterVignette && <div className="letter-glitch-outer-vignette" />}
      {useCenterVignette && <div className="letter-glitch-center-vignette" />}
    </div>
  );
};

export default LetterGlitch;
