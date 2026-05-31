"use client";

import dynamic from "next/dynamic";
import GitHubNavbar from "@/components/layout/GitHubNavbar";
import ProfileSidebar from "@/components/layout/ProfileSidebar";
import ProfileTabs from "@/components/layout/ProfileTabs";

const CursorGlow = dynamic(
  () => import("@/components/effects/CursorGlow"),
  { ssr: false }
);

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary noise-overlay">
      <CursorGlow />
      <GitHubNavbar />

      <div className="mx-auto max-w-[1280px] px-4 py-6 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Sidebar — hidden on mobile below the tabs, visible on desktop */}
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>

          {/* Main content area */}
          <div className="min-w-0 flex-1">
            {/* Mobile sidebar summary */}
            <div className="mb-6 lg:hidden">
              <MobileSidebarSummary />
            </div>

            <ProfileTabs />
            <div className="py-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSidebarSummary() {
  const { portfolioData } = require("@/data/portfolio");
  const { personal } = portfolioData;

  return (
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border-default bg-bg-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={personal.profileImage}
          alt={personal.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = "none";
            if (t.parentElement) {
              t.parentElement.innerHTML = `<div class="flex h-full w-full items-center justify-center bg-bg-tertiary text-xl font-bold text-accent-blue">${personal.name.charAt(0)}</div>`;
            }
          }}
        />
      </div>
      <div>
        <h1 className="text-xl font-bold text-text-primary" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          {personal.name}
        </h1>
        <p className="text-sm text-text-secondary">{personal.username}</p>
      </div>
    </div>
  );
}
