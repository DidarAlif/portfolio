"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, DocumentationRepo } from "@/data/portfolio";
import ProjectModal from "@/components/ui/ProjectModal";

export default function ProjectsPage() {
  const { documentationRepos } = portfolioData;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<DocumentationRepo | null>(null);

  const categories = ["All", "Security Research", "Documentation", "Writeups", "Blog"];

  const filteredRepos = documentationRepos.filter((repo) => {
    const matchesCategory = selectedCategory === "All" || repo.category === selectedCategory;
    const matchesSearch =
      repo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  }).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <motion.div
        className="rounded-md border border-border-default bg-bg-primary p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold text-text-primary mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Research & Documentation Repositories
        </h2>
        <p className="text-sm text-text-secondary">
          A collection of guides, technical documentation, CTF write-ups, and cybersecurity research articles I have authored. Click any project card to preview details and access the resource.
        </p>
      </motion.div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search projects by name, tags, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-border-default bg-bg-primary px-4 py-2 pl-10 text-sm text-text-primary outline-none transition-all focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
          />
          <svg
            className="absolute left-3.5 top-2.5 h-4.5 w-4.5 text-text-tertiary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 border-b border-border-default md:border-b-0 pb-2 md:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold border transition-all ${
                selectedCategory === category
                  ? "border-accent-blue bg-accent-blue/10 text-accent-blue"
                  : "border-border-default bg-bg-secondary text-text-secondary hover:border-border-hover hover:text-text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredRepos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(repo)}
              className="group flex flex-col justify-between rounded-md border border-border-default bg-bg-primary p-5 cursor-pointer hover:border-accent-blue hover:shadow-[0_0_15px_rgba(88,166,255,0.08)] transition-all relative overflow-hidden"
              whileHover={{ y: -2 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-block rounded-full bg-accent-blue/10 border border-accent-blue/20 px-2.5 py-0.5 text-xs font-semibold text-accent-blue">
                    {repo.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-tertiary">
                    <span>{repo.readTime}</span>
                    <span>·</span>
                    <span>{repo.date}</span>
                  </div>
                </div>

                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3
                    className="text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {repo.title}
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 text-[10px] text-accent-blue font-mono font-bold shrink-0 transition-opacity">
                    Preview 🔍
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              {/* Code Stack */}
              {repo.techStack && repo.techStack.length > 0 && (
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg className="h-3.5 w-3.5 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary">Code Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {repo.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 rounded-md border border-accent-purple/20 bg-accent-purple/5 px-2 py-0.5 text-[10px] font-mono font-medium text-accent-purple"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-purple/60" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-default/50">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-bg-tertiary border border-border-default px-2 py-0.5 text-[11px] font-mono text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Tooltip / Detail overlay */}
              <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-[9px] bg-bg-secondary px-2 py-1 rounded border border-accent-blue/30 text-accent-blue font-mono">
                  Click to view full resource details
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredRepos.length === 0 && (
          <motion.div
            className="col-span-full rounded-md border border-border-default bg-bg-primary p-12 text-center text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-base mb-1">No repositories found matching your query</p>
            <p className="text-xs text-text-tertiary">Try clearing the search input or choosing a different category filter</p>
          </motion.div>
        )}
      </motion.div>

      {/* Project Modal Preview */}
      {selectedProject && (
        <ProjectModal
          project={{
            title: selectedProject.title,
            longDescription: selectedProject.description + "\n\nThis research/documentation repository contains my official findings, blueprints, and implementation scripts. The source code is organized following the highest defensive coding security policies to support system operations and robust deployments.",
            techStack: selectedProject.tags,
            github: `https://github.com/DidarAlif/${selectedProject.id}`,
            live: "",
            stats: { stars: 18, forks: 3, issues: 0 },
            category: selectedProject.category,
            color: "#58A6FF",
          }}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
