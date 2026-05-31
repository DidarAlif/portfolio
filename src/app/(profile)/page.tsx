"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData, Repository } from "@/data/portfolio";
import RepoCard from "@/components/ui/RepoCard";
import ContributionGraph from "@/components/ui/ContributionGraph";
import ProjectModal from "@/components/ui/ProjectModal";
import TypeWriter from "@/components/ui/TypeWriter";

export default function OverviewPage() {
  const { personal, repositories, contributionData, stats } = portfolioData;
  const pinnedRepos = repositories.filter((r) => r.pinned);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  return (
    <div className="space-y-6">
      {/* Current Employment Status Banner */}
      <motion.div
        className="rounded-md border border-accent-blue/30 bg-accent-blue/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-accent-blue" />
          </span>
          <div>
            <p className="text-sm font-semibold text-text-primary">
              Currently Working as Assistant System Engineer
            </p>
            <p className="text-xs text-text-secondary font-mono">
              AmberIT · Core Network Security & Infrastructure Operations
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-bg-tertiary px-2.5 py-1 text-xs font-mono text-text-secondary border border-border-default">
            Dhaka, BD
          </span>
        </div>
      </motion.div>

      {/* README-style bio card */}
      <motion.div
        className="rounded-md border border-border-default bg-bg-primary p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-text-primary">{personal.username}</span>
          <span className="text-sm text-text-tertiary">/</span>
          <span className="text-sm font-semibold text-text-primary">README</span>
          <span className="text-sm text-text-tertiary">.md</span>
        </div>
        <div className="border-t border-border-default pt-4">
          <h2 className="mb-2 text-2xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Hey there 👋, I&apos;m {personal.name.split(" ").pop()}
          </h2>
          <div className="mb-3 text-lg text-text-secondary">
            <TypeWriter words={personal.roles} typeSpeed={60} />
          </div>
          
          {/* Active Role Badge */}
          <div className="mb-4 flex items-center gap-2 text-xs text-text-secondary font-mono bg-bg-secondary/50 border border-border-default/50 px-3 py-1.5 rounded-md w-fit">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
            </span>
            <span>Active Role: <strong className="text-accent-blue font-semibold">{personal.currentRole}</strong> at <strong className="text-text-primary font-semibold">{personal.company}</strong></span>
          </div>

          <p className="mb-4 leading-relaxed text-text-secondary">{personal.bio}</p>

          {/* Quick stats badges */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "🛡️ Cybersecurity & VAPT", color: "#FF7B72" },
              { label: "🌐 Network Security Operations", color: "#58A6FF" },
              { label: "⚡ System Engineering", color: "#7EE787" },
              { label: "💻 Full Stack Development", color: "#BC8CFF" },
            ].map((badge) => (
              <span
                key={badge.label}
                className="rounded-md border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: `${badge.color}40`,
                  color: badge.color,
                  backgroundColor: `${badge.color}10`,
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Academic Honours & Awards */}
      <motion.div
        className="rounded-md border border-accent-orange/30 bg-gradient-to-r from-accent-orange/5 via-bg-primary to-accent-purple/5 p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <svg className="h-5 w-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <h3 className="text-sm font-bold text-text-primary" style={{ fontFamily: "var(--font-space-grotesk)" }}>Academic Honours & Awards</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Education */}
          <div className="group relative sm:col-span-2 rounded-lg border border-accent-green/20 bg-bg-primary/80 p-4 hover:border-accent-green/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.08)] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-green/10 to-transparent rounded-bl-full" />
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10 text-xl shrink-0">
                🎓
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-accent-green mb-0.5">B.Sc. in Computer Science &amp; Engineering</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  American International University-Bangladesh (AIUB)
                </p>
                <p className="text-xs text-text-tertiary mt-1 leading-relaxed">
                  Thesis: &quot;Hybrid Approach Towards Modernizing Efficient Vehicular Networks&quot;
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 text-[10px] font-mono font-bold text-accent-green">CGPA 3.81/4.00</span>
                  <span className="rounded-full bg-accent-orange/10 border border-accent-orange/20 px-2 py-0.5 text-[10px] font-mono font-bold text-accent-orange">Magna Cum Laude</span>
                  <span className="text-[10px] text-text-tertiary font-mono">Graduated: April 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative rounded-lg border border-accent-orange/20 bg-bg-primary/80 p-4 hover:border-accent-orange/40 hover:shadow-[0_0_20px_rgba(240,136,62,0.08)] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-orange/10 to-transparent rounded-bl-full" />
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-orange/10 text-xl shrink-0">
                🏅
              </div>
              <div>
                <h4 className="text-sm font-bold text-accent-orange mb-0.5">Magna Cum Laude</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Graduated with Magna Cum Laude academic honour — B.Sc. in Computer Science & Engineering
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-full bg-accent-orange/10 border border-accent-orange/20 px-2 py-0.5 text-[10px] font-mono font-bold text-accent-orange">CGPA 3.81/4.00</span>
                  <span className="text-[10px] text-text-tertiary font-mono">AIUB · April 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dean's Awards */}
          <div className="group relative rounded-lg border border-accent-purple/20 bg-bg-primary/80 p-4 hover:border-accent-purple/40 hover:shadow-[0_0_20px_rgba(188,140,255,0.08)] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-purple/10 to-transparent rounded-bl-full" />
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-purple/10 text-xl shrink-0">
                🏆
              </div>
              <div>
                <h4 className="text-sm font-bold text-accent-purple mb-0.5">Dean&apos;s Honorable Mention (3×)</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Awarded three times for outstanding academic excellence during undergraduate studies
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-full bg-accent-purple/10 border border-accent-purple/20 px-2 py-0.5 text-[10px] font-mono font-bold text-accent-purple">3× Recipient</span>
                  <span className="text-[10px] text-text-tertiary font-mono">AIUB · Academic Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Merit Scholarship */}
          <div className="group relative rounded-lg border border-accent-blue/20 bg-bg-primary/80 p-4 hover:border-accent-blue/40 hover:shadow-[0_0_20px_rgba(88,166,255,0.08)] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-blue/10 to-transparent rounded-bl-full" />
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 text-xl shrink-0">
                🎓
              </div>
              <div>
                <h4 className="text-sm font-bold text-accent-blue mb-0.5">Merit-Based Academic Scholarship</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Recipient of merit-based academic scholarship for consistently outstanding academic performance
                </p>
                <div className="mt-2">
                  <span className="text-[10px] text-text-tertiary font-mono">AIUB · Throughout Undergraduate Studies</span>
                </div>
              </div>
            </div>
          </div>

          {/* METI Japan */}
          <div className="group relative rounded-lg border border-accent-red/20 bg-bg-primary/80 p-4 hover:border-accent-red/40 hover:shadow-[0_0_20px_rgba(255,123,114,0.08)] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-red/10 to-transparent rounded-bl-full" />
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-red/10 text-xl shrink-0">
                🇯🇵
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#FF7B72] mb-0.5">METI Japan AI/IT Internship</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Selected for the Government of Japan METI AI/IT internship program in Tokyo
                </p>
                <div className="mt-2">
                  <span className="text-[10px] text-text-tertiary font-mono">Tokyo, Japan · Oct–Dec 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Core Specialties Dashboard (Contributions, Problem Solving, Toolkit, Research) */}
      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Contributions Card */}
        <div className="rounded-md border border-border-default bg-bg-primary p-5 hover:border-accent-green hover:shadow-[0_0_15px_rgba(126,231,135,0.06)] transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📈</span>
            <h3 className="text-sm font-semibold font-space-grotesk text-text-primary">Contributions</h3>
          </div>
          <p className="text-xs text-text-secondary mb-3 leading-relaxed">
            Active developer focused on open-source network security utilities, automated scanners, and repository scripting configurations.
          </p>
          <div className="rounded border border-border-default bg-bg-secondary p-3 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-text-tertiary">Key Platforms:</span>
              <span className="font-mono text-accent-green font-bold">GitHub / GitLab</span>
            </div>
            <div className="h-1.5 w-full bg-bg-primary rounded-full overflow-hidden">
              <div className="h-full bg-accent-green rounded-full opacity-80" style={{ width: "100%" }} />
            </div>
            <div className="text-[10px] text-text-tertiary font-mono">
              Focus: VAPT scanner utilities & CLI configuration files
            </div>
          </div>
        </div>

        {/* Problem Solving Card */}
        <div className="rounded-md border border-border-default bg-bg-primary p-5 hover:border-accent-blue hover:shadow-[0_0_15px_rgba(88,166,255,0.06)] transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🛡️</span>
            <h3 className="text-sm font-semibold font-space-grotesk text-text-primary">Problem Solving & VAPT</h3>
          </div>
          <p className="text-xs text-text-secondary mb-3 leading-relaxed">
            Conducting vulnerability assessment and penetration testing across enterprise web, API, and network infrastructures.
          </p>
          <div className="rounded border border-border-default bg-bg-secondary p-3 space-y-1.5 font-mono text-[10px]">
            <div className="flex justify-between text-text-secondary">
              <span>SaaS Platform Audit:</span>
              <span className="text-accent-blue font-bold">22 Findings Discovered</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Security Methodologies:</span>
              <span className="text-accent-blue font-bold">OWASP WSTG & NIST</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Risk Frameworks:</span>
              <span className="text-accent-blue font-bold">CVSS v3.1 Standards</span>
            </div>
          </div>
        </div>

        {/* Toolkit Card */}
        <div className="rounded-md border border-border-default bg-bg-primary p-5 hover:border-accent-purple hover:shadow-[0_0_15px_rgba(188,140,255,0.06)] transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">⚙️</span>
            <h3 className="text-sm font-semibold font-space-grotesk text-text-primary">Toolkit & Technologies</h3>
          </div>
          <p className="text-xs text-text-secondary mb-3 leading-relaxed">
            Proficient in enterprise-grade security scanners, networking hardware configurations, and modern web application development stacks.
          </p>
          <div className="flex flex-wrap gap-1">
            {["Burp Suite Pro", "Nmap", "Wireshark", "FastAPI", "Next.js", "Cisco CCNA", "Docker"].map((tool) => (
              <span key={tool} className="rounded bg-bg-secondary border border-border-default px-1.5 py-0.5 text-[9px] text-text-secondary font-mono">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Research Card */}
        <div className="rounded-md border border-border-default bg-bg-primary p-5 hover:border-accent-orange hover:shadow-[0_0_15px_rgba(240,136,62,0.06)] transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📚</span>
            <h3 className="text-sm font-semibold font-space-grotesk text-text-primary">Security Research</h3>
          </div>
          <p className="text-xs text-text-secondary mb-3 leading-relaxed">
            Authoring academic thesis papers, whitepapers, and documentation on enterprise networks and VAPT methodologies.
          </p>
          <div className="space-y-2 text-[10px]">
            <div className="flex items-center justify-between text-text-secondary">
              <span className="font-semibold text-accent-orange">📖 Vehicular Networks Thesis</span>
              <span className="text-text-tertiary">2025</span>
            </div>
            <div className="text-[10px] text-text-tertiary leading-normal line-clamp-1">
              "Hybrid Approach Towards Modernizing Efficient Vehicular Networks"
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pinned repositories */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <svg className="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="text-sm font-semibold text-text-primary">Pinned</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {pinnedRepos.map((repo, i) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              index={i}
              variant="pinned"
              onSelect={setSelectedRepo}
            />
          ))}
        </div>
      </div>

      {/* Contribution graph */}
      <ContributionGraph
        data={contributionData}
        totalContributions={stats.contributions}
      />

      {/* Professional Achievements & Highlights */}
      <motion.div
        className="rounded-md border border-border-default bg-bg-primary p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h3 className="mb-4 text-sm font-semibold text-text-primary">Professional Achievements & Highlights</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: "🇯🇵", text: "Selected for METI Government of Japan AI/IT Internship Program (Tokyo, Japan)", time: "2025", color: "#FF7B72" },
            { icon: "🎓", text: "Magna Cum Laude Honours B.Sc. in CSE from AIUB (CGPA 3.81/4.00)", time: "2025", color: "#58A6FF" },
            { icon: "🛡️", text: "Conducted VAPT on Multi-Tenant SaaS platform discovering 22 critical findings", time: "2025", color: "#7EE787" },
            { icon: "🏆", text: "3x Dean's Honorable Mention & Academic Scholarship Recipient", time: "AIUB Academic Years", color: "#BC8CFF" },
          ].map((activity, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 rounded-md border border-border-default bg-bg-secondary/50 p-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <span className="text-xl mt-0.5">{activity.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-text-primary leading-normal">{activity.text}</p>
                <p className="text-[10px] text-text-tertiary mt-1 font-mono">{activity.time}</p>
              </div>
              <span className="h-1.5 w-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: activity.color }} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project modal */}
      {selectedRepo && (
        <ProjectModal
          project={{
            ...selectedRepo,
            title: selectedRepo.name,
            longDescription: selectedRepo.longDescription,
            techStack: selectedRepo.techStack,
            github: selectedRepo.github,
            live: selectedRepo.live,
            image: "",
            stats: { stars: selectedRepo.stars, forks: selectedRepo.forks, issues: selectedRepo.issues },
            category: selectedRepo.language,
            color: selectedRepo.languageColor,
          }}
          isOpen={!!selectedRepo}
          onClose={() => setSelectedRepo(null)}
        />
      )}
    </div>
  );
}
