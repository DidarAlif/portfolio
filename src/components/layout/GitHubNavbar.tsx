"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import DAALogo from "@/components/ui/DAALogo";

type DropdownType = "plus" | null;

export default function GitHubNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { personal } = portfolioData;

  // Initialize theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDropdown = (type: DropdownType) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
  };

  const executeSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeSearch();
    }
  };

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Repositories", href: "/repositories" },
    { label: "Projects", href: "/projects" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact Me", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-bg-secondary/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 lg:px-6">
        {/* Left: Logo + nav links */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-text-primary transition-opacity hover:opacity-80" aria-label="Home">
            <DAALogo size={32} />
          </Link>

          {/* Search bar */}
          <div className="hidden md:block">
            <div className="flex items-center rounded-md border border-border-default bg-bg-primary px-3 py-1.5 transition-colors focus-within:border-accent-blue focus-within:shadow-[0_0_0_3px_rgba(88,166,255,0.1)]">
              <button
                onClick={executeSearch}
                className="mr-2 text-text-tertiary hover:text-accent-blue transition-colors cursor-pointer"
                title="Search globally on the web"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search web globally..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchSubmit}
                className="w-[240px] bg-transparent text-sm text-text-primary placeholder-text-tertiary outline-none"
              />
              <span className="ml-2 rounded border border-border-default px-1.5 py-0.5 text-[10px] text-text-tertiary">⏎</span>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 lg:flex flex-wrap">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredTab(item.label)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <Link
                  href={item.href}
                  className="inline-block rounded-md px-2.5 py-1 text-xs font-semibold text-text-primary transition-colors hover:bg-bg-tertiary"
                >
                  {item.label}
                </Link>

                <AnimatePresence>
                  {hoveredTab === item.label && ["Overview", "Experience", "Skills", "Projects"].includes(item.label) && (
                    <motion.div
                      className="absolute left-0 top-full mt-1.5 w-64 rounded-lg border border-border-default bg-bg-secondary/95 p-4 shadow-xl z-50 text-xs backdrop-blur-md"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                    >
                      {item.label === "Overview" && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-accent-green mb-1">{portfolioData.navFeatures.contributions.title}</h4>
                          <p className="text-text-secondary leading-relaxed">
                            Active open-source developer focusing on security automation and scripting tools.
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-text-tertiary">
                            {portfolioData.navFeatures.contributions.items.map((it, idx) => (
                              <li key={idx}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.label === "Experience" && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-accent-blue mb-1">{portfolioData.navFeatures.problemSolving.title}</h4>
                          <p className="text-text-secondary leading-relaxed">
                            Hands-on VAPT audits, system engineering, and core network configurations.
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-text-tertiary">
                            {portfolioData.navFeatures.problemSolving.items.map((it, idx) => (
                              <li key={idx}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.label === "Skills" && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-accent-purple mb-1">{portfolioData.navFeatures.toolkit.title}</h4>
                          <p className="text-text-secondary mb-1">My core operational tools and systems:</p>
                          <div className="flex flex-wrap gap-1">
                            {portfolioData.navFeatures.toolkit.tools.slice(0, 6).map((t) => (
                              <span key={t.name} className="rounded bg-bg-tertiary px-1.5 py-0.5 border border-border-default font-mono text-[10px]" title={t.category}>
                                {t.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {item.label === "Projects" && (
                        <div className="space-y-2">
                          <h4 className="font-bold text-accent-orange mb-1">{portfolioData.navFeatures.research.title}</h4>
                          <p className="text-text-secondary leading-relaxed">
                            Authoring detailed research papers, thesis papers, and security documentation.
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-text-tertiary">
                            {portfolioData.navFeatures.research.items.slice(0, 2).map((it, idx) => (
                              <li key={idx} className="truncate max-w-[200px]" title={it}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3" ref={dropdownRef}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="rounded-md p-1.5 text-text-primary transition-colors hover:bg-bg-tertiary cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="h-5 w-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>



          {/* Plus icon — Command Center */}
          <div className="relative hidden md:block">
            <button
              onClick={() => toggleDropdown("plus")}
              className="flex items-center rounded-md p-1.5 text-text-primary transition-colors hover:bg-bg-tertiary"
              aria-label="Command Center"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <svg className="ml-0.5 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {activeDropdown === "plus" && (
                <motion.div
                  className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-border-default bg-bg-secondary/95 shadow-2xl shadow-black/40 backdrop-blur-lg z-50"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="border-b border-border-default px-4 py-3">
                    <h3 className="text-sm font-semibold text-text-primary">Quick Actions</h3>
                  </div>
                  <div className="p-2">
                    {[
                      { icon: "📄", label: "Download Resume", action: "resume" },
                      { icon: "✉️", label: "Contact Me", action: "contact" },
                      { icon: "🔗", label: "View GitHub", action: "github" },
                      { icon: "💼", label: "LinkedIn Profile", action: "linkedin" },
                    ].map((item, i) => (
                      <motion.a
                        key={item.action}
                        href={
                          item.action === "resume" ? "/resume.pdf" :
                          item.action === "contact" ? "/contact" :
                          item.action === "github" ? personal.socials.github :
                          personal.socials.linkedin
                        }
                        download={item.action === "resume" ? true : undefined}
                        target={item.action === "github" || item.action === "linkedin" ? "_blank" : undefined}
                        rel={item.action === "github" || item.action === "linkedin" ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition-colors hover:bg-bg-tertiary/50"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span>{item.icon}</span>
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                  <div className="border-t border-border-default bg-bg-primary/50 px-4 py-2">
                    <p className="font-mono text-[10px] text-text-tertiary">
                      Press <span className="rounded border border-border-default px-1 text-text-secondary">⌘K</span> for command palette
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>



          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center rounded-md p-1.5 text-text-primary transition-colors hover:bg-bg-tertiary md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="border-t border-border-default bg-bg-secondary md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              <div className="mb-2 flex items-center rounded-md border border-border-default bg-bg-primary px-3 py-2">
                <button
                  onClick={executeSearch}
                  className="mr-2 text-text-tertiary hover:text-accent-blue transition-colors cursor-pointer"
                  title="Search globally on the web"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Search web globally..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  className="w-full bg-transparent text-sm text-text-primary placeholder-text-tertiary outline-none"
                />
              </div>
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-text-primary hover:bg-bg-tertiary"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center gap-2 rounded-md bg-accent-blue/10 px-3 py-2 text-sm font-medium text-accent-blue"
              >
                📄 Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
