"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, Repository } from "@/data/portfolio";
import RepoCard from "@/components/ui/RepoCard";
import ProjectModal from "@/components/ui/ProjectModal";

export default function RepositoriesPage() {
  const { repositories: fallbackRepos, personal } = portfolioData;
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"stars" | "updated" | "name" | "year">("year");
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  // Fetch repositories from GitHub API
  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${personal.githubUsername}/repos?per_page=100&sort=updated`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch from GitHub API");
        }
        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
          // Map GitHub API response to our Repository interface
          const mappedRepos: Repository[] = data.map((item: any) => {
            // Find local override if it exists
            const localOverride = fallbackRepos.find(
              (r) => r.name.toLowerCase() === item.name.toLowerCase()
            );

            return {
              id: String(item.id),
              name: item.name,
              description: localOverride?.description || item.description || "No description provided.",
              longDescription: localOverride?.longDescription || item.description || "No description provided.",
              language: item.language || "Shell",
              languageColor: getLanguageColor(item.language),
              techStack: localOverride?.techStack || (item.language ? [item.language] : ["Shell"]),
              stars: item.stargazers_count,
              forks: item.forks_count,
              issues: item.open_issues_count,
              watchers: item.watchers_count,
              updated: formatUpdatedDate(item.updated_at),
              github: item.html_url,
              live: item.homepage || "",
              pinned: localOverride?.pinned || false,
              topics: item.topics && item.topics.length > 0 ? item.topics : (localOverride?.topics || []),
              visibility: item.private ? "Private" : "Public",
              year: item.created_at ? item.created_at.substring(0, 4) : String(new Date(item.updated_at).getFullYear()),
            };
          });
          setRepos(mappedRepos);
        } else {
          // If 0 repos, use fallback
          setRepos(fallbackRepos);
        }
      } catch (err) {
        console.error("Error fetching live repos, falling back to mock data", err);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [personal.githubUsername, fallbackRepos]);

  // Language color lookup helper
  function getLanguageColor(lang: string | null): string {
    if (!lang) return "#89E051";
    const colors: Record<string, string> = {
      Python: "#3572A5",
      TypeScript: "#3178C6",
      JavaScript: "#F1E05A",
      Go: "#00ADD8",
      Rust: "#DEA584",
      Shell: "#89E051",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Ruby: "#701516",
      PHP: "#4F5D95",
      Java: "#b07219",
      "C++": "#f34b7d",
      "C#": "#178600",
    };
    return colors[lang] || "#858585";
  }

  // Formatting date string helper
  function formatUpdatedDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 1) return "today";
      if (diffDays === 2) return "yesterday";
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      return `${Math.floor(diffDays / 30)} months ago`;
    } catch {
      return "recently";
    }
  }

  const languages = useMemo(() => {
    const langs = new Set(repos.map((r) => r.language).filter(Boolean));
    return Array.from(langs);
  }, [repos]);

  const filtered = useMemo(() => {
    let result = [...repos];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          (r.topics && r.topics.some((t) => t.toLowerCase().includes(q)))
      );
    }

    if (languageFilter) {
      result = result.filter((r) => r.language === languageFilter);
    }

    result.sort((a, b) => {
      if (sortBy === "year") {
        const yA = (a as any).year || "0";
        const yB = (b as any).year || "0";
        if (yA !== yB) return yB.localeCompare(yA);
        return b.stars - a.stars;
      }
      if (sortBy === "stars") return b.stars - a.stars;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0; // updated — keep fetched order
    });

    return result;
  }, [repos, search, languageFilter, sortBy]);

  return (
    <div className="space-y-4">
      {/* Search & filters bar */}
      <motion.div
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Search input */}
        <div className="flex flex-1 items-center rounded-md border border-border-default bg-bg-primary px-3 py-1.5 transition-colors focus-within:border-accent-blue focus-within:shadow-[0_0_0_3px_rgba(88,166,255,0.1)]">
          <svg className="mr-2 h-4 w-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Find a repository..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-text-primary placeholder-text-tertiary outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          {/* Language dropdown */}
          <select
            value={languageFilter || ""}
            onChange={(e) => setLanguageFilter(e.target.value || null)}
            className="rounded-md border border-border-default bg-bg-secondary px-3 py-1.5 text-sm text-text-primary outline-none transition-colors hover:border-border-hover focus:border-accent-blue"
          >
            <option value="">Language</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          {/* Sort dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "stars" | "updated" | "name" | "year")}
            className="rounded-md border border-border-default bg-bg-secondary px-3 py-1.5 text-sm text-text-primary outline-none transition-colors hover:border-border-hover focus:border-accent-blue"
          >
            <option value="year">Sort: Year</option>
            <option value="stars">Sort: Stars</option>
            <option value="name">Sort: Name</option>
            <option value="updated">Sort: Updated</option>
          </select>
        </div>
      </motion.div>

      {/* Results count / loading */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent-blue border-t-transparent" />
          <span className="ml-3 text-sm text-text-secondary">Syncing with GitHub live profile...</span>
        </div>
      ) : (
        <>
          <p className="text-sm text-text-secondary">
            <strong className="text-text-primary">{filtered.length}</strong> results for repositories
            {languageFilter && (
              <span> matching <strong className="text-text-primary">{languageFilter}</strong>
                <button onClick={() => setLanguageFilter(null)} className="ml-1 text-accent-blue hover:underline">clear</button>
              </span>
            )}
          </p>

          {/* Repository list */}
          <div className="divide-y divide-border-default border-t border-border-default">
            {filtered.map((repo, i) => (
              <div key={repo.id} className="py-6">
                <RepoCard repo={repo} index={i} variant="list" onSelect={setSelectedRepo} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-text-secondary">No repositories found.</p>
              <p className="text-sm text-text-tertiary">Try adjusting your search or filters.</p>
            </div>
          )}
        </>
      )}

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
