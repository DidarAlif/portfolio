"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-secondary px-4 py-1.5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="h-2 w-2 rounded-full bg-accent-green animate-[glow-pulse_3s_ease-in-out_infinite]" />
        <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
          {subtitle || title}
        </span>
      </motion.div>
      <h2
        className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {title}
      </h2>
      <motion.div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-blue to-accent-green ${
          align === "center" ? "mx-auto" : ""
        }`}
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}
