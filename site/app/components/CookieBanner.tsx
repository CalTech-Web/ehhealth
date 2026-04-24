"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "eh_cookie_consent";
const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";
const BORDER = "#DBDBDB";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* storage blocked, skip banner */
      return;
    }
    const t = window.setTimeout(() => {
      setShow(true);
      requestAnimationFrame(() => setVisible(true));
    }, 600);
    return () => window.clearTimeout(t);
  }, []);

  function close(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
    window.setTimeout(() => setShow(false), 280);
  }

  if (!mounted || !show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-md z-[90]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.28s ease, transform 0.28s ease",
      }}
    >
      <div
        className="rounded-2xl p-5 lg:p-6"
        style={{
          backgroundColor: "#fff",
          border: `1px solid ${BORDER}`,
          boxShadow: "0 20px 50px -12px rgba(0,0,0,0.22), 0 4px 12px -4px rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex items-start gap-3 mb-3">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${MINT} 0%, #fff 100%)`,
              color: TEAL,
              border: `1px solid ${MINT}`,
            }}
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a10 10 0 1 0 10 10 5 5 0 0 1-5-5 5 5 0 0 1-5-5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <circle cx="9" cy="10" r="1" fill="currentColor" />
              <circle cx="14" cy="14" r="1" fill="currentColor" />
              <circle cx="16" cy="9" r="1" fill="currentColor" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-bold leading-tight mb-1" style={{ color: NEAR_BLACK }}>
              We use cookies
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "#555" }}>
              We use cookies to analyze site traffic and improve your
              experience. By accepting, your data is aggregated with other
              visitor data. Read our{" "}
              <Link
                href="/privacy-policy-and-tos"
                className="underline"
                style={{ color: TEAL }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex gap-2.5 justify-end mt-4">
          <button
            type="button"
            onClick={() => close("declined")}
            className="text-xs font-semibold px-4 py-2 rounded-full border transition-colors"
            style={{ borderColor: BORDER, color: "#555", backgroundColor: "transparent" }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => close("accepted")}
            className="text-xs font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: TEAL, color: "#fff" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
