"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  target?: string;
  magneticStrength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  download,
  target,
  magneticStrength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * magneticStrength);
    y.set((e.clientY - centerY) * magneticStrength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowOpacity = useTransform(
    springX,
    [-20, 0, 20],
    [0.6, 0.3, 0.6]
  );

  const Component = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-6 py-3 font-medium transition-all duration-300 ${className}`}
      >
        <motion.span
          className="absolute inset-0 rounded-lg bg-accent-blue/10"
          style={{ opacity: glowOpacity }}
        />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
}
