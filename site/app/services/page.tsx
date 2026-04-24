import type { Metadata } from "next";
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
    desc: "A comprehensive first meeting to learn your goals, preferences, and needs. We review your history, clarify the scope of doula support, discuss birth or postpartum priorities, and create a personalized support plan.",
  },
  {
    img: "/assets/products/prenatal-visits.jpg",
    title: "Prenatal or Postpartum Visits",
    desc: "Focused check-ins before or after birth to prepare, debrief, and adjust support. We cover education, comfort techniques, newborn care basics, feeding support, and emotional well-being, tailored to your stage.",
  },
  {
    img: "/assets/products/vaginal-birth-support.jpg",
    title: "Support During Vaginal Birth",
    desc: "Continuous, non-medical support from early labor through delivery. We offer comfort measures, encouragement, partner guidance, advocacy for your preferences, and a calm, steady presence throughout.",
  },
  {
    img: "/assets/products/vbac-support.jpg",
    title: "VBAC Support",
    desc: "Specialized support for planning and navigating a vaginal birth after cesarean. Evidence-informed preparation, coping strategies, and collaborative communication with your care team to honor safety and your wishes.",
  },
  {
    img: "/assets/products/cesarean-support.jpg",
    title: "Support During Cesarean Birth",
    desc: "Compassionate support before, during, and after a cesarean, as permitted by your facility. Grounding techniques, partner support, clear communication, and gentle recovery guidance. Medical care remains with your clinical team.",
  },
  {
    img: "/assets/products/miscarriage-support.jpg",
    title: "Pregnancy Loss Support",
    desc: "Sensitive, nonjudgmental care through miscarriage or stillbirth. Emotional support, practical help, resources, and space for processing or ritual, respecting your pace and privacy.",
  },
  {
    img: "/assets/products/abortion-support.jpg",
    title: "Abortion Support",
    desc: "Confidential, judgment-free support before, during, and after an abortion. Help with planning, transportation or logistics if needed, emotional care, and post-procedure comfort aligned with provider guidance.",
  },
  {
    img: "/assets/products/extended-postpartum.jpg",
    title: "Extended Postpartum Visits",
    desc: "Up to two additional scheduled visits beyond your standard package. Ideal for deeper guidance on feeding, soothing, recovery, and household transitions during the early weeks.",
  },
  {
    img: "/assets/products/postpartum-support.jpg",
    title: "Additional Postpartum Visits",
    desc: "Flexibly scheduled visits as needed after the initial package. Use these for targeted help with feeding checks, sleep strategies, emotional support, or partner and family guidance when you want extra hands and heart.",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: BODY_BG, color: NEAR_BLACK, minHeight: "100vh" }}>
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: MINT }}>
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: TEAL }}>
            Our Services
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: NEAR_BLACK }}
          >
            Compassionate Care Through Every Pregnancy Stage
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#333" }}>
            Nine services covering prenatal, birth, and postpartum support.
            Every service below is covered through Medi-Cal Managed Care for
            qualifying families.
          </p>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl overflow-hidden border flex flex-col h-full"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-3" style={{ color: NEAR_BLACK }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#555" }}>
                    {s.desc}
                  </p>
                  <Link
                    href="/contact-us"
                    className="mt-5 text-sm font-bold underline"
                    style={{ color: TEAL }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / NURSE ELLEN */}
      <section className="py-20" style={{ backgroundColor: MINT }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden h-80 lg:h-[480px] order-2 lg:order-1">
            <img
              src="/assets/team/nurse-ellen-profile.jpg"
              alt="Ellen Hakopyan, Founder and Lead Doula"
              className="object-cover object-top w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
              Our Team
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" style={{ color: NEAR_BLACK }}>
              We&apos;re Here to Support You
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#444" }}>
              Meet Nurse Ellen, your compassionate guide through pregnancy,
              birth, and postpartum. Discover the calm, caring support every
              family deserves.
            </p>
            <Link
              href="/about-eh"
              className="inline-flex items-center font-bold text-base px-7 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, color: "#fff" }}
            >
              Meet Your Doula
            </Link>
          </div>
        </div>
      </section>

      {/* RESOURCES + CONTACT STRIP */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="rounded-2xl p-8 border flex flex-col"
          style={{ backgroundColor: "#fff", borderColor: BORDER }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
            Resources
          </p>
          <h3 className="text-2xl font-extrabold mb-3" style={{ color: NEAR_BLACK }}>
            Birth and Beyond
          </h3>
          <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: "#555" }}>
            Explore our resource guide for pregnancy and postpartum support in
            Los Angeles, including county programs and community organizations.
          </p>
          <Link
            href="/birth-and-beyond"
            className="inline-flex w-max items-center font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: TEAL, color: "#fff" }}
          >
            Explore Resources
          </Link>
        </div>
        <div
          className="rounded-2xl p-8 border flex flex-col"
          style={{ backgroundColor: NEAR_BLACK, borderColor: NEAR_BLACK }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: MINT }}>
            Get In Touch
          </p>
          <h3 className="text-2xl font-extrabold mb-3" style={{ color: "#fff" }}>
            Ready to take the next step?
          </h3>
          <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: "#bbb" }}>
            Have questions or want to confirm your Medi-Cal coverage? Our team
            is ready to listen and help you take the next step toward
            compassionate care.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex w-max items-center font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: MINT, color: NEAR_BLACK }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
