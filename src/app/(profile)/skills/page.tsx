"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

// Helper function to map skill names to premium inline SVGs
function getSkillIcon(name: string) {
  const lowercase = name.toLowerCase();

  // Cybersecurity Icons
  if (
    lowercase.includes("burp") ||
    lowercase.includes("metasploit") ||
    lowercase.includes("nessus") ||
    lowercase.includes("zap") ||
    lowercase.includes("nuclei") ||
    lowercase.includes("openvas") ||
    lowercase.includes("vapt") ||
    lowercase.includes("security") ||
    lowercase.includes("vulnerability") ||
    lowercase.includes("penetration") ||
    lowercase.includes("owasp") ||
    lowercase.includes("cwe") ||
    lowercase.includes("cvss") ||
    lowercase.includes("auditing") ||
    lowercase.includes("threat") ||
    lowercase.includes("risk") ||
    lowercase.includes("katana") ||
    lowercase.includes("dirsearch") ||
    lowercase.includes("gobuster") ||
    lowercase.includes("nmap") ||
    lowercase.includes("sqlmap") ||
    lowercase.includes("wireshark")
  ) {
    return (
      <svg className="h-4 w-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }

  // Networking Icons
  if (
    lowercase.includes("cisco") ||
    lowercase.includes("mikrotik") ||
    lowercase.includes("fortinet") ||
    lowercase.includes("vlan") ||
    lowercase.includes("ospf") ||
    lowercase.includes("nat") ||
    lowercase.includes("vpn") ||
    lowercase.includes("tcp") ||
    lowercase.includes("network") ||
    lowercase.includes("firewall") ||
    lowercase.includes("sdn") ||
    lowercase.includes("vanet")
  ) {
    return (
      <svg className="h-4 w-4 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }

  // System, Linux & Virtualization Icons
  if (
    lowercase.includes("linux") ||
    lowercase.includes("vmware") ||
    lowercase.includes("virtualbox") ||
    lowercase.includes("windows")
  ) {
    return (
      <svg className="h-4 w-4 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }

  // Python
  if (lowercase === "python") {
    return (
      <svg className="h-4 w-4 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.25.18a.88.88 0 00-.77.5v2.85h-3v.54h3.54a1.36 1.36 0 011.36 1.36v3.54h.54v-3.54A4.9 4.9 0 0014.25.18zm-8.5 2.85A4.9 4.9 0 00.81 7.93v3.54h.54v-3.54a1.36 1.36 0 011.36-1.36h3.54v-.54h-3a.88.88 0 00-.77-.5zm8.5 8.5v3.54a1.36 1.36 0 01-1.36 1.36h-3.54v.54h3a.88.88 0 00.77.5 4.9 4.9 0 004.94-4.9v-3.54h-.54zm-13.44.54v3.54a4.9 4.9 0 004.9 4.9h3.54v-.54H5.71a1.36 1.36 0 01-1.36-1.36v-3.54h-.54z" />
      </svg>
    );
  }

  // JS/TS
  if (lowercase.includes("javascript") || lowercase.includes("typescript")) {
    return (
      <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.121-.762-1.922-2.179-2.529-.861-.371-1.688-.638-1.688-1.248 0-.462.338-.72.899-.72.638 0 .988.293 1.175.762h2.247c-.201-1.34-1.282-2.482-3.424-2.482-2.221 0-3.486 1.201-3.486 2.863 0 2.235 1.938 2.81 3.512 3.486 1.059.451 1.701.761 1.701 1.482 0 .597-.502.949-1.272.949-1.029 0-1.486-.549-1.637-1.401h-2.285c.189 1.968 1.411 2.878 3.922 2.878 2.408 0 3.788-1.109 3.788-3.048zm-13.916-2.883v5.626h-2.148v-5.626h2.148zm-1.074-1.203c.725 0 1.22-.505 1.22-1.208 0-.714-.495-1.22-1.22-1.22s-1.208.506-1.208 1.22c0 .703.483 1.208 1.208 1.208z" />
      </svg>
    );
  }

  // React & Next & Web UI
  if (
    lowercase.includes("react") ||
    lowercase.includes("next") ||
    lowercase.includes("vue") ||
    lowercase.includes("html") ||
    lowercase.includes("css") ||
    lowercase.includes("rails") ||
    lowercase.includes("fastapi") ||
    lowercase.includes("node") ||
    lowercase.includes("api")
  ) {
    return (
      <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }

  // Docker
  if (lowercase.includes("docker")) {
    return (
      <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.906c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.987c0 .102.083.185.186.185zM20.67 9.871c.008.06.015.118.015.18 0 .6-.15 1.2-.45 1.72-.06.1-.12.2-.2.28-.9 1.1-2.2 1.6-3.7 1.6-1.6 0-2.8-.7-3.6-1.7v-2.3h-2.2v2.3H8.3v-2.3H6.1v2.3H3.9v-2.3H1.7v3.2c0 .8.2 1.6.6 2.3.9 1.6 2.6 2.6 4.7 2.6 1.8 0 3.3-.8 4.2-2.1.9 1.3 2.4 2.1 4.2 2.1 2.5 0 4.6-1.6 5.3-3.8.4-.7.6-1.5.6-2.4 0-1.1-.3-2.1-.9-3-.1 0-.1-.1-.2-.1z" />
      </svg>
    );
  }

  // Database Icons
  if (
    lowercase.includes("sql") ||
    lowercase.includes("postgres") ||
    lowercase.includes("mysql") ||
    lowercase.includes("oracle")
  ) {
    return (
      <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }

  // Default terminal command/brackets icon
  return (
    <svg className="h-4 w-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
    </svg>
  );
}

export default function SkillsPage() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills) as Array<keyof typeof skills>;
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>(categories[0]);

  const totalSkills = Object.values(skills).flat().length;

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <motion.div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg font-semibold text-text-primary" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Skills & Technical Expertise
        </h2>
        <div className="flex gap-4 text-sm text-text-secondary">
          <span><strong className="text-text-primary">{totalSkills}</strong> skills</span>
          <span><strong className="text-text-primary">{categories.length}</strong> categories</span>
        </div>
      </motion.div>

      {/* Category tabs — styled like GitHub language filter */}
      <motion.div
        className="flex flex-wrap gap-2 border-b border-border-default pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = skills[category].length;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? "border border-accent-blue/30 bg-accent-blue/10 text-accent-blue"
                  : "border border-border-default bg-bg-secondary text-text-secondary hover:border-border-hover hover:text-text-primary"
              }`}
            >
              {category}
              <span className={`rounded-full px-1.5 py-0.5 text-xs ${
                isActive ? "bg-accent-blue/20" : "bg-bg-tertiary"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* Skill Cards Grid */}
      <motion.div
        key={activeCategory}
        className="space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="rounded-md border border-border-default bg-bg-primary p-6">
          <h3 className="mb-6 text-sm font-semibold text-text-primary">{activeCategory}</h3>
          
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills[activeCategory].map((skill, i) => (
              <motion.div
                key={skill.name}
                className="group relative flex items-center gap-3 rounded-lg border border-border-default bg-bg-secondary/40 p-3 transition-all hover:border-accent-blue/30 hover:bg-accent-blue/5 hover:shadow-[0_0_15px_rgba(88,166,255,0.05)]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg-tertiary border border-border-default group-hover:border-accent-blue/20 group-hover:bg-bg-primary transition-colors">
                  {getSkillIcon(skill.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-text-primary transition-colors group-hover:text-accent-blue">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tech overview grid */}
      <motion.div
        className="rounded-md border border-border-default bg-bg-primary p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h3 className="mb-4 text-sm font-semibold text-text-primary">Core Strengths & Proficiencies</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([category, list]) => {
            const topSkill = list.reduce((prev, current) => (prev.level > current.level ? prev : current));
            return (
              <div key={category} className="flex items-center justify-between rounded-md border border-border-default bg-bg-secondary/40 p-4">
                <div>
                  <h4 className="text-sm font-bold text-text-primary">{category}</h4>
                  <p className="text-xs text-text-tertiary">Top expertise: <span className="text-text-secondary font-mono">{topSkill.name}</span></p>
                </div>
                <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent-green/10 border border-accent-green/20">
                  {getSkillIcon(topSkill.name)}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
