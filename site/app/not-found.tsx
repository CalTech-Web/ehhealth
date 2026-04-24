import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";
const BODY_BG = "#F5F4F3";
const BORDER = "#DBDBDB";

export default function NotFound() {
  return (
    <div style={{ backgroundColor: BODY_BG, color: NEAR_BLACK, minHeight: "100vh" }}>
      <SiteHeader />
      <div id="main-content" tabIndex={-1} className="outline-none" />

      <section className="relative overflow-hidden" style={{ backgroundColor: MINT }}>
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-[24rem] h-[24rem] rounded-full blur-3xl"
          style={{ backgroundColor: TEAL, opacity: 0.18 }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-20 w-[22rem] h-[22rem] rounded-full blur-3xl"
          style={{ backgroundColor: "#fff", opacity: 0.55 }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.22em] mb-5 inline-flex items-center gap-3"
            style={{ color: TEAL }}
          >
            <span className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} aria-hidden="true" />
            Error 404
            <span className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} aria-hidden="true" />
          </p>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ color: NEAR_BLACK, fontSize: "clamp(2.3rem, 5.5vw, 4.25rem)" }}
          >
            This page took an{" "}
            <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
              unexpected detour.
            </span>
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: "#333" }}>
            The page you were looking for does not exist or may have moved. Let
            us help you find your way.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-base px-7 py-3.5 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, color: "#fff" }}
            >
              Go Home
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="tel:8339123999"
              className="inline-flex items-center gap-2 font-bold text-base px-7 py-3.5 rounded-full border-2 transition-colors"
              style={{ borderColor: TEAL, color: TEAL }}
            >
              Call (833) 912-3999
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: TEAL }}>
            Where to next
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-8 tracking-tight" style={{ color: NEAR_BLACK }}>
            Popular pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/about-eh", title: "About EH", desc: "Meet Nurse Ellen and her philosophy." },
              { href: "/services", title: "Services", desc: "Nine Medi-Cal covered services." },
              { href: "/birth-and-beyond", title: "Birth and Beyond", desc: "Free LA pregnancy resources." },
              { href: "/contact-us", title: "Contact Us", desc: "Check your Medi-Cal coverage." },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-2xl p-5 border transition-all hover:-translate-y-1"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <p className="text-base font-bold mb-1 flex items-center gap-2" style={{ color: NEAR_BLACK }}>
                  {l.title}
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1" style={{ color: TEAL }}>
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                  {l.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
