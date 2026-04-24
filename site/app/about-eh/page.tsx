import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "About EH Nursing | Doula Support Backed by Experience",
  description:
    "Meet Ellen Hakopyan, founder of EH Nursing and Wellness Services. Pediatric and Neonatal ICU Nurse Practitioner providing Medi-Cal covered doula care in Los Angeles.",
  alternates: { canonical: "https://ehhealth.org/about-eh" },
  openGraph: {
    title: "About EH Nursing | Doula Support Backed by Experience",
    description:
      "Nurse-led, Medi-Cal approved doula care in Los Angeles, rooted in compassion, respect, and years of clinical experience.",
    url: "https://ehhealth.org/about-eh",
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

const beliefs = [
  {
    tag: "Core Value 01",
    title: "Compassion First",
    desc: "Parenthood is a profound journey filled with joy, challenges, and sometimes loss. We meet each family with warmth and understanding, so no one feels alone.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path d="M16 27s-9-5.5-9-13a5.5 5.5 0 0 1 9-4.2A5.5 5.5 0 0 1 25 14c0 7.5-9 13-9 13z" {...iconStroke} />
        <path d="M12 15l2 2 5-5" {...iconStroke} />
      </svg>
    ),
  },
  {
    tag: "Core Value 02",
    title: "Respect and Non-Judgment",
    desc: "Every parent's story is unique. Whether you are preparing for birth, recovering postpartum, or navigating miscarriage or abortion, we honor your choices without judgment.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path d="M6 20l6-6 4 4 4-4 6 6" {...iconStroke} />
        <path d="M6 14l4-4 4 4" {...iconStroke} />
        <path d="M18 14l4-4 4 4" {...iconStroke} />
        <path d="M6 26h20" {...iconStroke} />
      </svg>
    ),
  },
  {
    tag: "Core Value 03",
    title: "Empowerment Through Guidance",
    desc: "Confidence comes from clarity. We provide education, advocacy, and emotional support so families feel prepared and empowered in every decision.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path d="M16 3l2.5 6.5L25 12l-6.5 2.5L16 21l-2.5-6.5L7 12l6.5-2.5L16 3z" {...iconStroke} />
        <path d="M25 22l1 2.5L28 26l-2 1-1 2-1-2-2-1 2-1.5 1-2.5z" {...iconStroke} />
      </svg>
    ),
  },
  {
    tag: "Core Value 04",
    title: "Inclusivity and Care for All",
    desc: "Teen moms, families facing domestic violence, LGBTQ+ families, and those in vulnerable circumstances are seen, valued, and supported with dignity.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <circle cx="10" cy="12" r="3" {...iconStroke} />
        <circle cx="22" cy="12" r="3" {...iconStroke} />
        <circle cx="16" cy="22" r="3" {...iconStroke} />
        <path d="M10 15v3M22 15v3M16 7v3" {...iconStroke} />
      </svg>
    ),
  },
  {
    tag: "Core Value 05",
    title: "Continuity of Support",
    desc: "From prenatal planning to postpartum recovery, our care is consistent, steady, and tailored to each stage of parenthood.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path d="M26 16a10 10 0 1 1-3-7.1" {...iconStroke} />
        <path d="M27 4v6h-6" {...iconStroke} />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

const credentials = [
  {
    label: "Neonatal ICU",
    value: "Years of Care",
    sub: "Caring for newborns and families at the most critical moments.",
  },
  {
    label: "Pediatric ICU",
    value: "Clinical Depth",
    sub: "Trained to stay steady when the room is not.",
  },
  {
    label: "Credential",
    value: "Nurse Practitioner",
    sub: "Advanced practice nursing background that shapes every visit.",
  },
  {
    label: "NPI 1710798616",
    value: "Medi-Cal Approved",
    sub: "Covered by LA Care, Kaiser, HealthNet, CalOptima and more.",
  },
];

const chapters = [
  {
    num: "01",
    label: "Background",
    heading: "Years in Pediatric and Neonatal ICU",
    body: "After years of caring for newborns, children, and families as a Pediatric and Neonatal ICU nurse, and now as a Nurse Practitioner, I have learned how powerful it is when parents feel truly supported. My doula work is rooted in that belief. While the care I provide is completely non-medical, I bring a deep sense of calm, understanding, and compassion from my background in family care.",
  },
  {
    num: "02",
    label: "Role",
    heading: "A steady presence, not a clinical one",
    body: "As your doula, my role is to offer emotional support, physical comfort, education, and a steady presence throughout your pregnancy, birth, and postpartum journey, backed by years of experience. I honor your preferences, your cultural needs, and your vision for how you want your experience to feel. My goal is always to help you feel confident, informed, and deeply cared for.",
  },
  {
    num: "03",
    label: "Mission",
    heading: "Accessible care for every family",
    body: "As a Medi-Cal approved doula provider in Los Angeles, accessibility matters to me. Every family deserves high-quality support, regardless of background or circumstance. Whether we are preparing together during prenatal sessions, navigating birth as a team, or easing into postpartum life, I am here to walk beside you with warmth, respect, and unwavering encouragement.",
  },
];

export default function AboutPage() {
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
              <span
                aria-hidden="true"
                className="inline-block w-10 h-px"
                style={{ backgroundColor: TEAL }}
              />
              Meet the Founder
            </p>
            <h1
              className="font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ color: NEAR_BLACK, fontSize: "clamp(2.3rem, 5.5vw, 4.25rem)" }}
            >
              Doula support backed by{" "}
              <span
                className="italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}
              >
                experience.
              </span>
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-7 max-w-2xl" style={{ color: "#333" }}>
              Nurse-led doula care in Los Angeles, rooted in compassion, respect,
              and years of caring for newborns, children, and families inside the
              Pediatric and Neonatal ICU.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Nurse Practitioner", "Neonatal ICU", "Pediatric ICU", "Medi-Cal Approved"].map((c) => (
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
              className="relative rounded-[28px] overflow-hidden aspect-[4/5]"
              style={{ boxShadow: "0 30px 60px -20px rgba(101,139,139,0.45), 0 12px 30px -12px rgba(0,0,0,0.18)" }}
            >
              <Image
                src="/assets/team/nurse-ellen-profile.jpg"
                alt="Ellen Hakopyan, Founder and Lead Doula"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
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
                  Ellen Hakopyan
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: TEAL }}>
                  Founder &middot; Lead Doula
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="rounded-3xl p-8 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 border"
            style={{ backgroundColor: "#fff", borderColor: BORDER }}
          >
            {credentials.map((c, i) => (
              <div
                key={c.label}
                className="flex flex-col gap-2"
                style={i > 0 ? { borderLeft: `1px solid ${BORDER}`, paddingLeft: "1.5rem" } : undefined}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: TEAL }}
                >
                  {c.label}
                </p>
                <p className="text-xl lg:text-2xl font-extrabold" style={{ color: NEAR_BLACK }}>
                  {c.value}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                  {c.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY / A PROMISE FROM ELLEN */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-10 -left-28 w-[24rem] h-[24rem] rounded-full blur-3xl"
          style={{ backgroundColor: MINT, opacity: 0.5 }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 flex items-center gap-3"
              style={{ color: TEAL }}
            >
              <span className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} aria-hidden="true" />
              A Note From Ellen
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              style={{ color: NEAR_BLACK }}
            >
              Your voice.{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                Your birth.
              </span>{" "}
              Your family.
            </h2>
          </div>

          <div className="space-y-10 lg:space-y-12">
            {chapters.map((c) => (
              <article
                key={c.num}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start"
              >
                <div className="lg:col-span-2 flex items-start gap-4">
                  <span
                    className="text-4xl lg:text-5xl font-extrabold tabular-nums"
                    style={{ color: TEAL, opacity: 0.35 }}
                    aria-hidden="true"
                  >
                    {c.num}
                  </span>
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
                      style={{ color: TEAL }}
                    >
                      {c.label}
                    </p>
                    <h3
                      className="text-xl lg:text-2xl font-bold leading-snug"
                      style={{ color: NEAR_BLACK }}
                    >
                      {c.heading}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p
                    className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "#444" }}
                  >
                    {c.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Signature */}
          <div
            className="mt-14 pt-10 border-t flex items-center gap-4"
            style={{ borderColor: BORDER }}
          >
            <span
              aria-hidden="true"
              className="inline-block w-10 h-px"
              style={{ backgroundColor: TEAL }}
            />
            <div>
              <p
                className="text-xl lg:text-2xl italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: NEAR_BLACK }}
              >
                Compassionately yours, Ellen H.
              </p>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.2em] mt-1"
                style={{ color: TEAL }}
              >
                Founder &middot; Lead Doula &middot; Nurse Practitioner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: MINT }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 flex items-center gap-3"
              style={{ color: TEAL }}
            >
              <span className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} aria-hidden="true" />
              Our Philosophy
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: NEAR_BLACK }}
            >
              Compassionate, personalized care rooted in{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                respect and empathy.
              </span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#444" }}>
              Every parent deserves to feel confident, informed, and deeply cared
              for through every stage of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
            {beliefs.map((b, i) => (
              <article
                key={b.title}
                className={`relative rounded-2xl p-6 lg:p-7 border why-card ${
                  i < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
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
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${MINT} 0%, #fff 100%)`,
                    color: TEAL,
                    border: `1px solid ${MINT}`,
                    boxShadow: "0 6px 18px rgba(101,139,139,0.18)",
                  }}
                >
                  {b.icon}
                </div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2"
                  style={{ color: TEAL }}
                >
                  {b.tag}
                </p>
                <h3 className="text-lg lg:text-xl font-bold mb-3 leading-tight" style={{ color: NEAR_BLACK }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  {b.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE / IMAGE BAND */}
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
                  boxShadow:
                    "0 30px 60px -20px rgba(101,139,139,0.45), 0 12px 30px -12px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src="/assets/team/nurse-ellen-quote.png"
                  alt="Nurse Ellen in her clinical scrubs"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
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
                She knows hospital rhythms, how to talk to a care team, and how to
                stay calm when the room is not. That is what she brings to every
                birth.
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
                    Founder &middot; Nurse Practitioner
                  </p>
                </div>
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
          <p
            className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 inline-flex items-center gap-3"
            style={{ color: MINT }}
          >
            <span className="inline-block w-10 h-px" style={{ backgroundColor: MINT }} aria-hidden="true" />
            Ready when you are
            <span className="inline-block w-10 h-px" style={{ backgroundColor: MINT }} aria-hidden="true" />
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight"
            style={{ color: "#fff" }}
          >
            Book with{" "}
            <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: MINT }}>
              Nurse Ellen
            </span>
          </h2>
          <p className="text-base lg:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: "#bbb" }}>
            One conversation is usually all it takes. We will verify your
            Medi-Cal plan, answer your questions, and schedule your initial
            assessment visit. No cost to find out.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: MINT, color: NEAR_BLACK }}
            >
              See If You Qualify
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
