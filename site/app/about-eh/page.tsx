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

const beliefs = [
  {
    title: "Compassion First",
    desc: "Parenthood is a profound journey filled with joy, challenges, and sometimes loss. We meet each family with warmth and understanding, so no one feels alone.",
  },
  {
    title: "Respect and Non-Judgment",
    desc: "Every parent's story is unique. Whether you are preparing for birth, recovering postpartum, or navigating miscarriage or abortion, we honor your choices without judgment.",
  },
  {
    title: "Empowerment Through Guidance",
    desc: "Confidence comes from clarity. We provide education, advocacy, and emotional support so families feel prepared and empowered in every decision.",
  },
  {
    title: "Inclusivity and Care for All",
    desc: "Teen moms, families facing domestic violence, LGBTQ+ families, and those in vulnerable circumstances are seen, valued, and supported with dignity.",
  },
  {
    title: "Continuity of Support",
    desc: "From prenatal planning to postpartum recovery, our care is consistent, steady, and tailored to each stage of parenthood.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: BODY_BG, color: NEAR_BLACK, minHeight: "100vh" }}>
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: MINT }}>
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: TEAL }}
            >
              About EH Nursing
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: NEAR_BLACK }}
            >
              Doula Support Backed by Experience
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#333" }}>
              Nurse-led doula care in Los Angeles, rooted in compassion, respect, and
              years of experience caring for newborns, children, and families.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden h-80 lg:h-[460px] shadow-xl">
            <img
              src="/assets/team/nurse-ellen-profile.jpg"
              alt="Ellen Hakopyan, Founder and Lead Doula"
              className="object-cover object-top w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ELLEN STORY */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p
          className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
          style={{ color: TEAL }}
        >
          A Note From Ellen
        </p>
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-10"
          style={{ color: NEAR_BLACK }}
        >
          Your voice. Your birth. Your family.
        </h2>
        <div className="space-y-5 text-base lg:text-lg leading-relaxed" style={{ color: "#444" }}>
          <p>
            After years of caring for newborns, children, and families as a
            Pediatric and Neonatal ICU nurse, and now as a Nurse Practitioner, I
            have learned how powerful it is when parents feel truly supported.
            My doula work is rooted in that belief. While the care I provide is
            completely non-medical, I bring a deep sense of calm, understanding,
            and compassion from my background in family care.
          </p>
          <p>
            As your doula, my role is to offer emotional support, physical
            comfort, education, and a steady presence throughout your pregnancy,
            birth, and postpartum journey, backed by years of experience. I
            honor your preferences, your cultural needs, and your vision for how
            you want your experience to feel. My goal is always to help you
            feel confident, informed, and deeply cared for.
          </p>
          <p>
            As a Medi-Cal approved doula provider in Los Angeles, accessibility
            matters to me. Every family deserves high-quality support,
            regardless of background or circumstance. Whether we are preparing
            together during prenatal sessions, navigating birth as a team, or
            easing into postpartum life, I am here to walk beside you with
            warmth, respect, and unwavering encouragement.
          </p>
          <p className="text-lg font-semibold italic pt-2" style={{ color: TEAL }}>
            Compassionately yours,
          </p>
          <p className="text-xl font-bold" style={{ color: NEAR_BLACK }}>
            Ellen H.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            "Pediatric ICU Nurse",
            "Neonatal ICU Nurse",
            "Nurse Practitioner",
            "Medi-Cal Approved",
            "NPI: 1710798616",
          ].map((cred) => (
            <span
              key={cred}
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: MINT, color: TEAL }}
            >
              {cred}
            </span>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20" style={{ backgroundColor: MINT }}>
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
            style={{ color: TEAL }}
          >
            Our Philosophy
          </p>
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-center max-w-3xl mx-auto mb-4"
            style={{ color: NEAR_BLACK }}
          >
            Compassionate, personalized care, rooted in respect, empathy, and empowerment.
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-14" style={{ color: "#444" }}>
            We believe every parent deserves to feel confident, informed, and
            deeply cared for through every stage of the journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-6 flex flex-col gap-3 border"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{ backgroundColor: MINT, color: TEAL }}
                  aria-hidden="true"
                >
                  &#10084;
                </div>
                <h3 className="text-lg font-bold" style={{ color: NEAR_BLACK }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: NEAR_BLACK }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: MINT }}
          >
            Ready when you are
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: "#fff" }}>
            Book with Nurse Ellen
          </h2>
          <p className="text-base lg:text-lg mb-8 leading-relaxed" style={{ color: "#bbb" }}>
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
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full border-2 transition-colors"
              style={{ borderColor: MINT, color: MINT }}
            >
              Call (833) 912-3999
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
