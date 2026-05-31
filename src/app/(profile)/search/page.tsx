"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import { portfolioData, Repository, DocumentationRepo } from "@/data/portfolio";
import RepoCard from "@/components/ui/RepoCard";
import ProjectModal from "@/components/ui/ProjectModal";
import Link from "next/link";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  const results = useMemo(() => {
    if (!query.trim()) {
      return { repos: [], docs: [], skills: [], experience: [], certs: [], totalCount: 0 };
    }
    const q = query.toLowerCase();

    // 1. Search Repositories
    const repos = portfolioData.repositories.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        (r.topics && r.topics.some((t) => t.toLowerCase().includes(q))) ||
        r.language.toLowerCase().includes(q)
    );

    // 2. Search Documentation/Projects
    const docs = portfolioData.documentationRepos.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q)) ||
        d.category.toLowerCase().includes(q)
    );

    // 3. Search Skills
    const skills: { name: string; category: string; level: number }[] = [];
    Object.entries(portfolioData.skills).forEach(([category, list]) => {
      list.forEach((skill) => {
        if (skill.name.toLowerCase().includes(q) || category.toLowerCase().includes(q)) {
          skills.push({ ...skill, category });
        }
      });
    });

    // 4. Search Experience
    const experience = portfolioData.experience.filter(
      (e) =>
        e.role.toLowerCase().includes(q) ||
        e.company.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.responsibilities.some((r) => r.toLowerCase().includes(q)) ||
        e.techUsed.some((t) => t.toLowerCase().includes(q))
    );

    // 5. Search Certifications
    const certs = portfolioData.certifications.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        (c.credentialId && c.credentialId.toLowerCase().includes(q))
    );

    const totalCount = repos.length + docs.length + skills.length + experience.length + certs.length;

    return { repos, docs, skills, experience, certs, totalCount };
  }, [query]);

  return (
    <div className="space-y-6">
      <motion.div
        className="rounded-md border border-border-default bg-bg-primary p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold text-text-primary mb-2 font-space-grotesk">
          Search Results
        </h2>
        <p className="text-sm text-text-secondary">
          Showing <strong className="text-text-primary">{results.totalCount}</strong> results for &ldquo;<strong className="text-accent-blue">{query}</strong>&rdquo; across the portfolio.
        </p>
      </motion.div>

      {results.totalCount === 0 ? (
        <div className="rounded-md border border-border-default bg-bg-primary p-12 text-center text-text-secondary">
          <p className="text-base mb-2">No local results found matching your query</p>
          <p className="text-xs text-text-tertiary">
            Try searching for terms like &ldquo;VAPT&rdquo;, &ldquo;Next.js&rdquo;, &ldquo;Cisco&rdquo;, or &ldquo;Python&rdquo;.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Skills results */}
          {results.skills.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-primary border-b border-border-default pb-2">
                Skills ({results.skills.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {results.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-md border border-border-default bg-bg-secondary px-3 py-1.5 text-xs text-text-primary flex items-center gap-2"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[10px] text-text-tertiary font-mono">({skill.category})</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Repositories results */}
          {results.repos.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-primary border-b border-border-default pb-2">
                Repositories ({results.repos.length})
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {results.repos.map((repo, i) => (
                  <RepoCard key={repo.id} repo={repo} index={i} onSelect={setSelectedRepo} />
                ))}
              </div>
            </div>
          )}

          {/* Projects/Documents results */}
          {results.docs.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-primary border-b border-border-default pb-2">
                Projects & Documentation ({results.docs.length})
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {results.docs.map((doc) => (
                  <div
                    key={doc.id}
                    className="rounded-md border border-border-default bg-bg-primary p-4 hover:border-accent-blue transition-all"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="text-sm font-bold text-text-primary">{doc.title}</h4>
                      <span className="rounded bg-accent-blue/10 border border-accent-blue/20 px-2 py-0.5 text-[10px] text-accent-blue">{doc.category}</span>
                    </div>
                    <p className="text-xs text-text-secondary mb-3 line-clamp-2">{doc.description}</p>
                    <div className="flex justify-between items-center text-[10px] font-mono text-text-tertiary">
                      <span>{doc.date}</span>
                      <Link href="/projects" className="text-accent-blue hover:underline">View in projects ↗</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience results */}
          {results.experience.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-primary border-b border-border-default pb-2">
                Work History ({results.experience.length})
              </h3>
              <div className="space-y-3">
                {results.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-md border border-border-default bg-bg-primary p-4 hover:border-accent-blue transition-all"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-text-primary">{exp.role}</h4>
                        <p className="text-xs text-text-secondary">{exp.company} · {exp.location}</p>
                      </div>
                      <span className="font-mono text-[10px] text-text-tertiary">{exp.period}</span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2 line-clamp-2">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.techUsed.map((t) => (
                        <span key={t} className="rounded bg-bg-secondary px-1.5 py-0.5 border border-border-default text-[9px] text-text-tertiary font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications results */}
          {results.certs.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-primary border-b border-border-default pb-2">
                Certifications ({results.certs.length})
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {results.certs.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-md border border-border-default bg-bg-primary p-4 hover:border-accent-blue transition-all flex items-center gap-3"
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-text-primary truncate">{cert.name}</h4>
                      <p className="text-[10px] text-text-secondary truncate">{cert.issuer}</p>
                      <p className="text-[9px] text-text-tertiary font-mono mt-0.5">{cert.date}</p>
                    </div>
                    <Link href="/certifications" className="text-[10px] text-accent-blue hover:underline shrink-0">Preview ↗</Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Repo Preview Modal */}
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

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-12">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent-blue border-t-transparent" />
        <span className="ml-3 text-sm text-text-secondary">Loading search results...</span>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
