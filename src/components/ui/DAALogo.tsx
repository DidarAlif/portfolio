"use client";

import { motion } from "framer-motion";

interface DAALogoProps {
  size?: number;
  className?: string;
}

export default function DAALogo({ size = 32, className = "" }: DAALogoProps) {
  return (
    <motion.div
      className={`group relative inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-blue/0 via-accent-green/0 to-accent-cyan/0 blur-md transition-all duration-500 group-hover:from-accent-blue/30 group-hover:via-accent-green/20 group-hover:to-accent-cyan/30" />

      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Outer hexagon frame */}
        <motion.path
          d="M24 2L44 13.5V36.5L24 48L4 36.5V13.5L24 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-border-default transition-colors duration-300 group-hover:text-accent-blue"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Inner shield shape */}
        <motion.path
          d="M24 8L38 16V32L24 42L10 32V16L24 8Z"
          fill="currentColor"
          className="text-bg-tertiary transition-colors duration-300 group-hover:text-accent-blue/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* "D" letter - left */}
        <text
          x="11"
          y="30"
          fontSize="12"
          fontWeight="700"
          fill="currentColor"
          className="text-text-primary transition-colors duration-300 group-hover:text-accent-blue"
          fontFamily="var(--font-space-grotesk), system-ui"
        >
          D
        </text>

        {/* "A" letter - center top */}
        <text
          x="19.5"
          y="26"
          fontSize="11"
          fontWeight="700"
          fill="currentColor"
          className="text-accent-blue transition-colors duration-300 group-hover:text-accent-green"
          fontFamily="var(--font-space-grotesk), system-ui"
        >
          A
        </text>

        {/* "A" letter - right */}
        <text
          x="27"
          y="30"
          fontSize="12"
          fontWeight="700"
          fill="currentColor"
          className="text-text-primary transition-colors duration-300 group-hover:text-accent-blue"
          fontFamily="var(--font-space-grotesk), system-ui"
        >
          A
        </text>

        {/* Scan line effect */}
        <motion.line
          x1="10"
          y1="24"
          x2="38"
          y2="24"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-accent-green/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Corner accents */}
        <circle cx="24" cy="8" r="1.5" fill="currentColor" className="text-accent-blue transition-colors duration-300 group-hover:text-accent-green" />
        <circle cx="24" cy="42" r="1.5" fill="currentColor" className="text-accent-blue/50 transition-colors duration-300 group-hover:text-accent-green/50" />
      </svg>
    </motion.div>
  );
}
