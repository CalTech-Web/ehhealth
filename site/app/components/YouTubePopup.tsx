"use client";

import { useEffect, useState } from "react";

const VIDEO_ID = "i3nVuYZBsM4";
const STORAGE_KEY = "eh_yt_popup_seen";
const SHOW_DELAY_MS = 1500;

const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";

export default function YouTubePopup() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* sessionStorage blocked, show anyway */
    }
    const t = window.setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => setVisible(true));
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }, SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleClose() {
    setVisible(false);
    window.setTimeout(() => setOpen(false), 240);
  }

  if (!mounted || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome video"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      style={{
        backgroundColor: visible ? "rgba(10,10,10,0.78)" : "rgba(10,10,10,0)",
        backdropFilter: visible ? "blur(6px)" : "blur(0px)",
        WebkitBackdropFilter: visible ? "blur(6px)" : "blur(0px)",
        transition: "background-color 0.32s ease, backdrop-filter 0.32s ease",
      }}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
        style={{
          backgroundColor: "#fff",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.92) translateY(12px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.28s ease",
          boxShadow: "0 24px 70px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        <div
          className="px-6 sm:px-8 pt-6 pb-5"
          style={{ background: "linear-gradient(135deg, #658B8B 0%, #4a7575 100%)" }}
        >
          <span
            className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ backgroundColor: "rgba(215,247,247,0.25)", color: "#fff" }}
          >
            A Message From Nurse Ellen
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold leading-tight" style={{ color: "#fff" }}>
            Meet your Medi-Cal covered doula
          </h2>
          <p className="text-sm mt-1.5" style={{ color: "rgba(255,255,255,0.9)" }}>
            A quick introduction before you scroll.
          </p>
        </div>

        <div className="relative" style={{ backgroundColor: NEAR_BLACK }}>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&showinfo=0&autoplay=1&loop=1&playlist=${VIDEO_ID}&muted=1&controls=1&modestbranding=1`}
              title="EH Nursing and Wellness Services welcome video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div
          className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between"
          style={{ borderTop: `1px solid ${MINT}` }}
        >
          <p className="text-sm" style={{ color: "#444" }}>
            Ready to see if you qualify? It takes less than a minute.
          </p>
          <div className="flex gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="text-sm font-semibold px-4 py-2.5 rounded-full border-2 transition-colors"
              style={{ borderColor: TEAL, color: TEAL, backgroundColor: "transparent" }}
            >
              Keep Watching
            </button>
            <a
              href="/contact-us"
              onClick={handleClose}
              className="inline-flex items-center text-sm font-bold px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, color: "#fff" }}
            >
              Apply Now
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close video popup"
          className="absolute top-3 right-3 w-9 h-9 rounded-full inline-flex items-center justify-center transition-transform hover:scale-110"
          style={{
            backgroundColor: "rgba(255,255,255,0.95)",
            color: NEAR_BLACK,
            boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
