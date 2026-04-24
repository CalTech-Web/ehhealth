import type { Metadata } from "next";
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

const resources = [
  {
    title: "LA County Department of Public Health, MCAH",
    subtitle: "Maternal, Child, and Adolescent Health",
    desc: "Supports mother and infant health through prenatal care coordination, breastfeeding support, and health education.",
    phone: "(213) 639-6417",
    phoneHref: "tel:2136396417",
    website: "publichealth.lacounty.gov/mch/",
    websiteHref: "https://publichealth.lacounty.gov/mch/",
  },
  {
    title: "Welcome Baby Program",
    subtitle: "Free pregnancy and early parenting support",
    desc: "Free pregnancy and early parenting support at participating hospitals. Services include home visits by nurses and parent coaches, and newborn care education.",
    website: "welcomebabysupport.org",
    websiteHref: "https://welcomebabysupport.org",
  },
  {
    title: "Mama's Neighborhood",
    subtitle: "LA County Health Services",
    desc: "Affordable prenatal care, pregnancy classes, breastfeeding consultation, and postpartum support.",
    phone: "(844) 376-2627",
    phoneHref: "tel:8443762627",
    extra: "Abortion Care: (877) 227-3121",
  },
  {
    title: "Nurse-Family Partnership",
    subtitle: "Free in-home support for first-time mothers",
    desc: "Free in-home support for first-time mothers from pregnancy through the child's second birthday.",
    phone: "844-637-6667",
    phoneHref: "tel:8446376667",
  },
  {
    title: "211 LA County",
    subtitle: "Immediate service referrals",
    desc: "Call 211 for immediate service referrals across LA County, including prenatal, postpartum, and family support services.",
    phone: "2-1-1 or (800) 339-6993",
    phoneHref: "tel:8003396993",
  },
];

const quickTips = [
  "Start with county-backed programs for free, reliable care.",
  "Call 211 LA County for immediate service referrals.",
  "Keep a folder with your Medi-Cal card, due date, and a list of providers handy.",
  "If a program has a waitlist, ask what to do in the meantime so you are not left without support.",
];

export default function BirthAndBeyondPage() {
  return (
    <div style={{ backgroundColor: BODY_BG, color: NEAR_BLACK, minHeight: "100vh" }}>
      <SiteHeader />

      {/* HERO */}
      <section style={{ backgroundColor: MINT }}>
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: TEAL }}>
            Birth and Beyond
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: NEAR_BLACK }}
          >
            Pregnancy and Postpartum Resources in Los Angeles
          </h1>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#333" }}>
            Trusted resources for expectant mothers in Los Angeles, featuring
            official county programs and reputable community organizations
            offering free or low-cost services.
          </p>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
          Government and County Programs
        </p>
        <h2 className="text-2xl lg:text-3xl font-extrabold mb-10" style={{ color: NEAR_BLACK }}>
          Free and low-cost care across LA County
        </h2>

        <div className="space-y-5">
          {resources.map((r, i) => (
            <article
              key={r.title}
              className="rounded-2xl p-6 lg:p-7 border flex flex-col lg:flex-row gap-4 lg:gap-6"
              style={{ backgroundColor: "#fff", borderColor: BORDER }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-base font-bold"
                style={{ backgroundColor: MINT, color: TEAL }}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg lg:text-xl font-bold mb-1" style={{ color: NEAR_BLACK }}>
                  {r.title}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: TEAL }}>
                  {r.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#555" }}>
                  {r.desc}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  {r.phone && (
                    <a
                      href={r.phoneHref}
                      className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-full border-2"
                      style={{ borderColor: TEAL, color: TEAL }}
                    >
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
                      {r.website}
                    </a>
                  )}
                </div>
                {r.extra && (
                  <p className="text-xs mt-3" style={{ color: "#666" }}>
                    {r.extra}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUICK TIPS */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: MINT }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
            Quick Tips
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-10" style={{ color: NEAR_BLACK }}>
            How to use these resources well
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickTips.map((tip) => (
              <div
                key={tip}
                className="rounded-2xl p-5 border flex gap-4"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: TEAL, color: "#fff" }}
                  aria-hidden="true"
                >
                  &#10003;
                </div>
                <p className="text-sm lg:text-base leading-relaxed" style={{ color: "#444" }}>
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EH CTA */}
      <section className="py-20" style={{ backgroundColor: NEAR_BLACK }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: MINT }}>
            About EH Nursing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: "#fff" }}>
            Nurse-led doula care that comes to you
          </h2>
          <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: "#bbb" }}>
            Alongside these public resources, Nurse Ellen offers calm, caring
            support through pregnancy, birth, and postpartum, with emotional
            guidance, practical help, and wellness support to help families
            feel confident, cared for, and empowered.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: MINT, color: NEAR_BLACK }}
            >
              See All Services
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full border-2 transition-colors"
              style={{ borderColor: MINT, color: MINT }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
