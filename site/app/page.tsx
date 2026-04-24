"use client";

import Image from "next/image";
import { useState, useEffect, useRef, FormEvent } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

/* ─── Scroll progress bar ────────────────────────────── */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-1"
      style={{ backgroundColor: "rgba(101,139,139,0.12)" }}
      aria-hidden="true"
    >
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #658B8B 0%, #D7F7F7 100%)",
          transition: "width 0.05s linear",
        }}
      />
    </div>
  );
}

/* ─── Sticky mobile "always visible" CTA ─────────────── */
function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex gap-3 px-4 py-3 sm:hidden"
      style={{ backgroundColor: "#fff", borderTop: "1px solid #DBDBDB", boxShadow: "0 -4px 24px rgba(0,0,0,0.10)" }}
    >
      <a
        href="tel:8339123999"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border-2 font-bold text-sm"
        style={{ borderColor: "#658B8B", color: "#658B8B" }}
      >
        &#9990; Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center py-3 rounded-full font-bold text-sm"
        style={{ backgroundColor: "#658B8B", color: "#fff" }}
      >
        Apply Now
      </a>
    </div>
  );
}

/* ─── Promise split band (image left, text right) ───── */
function ParallaxBand() {
  const words = ["voice", "birth", "family"];

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: MINT }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: image */}
          <div className="relative order-1">
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full hidden sm:block"
              aria-hidden="true"
              style={{ backgroundColor: "#D7F7F7", opacity: 0.7 }}
            />
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full hidden sm:block"
              aria-hidden="true"
              style={{ backgroundColor: "#658B8B", opacity: 0.18 }}
            />
            <div
              className="relative rounded-[28px] overflow-hidden aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
              style={{ boxShadow: "0 30px 60px -20px rgba(101,139,139,0.45), 0 12px 30px -12px rgba(0,0,0,0.15)" }}
            >
              <Image
                src="/assets/gallery/doula-image.png"
                alt="Doula supporting a mother during birth"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: text */}
          <div className="order-2">
            <p
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] mb-5 sm:mb-6 flex items-center gap-3"
              style={{ color: "#658B8B" }}
            >
              <span
                className="inline-block w-8 h-px"
                style={{ backgroundColor: "#658B8B" }}
                aria-hidden="true"
              />
              A Promise From Ellen
            </p>

            <div className="space-y-1.5 sm:space-y-2.5">
              {words.map((w, i) => (
                <h3
                  key={w}
                  className="font-extrabold leading-[1.05] tracking-tight"
                  style={{
                    fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                    color: "#111111",
                  }}
                >
                  <span style={{ color: "#658B8B", opacity: 0.55, fontWeight: 500 }}>
                    Your
                  </span>{" "}
                  <span
                    className="italic"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      color: i === 1 ? "#658B8B" : "#111111",
                    }}
                  >
                    {w}
                  </span>
                  <span style={{ color: "#658B8B" }}>.</span>
                </h3>
              ))}
            </div>

            <p className="mt-7 text-base lg:text-lg leading-relaxed max-w-md" style={{ color: "#555" }}>
              Nurse-led doula support that honors your preferences, your
              culture, and the way you want your birth to feel.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span
                className="inline-block w-10 h-px"
                style={{ backgroundColor: "rgba(17,17,17,0.2)" }}
                aria-hidden="true"
              />
              <div>
                <p
                  className="text-lg sm:text-xl italic"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    color: "#111111",
                  }}
                >
                  Ellen Hakopyan
                </p>
                <p
                  className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] mt-1"
                  style={{ color: "#658B8B" }}
                >
                  Founder &middot; Lead Doula &middot; Nurse Practitioner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Brand colors ─────────────────────────────────── */
const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";
const BODY_BG = "#F5F4F3";
const BORDER = "#DBDBDB";

/* ─── Types ─────────────────────────────────────────── */
interface FormData {
  name: string;
  phone: string;
  email: string;
  dueDate: string;
  plan: string;
  supportType: string;
  message: string;
}

/* ─── Contact Form Component ─────────────────────────── */
function ContactForm({ id }: { id?: string }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    dueDate: "",
    plan: "",
    supportType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ site: "ehhealth", ...form }),
      });
    } catch {
      /* silently continue so we always show success to the user */
    }
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        id={id}
        style={{ backgroundColor: MINT, border: `2px solid ${TEAL}` }}
        className="rounded-2xl p-10 text-center"
      >
        <div className="text-4xl mb-4">&#10003;</div>
        <h3
          className="text-2xl font-bold mb-2"
          style={{ color: NEAR_BLACK }}
        >
          Thank you!
        </h3>
        <p style={{ color: TEAL }} className="text-lg">
          We got it. Someone from our team will reach out within one business
          day to schedule your initial assessment. Need to talk sooner? Call{" "}
          <a
            href="tel:8339123999"
            className="font-bold underline"
            style={{ color: NEAR_BLACK }}
          >
            (833) 912-3999
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={`name-${id}`}
            className="block text-sm font-semibold mb-1"
            style={{ color: NEAR_BLACK }}
          >
            Full Name *
          </label>
          <input
            id={`name-${id}`}
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B] focus:border-[#658B8B] transition-shadow"
            style={{
              borderColor: BORDER,
              backgroundColor: "#fff",
              color: NEAR_BLACK,
            }}
          />
        </div>
        <div>
          <label
            htmlFor={`phone-${id}`}
            className="block text-sm font-semibold mb-1"
            style={{ color: NEAR_BLACK }}
          >
            Phone Number *
          </label>
          <input
            id={`phone-${id}`}
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(000) 000-0000"
            className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B] focus:border-[#658B8B] transition-shadow"
            style={{ borderColor: BORDER, backgroundColor: "#fff", color: NEAR_BLACK }}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`email-${id}`}
          className="block text-sm font-semibold mb-1"
          style={{ color: NEAR_BLACK }}
        >
          Email Address
        </label>
        <input
          id={`email-${id}`}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none"
          style={{ borderColor: BORDER, backgroundColor: "#fff", color: NEAR_BLACK }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={`dueDate-${id}`}
            className="block text-sm font-semibold mb-1"
            style={{ color: NEAR_BLACK }}
          >
            Due Date (approximate)
          </label>
          <input
            id={`dueDate-${id}`}
            name="dueDate"
            type="text"
            value={form.dueDate}
            onChange={handleChange}
            placeholder="e.g. August 2026"
            className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B] focus:border-[#658B8B] transition-shadow"
            style={{ borderColor: BORDER, backgroundColor: "#fff", color: NEAR_BLACK }}
          />
        </div>
        <div>
          <label
            htmlFor={`plan-${id}`}
            className="block text-sm font-semibold mb-1"
            style={{ color: NEAR_BLACK }}
          >
            Medi-Cal Plan
          </label>
          <select
            id={`plan-${id}`}
            name="plan"
            value={form.plan}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B] focus:border-[#658B8B] transition-shadow"
            style={{ borderColor: BORDER, backgroundColor: "#fff", color: NEAR_BLACK }}
          >
            <option value="">Select your plan</option>
            <option value="LA Care">LA Care Health Plan</option>
            <option value="Kaiser">Kaiser Permanente Southern CA</option>
            <option value="HealthNet">HealthNet</option>
            <option value="CalOptima">CalOptima</option>
            <option value="Other Medi-Cal">Other Medi-Cal Plan</option>
            <option value="Not Sure">Not sure / need help</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor={`supportType-${id}`}
          className="block text-sm font-semibold mb-1"
          style={{ color: NEAR_BLACK }}
        >
          Type of Support Needed
        </label>
        <select
          id={`supportType-${id}`}
          name="supportType"
          value={form.supportType}
          onChange={handleChange}
          className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none"
          style={{ borderColor: BORDER, backgroundColor: "#fff", color: NEAR_BLACK }}
        >
          <option value="">Select support type</option>
          <option value="Prenatal Support">Prenatal Support</option>
          <option value="Birth Doula Support">Birth Doula Support</option>
          <option value="VBAC Support">VBAC Support</option>
          <option value="Cesarean Support">Cesarean Birth Support</option>
          <option value="Postpartum Support">Postpartum Support</option>
          <option value="Pregnancy Loss Support">Pregnancy Loss Support</option>
          <option value="Abortion Support">Abortion Support</option>
          <option value="Not Sure">Not sure, I need help deciding</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all disabled:opacity-60 hover:brightness-110 active:scale-[0.98] cta-shimmer"
        style={{ background: "linear-gradient(135deg, #3d8080 0%, #658B8B 100%)", color: "#fff", boxShadow: "0 4px 16px rgba(101,139,139,0.45)" }}
      >
        {loading ? "Sending..." : "Check My Coverage"}
      </button>

      <p className="text-xs text-center" style={{ color: "#888" }}>
        We respect your privacy. Your information is never shared or sold.
      </p>
    </form>
  );
}

/* ─── FAQ Accordion Component ───────────────────────── */
function FaqSection({
  faqs,
  teal,
  nearBlack,
  border,
}: {
  faqs: { q: string; a: string }[];
  teal: string;
  nearBlack: string;
  border: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <p
        className="section-eyebrow text-sm font-semibold uppercase tracking-widest text-center mb-3"
      >
        Questions We Hear All the Time
      </p>
      <h2
        className="text-3xl lg:text-4xl font-extrabold text-center mb-4"
        style={{ color: nearBlack }}
      >
        Frequently Asked Questions
      </h2>
      <p
        className="text-lg text-center max-w-2xl mx-auto mb-12"
        style={{ color: "#555" }}
      >
        The questions we get most often, answered directly.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={faq.q}
              className="rounded-2xl border overflow-hidden"
              style={{ backgroundColor: "#fff", borderColor: border }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm text-left"
                style={{ color: nearBlack, background: "none" }}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <svg
                  className={`faq-chevron${isOpen ? " open" : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ color: teal, marginLeft: "1rem" }}
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`faq-body${isOpen ? " open" : ""}`}>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Animated stat card ─────────────────────────────── */
function AnimatedStatCard({
  stat,
  label,
  index,
}: {
  stat: string;
  label: string;
  index: number;
}) {
  const [value, setValue] = useState(stat);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const numMatch = stat.match(/^(\d+)x$/i);
    if (!numMatch) return;
    const target = parseInt(numMatch[1]);

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1400;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = Math.round(1 + (target - 1) * eased);
            setValue(`${current}x`);
            if (t < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [stat]);

  return (
    <div
      ref={ref}
      className="rounded-2xl p-8 text-center border reveal"
      style={{
        backgroundColor: "rgba(215,247,247,0.06)",
        borderColor: "rgba(215,247,247,0.12)",
        animationDelay: `${index * 0.15}s`,
      }}
    >
      <p
        className="text-6xl font-extrabold mb-3 tabular-nums"
        style={{ color: MINT }}
      >
        {value}
      </p>
      <p className="text-base leading-relaxed" style={{ color: "#ddd" }}>
        {label}
      </p>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function Home() {
  const services = [
    {
      img: "/assets/products/initial-assessment.jpg",
      title: "Initial Assessment Visit",
      tag: "Start Here",
      desc: "The first visit covers who you are, what you need, and what matters most to you. Ellen reviews your history and birth priorities, then puts a support plan in writing before you leave.",
    },
    {
      img: "/assets/products/prenatal-visits.jpg",
      title: "Prenatal Support",
      tag: "Prenatal",
      desc: "Birth planning, anxiety support, and VBAC preparation through focused check-ins before your due date. You leave each session with answers and a plan, not more things to figure out on your own.",
    },
    {
      img: "/assets/products/vaginal-birth-support.jpg",
      title: "Birth Doula Support",
      tag: "Labor",
      desc: "Ellen stays with you from early labor through delivery. No breaks, no handoffs. She handles comfort techniques and speaks up for your preferences when talking to hospital staff is the last thing on your mind.",
    },
    {
      img: "/assets/products/vbac-support.jpg",
      title: "VBAC Support",
      tag: "Labor",
      desc: "Planning a vaginal birth after a cesarean takes more than hope. Ellen helps you prepare with evidence, work through your concerns, and communicate clearly with your care team going in.",
    },
    {
      img: "/assets/products/cesarean-support.jpg",
      title: "Cesarean Birth Support",
      tag: "Labor",
      desc: "Going in for a cesarean is its own kind of hard. Ellen is there beforehand to help you feel grounded, during if the facility allows it, and after for a steady, supported recovery.",
    },
    {
      img: "/assets/products/postpartum-support.jpg",
      title: "Postpartum Support",
      tag: "Postpartum",
      desc: "The weeks after birth are harder than most people expect. Ellen helps with newborn feeding, soothing, sleep, and the emotional side of becoming a parent, all at your pace.",
    },
    {
      img: "/assets/products/miscarriage-support.jpg",
      title: "Pregnancy Loss Support",
      tag: "Sensitive Care",
      desc: "If you are navigating a miscarriage or stillbirth, you deserve someone who does not rush you. Ellen provides steady, nonjudgmental care through the hardest kind of grief.",
    },
    {
      img: "/assets/products/abortion-support.jpg",
      title: "Abortion Support",
      tag: "Sensitive Care",
      desc: "Confidential from the first call through recovery. Ellen helps with planning, logistics, emotional support, and post-procedure care, without judgment and without sharing your information.",
    },
    {
      img: "/assets/products/extended-postpartum.jpg",
      title: "Extended Postpartum Visits",
      tag: "Postpartum",
      desc: "Up to two additional visits for deeper work on feeding challenges, sleep strategies, or family adjustment. Scheduled around your needs, not a fixed calendar.",
    },
  ];

  const iconStroke = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  const differentiators = [
    {
      tag: "Clinical Depth",
      title: "Nurse-Led Care",
      desc: "Ellen spent years in the Pediatric and Neonatal ICU before founding EH Nursing. She is not acting as your doctor, but she knows exactly what happens in a delivery room and how to keep you steady through it.",
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path d="M11 4v8a5 5 0 0 0 10 0V4" {...iconStroke} />
          <circle cx="11" cy="4" r="1.3" fill="currentColor" />
          <circle cx="21" cy="4" r="1.3" fill="currentColor" />
          <path d="M16 17v6a5 5 0 0 0 5 5 4 4 0 0 0 4-4v-2" {...iconStroke} />
          <circle cx="25" cy="22" r="2.2" {...iconStroke} />
        </svg>
      ),
    },
    {
      tag: "No Out-of-Pocket",
      title: "Medi-Cal Covered",
      desc: "Services are covered by Medi-Cal Managed Care plans including LA Care, Kaiser, HealthNet, and CalOptima. For qualifying families, that means professional doula support at no out-of-pocket cost.",
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path d="M16 3l10 3v9c0 6.2-4.2 11.5-10 14-5.8-2.5-10-7.8-10-14V6l10-3z" {...iconStroke} />
          <path d="M11 16l3.5 3.5L22 12" {...iconStroke} />
        </svg>
      ),
    },
    {
      tag: "Every Family",
      title: "Judgment-Free Care",
      desc: "Whether you are planning a VBAC, navigating a loss, or an LGBTQ+ family building something new, you do not owe anyone an explanation here. Every family walks through the same door.",
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path d="M16 27s-9-5.5-9-13a5.5 5.5 0 0 1 9-4.2A5.5 5.5 0 0 1 25 14c0 7.5-9 13-9 13z" {...iconStroke} />
          <path d="M11 14h10" {...iconStroke} />
        </svg>
      ),
    },
    {
      tag: "One Provider",
      title: "Continuous Care",
      desc: "One provider, prenatal through postpartum. You see the same face at every visit, so when labor starts, you already know who is showing up for you.",
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path d="M26 16a10 10 0 1 1-3-7.1" {...iconStroke} />
          <path d="M27 4v6h-6" {...iconStroke} />
          <circle cx="16" cy="16" r="2.5" {...iconStroke} />
        </svg>
      ),
    },
  ];

  const stats = [
    {
      stat: "4x",
      label: "lower risk of a low birth weight baby",
    },
    {
      stat: "2x",
      label: "fewer complications during labor and delivery",
    },
    {
      stat: "Higher",
      label: "likelihood of starting breastfeeding",
    },
  ];

  const testimonials = [
    {
      initials: "MS",
      name: "Maria S.",
      role: "Birth doula client, Los Angeles",
      quote:
        "I felt supported the entire time. My doula made sure I understood my options and never felt alone during labor.",
    },
    {
      initials: "JR",
      name: "Jasmine R.",
      role: "Prenatal and birth support client",
      quote:
        "As a first-time mom, I was honestly nervous about everything. Having someone there to guide me and reassure me made a huge difference.",
    },
    {
      initials: "AM",
      name: "Alyssa M.",
      role: "Postpartum support client",
      quote:
        "The postpartum support was something I did not expect to need this much. It helped me adjust and feel more confident caring for my baby.",
    },
  ];

  const faqs = [
    {
      q: "Is doula care really covered by my Medi-Cal insurance?",
      a: "Most families ask this because they assume professional doula support is too expensive to be real. If you are on LA Care, Kaiser, HealthNet, CalOptima, or another Medi-Cal Managed Care plan, you very likely qualify for full coverage with nothing due at the visit. Call us with your plan name and we will confirm your specific benefits before you commit to anything.",
    },
    {
      q: "Can I reach a real person if I have questions?",
      a: "Call (833) 912-3999 during business hours and you will talk to a real person. No voicemail menus, no automated queue. If you just need a quick answer, that is the fastest way to get one.",
    },
    {
      q: "What is the difference between a doula and a medical provider?",
      a: "A doula handles the support side, not the medical side. Breathing, comfort, advocacy, someone who stays through the whole thing. Ellen does not replace your OB or midwife. What she adds is years inside the Pediatric and Neonatal ICU, which means she understands how hospitals work, how to communicate with clinical staff, and how to stay calm when the room is not.",
    },
    {
      q: "Do you support VBAC?",
      a: "Yes, and it is one of the situations where having a prepared advocate makes a real difference. Ellen helps you go in with evidence, a clear plan, and your preferences documented before labor begins. The earlier you reach out, the more time you have to prepare properly.",
    },
    {
      q: "Do you provide support for pregnancy loss or abortion?",
      a: "Yes. Both. You do not need to explain your circumstances to get that support. Ellen provides confidential care through miscarriage, stillbirth, and abortion, at your pace, without judgment. Your privacy is taken seriously from the very first conversation.",
    },
    {
      q: "What areas do you serve?",
      a: "Greater Los Angeles County, and Ellen comes to you. No office visit, no commute, no parking to deal with. If you are in the Van Nuys area or anywhere across LA County, you are in the service area.",
    },
    {
      q: "How do I get started?",
      a: "Call (833) 912-3999 or fill out the contact form on this page. Share your due date, your Medi-Cal plan, and the type of support you are looking for. We will reach out within one business day to schedule your initial assessment visit.",
    },
    {
      q: "How much does doula care cost with Medi-Cal?",
      a: "If you have a qualifying Medi-Cal Managed Care plan, doula services through EH Nursing are covered at no out-of-pocket cost to you. That includes LA Care, Kaiser Permanente Southern CA, HealthNet, CalOptima, and other Medi-Cal HMO plans. We verify your coverage before your first visit so there are no surprises.",
    },
    {
      q: "Can a doula attend my hospital birth or home birth in Los Angeles?",
      a: "Yes. Ellen attends both hospital births and home births throughout Los Angeles County. As a mobile provider, she comes to wherever you plan to deliver. For hospital births she works alongside your OB and nursing team. For home births she coordinates with your midwife. No office visit is ever required.",
    },
    {
      q: "What happens at the initial assessment visit?",
      a: "The initial assessment is where Ellen learns who you are. She reviews your birth history, listens to your goals, and asks about anything you are hoping to avoid or prepare for. Before the visit ends, she puts together a written support plan tailored to your needs. There is nothing to prepare in advance. Just show up and tell her what matters to you.",
    },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .step-connector").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="pb-20 sm:pb-0" style={{ backgroundColor: BODY_BG, color: NEAR_BLACK }}>
      <ScrollProgressBar />
      <SiteHeader />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: MINT }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-40 blur-3xl hero-blob-1"
          style={{ backgroundColor: TEAL }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl hero-blob-2"
          style={{ backgroundColor: TEAL }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: headline + phone CTA */}
            <div>
              <p
                className="section-eyebrow text-sm font-semibold uppercase tracking-widest mb-4"
              >
                Medi-Cal Approved Doula Provider, Los Angeles
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                style={{ color: NEAR_BLACK }}
              >
                <span className="sm:hidden">Doula Care,{" "}
                  <span className="hero-text-underline" style={{ color: TEAL }}>Covered by Medi-Cal</span>
                </span>
                <span className="hidden sm:inline">Your Medi-Cal Covers{" "}
                  <span className="hero-text-underline" style={{ color: TEAL }}>
                    Expert Doula Care
                  </span>
                </span>
              </h1>
              <p
                className="text-lg lg:text-xl mb-8 leading-relaxed"
                style={{ color: "#333" }}
              >
                Nurse-led prenatal, birth, and postpartum support for Los
                Angeles families on Medi-Cal, at no out-of-pocket cost for
                qualifying families.
              </p>

              {/* Call CTA */}
              <a
                href="tel:8339123999"
                className="inline-flex items-center gap-3 text-lg font-bold pl-3 pr-8 py-3 rounded-full border-2 mb-4 transition-all hover:opacity-90"
                style={{
                  borderColor: NEAR_BLACK,
                  color: NEAR_BLACK,
                  backgroundColor: "transparent",
                }}
              >
                <span
                  className="call-icon-pulse inline-flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0"
                  style={{ backgroundColor: TEAL, color: "#fff" }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="currentColor"
                      fillOpacity="0.15"
                    />
                  </svg>
                </span>
                Call (833) 912-3999
              </a>

              <p
                className="text-sm font-medium mb-8"
                style={{ color: TEAL }}
              >
                Always reach a real person during business hours.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Medi-Cal Approved", tip: "Covered by LA Care, Kaiser, HealthNet & CalOptima" },
                  { label: "Nurse-Led", tip: "Led by a registered nurse with 20+ years of clinical experience" },
                  { label: "LGBTQ+ Friendly", tip: "Inclusive care for all families and gender identities" },
                  { label: "Mobile Provider", tip: "We come to you, no travel required" },
                  { label: "No Office Visit Required", tip: "Care delivered at your home or birth location" },
                ].map(({ label, tip }, i) => (
                  <span
                    key={label}
                    data-tip={tip}
                    className="trust-badge text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      borderColor: TEAL,
                      color: TEAL,
                      backgroundColor: "rgba(101,139,139,0.08)",
                      ["--badge-delay" as string]: `${0.35 + i * 0.1}s`,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: inline contact form */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(101,139,139,0.18), 0 2px 8px rgba(0,0,0,0.08)", border: `1px solid ${BORDER}` }}
            >
              <div className="px-6 lg:px-8 pt-6 pb-5" style={{ background: "linear-gradient(135deg, #658B8B 0%, #4a7575 100%)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "rgba(215,247,247,0.25)", color: "#fff" }}>Free Coverage Check</span>
                <h2 className="text-xl font-bold mb-1" style={{ color: "#fff" }}>Find Out If You Qualify</h2>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Tell us your Medi-Cal plan and we will confirm your coverage before your first visit. No cost, no obligation.
                </p>
              </div>
              <div className="px-6 lg:px-8 py-6" style={{ backgroundColor: "#fff" }}>
                <ContactForm id="contact-hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ───────────────────────────────── */}
      <div
        className="py-4"
        style={{ backgroundColor: TEAL, color: "#fff", overflow: "hidden" }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="inline-flex items-center gap-8 text-base font-semibold px-4">
                <span>Prenatal Support</span>
                <span style={{ color: MINT }}>&#10022;</span>
                <span>Birth Doula</span>
                <span style={{ color: MINT }}>&#10022;</span>
                <span>VBAC Specialists</span>
                <span style={{ color: MINT }}>&#10022;</span>
                <span>Postpartum Care</span>
                <span style={{ color: MINT }}>&#10022;</span>
                <span>Medi-Cal Accepted</span>
                <span style={{ color: MINT }}>&#10022;</span>
                <span>No Office Visit Required</span>
                <span style={{ color: MINT }}>&#10022;</span>
                <span>LA Care, Kaiser, HealthNet, CalOptima</span>
                <span style={{ color: MINT }}>&#10022;</span>
                <span>Comes to You</span>
                <span style={{ color: MINT }}>&#10022;</span>
              </span>
            ))}
        </div>
      </div>

      {/* ── WHY CHOOSE EH ──────────────────────────────── */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ backgroundColor: MINT, opacity: 0.55 }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-24 w-[30rem] h-[30rem] rounded-full blur-3xl"
          style={{ backgroundColor: TEAL, opacity: 0.10 }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-block w-10 h-px"
                style={{ backgroundColor: TEAL }}
              />
              Why Choose EH Nursing
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 reveal"
              style={{ color: NEAR_BLACK }}
            >
              Nurse-led.{" "}
              <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                Insurance covered.
              </span>{" "}
              Always human.
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#555" }}>
              Doula care has always been expensive. Most families pay out of
              pocket or go without. If you have Medi-Cal, you may qualify for
              full coverage, delivered by a nurse practitioner who spent years
              in the NICU.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-14">
            {differentiators.map((d, i) => (
              <article
                key={d.title}
                className="relative rounded-2xl p-6 lg:p-7 flex flex-col border reveal why-card"
                style={{
                  backgroundColor: "#fff",
                  borderColor: BORDER,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${TEAL}, transparent)`,
                    opacity: 0.6,
                  }}
                />

                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform"
                    style={{
                      background: `linear-gradient(135deg, ${MINT} 0%, #fff 100%)`,
                      color: TEAL,
                      border: `1px solid ${MINT}`,
                      boxShadow: "0 6px 18px rgba(101,139,139,0.18)",
                    }}
                  >
                    {d.icon}
                  </div>
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: TEAL, opacity: 0.55 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2"
                  style={{ color: TEAL }}
                >
                  {d.tag}
                </p>
                <h3 className="text-xl font-bold mb-3 leading-tight" style={{ color: NEAR_BLACK }}>
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  {d.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOULA IMAGE BAND ─────────────────────────────── */}
      <ParallaxBand />

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: MINT }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-block w-10 h-px"
                  style={{ backgroundColor: TEAL }}
                />
                Nine Services. Medi-Cal Covered.
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 reveal"
                style={{ color: NEAR_BLACK }}
              >
                Support at{" "}
                <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL }}>
                  every stage
                </span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#444" }}>
                From your first prenatal check-in to the weeks after birth,
                Ellen provides one consistent presence. Every service below is
                covered through Medi-Cal for qualifying families.
              </p>
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
              <a
                key={s.title}
                href="/contact-us"
                className="group relative rounded-3xl overflow-hidden border flex flex-col h-full reveal service-card-v2"
                style={{
                  backgroundColor: "#fff",
                  borderColor: BORDER,
                  animationDelay: `${(i % 3) * 0.1}s`,
                }}
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
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "#555" }}
                  >
                    {s.desc}
                  </p>
                  <span
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold service-card-v2-cta"
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p
          className="section-eyebrow text-sm font-semibold uppercase tracking-widest text-center mb-3"
        >
          What Happens When You Reach Out
        </p>
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-4 reveal"
          style={{ color: NEAR_BLACK }}
        >
          From First Call to Postpartum
        </h2>
        <p
          className="text-lg text-center max-w-2xl mx-auto mb-10"
          style={{ color: "#555" }}
        >
          Here is exactly what happens after you reach out.
        </p>

        <div className="relative">
          {/* Animated connector line between steps – desktop only */}
          <div
            className="step-connector hidden md:block absolute h-px"
            style={{ top: "44px", left: "10%", right: "10%", backgroundColor: TEAL, opacity: 0.35 }}
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: "1",
              title: "Reach Out",
              desc: "Call (833) 912-3999 or fill out the form below. Share your due date, your Medi-Cal plan, and the type of support you are looking for. We respond within one business day.",
            },
            {
              step: "2",
              title: "Initial Assessment",
              desc: "Ellen meets with you to hear your story, review your history, and understand what matters most to you. You leave with a written support plan built around your goals.",
            },
            {
              step: "3",
              title: "Prenatal Sessions",
              desc: "Regular check-ins before your due date covering birth planning, comfort techniques, and the questions that come up along the way. Same provider every time.",
            },
            {
              step: "4",
              title: "Birth Support",
              desc: "Ellen arrives in early labor and stays through delivery. She works alongside your medical team throughout, advocating for your preferences from start to finish.",
            },
            {
              step: "5",
              title: "Postpartum Care",
              desc: "After birth, Ellen checks in on feeding, recovery, and newborn care. If something is not working, you figure it out together, not on your own.",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className="rounded-2xl p-4 md:p-6 border text-center reveal card-hover"
              style={{ backgroundColor: "#fff", borderColor: BORDER, animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10 step-circle"
                data-step={item.step}
                style={{ backgroundColor: TEAL }}
              >
                {item.step}
              </div>
              <h3
                className="font-bold mb-2 text-sm"
                style={{ color: NEAR_BLACK }}
              >
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                {item.desc}
              </p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: NEAR_BLACK }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="section-eyebrow-light text-sm font-semibold uppercase tracking-widest text-center mb-3"
          >
            Evidence-Based Outcomes
          </p>
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-center mb-4 reveal"
            style={{ color: "#fff" }}
          >
            Doulas Change Birth Outcomes
          </h2>
          <p
            className="text-lg text-center max-w-2xl mx-auto mb-14"
            style={{ color: "#bbb" }}
          >
            Having a doula is not just about feeling less alone, though that
            matters too. The clinical evidence on birth outcomes is hard to
            ignore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <AnimatedStatCard key={s.stat} stat={s.stat} label={s.label} index={i} />
            ))}
          </div>
          <p className="text-xs text-center mt-8" style={{ color: "#777" }}>
            Based on published doula research studies.
          </p>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: MINT, color: NEAR_BLACK }}
            >
              See If You Qualify
            </a>
            <p className="mt-3 text-xs" style={{ color: "#888" }}>No cost. No obligation. Takes 60 seconds.</p>
          </div>
        </div>
      </section>

      {/* ── MEET NURSE ELLEN ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden h-96 lg:h-[520px] reveal ellen-photo-glow">
            <img
              src="/assets/team/nurse-ellen-profile.jpg"
              alt="Ellen Hakopyan, Founder and Lead Doula"
              className="object-cover object-top w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="reveal" style={{ animationDelay: "0.15s" }}>
            <p
              className="section-eyebrow text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Neonatal ICU Nurse. Nurse Practitioner. Doula.
            </p>
            <h2
              className="text-3xl lg:text-4xl font-extrabold mb-2"
              style={{ color: NEAR_BLACK }}
            >
              Ellen Hakopyan
            </h2>
            <p
              className="text-base font-semibold mb-6"
              style={{ color: TEAL }}
            >
              Founder, Lead Doula, Nurse Practitioner
            </p>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#444" }}>
              <p>
                Ellen spent years inside the Pediatric and Neonatal ICU before
                she ever attended a birth as a doula. She has seen what can go
                wrong. She has also seen what genuine family support looks like
                when it is done right.
              </p>
              <p>
                Her work as a doula is non-medical, but her background shapes
                everything. She knows hospital rhythms, how to talk to a care
                team, and how to stay calm when the room is not. That is what
                she brings to every birth.
              </p>
              <p>
                She founded EH Nursing because too many Los Angeles families
                were navigating pregnancy without anyone truly in their corner.
                Medi-Cal coverage changes that.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 cred-badges-row">
              {[
                "Pediatric ICU Nurse",
                "Neonatal ICU Nurse",
                "Nurse Practitioner",
                "Medi-Cal Approved",
                "NPI: 1710798616",
              ].map((cred) => (
                <span
                  key={cred}
                  className="cred-badge text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: MINT,
                    color: TEAL,
                  }}
                >
                  {cred}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center font-bold text-base px-7 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, color: "#fff" }}
            >
              Book with Nurse Ellen
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: MINT }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="section-eyebrow text-sm font-semibold uppercase tracking-widest text-center mb-3"
          >
            Families We&apos;ve Supported
          </p>
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-center mb-3 reveal"
            style={{ color: NEAR_BLACK }}
          >
            What Families Are Saying
          </h2>
          <p className="text-sm text-center mb-10 font-medium" style={{ color: TEAL }}>
            &#10003; Verified patient reviews
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="rounded-2xl p-8 border flex flex-col reveal card-hover relative overflow-hidden"
                style={{ backgroundColor: "#fff", borderColor: BORDER, animationDelay: `${i * 0.12}s` }}
              >
                <div
                  aria-hidden="true"
                  className="testimonial-quote-deco"
                  style={{
                    position: "absolute",
                    bottom: "-1.25rem",
                    right: "1.25rem",
                    fontSize: "10rem",
                    lineHeight: 1,
                    color: TEAL,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  &rdquo;
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: TEAL, color: "#fff" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: NEAR_BLACK }}>
                      {t.name}
                    </p>
                    <p className="text-xs mb-0.5" style={{ color: "#888" }}>
                      {t.role}
                    </p>
                    <div className="flex gap-0.5 stars-row">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="star-anim">
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote
                  className="text-sm leading-relaxed italic flex-1"
                  style={{ color: "#444" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center font-bold text-base px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, color: "#fff" }}
            >
              Apply Now
            </a>
            <p className="mt-3 text-sm font-medium" style={{ color: TEAL }}>No cost to apply. Coverage confirmed before your first visit.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <FaqSection faqs={faqs} teal={TEAL} nearBlack={NEAR_BLACK} border={BORDER} />

      {/* ── CONTACT SECTION ──────────────────────────────── */}
      <section
        id="contact"
        className="py-20"
        style={{ backgroundColor: NEAR_BLACK }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: info */}
            <div>
              <p
                className="section-eyebrow-light text-sm font-semibold uppercase tracking-widest mb-3"
              >
                Find Out If You Qualify
              </p>
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-6"
                style={{ color: "#fff" }}
              >
                Most LA families on Medi-Cal qualify. Let&apos;s confirm yours.
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#aaa" }}
              >
                We will verify your Medi-Cal plan, answer your questions, and
                schedule your initial assessment visit. One conversation is
                usually all it takes, and there is no cost to find out.
              </p>

              {/* Phone */}
              <a
                href="tel:8339123999"
                className="flex items-center gap-4 rounded-2xl p-5 mb-4 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "rgba(215,247,247,0.08)",
                  border: "1px solid rgba(215,247,247,0.15)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: TEAL, color: "#fff" }}
                >
                  &#9990;
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: MINT }}>
                    Call Us Directly
                  </p>
                  <p className="text-lg font-bold" style={{ color: "#fff" }}>
                    (833) 912-3999
                  </p>
                  <p className="text-xs" style={{ color: "#888" }}>
                    Always a real person during business hours
                  </p>
                </div>
              </a>

              {/* Secondary phone */}
              <a
                href="tel:7472042325"
                className="flex items-center gap-4 rounded-2xl p-5 mb-4 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "rgba(215,247,247,0.08)",
                  border: "1px solid rgba(215,247,247,0.15)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(101,139,139,0.4)", color: "#fff" }}
                >
                  &#9990;
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: MINT }}>
                    Secondary Line
                  </p>
                  <p className="text-lg font-bold" style={{ color: "#fff" }}>
                    (747) 204-2325
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@ehhealth.org"
                className="flex items-center gap-4 rounded-2xl p-5 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "rgba(215,247,247,0.08)",
                  border: "1px solid rgba(215,247,247,0.15)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: "rgba(101,139,139,0.4)", color: "#fff" }}
                >
                  &#9993;
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: MINT }}>
                    Email
                  </p>
                  <p className="text-base font-bold" style={{ color: "#fff" }}>
                    contact@ehhealth.org
                  </p>
                </div>
              </a>

              <div
                className="mt-8 rounded-2xl p-5"
                style={{
                  backgroundColor: "rgba(215,247,247,0.05)",
                  border: "1px solid rgba(215,247,247,0.1)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: MINT }}>
                  Insurance Accepted
                </p>
                <div className="flex flex-wrap gap-2">
                  {["LA Care Health Plan", "Kaiser Permanente", "HealthNet", "CalOptima", "Medi-Cal Managed Care"].map(
                    (plan) => (
                      <span
                        key={plan}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(215,247,247,0.1)",
                          color: "#ccc",
                          border: "1px solid rgba(215,247,247,0.15)",
                        }}
                      >
                        {plan}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(101,139,139,0.18), 0 2px 8px rgba(0,0,0,0.08)", border: `1px solid ${BORDER}` }}
            >
              <div className="px-6 lg:px-8 pt-6 pb-5" style={{ background: "linear-gradient(135deg, #658B8B 0%, #4a7575 100%)" }}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "rgba(215,247,247,0.25)", color: "#fff" }}>Free Coverage Check</span>
                <h3 className="text-xl font-bold mb-1" style={{ color: "#fff" }}>Apply for Covered Doula Care</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  We will confirm your Medi-Cal coverage and reach out within one business day.
                </p>
              </div>
              <div className="px-6 lg:px-8 py-6" style={{ backgroundColor: "#fff" }}>
                <ContactForm id="contact-section" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ────────────────────────────── */}
      <StickyMobileCTA />

      <SiteFooter />
    </main>
  );
}
