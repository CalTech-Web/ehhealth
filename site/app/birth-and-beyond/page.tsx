import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Birth and Beyond | Pregnancy and Postpartum Resources in Los Angeles",
  description:
    "Trusted Los Angeles pregnancy and postpartum resources: county programs, free and low-cost support, and community organizations. Plus nurse-led doula care from EH Nursing.",
  alternates: { canonical: "https://ehhealth.org/birth-and-beyond" },
  openGraph: {
    title: "Birth and Beyond | Pregnancy and Postpartum Resources",
    description:
      "Curated LA pregnancy and postpartum resources, plus nurse-led Medi-Cal covered doula care.",
    url: "https://ehhealth.org/birth-and-beyond",
    type: "website",
  },
};

const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";
const BODY_BG = "#F5F4F3";
const BORDER = "#DBDBDB";

const iconStroke = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const resources = [
  {
    num: "01",
    tag: "Public Health",
    title: "LA County Department of Public Health, MCAH",
    subtitle: "Maternal, Child, and Adolescent Health",
    desc: "Supports mother and infant health through prenatal care coordination, breastfeeding support, and health education.",
    phone: "(213) 639-6417",
    phoneHref: "tel:2136396417",
    website: "publichealth.lacounty.gov/mch/",
    websiteHref: "https://publichealth.lacounty.gov/mch/",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path d="M16 3l10 3v9c0 6.2-4.2 11.5-10 14-5.8-2.5-10-7.8-10-14V6l10-3z" {...iconStroke} />
        <path d="M16 11v8M12 15h8" {...iconStroke} />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "Home Visits",
    title: "Welcome Baby Program",
    subtitle: "Free pregnancy and early parenting support",
    desc: "Free pregnancy and early parenting support at participating hospitals. Services include home visits by nurses and parent coaches, and newborn care education.",
    website: "welcomebabysupport.org",
    websiteHref: "https://welcomebabysupport.org",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path d="M6 14l10-8 10 8v12H6z" {...iconStroke} />
        <circle cx="16" cy="19" r="3" {...iconStroke} />
        <path d="M13 22v3h6v-3" {...iconStroke} />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "Prenatal Care",
    title: "Mama's Neighborhood",
    subtitle: "LA County Health Services",
    desc: "Affordable prenatal care, pregnancy classes, breastfeeding consultation, and postpartum support.",
    phone: "(844) 376-2627",
    phoneHref: "tel:8443762627",
    extra: "Abortion Care: (877) 227-3121",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <circle cx="16" cy="11" r="4" {...iconStroke} />
        <path d="M9 27v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" {...iconStroke} />
        <path d="M20 11h5M22.5 8.5v5" {...iconStroke} />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "In-Home Support",
    title: "Nurse-Family Partnership",
    subtitle: "Free in-home support for first-time mothers",
    desc: "Free in-home support for first-time mothers from pregnancy through the child's second birthday.",
    phone: "844-637-6667",
    phoneHref: "tel:8446376667",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path d="M16 27s-9-5.5-9-13a5.5 5.5 0 0 1 9-4.2A5.5 5.5 0 0 1 25 14c0 7.5-9 13-9 13z" {...iconStroke} />
        <path d="M12 14l2.5 2.5L20 11" {...iconStroke} />
      </svg>
    ),
  },
  {
    num: "05",
    tag: "Referrals",
    title: "211 LA County",
    subtitle: "Immediate service referrals",
    desc: "Call 211 for immediate service referrals across LA County, including prenatal, postpartum, and family support services.",
    phone: "2-1-1 or (800) 339-6993",
    phoneHref: "tel:8003396993",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A17.9 17.9 0 0 1 4 6.2 2 2 0 0 1 6 4h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6.2.7.1 1.5-.5 2l-1.3 1.3a14.4 14.4 0 0 0 5.4 5.4l1.3-1.3a1.9 1.9 0 0 1 2-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" {...iconStroke} />
      </svg>
    ),
  },
];

const quickTips = [
  {
    tip: "Start with county-backed programs for free, reliable care.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" {...iconStroke} />
      </svg>
    ),
  },
  {
    tip: "Call 211 LA County for immediate service referrals.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A17.9 17.9 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6.2.7.1 1.5-.5 2L7.8 9.6a14.4 14.4 0 0 0 6.6 6.6l1.3-1.3a1.9 1.9 0 0 1 2-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" {...iconStroke} />
      </svg>
    ),
  },
  {
    tip: "Keep your Medi-Cal card, due date, and provider list in one folder.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" {...iconStroke} />
      </svg>
    ),
  },
  {
    tip: "If a program has a waitlist, ask for a temporary referral in the meantime.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <circle cx="12" cy="12" r="9" {...iconStroke} />
        <path d="M12 7v5l3 2" {...iconStroke} />
      </svg>
    ),
  },
];

export default function BirthAndBeyondPage() {
  return (
    <div style={{ backgroundColor: BODY_BG, color: NEAR_BLACK, minHeight: "100vh" }}>
      <SiteHeader />

      {/* HERO */}
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-3">
            <p
              className="text-sm font-semibold uppercase tracking-[0.22em] mb-5 flex items-center gap-3"
              style={{ color: TEAL }}
            >
              <span aria-hidden="true" className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} />
              Birth and Beyond
            </p>
            <h1
              className="font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ color: NEAR_BLACK, fontSize: "clamp(2.3rem, 5.5vw, 4.25rem)" }}
            >
              Pregnancy and postpartum{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                resources
              </span>{" "}
              for LA.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-7 max-w-2xl" style={{ color: "#333" }}>
              Trusted resources for expectant mothers in Los Angeles. Official
              county programs and reputable community organizations offering
              free or low-cost support.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Free Programs", "County Backed", "Home Visits", "Abortion Care", "211 Referrals"].map((c) => (
                <span
                  key={c}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.85)", color: TEAL, border: `1px solid ${TEAL}` }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 relative">
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full hidden sm:block"
              style={{ backgroundColor: "#fff", opacity: 0.8 }}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full hidden sm:block"
              style={{ backgroundColor: TEAL, opacity: 0.2 }}
            />
            <div
              className="relative rounded-[28px] overflow-hidden aspect-square"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 30px 60px -20px rgba(101,139,139,0.35), 0 12px 30px -12px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/assets/gallery/about-1.png"
                alt="Doula supporting a mother during labor"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-6"
                priority
              />
            </div>
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 px-5 py-3 rounded-2xl flex items-center gap-3 whitespace-nowrap"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 10px 24px -8px rgba(0,0,0,0.18)",
                border: `1px solid ${BORDER}`,
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: TEAL }}
                aria-hidden="true"
              />
              <div className="leading-tight">
                <p className="text-sm font-bold" style={{ color: NEAR_BLACK }}>
                  5 Resources
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: TEAL }}>
                  Verified for LA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-10 -left-28 w-[24rem] h-[24rem] rounded-full blur-3xl"
          style={{ backgroundColor: MINT, opacity: 0.5 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 flex items-center gap-3" style={{ color: TEAL }}>
              <span aria-hidden="true" className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} />
              Government and County Programs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: NEAR_BLACK }}>
              Free and low-cost care{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                across LA County.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {resources.map((r) => (
              <article
                key={r.title}
                className="relative rounded-3xl p-7 lg:p-8 border why-card flex flex-col"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${TEAL}, transparent)`,
                    opacity: 0.6,
                  }}
                />
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${MINT} 0%, #fff 100%)`,
                      color: TEAL,
                      border: `1px solid ${MINT}`,
                      boxShadow: "0 6px 18px rgba(101,139,139,0.18)",
                    }}
                  >
                    {r.icon}
                  </div>
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: TEAL, opacity: 0.55 }}
                  >
                    {r.num}
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: TEAL }}>
                  {r.tag}
                </p>
                <h3 className="text-lg lg:text-xl font-bold mb-1 leading-tight" style={{ color: NEAR_BLACK }}>
                  {r.title}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: TEAL }}>
                  {r.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#555" }}>
                  {r.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-2.5 text-sm">
                  {r.phone && (
                    <a
                      href={r.phoneHref}
                      className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-full border-2"
                      style={{ borderColor: TEAL, color: TEAL }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {r.phone}
                    </a>
                  )}
                  {r.website && (
                    <a
                      href={r.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-full"
                      style={{ backgroundColor: MINT, color: NEAR_BLACK }}
                    >
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M8 4H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" {...iconStroke} />
                        <path d="M12 3h5v5M9 11l8-8" {...iconStroke} />
                      </svg>
                      {r.website}
                    </a>
                  )}
                </div>
                {r.extra && (
                  <p className="text-xs mt-3" style={{ color: "#666" }}>
                    {r.extra}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK TIPS */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: MINT }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 flex items-center gap-3" style={{ color: TEAL }}>
              <span aria-hidden="true" className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} />
              Quick Tips
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: NEAR_BLACK }}>
              How to use these resources{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                well.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {quickTips.map((t) => (
              <div
                key={t.tip}
                className="rounded-2xl p-6 border flex gap-4 items-start"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${MINT} 0%, #fff 100%)`,
                    color: TEAL,
                    border: `1px solid ${MINT}`,
                  }}
                >
                  {t.icon}
                </div>
                <p className="text-sm lg:text-base leading-relaxed pt-1" style={{ color: "#444" }}>
                  {t.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE BAND */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-1">
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full hidden sm:block"
                aria-hidden="true"
                style={{ backgroundColor: MINT, opacity: 0.75 }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full hidden sm:block"
                aria-hidden="true"
                style={{ backgroundColor: TEAL, opacity: 0.18 }}
              />
              <div
                className="relative rounded-[28px] overflow-hidden aspect-square"
                style={{
                  backgroundColor: "#fff",
                  boxShadow:
                    "0 30px 60px -20px rgba(101,139,139,0.45), 0 12px 30px -12px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src="/assets/gallery/about-2.png"
                  alt="Doula helping a pregnant mother during labor"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
            </div>
            <div className="order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 flex items-center gap-3" style={{ color: TEAL }}>
                <span aria-hidden="true" className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} />
                About EH Nursing
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-5" style={{ color: NEAR_BLACK }}>
                Nurse-led doula care that{" "}
                <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                  comes to you.
                </span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed mb-6" style={{ color: "#444" }}>
                Alongside these public resources, Nurse Ellen offers calm, caring
                support through pregnancy, birth, and postpartum, with emotional
                guidance, practical help, and wellness support covered by
                Medi-Cal for qualifying families.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ backgroundColor: TEAL, color: "#fff" }}
                >
                  See All Services
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/about-eh"
                  className="inline-flex items-center font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors"
                  style={{ borderColor: TEAL, color: TEAL }}
                >
                  Meet Nurse Ellen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: NEAR_BLACK }}>
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-20 w-[24rem] h-[24rem] rounded-full blur-3xl"
          style={{ backgroundColor: TEAL, opacity: 0.28 }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 inline-flex items-center gap-3" style={{ color: MINT }}>
            <span className="inline-block w-10 h-px" style={{ backgroundColor: MINT }} aria-hidden="true" />
            Need more support
            <span className="inline-block w-10 h-px" style={{ backgroundColor: MINT }} aria-hidden="true" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight" style={{ color: "#fff" }}>
            Questions about a{" "}
            <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: MINT }}>
              resource or program?
            </span>
          </h2>
          <p className="text-base lg:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: "#bbb" }}>
            Call us any time during business hours. We can help you figure out
            where to start and what your Medi-Cal covers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: MINT, color: NEAR_BLACK }}
            >
              Contact Us
            </Link>
            <a
              href="tel:8339123999"
              className="inline-flex items-center gap-3 font-bold text-base pl-3 pr-6 py-3 rounded-full border-2 transition-colors"
              style={{ borderColor: MINT, color: MINT }}
            >
              <span
                className="w-10 h-10 rounded-full inline-flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: MINT, color: NEAR_BLACK }}
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    fill="currentColor"
                    fillOpacity="0.2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Call (833) 912-3999
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
