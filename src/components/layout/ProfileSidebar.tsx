"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import ResumeModal from "@/components/ui/ResumeModal";

export default function ProfileSidebar() {
  const { personal, repositories } = portfolioData;
  const totalStars = repositories.reduce((sum, r) => sum + r.stars, 0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <aside className="w-full shrink-0 lg:w-[296px]">
      <div className="sticky top-[65px] space-y-4 pb-8">
        {/* Avatar */}
        <motion.div
          className="relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="group relative mx-auto h-[296px] w-[296px] lg:mx-0">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-accent-blue/40 via-accent-green/30 to-accent-purple/40 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-border-default bg-bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                  if (t.parentElement) {
                    t.parentElement.innerHTML = `<div class="flex h-full w-full items-center justify-center bg-bg-tertiary text-6xl font-bold text-accent-blue" style="font-family: var(--font-space-grotesk)">${personal.name.charAt(0)}</div>`;
                  }
                }}
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full border-[3px] border-bg-primary bg-accent-green" />
          </div>
        </motion.div>

        {/* Name & username */}
        <div>
          <h1
            className="text-2xl font-bold leading-tight text-text-primary"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {personal.name}
          </h1>
          <p className="text-xl font-light text-text-secondary">{personal.username}</p>
        </div>

        {/* Status / Current Work Banner */}
        <div className="flex items-center gap-2 rounded-md border border-accent-blue/30 bg-accent-blue/5 p-2.5 text-xs text-text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
          </span>
          <span>
            Currently Working as <strong className="text-accent-blue">{personal.currentRole}</strong> @ <strong className="text-text-primary">{personal.company}</strong>
          </span>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-text-secondary">{personal.bio}</p>

        {/* Resume Actions */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-accent-blue px-4 py-1.5 text-sm font-semibold text-white transition-all hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(88,166,255,0.4)]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Resume
          </button>

          <a
            href={personal.resumePath}
            download="Md_Didarul_Alam_Alif_Resume.pdf"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-border-default bg-bg-tertiary px-4 py-1.5 text-sm font-medium text-text-primary transition-all hover:border-border-hover hover:bg-border-default"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Follower stats */}
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          <span>
            <strong className="text-text-primary">{personal.followers}</strong> followers
          </span>
          <span>·</span>
          <span>
            <strong className="text-text-primary">{personal.following}</strong> following
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
            </svg>
            <strong className="text-text-primary">{totalStars}</strong>
          </span>
        </div>

        {/* Details */}
        <div className="space-y-1.5 border-t border-border-default pt-4">
          {personal.location && (
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {personal.location}
            </div>
          )}
          {personal.email && (
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href={`mailto:${personal.email}`} className="transition-colors hover:text-accent-blue">{personal.email}</a>
            </div>
          )}
          {personal.website && (
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.507a4.5 4.5 0 00-6.364-6.364L4.5 8.257a4.5 4.5 0 006.364 6.364l1.757-1.757" />
              </svg>
              <a href={personal.website} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-blue">{personal.website.replace("https://", "").replace("http://", "")}</a>
            </div>
          )}
          {personal.socials.github && (
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-blue">{personal.socials.github.replace("https://", "")}</a>
            </div>
          )}
          {personal.socials.linkedin && (
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-blue">{personal.socials.linkedin.replace("https://", "").replace("www.", "")}</a>
            </div>
          )}
        </div>

        {/* Achievements / Badges */}
        <div className="border-t border-border-default pt-4">
          <h3 className="mb-2 text-sm font-semibold text-text-primary">Achievements</h3>
          <div className="flex flex-wrap gap-2">
            {["🛡️ Security Pro", "🔥 Streak Master", "⭐ Open Source", "🎯 Red Team"].map((badge) => (
              <span key={badge} className="rounded-full border border-border-default bg-bg-tertiary px-2.5 py-1 text-xs text-text-secondary transition-colors hover:border-accent-blue hover:text-text-primary">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfPath={personal.resumePath}
      />
    </aside>
  );
}
