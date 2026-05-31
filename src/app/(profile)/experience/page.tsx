"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function ExperiencePage() {
  const { experience, notableProjects } = portfolioData;

  return (
    <div className="space-y-8">
      {/* Introduction Banner */}
      <motion.div
        className="rounded-md border border-border-default bg-bg-primary p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold text-text-primary mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Professional Experience
        </h2>
        <p className="text-sm text-text-secondary">
          A timeline of my professional career, internships, and security research engagements.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative border-l border-border-default ml-4 md:ml-6 space-y-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            className="relative pl-8 md:pl-10"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            {/* Timeline Dot */}
            <span
              className={`absolute left-0 top-1.5 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full border border-border-default ${
                exp.isCurrent
                  ? "bg-accent-green shadow-[0_0_10px_rgba(46,160,67,0.6)] animate-pulse"
                  : "bg-bg-tertiary"
              }`}
            >
              {exp.isCurrent && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
            </span>

            {/* Content Card */}
            <div className="rounded-md border border-border-default bg-bg-primary p-5 hover:border-border-hover transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div>
                  <h3
                    className="text-lg font-bold text-text-primary flex items-center gap-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {exp.role}
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1 rounded bg-accent-green/10 px-2 py-0.5 text-xs font-semibold text-accent-green border border-accent-green/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-ping" />
                        Active Role
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-accent-blue font-medium">{exp.company}</p>
                </div>
                <div className="text-xs md:text-right">
                  <span className="inline-block rounded-full bg-bg-tertiary border border-border-default px-3 py-1 font-mono text-text-secondary">
                    {exp.period}
                  </span>
                  <p className="text-text-tertiary mt-1">{exp.location}</p>
                </div>
              </div>

              <p className="text-sm text-text-secondary mb-4 leading-relaxed">{exp.description}</p>

              {/* Responsibilities list */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-1">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="leading-relaxed">
                      <span className="text-text-secondary">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-2">Technologies & Scope</h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border-default bg-bg-tertiary px-2 py-0.5 text-xs font-mono text-text-secondary hover:border-text-secondary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Notable Event Projects */}
      <motion.div
        className="rounded-md border border-border-default bg-bg-primary p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          <svg className="h-5 w-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Notable Event Network Engineering Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {notableProjects.map((project, pIdx) => (
            <motion.div
              key={project.name}
              className="rounded-md border border-border-default bg-bg-secondary/30 p-4 hover:border-border-hover transition-all duration-200"
              whileHover={{ y: -2 }}
            >
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="font-semibold text-text-primary text-sm md:text-base leading-snug">{project.name}</h3>
                <span className="shrink-0 rounded bg-bg-tertiary border border-border-default px-2 py-0.5 text-xs font-mono text-text-secondary">
                  {project.year}
                </span>
              </div>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
