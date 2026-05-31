"use client";

import { motion } from "framer-motion";
import { Repository } from "@/data/portfolio";

interface RepoCardProps {
  repo: Repository;
  index?: number;
  variant?: "pinned" | "list";
  onSelect?: (repo: Repository) => void;
}

export default function RepoCard({ repo, index = 0, variant = "list", onSelect }: RepoCardProps) {
  const isPinned = variant === "pinned";

  return (
    <motion.div
      className={`group rounded-md border border-border-default bg-bg-primary p-4 cursor-pointer transition-all hover:border-border-hover relative overflow-hidden ${
        isPinned ? "h-full" : ""
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{
        boxShadow: "0 0 20px rgba(88, 166, 255, 0.06)",
        borderColor: "rgba(88, 166, 255, 0.3)",
      }}
      onClick={() => onSelect?.(repo)}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-2 flex items-start justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <svg className="h-4 w-4 shrink-0 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
            </svg>
            <a
              href={repo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-sm font-semibold text-accent-blue hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {repo.name}
            </a>
            <span className="shrink-0 rounded-full border border-border-default px-2 py-0.5 text-[10px] text-text-tertiary">
              {repo.visibility}
            </span>
          </div>
          <span className="opacity-0 group-hover:opacity-100 text-[10px] text-accent-blue font-mono font-bold shrink-0 transition-opacity">
            Preview 🔍
          </span>
        </div>

        {/* Description */}
        <p className="mb-3 flex-1 text-xs leading-relaxed text-text-secondary line-clamp-2">
          {repo.description}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {repo.topics.slice(0, isPinned ? 3 : 6).map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-accent-blue/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-blue transition-colors hover:bg-accent-blue/20"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Footer stats */}
        <div className="flex items-center gap-4 text-xs text-text-secondary">
          {/* Language */}
          <span className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: repo.languageColor }}
            />
            {repo.language}
          </span>

          {/* Stars */}
          {repo.stars > 0 && (
            <a href={`${repo.github}/stargazers`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-accent-blue" onClick={(e) => e.stopPropagation()}>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              {repo.stars}
            </a>
          )}

          {/* Forks */}
          {repo.forks > 0 && (
            <a href={`${repo.github}/forks`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-accent-blue" onClick={(e) => e.stopPropagation()}>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              {repo.forks}
            </a>
          )}

          {/* Updated */}
          <span className="ml-auto text-text-tertiary">Updated {repo.updated}</span>
        </div>
      </div>
      {/* Hover Tooltip / Detail overlay */}
      <div className="absolute right-3 bottom-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-[9px] bg-bg-secondary px-2 py-1 rounded border border-accent-blue/30 text-accent-blue font-mono">
          Click to view full repository details
        </span>
      </div>
    </motion.div>
  );
}
