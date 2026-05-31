"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfPath: string;
}

export default function ResumeModal({ isOpen, onClose, pdfPath }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop with backdrop-filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 flex h-[90vh] w-full max-w-5xl flex-col rounded-lg border border-border-default bg-bg-secondary shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border-default bg-bg-tertiary px-4 py-3">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-semibold text-text-primary text-sm md:text-base">Resume Preview — Md Didarul Alam Alif</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={pdfPath}
                  download="Md_Didarul_Alam_Alif_Resume.pdf"
                  className="flex items-center gap-1.5 rounded bg-accent-blue px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-opacity-90 hover:shadow-[0_0_10px_rgba(88,166,255,0.4)]"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="rounded p-1 text-text-secondary hover:bg-bg-tertiary hover:text-text-primary transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Iframe View */}
            <div className="flex-1 bg-bg-primary p-2">
              <iframe
                src={`${pdfPath}#toolbar=0`}
                className="h-full w-full rounded border border-border-default bg-white"
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
