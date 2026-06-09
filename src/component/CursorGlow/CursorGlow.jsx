"use client";

import { useEffect, useState } from "react";

const CursorGlow = () => {
    const [particles, setParticles] = useState([]);

    
    useEffect(() => {
        const handleMouseMove = (e) => {
        const newParticle = {
            id: Date.now() + Math.random(),
            x: e.clientX + (Math.random() - 0.5) * 20, 
            y: e.clientY + (Math.random() - 0.5) * 20,
            size: Math.random() * 6 + 4, 
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            life: 1,
        };
        setParticles((prev) => [...prev, newParticle]);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    
    useEffect(() => {
        const interval = setInterval(() => {
        setParticles((prev) =>
            prev
            .map((p) => ({
                ...p,
                life: p.life - 0.03,
                y: p.y - Math.random() * 0.100, 
                x: p.x + (Math.random() - 0.5) * 0.100, 
            }))
            .filter((p) => p.life > 0)
        );
        }, 16); // ~60fps
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
        {particles.map((p) => (
            <div
            key={p.id}
            style={{
                position: "absolute",
                top: p.y,
                left: p.x,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                borderRadius: "50%",
                opacity: p.life,
                transform: `translate(-50%, -50%) scale(${p.life})`,
                pointerEvents: "none",
            }}
            />
        ))}
        </div>
    );
    };

export default CursorGlow;
