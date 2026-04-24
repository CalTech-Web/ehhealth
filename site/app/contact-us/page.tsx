import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact EH Nursing | Doula Care in Los Angeles",
  description:
    "Contact EH Nursing and Wellness Services. Call (833) 912-3999 or fill out the form to verify your Medi-Cal coverage and schedule your initial assessment visit.",
  alternates: { canonical: "https://ehhealth.org/contact-us" },
  openGraph: {
    title: "Contact EH Nursing | Doula Care in Los Angeles",
    description:
      "Schedule your initial assessment visit. Medi-Cal covered doula care for LA families.",
    url: "https://ehhealth.org/contact-us",
    type: "website",
  },
};

const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";
const BODY_BG = "#F5F4F3";
const BORDER = "#DBDBDB";

export default function ContactPage() {
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
              Get In Touch
            </p>
            <h1
              className="font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ color: NEAR_BLACK, fontSize: "clamp(2.3rem, 5.5vw, 4.25rem)" }}
            >
              Contact your{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                trusted doula
              </span>{" "}
              today.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-7 max-w-2xl" style={{ color: "#333" }}>
              Fill out the form below or call directly. We will verify your
              Medi-Cal coverage and schedule your initial assessment visit within
              one business day.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["No Cost to Apply", "Real Person, No Menu", "Mobile Provider", "Medi-Cal Approved"].map((c) => (
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
                src="/assets/gallery/illus-2.png"
                alt="Expectant mother holding her belly with warmth"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-6"
                priority
              />
            </div>
            <a
              href="tel:8339123999"
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 px-5 py-3 rounded-2xl flex items-center gap-3 whitespace-nowrap hover:opacity-95 transition-opacity"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 10px 24px -8px rgba(0,0,0,0.18)",
                border: `1px solid ${BORDER}`,
              }}
            >
              <span
                className="w-8 h-8 rounded-full inline-flex items-center justify-center"
                style={{ backgroundColor: TEAL, color: "#fff" }}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    fill="currentColor"
                    fillOpacity="0.15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: TEAL }}>
                  Call directly
                </p>
                <p className="text-sm font-bold" style={{ color: NEAR_BLACK }}>
                  (833) 912-3999
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <ContactPageClient />

      {/* HELP PANELS */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: MINT }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 flex items-center gap-3" style={{ color: TEAL }}>
              <span aria-hidden="true" className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} />
              What Happens Next
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: NEAR_BLACK }}>
              From first call to{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                first visit.
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                num: "01",
                tag: "Reach Out",
                title: "Share the basics",
                desc: "Call (833) 912-3999 or submit the form. Share your due date, Medi-Cal plan, and the support you are looking for.",
              },
              {
                num: "02",
                tag: "Verify Coverage",
                title: "We confirm your benefits",
                desc: "We reach out within one business day and confirm your Medi-Cal Managed Care benefits before your first visit, at no cost to you.",
              },
              {
                num: "03",
                tag: "Meet Ellen",
                title: "Initial assessment visit",
                desc: "Ellen meets with you, listens to your story, reviews your history, and writes a personalized support plan around your goals.",
              },
            ].map((s) => (
              <article
                key={s.num}
                className="relative rounded-2xl p-6 lg:p-7 border why-card"
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
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${MINT} 0%, #fff 100%)`,
                      color: TEAL,
                      border: `1px solid ${MINT}`,
                    }}
                  >
                    {s.num}
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: TEAL }}>
                  {s.tag}
                </p>
                <h3 className="text-lg lg:text-xl font-bold mb-3 leading-tight" style={{ color: NEAR_BLACK }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ MINI */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-4 flex items-center gap-3" style={{ color: TEAL }}>
              <span aria-hidden="true" className="inline-block w-10 h-px" style={{ backgroundColor: TEAL }} />
              Before You Reach Out
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: NEAR_BLACK }}>
              Quick answers to common{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                questions
              </span>
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Do I need to know my Medi-Cal plan first?",
                a: "It helps, but you do not need to know every detail. Share what you know and we will verify the specifics for you.",
              },
              {
                q: "Will I talk to a real person?",
                a: "Yes. Call (833) 912-3999 during business hours and you will always reach a real person. No voicemail menus.",
              },
              {
                q: "How fast will someone respond?",
                a: "Within one business day after you submit the form or call. If labor is imminent, call us directly.",
              },
              {
                q: "Do I have to be in Van Nuys?",
                a: "No. Ellen serves Los Angeles County and comes to you. No office visit required.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border p-5 lg:p-6 transition-colors hover:border-[rgba(101,139,139,0.4)]"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-sm lg:text-base list-none" style={{ color: NEAR_BLACK }}>
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="ml-4 w-8 h-8 rounded-full inline-flex items-center justify-center transition-transform group-open:rotate-45 shrink-0"
                    style={{ backgroundColor: MINT, color: TEAL }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#555" }}>
                  {f.a}
                </p>
              </details>
            ))}
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
            Need to talk today
            <span className="inline-block w-10 h-px" style={{ backgroundColor: MINT }} aria-hidden="true" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight" style={{ color: "#fff" }}>
            A real person, every{" "}
            <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: MINT }}>
              single call.
            </span>
          </h2>
          <p className="text-base lg:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: "#bbb" }}>
            No menus, no voicemail queue. Call us during business hours and we
            will confirm your Medi-Cal coverage before you commit to anything.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:8339123999"
              className="inline-flex items-center gap-3 font-bold text-base pl-3 pr-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: MINT, color: NEAR_BLACK }}
            >
              <span
                className="w-10 h-10 rounded-full inline-flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: TEAL, color: "#fff" }}
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
            <a
              href="mailto:contact@ehhealth.org"
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full border-2 transition-colors"
              style={{ borderColor: MINT, color: MINT }}
            >
              Email contact@ehhealth.org
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
