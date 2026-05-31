"use client";

import { motion, AnimatePresence } from "framer-motion";
export interface Project {
  title: string;
  longDescription: string;
  techStack: string[];
  github: string;
  live: string;
  image?: string;
  stats: {
    stars: number;
    forks: number;
    issues: number;
  };
  category: string;
  color: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border-default bg-bg-secondary p-8 shadow-2xl"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-border-default bg-bg-tertiary text-text-secondary transition-colors hover:border-accent-blue hover:text-text-primary"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Category badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-default px-3 py-1">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <span className="text-xs font-medium text-text-secondary">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mb-3 text-2xl font-bold text-text-primary md:text-3xl"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {project.title}
              </h3>

              {/* Long description */}
              <p className="mb-6 leading-relaxed text-text-secondary">
                {project.longDescription}
              </p>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border-default bg-bg-tertiary px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-accent-blue hover:text-accent-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub stats */}
              <div className="mb-6 flex gap-6 rounded-lg border border-border-default bg-bg-primary/50 p-4">
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                  </svg>
                  <span className="text-sm font-medium">{project.stats.stars}</span>
                  <span className="text-xs text-text-tertiary">stars</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 10 0-1.5.75.75 0 000 1.5zM8 12.75a.75.75 0 10 0-1.5.75.75 0 000 1.5z" />
                  </svg>
                  <span className="text-sm font-medium">{project.stats.forks}</span>
                  <span className="text-xs text-text-tertiary">forks</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
                  </svg>
                  <span className="text-sm font-medium">{project.stats.issues}</span>
                  <span className="text-xs text-text-tertiary">issues</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-bg-tertiary px-5 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-accent-blue hover:text-accent-blue"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-blue/80"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
