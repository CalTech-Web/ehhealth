"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TEAL = "#658B8B";
const NEAR_BLACK = "#111111";
const BORDER = "#DBDBDB";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-eh", label: "About EH" },
  { href: "/services", label: "Services" },
  { href: "/birth-and-beyond", label: "Birth and Beyond" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.82)" : "#fff",
        borderBottom: `1px solid ${BORDER}`,
        backdropFilter: scrolled ? "blur(18px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.05)",
        transition: "background-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" aria-label="EH Nursing and Wellness Services Home" className="flex items-center shrink-0">
          <Image
            src="/assets/logos/eh-logo.png"
            alt="EH Nursing and Wellness Services"
            width={2118}
            height={1021}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: NEAR_BLACK }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:8339123999"
            aria-label="Call (833) 912-3999"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border-2"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="tel:8339123999"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 lg:px-5 py-2.5 rounded-full border-2 transition-colors"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            Call (833) 912-3999
          </a>
          <Link
            href="/contact-us"
            className="hidden sm:inline-flex items-center text-sm font-bold px-4 lg:px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: TEAL, color: "#fff" }}
          >
            Apply Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border"
            style={{ borderColor: BORDER, color: NEAR_BLACK, backgroundColor: "#fff" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t" style={{ borderColor: BORDER, backgroundColor: "#fff" }}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold py-3 border-b"
                style={{ color: NEAR_BLACK, borderColor: BORDER }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="tel:8339123999"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full border-2"
                style={{ borderColor: TEAL, color: TEAL }}
              >
                Call (833) 912-3999
              </a>
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center text-sm font-bold py-3 rounded-full"
                style={{ backgroundColor: TEAL, color: "#fff" }}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
