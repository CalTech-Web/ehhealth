"use client";

import Image from "next/image";
import { useState, useEffect, useRef, FormEvent } from "react";

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

/* ─── Parallax image band ─────────────────────────── */
function ParallaxBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      if (!sectionRef.current || !imgWrapRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = 1 - rect.bottom / (window.innerHeight + rect.height);
      const offset = (progress - 0.5) * 70;
      imgWrapRef.current.style.transform = `translateY(${offset}px)`;
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-64 lg:h-80 overflow-hidden">
      <div
        ref={imgWrapRef}
        className="absolute will-change-transform"
        style={{ top: "-18%", bottom: "-18%", left: 0, right: 0 }}
      >
        <Image
          src="/assets/gallery/doula-image.png"
          alt="Doula supporting a mother during birth"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundColor: "rgba(17,17,17,0.55)" }}
      >
        <p
          className="text-2xl lg:text-3xl font-extrabold italic"
          style={{ color: "#fff" }}
        >
          &ldquo;Your voice. Your birth. Your family.&rdquo;
        </p>
        <p
          className="mt-3 text-sm font-semibold uppercase tracking-widest"
          style={{ color: "#D7F7F7" }}
        >
          Ellen Hakopyan, Founder
        </p>
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

/* ─── 3D Tilt Card Wrapper ──────────────────────────── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rx, setRx] = useState(0);
  const [ry, setRy] = useState(0);
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    setHovered(true);
    setRx(-(cy - 0.5) * 10);
    setRy((cx - 0.5) * 10);
  }

  function handleMouseLeave() {
    setHovered(false);
    setRx(0);
    setRy(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)${hovered ? " translateZ(12px)" : ""}`,
        transition: hovered
          ? "transform 0.08s ease-out, box-shadow 0.08s ease-out"
          : "transform 0.5s ease, box-shadow 0.5s ease",
        boxShadow: hovered ? "0 24px 48px rgba(101,139,139,0.30)" : undefined,
        willChange: "transform",
        borderRadius: "1rem",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function Home() {
  const services = [
    {
      img: "/assets/products/initial-assessment.jpg",
      title: "Initial Assessment Visit",
      desc: "The first visit covers who you are, what you need, and what matters most to you. Ellen reviews your history and birth priorities, then puts a support plan in writing before you leave.",
    },
    {
      img: "/assets/products/prenatal-visits.jpg",
      title: "Prenatal Support",
      desc: "Birth planning, anxiety support, and VBAC preparation through focused check-ins before your due date. You leave each session with answers and a plan, not more things to figure out on your own.",
    },
    {
      img: "/assets/products/vaginal-birth-support.jpg",
      title: "Birth Doula Support",
      desc: "Ellen stays with you from early labor through delivery. No breaks, no handoffs. She handles comfort techniques and speaks up for your preferences when talking to hospital staff is the last thing on your mind.",
    },
    {
      img: "/assets/products/vbac-support.jpg",
      title: "VBAC Support",
      desc: "Planning a vaginal birth after a cesarean takes more than hope. Ellen helps you prepare with evidence, work through your concerns, and communicate clearly with your care team going in.",
    },
    {
      img: "/assets/products/cesarean-support.jpg",
      title: "Cesarean Birth Support",
      desc: "Going in for a cesarean is its own kind of hard. Ellen is there beforehand to help you feel grounded, during if the facility allows it, and after for a steady, supported recovery.",
    },
    {
      img: "/assets/products/postpartum-support.jpg",
      title: "Postpartum Support",
      desc: "The weeks after birth are harder than most people expect. Ellen helps with newborn feeding, soothing, sleep, and the emotional side of becoming a parent, all at your pace.",
    },
    {
      img: "/assets/products/miscarriage-support.jpg",
      title: "Pregnancy Loss Support",
      desc: "If you are navigating a miscarriage or stillbirth, you deserve someone who does not rush you. Ellen provides steady, nonjudgmental care through the hardest kind of grief.",
    },
    {
      img: "/assets/products/abortion-support.jpg",
      title: "Abortion Support",
      desc: "Confidential from the first call through recovery. Ellen helps with planning, logistics, emotional support, and post-procedure care, without judgment and without sharing your information.",
    },
    {
      img: "/assets/products/extended-postpartum.jpg",
      title: "Extended Postpartum Visits",
      desc: "Up to two additional visits for deeper work on feeding challenges, sleep strategies, or family adjustment. Scheduled around your needs, not a fixed calendar.",
    },
  ];

  const differentiators = [
    {
      icon: "/assets/gallery/icon-nurse-led.png",
      title: "Nurse-Led Care",
      desc: "Ellen spent years in the Pediatric and Neonatal ICU before founding EH Nursing. She is not acting as your doctor, but she knows exactly what happens in a delivery room and how to keep you steady through it.",
    },
    {
      icon: "/assets/gallery/icon-medi-cal.png",
      title: "Medi-Cal Covered",
      desc: "Services are covered by Medi-Cal Managed Care plans including LA Care, Kaiser, HealthNet, and CalOptima. For qualifying families, that means professional doula support at no out-of-pocket cost.",
    },
    {
      icon: "/assets/gallery/icon-judgment-free.png",
      title: "Judgment-Free Care",
      desc: "Whether you are planning a VBAC, navigating a loss, or an LGBTQ+ family building something new, you do not owe anyone an explanation here. Every family walks through the same door.",
    },
    {
      icon: "/assets/gallery/icon-continuous-care.png",
      title: "Continuous Care",
      desc: "One provider, prenatal through postpartum. You see the same face at every visit, so when labor starts, you already know who is showing up for you.",
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

  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    function onNavScroll() {
      setNavScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onNavScroll, { passive: true });
    return () => window.removeEventListener("scroll", onNavScroll);
  }, []);

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
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 w-full px-6 py-3 flex items-center justify-between"
        style={{
          backgroundColor: navScrolled ? "rgba(255,255,255,0.78)" : "#fff",
          borderBottom: `1px solid ${BORDER}`,
          backdropFilter: navScrolled ? "blur(18px) saturate(180%)" : "none",
          WebkitBackdropFilter: navScrolled ? "blur(18px) saturate(180%)" : "none",
          boxShadow: navScrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.05)",
          transition: "background-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        <a href="/" aria-label="EH Nursing and Wellness Services Home" className="flex flex-col leading-tight">
          <span className="text-base font-extrabold tracking-tight" style={{ color: NEAR_BLACK }}>EH Nursing</span>
          <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: TEAL }}>and Wellness Services</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="tel:8339123999"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border-2 transition-colors"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            Call (833) 912-3999
          </a>
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-bold px-5 py-2.5 rounded-full transition-opacity hover:opacity-90 cta-shimmer"
            style={{ backgroundColor: TEAL, color: "#fff" }}
          >
            Apply Now
          </a>
        </div>
      </nav>

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
                className="inline-flex items-center gap-3 text-lg font-bold px-8 py-4 rounded-full border-2 mb-4 transition-all hover:opacity-90 call-ring-pulse"
                style={{
                  borderColor: NEAR_BLACK,
                  color: NEAR_BLACK,
                  backgroundColor: "transparent",
                }}
              >
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p
          className="section-eyebrow text-sm font-semibold uppercase tracking-widest text-center mb-3"
        >
          Why Choose EH Nursing
        </p>
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-4 reveal"
          style={{ color: NEAR_BLACK }}
        >
          Nurse-Led. Insurance Covered. Always Human.
        </h2>
        <p
          className="text-lg text-center max-w-2xl mx-auto mb-14"
          style={{ color: "#555" }}
        >
          Doula care has always been expensive. Most families pay out of pocket
          or go without. If you have Medi-Cal, you may qualify for full
          coverage, delivered by a nurse practitioner who spent years in the
          NICU.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className="rounded-2xl p-6 flex flex-col items-start gap-4 border reveal card-hover"
              style={{ backgroundColor: "#fff", borderColor: BORDER, animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: MINT }}
              >
                <Image
                  src={d.icon}
                  alt={d.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: NEAR_BLACK }}
              >
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                {d.desc}
              </p>
            </div>
          ))}
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
          <p
            className="section-eyebrow text-sm font-semibold uppercase tracking-widest text-center mb-3"
          >
            Nine Services. Medi-Cal Covered.
          </p>
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-center mb-4 reveal"
            style={{ color: NEAR_BLACK }}
          >
            Support at Every Stage
          </h2>
          <p
            className="text-lg text-center max-w-2xl mx-auto mb-8"
            style={{ color: "#444" }}
          >
            From your first prenatal check-in to the weeks after birth, Ellen
            provides one consistent presence. Every service below is covered
            through Medi-Cal for qualifying families.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <TiltCard key={s.title}>
                <div
                  className="rounded-2xl overflow-hidden border flex flex-col h-full reveal service-card"
                  style={{ backgroundColor: "#fff", borderColor: BORDER, animationDelay: `${(i % 3) * 0.1}s` }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="object-cover w-full h-full service-img"
                      loading="lazy"
                    />
                    <div className="service-img-overlay" aria-hidden="true" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="text-base font-bold mb-2"
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
                    <a
                      href="#contact"
                      className="mt-4 text-sm font-bold underline"
                      style={{ color: TEAL }}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </TiltCard>
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

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer
        className="py-10"
        style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo + about */}
            <div>
              <div className="flex flex-col leading-tight mb-4">
                <span className="text-base font-extrabold tracking-tight" style={{ color: "#fff" }}>EH Nursing</span>
                <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: MINT }}>and Wellness Services</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
                EH Nursing brings nurse-led doula support to families throughout
                Los Angeles County. Medi-Cal covered for qualifying families.
                Ellen comes to you, no office visit needed.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: MINT }}>
                Contact
              </h4>
              <ul className="space-y-2 text-xs" style={{ color: "#888" }}>
                <li>
                  <a href="tel:8339123999" className="hover:text-white transition-colors">
                    (833) 912-3999
                  </a>
                </li>
                <li>
                  <a href="tel:7472042325" className="hover:text-white transition-colors">
                    (747) 204-2325
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@ehhealth.org" className="hover:text-white transition-colors">
                    contact@ehhealth.org
                  </a>
                </li>
                <li>Van Nuys, Los Angeles County, CA</li>
              </ul>
            </div>

            {/* Insurance */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: MINT }}>
                Insurance Accepted
              </h4>
              <ul className="space-y-1 text-xs" style={{ color: "#888" }}>
                <li>LA Care Health Plan</li>
                <li>Kaiser Permanente Southern CA</li>
                <li>HealthNet</li>
                <li>CalOptima</li>
                <li>Medi-Cal Managed Care HMO plans</li>
              </ul>
            </div>
          </div>

          <div
            className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs" style={{ color: "#555" }}>
              &copy; 2026 EH Nursing and Wellness Services. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-xs" style={{ color: "#555" }}>
              <a href="/privacy-policy-and-tos" className="hover:text-white transition-colors">
                Privacy Policy &amp; Terms
              </a>
              <a href="https://caltechweb.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Powered by Caltechweb
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
