"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function ContactPage() {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "db002ffe-48d4-4356-9f9e-64b8c91ae3f2",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Contact: Message from ${formState.name}`,
          from_name: "Portfolio Contact Form",
          to: personal.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg font-semibold text-text-primary" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Get in Touch
        </h2>
        <p className="mt-1 text-sm text-text-secondary">
          Interested in collaboration, security consulting, or just want to say hello?
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Contact info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="rounded-md border border-border-default bg-bg-primary p-5">
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Contact Information</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-3 rounded-md border border-border-default bg-bg-secondary p-3 transition-all hover:border-accent-blue"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-blue/10 text-accent-blue">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-tertiary">Email</p>
                  <p className="text-sm text-text-primary group-hover:text-accent-blue">{personal.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-md border border-border-default bg-bg-secondary p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-green/10 text-accent-green">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-tertiary">Location</p>
                  <p className="text-sm text-text-primary">{personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="rounded-md border border-border-default bg-bg-primary p-5">
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Social Profiles</h3>
            <div className="space-y-2">
              {[
                { name: "GitHub", url: personal.socials.github, icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg> },
                { name: "LinkedIn", url: personal.socials.linkedin, icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                { name: "X (Twitter)", url: personal.socials.twitter, icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-md border border-border-default bg-bg-secondary p-3 transition-all hover:border-accent-blue"
                >
                  <span className="text-text-secondary transition-colors group-hover:text-accent-blue">{social.icon}</span>
                  <span className="text-sm text-text-primary group-hover:text-accent-blue">{social.name}</span>
                  <svg className="ml-auto h-4 w-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-border-default bg-bg-primary p-5"
          >
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Send a message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-text-secondary">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-md border border-border-default bg-bg-secondary px-3 py-2 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(88,166,255,0.1)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-text-secondary">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-md border border-border-default bg-bg-secondary px-3 py-2 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(88,166,255,0.1)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-text-secondary">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none rounded-md border border-border-default bg-bg-secondary px-3 py-2 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(88,166,255,0.1)]"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-all disabled:opacity-60 ${status === "error"
                    ? "bg-accent-red text-white"
                    : status === "sent"
                      ? "bg-accent-green text-bg-primary"
                      : "bg-accent-green text-bg-primary hover:bg-accent-green/90"
                  }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    Sending...
                  </span>
                )}
                {status === "sent" && "✓ Message sent successfully!"}
                {status === "error" && "✕ Failed to send"}
              </motion.button>
              {status === "error" && errorMsg && (
                <p className="text-xs text-accent-red mt-1">{errorMsg}</p>
              )}
              <p className="text-xs text-text-tertiary">
                Your message will be sent directly to my email — no redirects.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
