"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, Certification } from "@/data/portfolio";

export default function CertificationsPage() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Helper to generate a mockup hash for the credential to enhance the cybersecurity theme
  const getMockHash = (id: string) => {
    const chars = "ABCDEF0123456789";
    let hash = "SHA-256::";
    for (let i = 0; i < 16; i++) {
      hash += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return hash;
  };

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
          Certifications & Credentials
        </h2>
        <p className="text-sm text-text-secondary">
          A list of my professional credentials, specialized training courses, and verified internship achievements. Click any certificate card to preview the digital verify credential record.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="group relative rounded-md border border-border-default bg-bg-primary p-5 cursor-pointer transition-all duration-300 hover:border-border-hover hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {/* Glowing Accent */}
            <div
              className="absolute top-0 left-0 w-1 h-full rounded-l-md transition-all duration-300 group-hover:h-full"
              style={{ backgroundColor: cert.color }}
            />

            <div className="flex items-start gap-4">
              {/* Icon Container */}
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border-default bg-bg-secondary text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ borderColor: `${cert.color}30` }}
              >
                {cert.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className="font-bold text-text-primary text-sm md:text-base leading-snug group-hover:text-accent-blue transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {cert.name}
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 text-[10px] text-accent-blue font-mono font-bold shrink-0 transition-opacity">
                    PREVIEW 🔍
                  </span>
                </div>
                <p className="text-xs md:text-sm text-text-secondary">{cert.issuer}</p>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-xs text-text-tertiary">
                  <span className="font-mono">{cert.date}</span>
                  {cert.credentialId && (
                    <>
                      <span>·</span>
                      <span className="font-mono text-text-tertiary/80">{cert.credentialId}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Certification Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-2xl rounded-lg border border-border-default bg-bg-secondary p-1 shadow-2xl overflow-hidden"
            >
              {/* Futuristic Cyber Badge Certificate Container */}
              <div className="rounded-lg bg-bg-primary p-6 md:p-8 border border-border-hover/50 relative overflow-hidden grid-bg">
                {/* Tech background decorations */}
                <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-text-tertiary pointer-events-none select-none">
                  SEC-DEPT::CLEARANCE-STATUS: APPROVED
                </div>
                
                {/* Top header */}
                <div className="flex justify-between items-start border-b border-border-default/50 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-[10px] text-accent-blue tracking-wider uppercase">Verified Security Credential</span>
                    <h2 className="text-xl font-extrabold text-text-primary mt-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      DIGITAL RECORD
                    </h2>
                  </div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-2xl"
                    style={{ backgroundColor: `${selectedCert.color}20`, border: `1px solid ${selectedCert.color}40` }}
                  >
                    {selectedCert.icon}
                  </div>
                </div>

                {/* Main certificate mockup contents */}
                <div className="space-y-6 text-center py-4">
                  <div className="text-xs uppercase tracking-widest text-text-tertiary font-mono">This digital badge certifies that</div>
                  <div className="text-2xl md:text-3xl font-bold text-white tracking-wide" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    Md Didarul Alam Alif
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed max-w-md mx-auto">
                    has successfully satisfied all requirements and is officially recognized for the accomplishment of the professional curriculum of
                  </div>
                  
                  {/* Certification Name Card */}
                  <div
                    className="inline-block px-6 py-3 rounded border bg-bg-secondary font-extrabold text-lg md:text-xl text-text-primary tracking-wide shadow-inner"
                    style={{ borderColor: `${selectedCert.color}40`, boxShadow: `inset 0 0 10px ${selectedCert.color}15` }}
                  >
                    {selectedCert.name}
                  </div>

                  <div className="text-sm font-semibold text-accent-blue">
                    Issued by: {selectedCert.issuer}
                  </div>
                </div>

                {/* Digital Verification Details */}
                <div className="mt-8 border-t border-border-default/50 pt-4 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 text-left">
                  <div className="font-mono text-[10px] space-y-1 text-text-tertiary">
                    <div>CREDENTIAL ID: <span className="text-text-secondary">{selectedCert.credentialId || "N/A"}</span></div>
                    <div>ISSUE DATE: <span className="text-text-secondary">{selectedCert.date}</span></div>
                    <div className="text-accent-green/80 overflow-hidden text-ellipsis whitespace-nowrap max-w-[320px]">
                      {getMockHash(selectedCert.id)}
                    </div>
                  </div>
                  
                  {/* Verification QR / Status badge */}
                  <div className="flex flex-wrap items-center gap-3 self-end md:self-auto">
                    <div className="border border-accent-green/30 bg-accent-green/10 rounded px-3 py-1.5 flex items-center gap-1.5 text-xs font-mono font-bold text-accent-green">
                      <span className="h-2 w-2 rounded-full bg-accent-green animate-ping" />
                      VERIFIED RECORD
                    </div>
                    {selectedCert.verifyUrl && (
                      <a
                        href={selectedCert.verifyUrl === "#" ? `/resume.pdf` : selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-accent-blue px-3 py-1.5 text-xs font-semibold text-white hover:bg-opacity-90 transition-all shadow-[0_0_10px_rgba(88,166,255,0.2)]"
                      >
                        Verify Online ↗
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="rounded bg-bg-tertiary border border-border-default px-3 py-1.5 text-xs font-semibold text-text-primary hover:border-border-hover transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
