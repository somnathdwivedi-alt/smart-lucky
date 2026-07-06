import { useEffect, useRef, useState } from "react";
import { useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

export function useMousePosition() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return { x, y };
}

export function useParallaxScroll() {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30, mass: 0.5 });
  return smoothY;
}

export function useParallaxOffset(factor = 0.15) {
  const scrollY = useParallaxScroll();
  const y = useTransform(scrollY, (v) => v * factor);
  return y;
}

export function useTilt(ref: React.RefObject<HTMLElement | null>) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (px - 0.5) * 10, y: (py - 0.5) * -10 });
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return { tilt, hovered, handleMouseMove, handleMouseEnter, handleMouseLeave };
}
