"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-text-primary transition-colors group-hover:text-accent-blue">
          {name}
        </span>
        <span className="text-xs font-mono text-text-tertiary">{level}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-bg-tertiary">
        <motion.div
          className="skill-bar-fill absolute inset-y-0 left-0 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        />
        {/* Glow dot at end */}
        <motion.div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent-green shadow-[0_0_8px_rgba(126,231,135,0.6)]"
          initial={{ left: "0%" }}
          whileInView={{ left: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          style={{ marginLeft: "-6px" }}
        />
      </div>
    </motion.div>
  );
}
