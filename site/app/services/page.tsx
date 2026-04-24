import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Doula Services | Prenatal, Birth, and Postpartum Support",
  description:
    "EH Nursing doula services in Los Angeles: prenatal, birth, VBAC, cesarean, postpartum, and pregnancy loss support. Covered by Medi-Cal for qualifying families.",
  alternates: { canonical: "https://ehhealth.org/services" },
  openGraph: {
    title: "Doula Services | Prenatal, Birth, and Postpartum Support",
    description:
      "Nine services covered by Medi-Cal Managed Care. Nurse-led doula support for LA families.",
    url: "https://ehhealth.org/services",
    type: "website",
  },
};

const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";
const BODY_BG = "#F5F4F3";
const BORDER = "#DBDBDB";

const services = [
  {
    img: "/assets/products/initial-assessment.jpg",
    title: "Initial Assessment Visit",
    tag: "Start Here",
    desc: "A comprehensive first meeting to learn your goals, preferences, and needs. We review your history, clarify the scope of doula support, discuss birth or postpartum priorities, and create a personalized support plan.",
  },
  {
    img: "/assets/products/prenatal-visits.jpg",
    title: "Prenatal or Postpartum Visits",
    tag: "Prenatal",
    desc: "Focused check-ins before or after birth to prepare, debrief, and adjust support. We cover education, comfort techniques, newborn care basics, feeding support, and emotional well-being, tailored to your stage.",
  },
  {
    img: "/assets/products/vaginal-birth-support.jpg",
    title: "Support During Vaginal Birth",
    tag: "Labor",
    desc: "Continuous, non-medical support from early labor through delivery. We offer comfort measures, encouragement, partner guidance, advocacy for your preferences, and a calm, steady presence throughout.",
  },
  {
    img: "/assets/products/vbac-support.jpg",
    title: "VBAC Support",
    tag: "Labor",
    desc: "Specialized support for planning and navigating a vaginal birth after cesarean. Evidence-informed preparation, coping strategies, and collaborative communication with your care team to honor safety and your wishes.",
  },
  {
    img: "/assets/products/cesarean-support.jpg",
    title: "Support During Cesarean Birth",
    tag: "Labor",
    desc: "Compassionate support before, during, and after a cesarean, as permitted by your facility. Grounding techniques, partner support, clear communication, and gentle recovery guidance. Medical care remains with your clinical team.",
  },
  {
    img: "/assets/products/miscarriage-support.jpg",
    title: "Pregnancy Loss Support",
    tag: "Sensitive Care",
    desc: "Sensitive, nonjudgmental care through miscarriage or stillbirth. Emotional support, practical help, resources, and space for processing or ritual, respecting your pace and privacy.",
  },
  {
    img: "/assets/products/abortion-support.jpg",
    title: "Abortion Support",
    tag: "Sensitive Care",
    desc: "Confidential, judgment-free support before, during, and after an abortion. Help with planning, transportation or logistics if needed, emotional care, and post-procedure comfort aligned with provider guidance.",
  },
  {
    img: "/assets/products/extended-postpartum.jpg",
    title: "Extended Postpartum Visits",
    tag: "Postpartum",
    desc: "Up to two additional scheduled visits beyond your standard package. Ideal for deeper guidance on feeding, soothing, recovery, and household transitions during the early weeks.",
  },
  {
    img: "/assets/products/postpartum-support.jpg",
    title: "Additional Postpartum Visits",
    tag: "Postpartum",
    desc: "Flexibly scheduled visits as needed after the initial package. Use these for targeted help with feeding checks, sleep strategies, emotional support, or partner and family guidance when you want extra hands and heart.",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: BODY_BG, color: NEAR_BLACK, minHeight: "100vh" }}>
      <SiteHeader />
      <div id="main-content" tabIndex={-1} className="outline-none" />

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
              <span
                aria-hidden="true"
                className="inline-block w-10 h-px"
                style={{ backgroundColor: TEAL }}
              />
              Our Services
            </p>
            <h1
              className="font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ color: NEAR_BLACK, fontSize: "clamp(2.3rem, 5.5vw, 4.25rem)" }}
            >
              Support at{" "}
              <span
                className="italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}
              >
                every stage
              </span>{" "}
              of the journey.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-7 max-w-2xl" style={{ color: "#333" }}>
              Nine nurse-led services across prenatal, birth, and postpartum care.
              Every service below is covered through Medi-Cal Managed Care for
              qualifying families.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Prenatal", "Labor", "Postpartum", "Sensitive Care", "Medi-Cal Covered"].map((c) => (
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
                src="/assets/gallery/illus-1.png"
                alt="Nurse checking on a pregnant mother during a prenatal visit"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-4"
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
                  9 Services
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: TEAL }}>
                  Medi-Cal Covered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 flex items-center gap-3" style={{ color: TEAL }}>
                <span
                  aria-hidden="true"
                  className="inline-block w-10 h-px"
                  style={{ backgroundColor: TEAL }}
                />
                The Complete Catalog
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
                style={{ color: NEAR_BLACK }}
              >
                Nine services,{" "}
                <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                  one consistent presence.
                </span>
              </h2>
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full w-max border"
              style={{ backgroundColor: "rgba(255,255,255,0.7)", borderColor: TEAL, color: TEAL }}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2l6 2v5c0 4-3 7-6 9-3-2-6-5-6-9V4l6-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest">All covered by Medi-Cal</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href="/contact-us"
                className="group relative rounded-3xl overflow-hidden border flex flex-col h-full service-card-v2"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt=""
                    aria-hidden="true"
                    className="object-cover w-full h-full service-card-v2-img"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                  <span
                    className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.92)",
                      color: TEAL,
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                    }}
                  >
                    {s.tag}
                  </span>
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold tabular-nums px-2.5 py-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(17,17,17,0.55)", color: "#fff" }}
                  >
                    {String(i + 1).padStart(2, "0")} / 09
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-lg lg:text-xl font-bold mb-3 leading-snug"
                    style={{ color: NEAR_BLACK }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#555" }}>
                    {s.desc}
                  </p>
                  <span
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold"
                    style={{ color: TEAL }}
                  >
                    Apply Now
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="service-card-v2-arrow"
                    >
                      <path
                        d="M4 10h12m0 0l-4-4m4 4l-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE BAND */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: MINT }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-1">
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full hidden sm:block"
                aria-hidden="true"
                style={{ backgroundColor: "#fff", opacity: 0.85 }}
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
                  alt="Doula guiding a birth parent through labor"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
            </div>
            <div className="order-2">
              <svg
                width="56"
                height="44"
                viewBox="0 0 56 44"
                fill="none"
                aria-hidden="true"
                className="mb-6"
              >
                <path
                  d="M14 44C6.3 44 0 37.7 0 30c0-8.5 6.6-18 18-30h10c-8 9.5-12 17-12 22 4 0 8 3.5 8 8.5S22 44 14 44zm32 0c-7.7 0-14-6.3-14-14 0-8.5 6.6-18 18-30h10c-8 9.5-12 17-12 22 4 0 8 3.5 8 8.5S54 44 46 44z"
                  fill={TEAL}
                  fillOpacity="0.3"
                />
              </svg>
              <p
                className="text-2xl lg:text-3xl leading-[1.35] font-medium mb-8"
                style={{ color: NEAR_BLACK, fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
              >
                From your first prenatal check-in to the weeks after birth, you
                see the same face at every visit, so when labor starts, you
                already know who is showing up for you.
              </p>
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="inline-block w-10 h-px"
                  style={{ backgroundColor: "rgba(17,17,17,0.2)" }}
                />
                <div>
                  <p className="text-base font-bold" style={{ color: NEAR_BLACK }}>
                    Ellen Hakopyan
                  </p>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: TEAL }}
                  >
                    Founder &middot; Lead Doula &middot; Nurse Practitioner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET ELLEN + RESOURCES */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div
            className="relative rounded-3xl p-8 lg:p-10 border flex flex-col overflow-hidden"
            style={{ backgroundColor: "#fff", borderColor: BORDER }}
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 w-48 h-48 opacity-90"
            >
              <Image
                src="/assets/gallery/illus-3.png"
                alt=""
                fill
                sizes="192px"
                className="object-contain"
              />
            </div>
            <div className="relative">
              <span
                aria-hidden="true"
                className="inline-block w-10 h-0.5 mb-5 rounded-full"
                style={{ backgroundColor: TEAL }}
              />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: TEAL }}>
                Meet the Founder
              </p>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-3" style={{ color: NEAR_BLACK }}>
                We&apos;re here to{" "}
                <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                  support you
                </span>
              </h3>
              <p className="text-base leading-relaxed mb-6 max-w-sm" style={{ color: "#555" }}>
                Meet Nurse Ellen, your compassionate guide through pregnancy,
                birth, and postpartum. Calm, caring support every family
                deserves.
              </p>
            </div>
            <Link
              href="/about-eh"
              className="inline-flex w-max items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, color: "#fff" }}
            >
              Meet Your Doula
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div
            className="rounded-3xl p-8 lg:p-10 flex flex-col relative overflow-hidden"
            style={{ backgroundColor: NEAR_BLACK }}
          >
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: TEAL, opacity: 0.3 }}
            />
            <div className="relative flex flex-col h-full">
              <span
                aria-hidden="true"
                className="inline-block w-10 h-0.5 mb-5 rounded-full"
                style={{ backgroundColor: MINT }}
              />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: MINT }}>
                Resources
              </p>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-3" style={{ color: "#fff" }}>
                Birth and{" "}
                <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: MINT }}>
                  Beyond
                </span>
              </h3>
              <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: "#bbb" }}>
                Explore curated pregnancy and postpartum resources across Los
                Angeles, including county programs and community organizations.
              </p>
              <Link
                href="/birth-and-beyond"
                className="inline-flex w-max items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: MINT, color: NEAR_BLACK }}
              >
                Explore Resources
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
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
            Ready to start
            <span className="inline-block w-10 h-px" style={{ backgroundColor: MINT }} aria-hidden="true" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight" style={{ color: "#fff" }}>
            Check your{" "}
            <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: MINT }}>
              Medi-Cal coverage
            </span>
          </h2>
          <p className="text-base lg:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: "#bbb" }}>
            One conversation is usually all it takes. We will verify your plan,
            answer your questions, and schedule your initial assessment visit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: MINT, color: NEAR_BLACK }}
            >
              Apply Now
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
