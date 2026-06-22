import { useEffect, useState, useRef } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdCounter = useRef(0);

  const ringRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on devices matching touch capability or prefers-reduced-motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      const newRipple = {
        id: rippleIdCounter.current++,
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev, newRipple]);
    };

    // Hover detection for dynamic scaling
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-tilt]") ||
        target.classList.contains("interactive-hover")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    // Animation frame tick for lerping the ring trailing effect
    let animFrameId: number;
    const updateRing = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;
      
      // Ring follows mouse with slightly slower inertia
      ringRef.current.x += (targetX - ringRef.current.x) * 0.12;
      ringRef.current.y += (targetY - ringRef.current.y) * 0.12;
      
      setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });
      animFrameId = requestAnimationFrame(updateRing);
    };

    animFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  // Remove ripples after animation completes
  const handleRippleEnd = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Target Dot */}
      <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Trailing Ring with Neon Glow */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-screen -translate-x-1/2 -translate-y-1/2 border-2 border-purple-neon transition-all duration-300 ease-out`}
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          width: isHovered ? "60px" : "32px",
          height: isHovered ? "60px" : "32px",
          boxShadow: isHovered
            ? "0 0 25px #a855f7, inset 0 0 15px #a855f7"
            : "0 0 10px rgba(168, 85, 247, 0.5), inset 0 0 5px rgba(168, 85, 247, 0.3)",
          backgroundColor: isHovered ? "rgba(168, 85, 247, 0.1)" : "transparent",
        }}
      />

      {/* Ripple Effects on Click */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          onAnimationEnd={() => handleRippleEnd(ripple.id)}
          className="fixed pointer-events-none z-40 rounded-full border-4 border-cyan-neon mix-blend-screen scale-0 animate-[ripple-expand_0.4s_ease-out_forwards]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 20px #22d3ee",
          }}
        />
      ))}

      <style>{`
        @keyframes ripple-expand {
          0% {
            width: 0px;
            height: 0px;
            opacity: 1;
            border-width: 8px;
          }
          100% {
            width: 120px;
            height: 120px;
            opacity: 0;
            border-width: 0px;
          }
        }
      `}</style>
    </>
  );
}
