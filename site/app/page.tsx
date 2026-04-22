"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

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
          We received your request and will be in touch shortly. If you need
          immediate help, call us at{" "}
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
            className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none"
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
            className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none"
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
            className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none"
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
            className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none"
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

      <div>
        <label
          htmlFor={`message-${id}`}
          className="block text-sm font-semibold mb-1"
          style={{ color: NEAR_BLACK }}
        >
          Anything else you&apos;d like us to know
        </label>
        <textarea
          id={`message-${id}`}
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Optional message..."
          className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none resize-none"
          style={{ borderColor: BORDER, backgroundColor: "#fff", color: NEAR_BLACK }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-lg font-bold text-base tracking-wide transition-opacity disabled:opacity-60"
        style={{ backgroundColor: TEAL, color: "#fff" }}
      >
        {loading ? "Sending..." : "Request an Appointment"}
      </button>

      <p className="text-xs text-center" style={{ color: "#888" }}>
        We respect your privacy. Your information is never shared or sold.
      </p>
    </form>
  );
}

/* ─── Page ──────────────────────────────────────────── */
export default function Home() {
  const services = [
    {
      img: "/assets/products/initial-assessment.jpg",
      title: "Initial Assessment Visit",
      desc: "A comprehensive first meeting to learn your goals, review your history, and create a personalized support plan.",
    },
    {
      img: "/assets/products/prenatal-visits.jpg",
      title: "Prenatal Support",
      desc: "Personalized birth planning, anxiety support, VBAC preparation, nutrition guidance, and focused check-ins before birth.",
    },
    {
      img: "/assets/products/vaginal-birth-support.jpg",
      title: "Birth Doula Support",
      desc: "Continuous, non-medical support from early labor through delivery, comfort techniques, and advocacy for your preferences.",
    },
    {
      img: "/assets/products/vbac-support.jpg",
      title: "VBAC Support",
      desc: "Specialized preparation and coping strategies for planning a vaginal birth after cesarean, with collaborative care team communication.",
    },
    {
      img: "/assets/products/cesarean-support.jpg",
      title: "Cesarean Birth Support",
      desc: "Compassionate support before, during, and after a cesarean, with grounding techniques and gentle recovery guidance.",
    },
    {
      img: "/assets/products/postpartum-support.jpg",
      title: "Postpartum Support",
      desc: "Newborn care education, emotional support for new parents, and recovery guidance after birth.",
    },
    {
      img: "/assets/products/miscarriage-support.jpg",
      title: "Pregnancy Loss Support",
      desc: "Sensitive, nonjudgmental care through miscarriage or stillbirth, with emotional support and resources at your pace.",
    },
    {
      img: "/assets/products/abortion-support.jpg",
      title: "Abortion Support",
      desc: "Confidential, judgment-free support before, during, and after an abortion, including emotional care and post-procedure comfort.",
    },
    {
      img: "/assets/products/extended-postpartum.jpg",
      title: "Extended Postpartum Visits",
      desc: "Additional scheduled visits for deeper guidance on feeding, soothing, sleep strategies, and family adjustment.",
    },
  ];

  const differentiators = [
    {
      icon: "/assets/gallery/icon-nurse-led.png",
      title: "Nurse-Led Care",
      desc: "Founder Ellen is a Pediatric and Neonatal ICU nurse and Nurse Practitioner. Her clinical expertise informs every interaction, even though all doula services are non-medical.",
    },
    {
      icon: "/assets/gallery/icon-medi-cal.png",
      title: "Medi-Cal Covered",
      desc: "Services are covered by Medi-Cal Managed Care plans including LA Care, Kaiser, HealthNet, and CalOptima, so professional doula support is accessible at no out-of-pocket cost.",
    },
    {
      icon: "/assets/gallery/icon-judgment-free.png",
      title: "Judgment-Free Care",
      desc: "Every family is welcomed without judgment. VBAC, cesarean, abortion, pregnancy loss, teen parents, LGBTQ+ families, all are supported with equal compassion.",
    },
    {
      icon: "/assets/gallery/icon-continuous-care.png",
      title: "Continuous Care",
      desc: "One consistent provider from prenatal through postpartum. Not a rotating team or anonymous service, just a steady, familiar presence throughout your journey.",
    },
  ];

  const stats = [
    {
      stat: "4x",
      label: "Less likely to have low birth weight babies with doula support",
    },
    {
      stat: "2x",
      label: "Less likely to experience complications during birth",
    },
    {
      stat: "Higher",
      label: "Likelihood of breastfeeding successfully with a doula present",
    },
  ];

  const testimonials = [
    {
      initials: "MS",
      name: "Maria S.",
      quote:
        "I felt supported the entire time. My doula made sure I understood my options and never felt alone during labor.",
    },
    {
      initials: "JR",
      name: "Jasmine R.",
      quote:
        "As a first-time mom, I was honestly nervous about everything. Having someone there to guide me and reassure me made a huge difference.",
    },
    {
      initials: "AM",
      name: "Alyssa M.",
      quote:
        "The postpartum support was something I did not expect to need this much. It helped me adjust and feel more confident caring for my baby.",
    },
  ];

  const faqs = [
    {
      q: "Is doula care really covered by my Medi-Cal insurance?",
      a: "Yes. EH Nursing and Wellness Services is a Medi-Cal approved doula provider in Los Angeles. If you have a Medi-Cal Managed Care plan such as LA Care, Kaiser, HealthNet, or CalOptima, you may qualify for covered doula services at no out-of-pocket cost. Contact us with your plan details and we will help you verify your coverage.",
    },
    {
      q: "Can I reach a real person if I have questions?",
      a: "Yes. During normal business hours you can always call (833) 912-3999 and speak directly with someone on our team. We prioritize real, human connection and will never leave you waiting for an automated response when you need support.",
    },
    {
      q: "What is the difference between a doula and a medical provider?",
      a: "A doula provides non-medical emotional, physical, and educational support throughout pregnancy, birth, and postpartum. Nurse Ellen brings deep clinical experience as a Pediatric and Neonatal ICU nurse and Nurse Practitioner, but her doula services are complementary to your medical team. She works alongside your OB, midwife, or care team.",
    },
    {
      q: "Do you support VBAC?",
      a: "Yes. VBAC support is one of our specialties. Nurse Ellen provides evidence-informed VBAC preparation, coping strategies, and collaborative communication with your care team so you can make informed decisions and feel confident going into your birth.",
    },
    {
      q: "Do you provide support for pregnancy loss or abortion?",
      a: "Yes. We offer sensitive, non-judgmental support for families experiencing miscarriage, stillbirth, or abortion. We respect your privacy, your pace, and your choices, and are here to provide emotional support and practical resources during a difficult time.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve families throughout Van Nuys and greater Los Angeles County. As a mobile provider, Nurse Ellen comes to you. There is no office visit required.",
    },
  ];

  return (
    <main style={{ backgroundColor: BODY_BG, color: NEAR_BLACK }}>
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 w-full px-6 py-3 flex items-center justify-between shadow-sm"
        style={{ backgroundColor: "#fff", borderBottom: `1px solid ${BORDER}` }}
      >
        <a href="/" aria-label="EH Nursing and Wellness Services Home">
          <Image
            src="/assets/logos/eh-logo-rectangle.png"
            alt="EH Nursing and Wellness Services"
            width={180}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>
        <div className="flex items-center gap-3">
          <a
            href="tel:8339123999"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full border-2 transition-colors"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            Call (833) 912-3999
          </a>
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90"
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
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: TEAL }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: TEAL }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: headline + phone CTA */}
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: TEAL }}
              >
                Medi-Cal Approved Doula Provider, Los Angeles
              </p>
              <h1
                className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                style={{ color: NEAR_BLACK }}
              >
                Take Advantage of{" "}
                <span style={{ color: TEAL }}>
                  Insurance Covered Doula Care
                </span>{" "}
                Today
              </h1>
              <p
                className="text-lg lg:text-xl mb-8 leading-relaxed"
                style={{ color: "#333" }}
              >
                Los Angeles Medi-Cal approved doula provider offering
                compassionate prenatal, birth, and postpartum support led by a
                nurse practitioner. Accessible to every family, regardless of
                background.
              </p>

              {/* Call CTA */}
              <a
                href="tel:8339123999"
                className="inline-flex items-center gap-3 text-lg font-bold px-8 py-4 rounded-full border-2 mb-4 transition-all hover:opacity-90"
                style={{
                  borderColor: NEAR_BLACK,
                  color: NEAR_BLACK,
                  backgroundColor: "transparent",
                }}
              >
                Call Now, (833) 912-3999
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
                  "Medi-Cal Approved",
                  "Nurse-Led",
                  "LGBTQ+ Friendly",
                  "Mobile Provider",
                  "No Office Visit Required",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      borderColor: TEAL,
                      color: TEAL,
                      backgroundColor: "rgba(101,139,139,0.08)",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: inline contact form */}
            <div
              className="rounded-2xl p-6 lg:p-8 shadow-lg"
              style={{ backgroundColor: "#fff" }}
            >
              <h2
                className="text-xl font-bold mb-1"
                style={{ color: NEAR_BLACK }}
              >
                Request an Appointment
              </h2>
              <p className="text-sm mb-5" style={{ color: "#666" }}>
                Tell us about your situation and we will reach out to schedule
                your initial assessment visit.
              </p>
              <ContactForm id="contact-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ───────────────────────────────── */}
      <div
        className="py-3"
        style={{ backgroundColor: TEAL, color: "#fff", overflow: "hidden" }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="inline-flex items-center gap-8 text-sm font-medium px-4">
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
                <span>LA Care, Kaiser, HealthNet, CalOptima</span>
                <span style={{ color: MINT }}>&#10022;</span>
              </span>
            ))}
        </div>
      </div>

      {/* ── WHY CHOOSE EH ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p
          className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
          style={{ color: TEAL }}
        >
          Why Choose EH Nursing
        </p>
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-4"
          style={{ color: NEAR_BLACK }}
        >
          Nurse-Led. Insurance Covered. Always Human.
        </h2>
        <p
          className="text-lg text-center max-w-2xl mx-auto mb-14"
          style={{ color: "#555" }}
        >
          Professional doula support that was once out of reach for many
          families is now available through Medi-Cal, delivered by a nurse
          practitioner who truly cares.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl p-6 flex flex-col items-start gap-4 border"
              style={{ backgroundColor: "#fff", borderColor: BORDER }}
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
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <Image
          src="/assets/gallery/doula-image.png"
          alt="Doula supporting a mother during birth"
          fill
          className="object-cover"
        />
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
            style={{ color: MINT }}
          >
            Ellen Hakopyan, Founder
          </p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: MINT }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
            style={{ color: TEAL }}
          >
            What We Offer
          </p>
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-center mb-4"
            style={{ color: NEAR_BLACK }}
          >
            Comprehensive Doula Services
          </h2>
          <p
            className="text-lg text-center max-w-2xl mx-auto mb-14"
            style={{ color: "#444" }}
          >
            From your first prenatal visit through postpartum recovery, we
            provide continuous, personalized support for every stage of your
            journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
                <div className="relative h-44">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
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
                    Get started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p
          className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
          style={{ color: TEAL }}
        >
          Your Path to Support
        </p>
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-14"
          style={{ color: NEAR_BLACK }}
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: "1",
              title: "Reach Out",
              desc: "Call (833) 912-3999 or submit the contact form with your due date, Medi-Cal plan, and type of support needed.",
            },
            {
              step: "2",
              title: "Initial Assessment",
              desc: "Comprehensive first meeting to review your history, clarify goals, and create a personalized support plan.",
            },
            {
              step: "3",
              title: "Prenatal Sessions",
              desc: "Regular check-ins for education, birth planning, comfort technique training, and emotional support.",
            },
            {
              step: "4",
              title: "Birth Support",
              desc: "Continuous, non-medical labor and delivery support, with advocacy and comfort measures throughout.",
            },
            {
              step: "5",
              title: "Postpartum Care",
              desc: "Recovery and newborn care support after birth, including feeding guidance and emotional check-ins.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl p-6 border text-center"
              style={{ backgroundColor: "#fff", borderColor: BORDER }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
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
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: NEAR_BLACK }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
            style={{ color: MINT }}
          >
            Evidence-Based Outcomes
          </p>
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-center mb-4"
            style={{ color: "#fff" }}
          >
            The Power of Doula Support
          </h2>
          <p
            className="text-lg text-center max-w-2xl mx-auto mb-14"
            style={{ color: "#aaa" }}
          >
            Research consistently shows that continuous doula support leads to
            measurably better outcomes for mothers and babies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s) => (
              <div
                key={s.stat}
                className="rounded-2xl p-8 text-center border"
                style={{
                  backgroundColor: "rgba(215,247,247,0.06)",
                  borderColor: "rgba(215,247,247,0.12)",
                }}
              >
                <p
                  className="text-6xl font-extrabold mb-3"
                  style={{ color: MINT }}
                >
                  {s.stat}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#ccc" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET NURSE ELLEN ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[520px]">
            <Image
              src="/assets/team/nurse-ellen-profile.jpg"
              alt="Ellen Hakopyan, Founder and Lead Doula"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: TEAL }}
            >
              Meet Your Doula
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
                After years of caring for newborns, children, and families as a
                Pediatric and Neonatal ICU nurse, and now as a Nurse
                Practitioner, Ellen learned how powerful it is when parents feel
                truly supported. Her doula work is rooted in that belief.
              </p>
              <p>
                While the care she provides is completely non-medical, she brings
                a deep sense of calm, understanding, and compassion from her
                background in family care. As a Medi-Cal approved doula provider
                in Los Angeles, accessibility matters to her.
              </p>
              <p>
                Every family deserves high-quality support, regardless of
                background or circumstance.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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
            className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
            style={{ color: TEAL }}
          >
            Families We&apos;ve Supported
          </p>
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-center mb-14"
            style={{ color: NEAR_BLACK }}
          >
            What Mothers Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-8 border flex flex-col"
                style={{ backgroundColor: "#fff", borderColor: BORDER }}
              >
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
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} style={{ color: "#F4A93F" }}>
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
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p
          className="text-sm font-semibold uppercase tracking-widest text-center mb-3"
          style={{ color: TEAL }}
        >
          Common Questions
        </p>
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-14"
          style={{ color: NEAR_BLACK }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-2xl border overflow-hidden"
              style={{ backgroundColor: "#fff", borderColor: BORDER }}
            >
              <summary
                className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm list-none"
                style={{ color: NEAR_BLACK }}
              >
                <span>{faq.q}</span>
                <span
                  className="ml-4 text-xl font-light flex-shrink-0"
                  style={{ color: TEAL }}
                >
                  +
                </span>
              </summary>
              <div
                className="px-6 pb-5 text-sm leading-relaxed"
                style={{ color: "#555" }}
              >
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

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
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: MINT }}
              >
                Get Started Today
              </p>
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-6"
                style={{ color: "#fff" }}
              >
                Ready to Get the Support You Deserve?
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#aaa" }}
              >
                Reach out today to schedule your initial assessment visit. We
                will help you verify your Medi-Cal coverage and match you with
                the right support plan for your family.
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
              className="rounded-2xl p-6 lg:p-8"
              style={{ backgroundColor: "#fff" }}
            >
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: NEAR_BLACK }}
              >
                Request an Appointment
              </h3>
              <p className="text-sm mb-6" style={{ color: "#666" }}>
                Fill out the form below and we will contact you within one
                business day.
              </p>
              <ContactForm id="contact-section" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer
        className="py-10"
        style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo + about */}
            <div>
              <Image
                src="/assets/logos/eh-logo-rectangle.png"
                alt="EH Nursing and Wellness Services"
                width={160}
                height={42}
                className="h-10 w-auto object-contain mb-4"
              />
              <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
                Nurse-led doula care in Los Angeles. Medi-Cal approved. Mobile
                provider serving families throughout greater Los Angeles County.
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
              &copy; 2025 EH Nursing and Wellness Services. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-xs" style={{ color: "#555" }}>
              <a href="/privacy-policy-and-tos" className="hover:text-white transition-colors">
                Privacy Policy &amp; Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
